import { Calculator } from "../components/calculator"
import { Header } from "../components/header"
import { ValuesCalculatorProvider } from "../context/values"

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
            <main className="bg-slate-800 w-full flex-1 flex justify-center 
              items-center
              ">
            <ValuesCalculatorProvider>
              <Calculator />
            </ValuesCalculatorProvider>
            </main>
    </div>
  )
}
