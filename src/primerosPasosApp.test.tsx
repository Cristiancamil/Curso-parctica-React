import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { PrimerosPasosApp } from "./primerosPasosApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />
})

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (_props: unknown) => mockItemCounter(_props)
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid='ItemCounter'
//       name={props.name}
//       quantity={props.quantity}
//     />
//   )
// }))


describe('PrimerosPasosApp', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should match snapshots', () => {
    const { container } = render(<PrimerosPasosApp />)
    expect(container).toMatchSnapshot()
  })

  test('should render the correct number of ItemCounter components', () => {
    render(<PrimerosPasosApp />)
    const itemCounters = screen.getAllByTestId('ItemCounter')
    expect(itemCounters.length).toBe(4)
  })

  test('should render ItemCounter with correct props', () => {
    render(<PrimerosPasosApp />)
    expect(mockItemCounter).toHaveBeenCalled(4)
  })
})