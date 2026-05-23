import type { CSSProperties } from "react"

interface Props {
  name: string,
  lastName: string
}

const juegosFavoritos = ['Halo', 'Gear of War', 'Need for Speed', 'Call Of Duty']

const direccion = {
  codigoPostal: '08001',
  ciudad: 'Soledad',
  country: 'Colombia'
}

const isActive = true

/**
 * Estilos dinámicos del botón dependiedo
 * del estado de la actividad.
 */
const styleButton: CSSProperties = {
  backgroundColor: isActive ? 'green' : 'red',
  padding: 4,
  borderRadius: 4,
  width: 100
}

/**
 * |#####################################################|
 * |              COMPONENTE MyAwesomeApp                |
 * |#####################################################|
 * 
 * Componente encargado de renderizar información
 * relacionada con videojuegos favoritos y datos básicos
 * del usuario.
 * 
 * Props:
 * - name: nombre del usuario.
 * - lastName: apellido del usuario.
 * 
 * Funcionalidades:
 * - Renderiza información recibida mediante props.
 * - Muestra una lista de videojuegos favoritos.
 * - Muestra información de dirección.
 * 
 * Comportamiento dinámico:
 * - Cambia el color del botón dependiendo
 *   del estado de la variable isActive.
 * 
 * Optimización:
 * - Las constantes que no dependen de props ni estado
 *   se declaran fuera del componente para evitar
 *   recrearlas en cada renderizado.
 */
export function MyAwesomeApp({ name, lastName }: Props) {
  return (
    <>
      <h1 data-testid="name-title">{name}</h1>
      <h3>{lastName}</h3>

      <p>{juegosFavoritos.join(', ')}</p>

      <button style={styleButton}>{isActive ? 'Activo' : 'No activo'}</button>

      <p>{JSON.stringify(direccion)}</p>
    </>
  )
}