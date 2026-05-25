import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
  test('should render shopping cart element', () => {
    const name = 'Xbox 365'
    render(<ItemCounter name={name} quantity={7} />)
    expect(screen.getByText(name)).toBeDefined()
    expect(screen.getByText(name)).not.toBeNull()
  })

  test('should increase count when +1 button is pressed', () => {
    render(<ItemCounter name='Play 5' quantity={1} />)
    const [buttonAdd] = screen.getAllByRole('button')
    fireEvent.click(buttonAdd)
    expect(screen.getByText('2')).toBeDefined()
  })

  test('should decrease count when -1 button is pressed', () => {
    render(<ItemCounter name='Play 5' quantity={5} />)
    const [, buttonSubstract] = screen.getAllByRole('button')
    fireEvent.click(buttonSubstract)
    expect(screen.getByText('4')).toBeDefined()
  })

  test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    render(<ItemCounter name='Play 5' quantity={1} />)
    const [, buttonSubstract] = screen.getAllByRole('button')
    fireEvent.click(buttonSubstract)
    expect(screen.getByText('1')).toBeDefined()
  })

  test('should change to red when count is 1', () => {
    render(<ItemCounter name='Play 5' quantity={1} />)
    const itemText = screen.getByText('Play 5')
    expect(itemText.style.color).toBe('red')
  })

  test('should change to black when count is greater thant 1', () => {
    render(<ItemCounter name='Play 5' quantity={2} />)
    const itemText = screen.getByText('Play 5')
    expect(itemText.style.color).toBe('black')
  })


})