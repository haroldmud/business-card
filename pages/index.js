import Info from "../components/info"
import About from "../components/about"
import Interest from "../components/interest"
import Footer from "../components/footer"
import { useState } from "react"

export default function Home() {
  const [on, setOn] = useState(true);

  return (
    <div className="bg-[#a5abbe]  flex justify-center">
      <div className={`${on ? "bg-[#1a1b21]" : "bg-[#ffffff]"} w-[317px] relative`}>
        <div className="absolute flex right-2">
          <p className={`mt-3 font-semibold mr-2 ${on ? "text-[#ffffffe2]" : ""}`}>light</p>
           <button onClick={()=>setOn(current=>!current)} className="relative">
            <img className="w-12" src={`icons/toggle/${on ? "dark.png" : "light.png"}`} alt="" />
           </button>
           <p className={`mt-3 font-semibold ml-2 ${on ? "" : "text-[#ffffffe2]"}`}>dark</p>
        </div>
        <Info title={on}/>
        <About textColor={on}/>
        <Interest textColor={on}/>
        <Footer light ={on}/>
      </div>
    </div>
  )
}
  