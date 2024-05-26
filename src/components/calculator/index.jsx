import React from "react"
import { Resultado } from "./resultado"
import { ContextValuesCalculator } from "../../context/values"

const actions =['×','÷','+','-', '=']
const altActions = ['AC','+/-','%']
const numbers = [1,2,3,4,5,6,7,8,9,0, ',']


export const Calculator = () => {
  const { handleValue } = React.useContext(ContextValuesCalculator)

  return (
    <div className='bg-gray-950 rounded-xl
      p-4 text-white flex flex-col gap-2
    '>
      <Resultado />
      <div className='flex-1 flex'>
        {/* "dashboard" */}
        <div className='w-full h-full '>
          <div className='w-full h-1/5 flex gap-2 pb-2'>
            {altActions.map((altActions) =>(
              <div
                className="flex-1 flex justify-center items-center w-[50px] h-[50px] cursor-pointer
                p-2 rounded-full font-bold text-base bg-gray-500"
                key={altActions}
              >
                {altActions}
              </div>
            ))}
          </div>
          <div className='h-4/5 grid grid-cols-3 gap-2'>
            {numbers.map((number) => (
              <div 
                value= {number}
                key={number}
                data-info={number == 0}
                className='bg-gray-800 
                  data-[info=true]:col-span-2
                  data-[info=true]:w-auto
                  data-[info=true]:justify-start
                  data-[info=true]:pl-6
                  flex justify-center items-center
                  p-2 rounded-full font-bold text-base
                  w-[50px] h-[50px] cursor-pointer
                '
                onClick={() => handleValue(number)}
              >
                {number}
              </div>
            ))}
          </div>
        </div>
        {/* acitons */}
        <div className='w-1/4 h-auto flex flex-col gap-2 pl-2'>
          {actions.map((action) => (
            <div 
              className="flex-1 flex justify-center items-center w-[50px] h-[50px] cursor-pointer
                p-2 rounded-full bg-orange-700 font-bold text-base
              "
              key={action}
            >
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
