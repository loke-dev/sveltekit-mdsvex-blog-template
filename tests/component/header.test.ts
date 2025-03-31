import { beforeEach, describe, it, expect, vi, afterEach } from "vitest"
import { cleanup, render } from "@testing-library/svelte"
import { page } from "$app/stores"
import { get } from "svelte/store"

import Header from "../../src/lib/components/Header.svelte"

// Helper function to set the current path for testing
function setPathname(pathname: string) {
  // @ts-ignore - page is mocked as a writable store in setup-vitest.js
  page.set({
    ...get(page),
    url: { pathname },
  })
}

beforeEach(() => {
  cleanup()
  // Reset the pathname to root for each test
  setPathname("/")
})

describe("Header", () => {
  it("renders component", () => {
    const { container } = render(Header)
    expect(container.querySelector("header")).not.toBeNull()
  })

  it("renders all navigation links", () => {
    const { getByText, getByLabelText } = render(Header)
    // Use getByLabelText for the Home link since it uses aria-label
    expect(getByLabelText("SvelteKit.Blog Home")).toBeDefined()
    expect(getByText("About")).toBeDefined()
    expect(getByText("Journal")).toBeDefined()
    expect(getByText("Contact")).toBeDefined()
  })

  it("has skip link for accessibility", () => {
    const { getByText } = render(Header)
    expect(getByText("Skip to main content")).toBeDefined()
  })

  // Test for conditional logic in the Header component
  it("sets aria-current attribute for home link when on home page", () => {
    setPathname("/")
    const { container } = render(Header)
    const homeLink = container.querySelector('a[href="/"]')
    expect(homeLink?.getAttribute("aria-current")).toBe("page")
  })

  it("sets aria-current attribute for about link when on about page", () => {
    setPathname("/about")
    const { container } = render(Header)
    const aboutLink = container.querySelector('a[href="/about"]')
    expect(aboutLink?.getAttribute("aria-current")).toBe("page")
  })

  it("sets aria-current attribute for journal link when on journal page", () => {
    setPathname("/journal")
    const { container } = render(Header)
    const journalLink = container.querySelector('a[href="/journal"]')
    expect(journalLink?.getAttribute("aria-current")).toBe("page")
  })

  it("sets aria-current attribute for contact link when on contact page", () => {
    setPathname("/contact")
    const { container } = render(Header)
    const contactLink = container.querySelector('a[href="/contact"]')
    expect(contactLink?.getAttribute("aria-current")).toBe("page")
  })

  it("does not set aria-current attribute for non-active links", () => {
    setPathname("/about")
    const { container } = render(Header)
    const homeLink = container.querySelector('a[href="/"]')
    const journalLink = container.querySelector('a[href="/journal"]')
    const contactLink = container.querySelector('a[href="/contact"]')

    expect(homeLink?.getAttribute("aria-current")).toBeNull()
    expect(journalLink?.getAttribute("aria-current")).toBeNull()
    expect(contactLink?.getAttribute("aria-current")).toBeNull()
  })
})
