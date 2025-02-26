import { render } from '@testing-library/svelte'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Hero from '../../src/lib/components/Hero.svelte'

// Mock canvas methods to prevent errors during testing
HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  clearRect: vi.fn(),
  fillRect: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  stroke: vi.fn(),
  createLinearGradient: vi.fn().mockReturnValue({
    addColorStop: vi.fn()
  }),
  getImageData: vi.fn().mockReturnValue({
    data: new Uint8ClampedArray([255, 255, 255, 255])
  }),
  fillStyle: '#000',
  strokeStyle: '#000',
  lineWidth: 1,
  save: vi.fn(),
  restore: vi.fn(),
  translate: vi.fn(),
  rotate: vi.fn(),
  scale: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  closePath: vi.fn()
})) as any

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()

  // Mock canvas and its context
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => ({
    clearRect: vi.fn(),
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    stroke: vi.fn(),
    createLinearGradient: vi.fn().mockReturnValue({
      addColorStop: vi.fn()
    }),
    getImageData: vi.fn().mockReturnValue({
      data: new Uint8ClampedArray([255, 255, 255, 255])
    }),
    fillStyle: '#000',
    strokeStyle: '#000',
    lineWidth: 1,
    save: vi.fn(),
    restore: vi.fn(),
    translate: vi.fn(),
    rotate: vi.fn(),
    scale: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn()
  })) as any
})

describe('Hero', () => {
  it('renders component', () => {
    const { container } = render(Hero)
    expect(container).toBeTruthy()
  })
})