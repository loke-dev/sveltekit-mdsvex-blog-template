import { render } from "@testing-library/svelte"
import { describe, it, expect } from "vitest"
import Hero from "../../src/lib/components/Hero.svelte"

describe("Hero", () => {
  it("renders component", () => {
    const { container } = render(Hero)
    expect(container).toBeTruthy()
  })
})
