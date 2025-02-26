import { beforeEach, describe, it, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import PageHead from "../../src/lib/components/PageHead.svelte"

// Testing svelte:head is challenging in component tests
// We'll focus on testing the component renders without errors

beforeEach(cleanup)

describe("PageHead", () => {
  it("renders component with title and description", () => {
    const { component } = render(PageHead, {
      title: "Test Page",
      description: "Test description"
    })

    expect(component).toBeDefined()
  })

  it("renders component with empty title", () => {
    const { component } = render(PageHead, {
      title: "",
      description: "Test description"
    })

    expect(component).toBeDefined()
  })
})