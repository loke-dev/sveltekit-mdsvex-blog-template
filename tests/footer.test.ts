import { beforeEach, test, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"

import Footer from "$lib/components/Footer.svelte"

beforeEach(cleanup)

test("can render", () => {
  render(Footer)
})

test("can find the correct copyright", () => {
  const { getByText } = render(Footer)
  expect(getByText(`All rights reserved © Loke Carlsson ${new Date().getFullYear()}`)).toBeDefined()
})
