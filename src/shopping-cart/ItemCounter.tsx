import { useState } from "react"
import './ItemCounter.css'

interface Props {
  /** Nombre del producto */
  name: string

  /** Cantidad inicial */
  quantity: number
}

/**
 * |########################################################|
 * |        COMPONENTE REUTILIZABLE ITEMCOUNTER             |
 * |########################################################|
 * 
 * Componente reutilizable encargado de mostrar un producto 
 * junto con un contador intercativo.
 * 
 * Props:
 * - name: nombre del producto.
 * - quantity: cantidad del contador.
 * 
 * Estado:
 * - count: almacena la cantidad actual del producto.
 * 
 * Funciones:
 * - handleAdd: incrementar la cantidad.
 * - handleReset: decrementa la cantidad.
 * 
 * Comportamiento dinámico:
 * - Cambia el color del nombre del producto cuando 
 *   el contador tiene valor 1.
 */
export const ItemCounter = ({ name, quantity }: Props) => {

  /**
   * Estado local encargado de almacenar
   * la cantidad actual del producto.
   */
  const [count, setCount] = useState(quantity)

  /**
   * Incrementa el contador en una unidad.
   */
  const handleAdd = () => {
    setCount(count + 1)
  }

  /**
   * Decrementa el contador en 1 unidad.
   */
  const handleSubtract = () => {
    if (count === 1)
      return

    setCount(count - 1)
  }

  return (
    <section className="item-row">
      <span
        className="item-text"
        style={{
          color: count === 1 ? 'red' : 'black'
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  )
}
