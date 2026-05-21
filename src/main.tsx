import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PrimerosPasosApp } from './primerosPasosApp'
import { MyAwesomeApp } from './MyAwesomeApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimerosPasosApp />
    {/* <MyAwesomeApp name="Cristian" lastName="Lopez" /> */}
  </StrictMode>,
)
