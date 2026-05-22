import { describe, expect, test } from 'vitest'
import { add, multiply, substract } from './math.helpers'

describe('Funcition add', () => {
  test('Should add two positive numbers', () => {
    // ! 1. Arrange
    const a = 1
    const b = 2

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(3)
  })

  test('Should add two positive numbers', () => {
    // ! 1. Arrange
    const a = 9
    const b = 33

    // ! 2. Act
    const resultado = add(a, b)

    // ! 3. Assert
    expect(resultado).toBe(42)
  })
})

describe('Function substract', () => {
  test('Should substract two positives numbers', () => {
    // ! 1. Arrange
    const a = 58
    const b = 40

    // ! Act
    const result = substract(a, b)

    // ! Assert
    expect(result).toBe(18)
  })

  test('Should substract two positive numbers', () => {
    // ! 1. Arrange
    const a = 99
    const b = 21

    // ! Act
    const result = substract(a, b)

    // ! Assert
    expect(result).toBe(78)
  })
})

describe('Function multuply', () => {
  test('Should multiply two positive numbers', () => {
    // ! Arrange
    const a = 56
    const b = 2

    // ! Act
    const result = multiply(a, b)

    // ! Assert
    expect(result).toBe(112)
  })
  test('Should multiply two positive numbers', () => {
    // ! Arrange
    const a = 9
    const b = 9

    // ! Act
    const result = multiply(a, b)

    // ! Assert
    expect(result).toBe(81)
  })
})