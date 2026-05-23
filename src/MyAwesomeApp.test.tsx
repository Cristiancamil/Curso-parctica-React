import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react"


describe('MyAwesomeApp', () => {
  test('should render name and lastName', () => {
    const { container } = render(<MyAwesomeApp name="Cristian" lastName="Lopez" />)
    const h1 = container.querySelector('h1')
    expect(h1?.innerHTML).toContain('Cristian')
  })

  test('should render name and lastName - screen', () => {
    render(<MyAwesomeApp name="Cristian" lastName="Lopez" />)
    const h1 = screen.getByTestId('name-title')
    expect(h1?.innerHTML).toContain('Cristian')
  })

  test('should match snapshots', () => {
    const { container } = render(<MyAwesomeApp name="Cristian" lastName="Lopez" />)
    expect(container).toMatchSnapshot()
  })

})