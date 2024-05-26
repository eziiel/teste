import React from "react"
import { ContextValuesCalculator } from "../../../context/values"

export const Resultado = () => {
  const { state } = React.useContext(ContextValuesCalculator)

  return (
    <div className='bg-red-400 h-[100px] bg-transparent flex justify-end
      items-end p-2 text-4xl tracking-wide
    '>
      {state}
    </div>
  )
}
