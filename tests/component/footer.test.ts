import { beforeEach, test, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"

import Footer from "../../src/lib/components/Footer.svelte"

beforeEach(cleanup)

describe("Footer", () => {
  it("Renders component", async () => {
    render(Footer)
  })

  it("Correct copy and year", async () => {
    const { getByText } = render(Footer)

    expect(getByText(`All rights reserved © Loke ${new Date().getFullYear()}`)).toBeDefined()
  })
})
