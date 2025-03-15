<script lang="ts">
  export let content: string = "";
  export let top: string = "0%";
  export let left: string = "0%";
  export let delay: string = "0s";
  export let textSize: string = "text-sm";
  export let color: string = "white";
  export let customClass: string = "";
  export let rotate: string = "0deg";
  export let scale: string = "1";
  export let initialOpacity: string = "opacity-0";
  export let duration: string = "20s";
  export let movementRange: string = "15px";
  export let spinAmount: string = "5deg";

  // Map color names to their hex values
  const colorMap = {
    primary: "#FF295D",
    secondary: "#FFBA02",
    tertiary: "#4b2ec6",
    white: "#FFFFFF"
  };

  // Get the actual color value
  const colorValue = colorMap[color] || "#FFFFFF";

  // Convert hex to rgba for different opacity levels
  function hexToRgba(hex, alpha = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Create background and text colors with different opacities
  // Adjust opacity based on whether it's white or a color
  const isWhite = color === 'white';

  // Lower opacity for white, higher for colors
  const textColor = isWhite
    ? hexToRgba(colorValue, 0.45)
    : hexToRgba(colorValue, 0.7);

  const bgColor = isWhite
    ? hexToRgba(colorValue, 0.03)
    : hexToRgba(colorValue, 0.07);

  const hoverTextColor = isWhite
    ? hexToRgba(colorValue, 0.75)
    : hexToRgba(colorValue, 0.95);

  const hoverBgColor = isWhite
    ? hexToRgba(colorValue, 0.08)
    : hexToRgba(colorValue, 0.15);
</script>

<div
  class="absolute font-mono {textSize} p-2 rounded-md shadow-sm transform-style-preserve-3d {initialOpacity} {customClass} transition-all duration-300 hover:shadow-md animate-particle"
  style="top: {top}; left: {left}; animation-delay: {delay}; animation-duration: {duration}; --movement-range: {movementRange}; --rotate: {rotate}; --scale: {scale}; --spin-amount: {spinAmount}; --text-color: {textColor}; --hover-text-color: {hoverTextColor}; --bg-color: {bgColor}; --hover-bg: {hoverBgColor}; color: var(--text-color); background-color: var(--bg-color); backdrop-filter: blur(2px);"
>
  {content}
</div>

<style>
  @keyframes particle {
    0% {
      opacity: 0;
      transform: translate(calc(var(--movement-range) * -0.5), calc(var(--movement-range) * -0.3)) rotate(calc(var(--rotate) - var(--spin-amount))) scale(calc(var(--scale) * 0.95));
    }
    5% {
      opacity: var(--opacity, 0.5);
    }
    20% {
      opacity: var(--opacity, 0.5);
      transform: translate(calc(var(--movement-range) * 0.3), calc(var(--movement-range) * 0.5)) rotate(calc(var(--rotate) + var(--spin-amount))) scale(calc(var(--scale) * 1.05));
    }
    50% {
      transform: translate(calc(var(--movement-range) * -0.2), calc(var(--movement-range) * 0.2)) rotate(var(--rotate)) scale(var(--scale));
    }
    80% {
      opacity: var(--opacity, 0.5);
      transform: translate(calc(var(--movement-range) * 0.4), calc(var(--movement-range) * -0.4)) rotate(calc(var(--rotate) - var(--spin-amount))) scale(calc(var(--scale) * 1.02));
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translate(calc(var(--movement-range) * -0.1), calc(var(--movement-range) * -0.5)) rotate(calc(var(--rotate) + var(--spin-amount))) scale(calc(var(--scale) * 0.98));
    }
  }

  .animate-particle {
    animation-name: particle;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    --opacity: 0.5;
  }

  .animate-particle:hover {
    color: var(--hover-text-color);
    background-color: var(--hover-bg);
  }
</style>