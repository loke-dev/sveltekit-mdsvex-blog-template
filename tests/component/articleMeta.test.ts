import { beforeEach, describe, it, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import ArticleMeta from "../../src/lib/components/ArticleMeta.svelte"

beforeEach(cleanup)

describe("ArticleMeta", () => {
  it("renders component", () => {
    const { container } = render(ArticleMeta, { date: "2023-01-01" })
    expect(container.querySelector("p")).not.toBeNull()
  })

  it("formats date correctly", () => {
    const { container } = render(ArticleMeta, { date: "2023-01-01" })
    const dateElement = container.querySelector(".date")
    expect(dateElement).not.toBeNull()
    expect(dateElement?.textContent).toBe("Sun Jan 01 2023")
  })

  it("handles different date formats", () => {
    const { container } = render(ArticleMeta, { date: "2023/05/15" })
    const dateElement = container.querySelector(".date")
    expect(dateElement?.textContent).toBe("Mon May 15 2023")
  })
})