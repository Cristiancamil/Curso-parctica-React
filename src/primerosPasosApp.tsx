import { ItemCounter } from "./shopping-cart/ItemCounter";

/**
 * Lista de productos del carrito de compras.
 */
const juegosFavoritos = [
	{ productName: 'Halo', quantity: 8 },
	{ productName: 'Gear of War', quantity: 9 },
	{ productName: 'Need for Speed', quantity: 6 },
	{ productName: 'Call Of Duty', quantity: 3 }
]

/**
 * |##################################################|
 * |              COMPONENTE PRINCIPAL                |
 * |##################################################|
 * 
 * Componente encargado de renderizar una lista de productos
 * utilizando el componente reutilizable ItemCounter.
 * 
 * Funcionalidades:
 * - Recorre dinamicamente un arreglo de productos.
 * - Renderiza un ItemCounter pro cada producto.
 * - Envía infromación mediante props.
 * 
 * Patrones React utilizados:
 * - Renderizado de listas con map().
 * - Uso de props.
 * - Uso de keys únicas.
 */
export function PrimerosPasosApp() {
	return (
		<>
			<h1>Carrito de compras</h1>
			{
				/** Renderiza dinámica un contador por cada producto. */
				juegosFavoritos.map(({ productName, quantity }) => (
					<ItemCounter
						key={productName}
						name={productName}
						quantity={quantity}
					/>
				))
			}
		</>
	)
}