import { beforeEach, describe, it, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"

import Footer from "../../src/lib/components/Footer.svelte"

beforeEach(cleanup)

describe("Footer", () => {
  it("renders component", async () => {
    const { container } = render(Footer)
    expect(container.querySelector("footer")).not.toBeNull()
  })

  it("displays correct copyright and year", async () => {
    const { getByText } = render(Footer)
    expect(getByText(`© ${new Date().getFullYear()} Loke. All rights reserved.`)).toBeDefined()
  })

  it("displays navigation links", async () => {
    const { getByText } = render(Footer)
    expect(getByText("Home")).toBeDefined()
    expect(getByText("About")).toBeDefined()
    expect(getByText("Journal")).toBeDefined()
    expect(getByText("Contact")).toBeDefined()
  })

  it("displays social links", async () => {
    const { getByText } = render(Footer)
    expect(getByText("GitHub")).toBeDefined()
    expect(getByText("Twitter")).toBeDefined()
    expect(getByText("Email")).toBeDefined()
  })

  it("displays technology credits", async () => {
    const { getByText } = render(Footer)
    expect(getByText("SvelteKit")).toBeDefined()
    expect(getByText("Tailwind CSS")).toBeDefined()
  })

  it("has correct section headings", async () => {
    const { getByText } = render(Footer)
    expect(getByText("Loke.dev")).toBeDefined()
    expect(getByText("Navigation")).toBeDefined()
    expect(getByText("Connect")).toBeDefined()
  })
})
