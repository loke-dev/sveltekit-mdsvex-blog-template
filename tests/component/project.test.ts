import { beforeEach, describe, it, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import Project from "../../src/lib/components/Project.svelte"

beforeEach(cleanup)

describe("Project", () => {
  it("renders component", () => {
    const { container } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })
    expect(container.querySelector(".max-w-7xl")).not.toBeNull()
  })

  it("displays the project prefix", () => {
    const { getByText } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })
    expect(getByText("Test Prefix")).toBeDefined()
  })

  it("displays the project title", () => {
    const { getByText } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })
    expect(getByText("Test Project")).toBeDefined()
  })

  it("renders the project image with correct sources", () => {
    const { container } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })

    const picture = container.querySelector("picture")
    expect(picture).not.toBeNull()

    const source = picture?.querySelector("source")
    expect(source?.getAttribute("srcset")).toBe("/test-image.webp")
    expect(source?.getAttribute("type")).toBe("image/webp")

    const img = picture?.querySelector("img")
    expect(img?.getAttribute("src")).toBe("/test-image.png")
    expect(img?.getAttribute("alt")).toBe("Test Project")
  })

  it("renders the image with correct dimensions", () => {
    const { container } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })

    const img = container.querySelector("img")
    expect(img?.getAttribute("width")).toBe("370")
    expect(img?.getAttribute("height")).toBe("370")
  })

  it("renders slot content", () => {
    const { container } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })

    const proseDiv = container.querySelector(".prose")
    expect(proseDiv).not.toBeNull()
  })

  it("renders the decorative pattern", () => {
    const { container } = render(Project, {
      prefix: "Test Prefix",
      title: "Test Project",
      image: "/test-image"
    })

    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()
    expect(svg?.getAttribute("aria-hidden")).toBe("true")
  })
})