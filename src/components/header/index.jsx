
export const Header = () => {
  return (
    <header className="bg-slate-700 flex justify-around items-center
      p-4 text-white
    ">
      <div>LOGO</div>

        <ul className="flex gap-4">
          <li className="p-2 rounded-lg delay-75 cursor-pointer
            hover:bg-slate-100
            hover:text-slate-800

          ">Home</li>
          <li className="p-2 rounded-lg delay-75 cursor-pointer
            hover:bg-slate-100
            hover:text-slate-800

          ">Calculator</li>
          <li className="p-2 rounded-lg delay-75 cursor-pointer
            hover:bg-slate-100
            hover:text-slate-800

          "> stopwatch</li>
        </ul>
    </header>
  )
}
