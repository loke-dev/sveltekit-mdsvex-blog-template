<script lang="ts">
  import { onMount } from "svelte"

  type Geo = {
    opacity: number
    x: number
    y: number
    width: number
    height: number
    centerX: number
    centerY: number
    draw: boolean
  }

  type GeoRow = Geo[]
  type GeoMap = GeoRow[]

  type SafeArea = {
    x: number
    y: number
    width: number
    height: number
  }

  type MouseLocation = {
    x: number
    y: number
  }

  const defaultSquareColor = "#c6c7c950"
  const squareSize = 15
  const squareMargin = 45
  const gradientColors = []
  const updateColorDistanceThreshold = 400
  const colorStopResolution = 200
  let loaded = false
  let scale = 1
  let geoMap: GeoMap = []
  let finishedDrawing = false
  let columnCount: number
  let rowCount: number
  let safeArea: SafeArea

  const setResolution = (canvas: HTMLCanvasElement) => {
    const clientRect = canvas.getBoundingClientRect()

    finishedDrawing = false
    canvas.width = clientRect.width * scale
    canvas.height = clientRect.height * scale
    columnCount = Math.floor(clientRect.width / (squareSize + squareMargin))
    rowCount = Math.floor(clientRect.height / (squareSize + squareMargin) + 0.5)

    const drawAreaRect = document.querySelector(".hero-content").getBoundingClientRect()
    const canvasRect = canvas.getBoundingClientRect()

    safeArea = {
      x: (drawAreaRect.left - canvasRect.left) * scale,
      y: (drawAreaRect.top - canvasRect.top) * scale,
      width: drawAreaRect.width * scale,
      height: drawAreaRect.height * scale,
    }

    const offsetX =
      (clientRect.width - (columnCount * (squareSize + squareMargin) - squareMargin)) / 2
    const offsetY = 10

    geoMap = []

    for (let i = 0; i < columnCount; i++) {
      let geoRow: Geo[] = []

      for (let j = 0; j < rowCount; j++) {
        const xPos = offsetX + i * (squareSize + squareMargin)
        const yPos = offsetY + j * (squareSize + squareMargin)

        const geo: Geo = {
          opacity: 1,
          x: xPos * scale,
          y: yPos * scale,
          width: squareSize * scale,
          height: squareSize * scale,
          centerX: xPos * scale + (squareSize * scale) / 2,
          centerY: yPos * scale + (squareSize * scale) / 2,
          draw: false,
        }

        geo.draw = !checkOverlap(safeArea, geo)
        geoRow.push(geo)
      }

      geoMap.push(geoRow)
    }
  }

  const checkOverlap = (safeArea: SafeArea, geo: Geo): boolean => {
    let overlapX = false
    let overlapY = false

    if (
      (geo.x + geo.width > safeArea.x && geo.x + geo.width < safeArea.x + safeArea.width) ||
      (geo.x > safeArea.x && geo.x < safeArea.x + safeArea.width)
    ) {
      overlapX = true
    }

    if (
      (geo.y + geo.height > safeArea.y && geo.y + geo.height < safeArea.y + safeArea.height) ||
      (geo.y > safeArea.y && geo.y < safeArea.y + safeArea.height)
    ) {
      overlapY = true
    }

    return overlapY && overlapX
  }

  const initCanvas = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    const gradientWidth = 500
    let gradient = ctx.createLinearGradient(0, 0, gradientWidth, 0)

    setResolution(canvas)

    gradient.addColorStop((1 / 3) * 0, "#fc44e4")
    gradient.addColorStop((1 / 3) * 1, "#4b2ec6")
    gradient.addColorStop((1 / 3) * 2, "#FFBA02")
    gradient.addColorStop((1 / 3) * 3, "#FF295D")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, gradientWidth, 2)

    for (let i = 0; i < colorStopResolution; i++) {
      const imageData = ctx.getImageData(i * (gradientWidth / colorStopResolution), 1, 1, 1).data
      gradientColors.push({ r: imageData[0], g: imageData[1], b: imageData[2] })
    }

    drawSquares(canvas)
  }

  const drawSquares = (canvas: HTMLCanvasElement) => {
    if (finishedDrawing) {
      window.requestAnimationFrame(() => drawSquares(canvas))
      return
    }

    const ctx = canvas.getContext("2d")
    let needsUpdate = false

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let y = 0; y < rowCount; y++) {
      for (let x = 0; x < columnCount; x++) {
        const geo = geoMap[x][y]
        const localScale = 1 + geo.opacity
        const scaledWidth = geo.width * localScale
        const scaledHeight = geo.height * localScale
        const scaleOffset = (scaledWidth - geo.width) / 2

        if (geo.draw == false) continue

        ctx.fillStyle = defaultSquareColor
        ctx.fillRect(geo.x - scaleOffset, geo.y - scaleOffset, scaledWidth, scaledHeight)

        if (geo.opacity > 0.02) {
          needsUpdate = true
          const colorTarget = Math.floor((x / columnCount) * colorStopResolution + 0.5)
          const colorData = gradientColors[colorTarget]

          ctx.fillStyle = `rgba(${colorData.r}, ${colorData.g}, ${colorData.b}, ${geo.opacity})`
          ctx.fillRect(geo.x - scaleOffset, geo.y - scaleOffset, scaledWidth, scaledHeight)
          geo.opacity = geo.opacity * 0.98
        }
      }
    }
    if (!needsUpdate) finishedDrawing = true

    window.requestAnimationFrame(() => drawSquares(canvas))
  }

  const updateColors = (position: MouseLocation) => {
    finishedDrawing = false

    for (let x = 0; x < columnCount; x++) {
      for (let y = 0; y < rowCount; y++) {
        const geo = geoMap[x][y]
        const distanceX = Math.abs(position.x * scale - geo.centerX)
        const distanceY = Math.abs(position.y * scale - geo.centerY)
        const distance = Math.sqrt(distanceY * distanceY + distanceX * distanceX)

        if (distance < updateColorDistanceThreshold) {
          const targetOpacity = 1 - distance / updateColorDistanceThreshold

          geo.opacity = Math.max(targetOpacity, geo.opacity)
        }
      }
    }
  }

  const handleMouseMove = (e: any) => {
    const canvas = e.target
    const clientRect = canvas.getBoundingClientRect()

    updateColors({ x: e.clientX - clientRect.left, y: e.clientY - clientRect.top })
  }

  onMount(() => {
    loaded = true

    setTimeout(() => {
      const canvas = document.querySelector("#hero-canvas") as HTMLCanvasElement
      scale = window.devicePixelRatio

      if (!canvas) return

      initCanvas(canvas)

      canvas.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("resize", () => setResolution(canvas))
    }, 200)
  })
</script>

<div class="hero fullWidth">
  <canvas id="hero-canvas" class={loaded ? "opacity-100" : "opacity-0"} />
  <div class="hero-content">
    <h2 class="prefix">Welcome to</h2>
    <h1 class="title">
      Loke <span>&mdash;</span><br /><span>&mdash;</span> Dev
    </h1>
  </div>
</div>

<style>
  .hero {
    font-family: "Impact", sans-serif;
    user-select: none;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  #hero-canvas {
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 1.5s ease-in;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 7rem;
    margin-bottom: 7rem;
    padding: 6rem;

    @media (max-width: 768px) {
      margin-top: 10rem;
      margin-bottom: 10rem;
      padding: 2rem;
    }
  }

  .prefix {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .title {
    color: #fff;
    font-size: calc(30px + 5vw);
    letter-spacing: -0.01em;
    font-weight: 800;
    text-indent: -0.025em;
    line-height: 1em;
    text-align: center;
  }

  span {
    display: inline;
  }

  @media (max-width: 768px) {
    br,
    span {
      display: none;
    }
  }
</style>
