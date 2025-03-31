import { beforeEach, describe, it, expect, vi } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import PageTransition from "../../src/lib/components/PageTransition.svelte"
import { tick } from "svelte"

// Mock Svelte transitions
vi.mock("svelte/transition", () => {
  return {
    fly: () => {
      return {
        duration: 0,
      }
    },
  }
})

beforeEach(cleanup)

describe("PageTransition", () => {
  it("renders component", () => {
    const { container } = render(PageTransition)
    expect(container.querySelector("div")).not.toBeNull()
  })

  it("re-renders when refresh prop changes", async () => {
    const { component, container } = render(PageTransition, { refresh: "initial" })

    // Initial render
    const initialDiv = container.querySelector("div")
    expect(initialDiv).not.toBeNull()

    // Update the refresh prop using Svelte 5's reactivity
    component.refresh = "updated"
    await tick()

    // The div should still be there (we can't easily test the transition)
    const updatedDiv = container.querySelector("div")
    expect(updatedDiv).not.toBeNull()
  })
})
