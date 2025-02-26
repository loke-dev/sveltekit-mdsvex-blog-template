import { beforeEach, describe, it, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import Patterns from "../../src/lib/components/Patterns.svelte"

beforeEach(cleanup)

describe("Patterns", () => {
  it("renders component", () => {
    const { container } = render(Patterns)
    expect(container.querySelector("div")).not.toBeNull()
  })

  it("renders two SVG elements", () => {
    const { container } = render(Patterns)
    const svgs = container.querySelectorAll("svg")
    expect(svgs.length).toBe(2)
  })

  it("applies classes for variant 1 (default)", () => {
    const { container } = render(Patterns)
    const svgs = container.querySelectorAll("svg")

    // Instead of checking the exact class string, check if the element has the class
    expect(svgs[0].classList.contains("absolute")).toBe(true)
    expect(svgs[0].classList.contains("left-full")).toBe(true)
    expect(svgs[0].classList.contains("transform")).toBe(true)

    expect(svgs[1].classList.contains("absolute")).toBe(true)
    expect(svgs[1].classList.contains("right-full")).toBe(true)
    expect(svgs[1].classList.contains("bottom-0")).toBe(true)
  })

  it("applies classes for variant 2", () => {
    const { container } = render(Patterns, { variant: "2" })
    const svgs = container.querySelectorAll("svg")

    // Check individual classes instead of the full string
    expect(svgs[0].classList.contains("absolute")).toBe(true)
    expect(svgs[0].classList.contains("left-full")).toBe(true)
    expect(svgs[0].classList.contains("bottom-0")).toBe(true)

    expect(svgs[1].classList.contains("absolute")).toBe(true)
    expect(svgs[1].classList.contains("right-full")).toBe(true)
    expect(svgs[1].classList.contains("transform")).toBe(true)
  })

  it("renders SVGs with correct attributes", () => {
    const { container } = render(Patterns)
    const svg = container.querySelector("svg")

    expect(svg?.getAttribute("width")).toBe("404")
    expect(svg?.getAttribute("height")).toBe("404")
    expect(svg?.getAttribute("fill")).toBe("none")
    expect(svg?.getAttribute("viewBox")).toBe("0 0 404 404")
    expect(svg?.getAttribute("aria-hidden")).toBe("true")
  })

  it("renders pattern definitions inside SVGs", () => {
    const { container } = render(Patterns)
    const defs = container.querySelectorAll("defs")

    expect(defs.length).toBe(2)
    expect(container.querySelectorAll("pattern").length).toBe(2)
    expect(container.querySelectorAll("rect").length).toBe(4) // 2 in patterns, 2 for the main rectangles
  })
})