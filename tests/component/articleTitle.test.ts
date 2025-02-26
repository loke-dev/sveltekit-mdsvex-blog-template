import { beforeEach, describe, it, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import ArticleTitle from "../../src/lib/components/ArticleTitle.svelte"

beforeEach(cleanup)

describe("ArticleTitle", () => {
  it("renders component with h3 when slug is provided", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article",
      slug: "test-article"
    })
    expect(container.querySelector("h3")).not.toBeNull()
    expect(container.querySelector("h2")).toBeNull()
  })

  it("renders component with h2 when no slug is provided", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article"
    })
    expect(container.querySelector("h2")).not.toBeNull()
    expect(container.querySelector("h3")).toBeNull()
  })

  it("displays the title text correctly", () => {
    const { getByText } = render(ArticleTitle, {
      title: "Test Article",
      slug: "test-article"
    })
    expect(getByText("Test Article")).toBeDefined()
  })

  it("generates correct href with slug", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article",
      slug: "test-article"
    })
    const link = container.querySelector("a")
    expect(link?.getAttribute("href")).toBe("/journal/test-article")
  })

  it("generates correct href without slug (anchor link)", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article"
    })
    const link = container.querySelector("a")
    expect(link?.getAttribute("href")).toBe("#test-article")
  })

  it("generates correct id from title", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article!"
    })
    const heading = container.querySelector("h2")
    expect(heading?.getAttribute("id")).toBe("test-article")
  })

  it("applies large class when no slug is provided", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article"
    })
    const heading = container.querySelector("h2")
    expect(heading?.classList.contains("large")).toBe(true)
  })

  it("does not apply large class when slug is provided", () => {
    const { container } = render(ArticleTitle, {
      title: "Test Article",
      slug: "test-article"
    })
    const heading = container.querySelector("h3")
    expect(heading?.classList.contains("large")).toBe(false)
  })
})