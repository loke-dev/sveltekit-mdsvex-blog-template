import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, cleanup } from '@testing-library/svelte'
import Hero from '../../src/lib/components/Hero.svelte'

// Mock canvas methods to prevent errors during testing
HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  clearRect: vi.fn(),
  fillRect: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  stroke: vi.fn()
})) as any

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn()

beforeEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('Hero', () => {
  it('renders component', () => {
    const { container } = render(Hero)
    expect(container).toBeDefined()
    expect(container.querySelector('canvas')).not.toBeNull()
  })
})