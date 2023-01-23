import Info from "../components/info"
import About from "../components/about"
import Interest from "../components/interest"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="bg-[#23252c]  flex justify-center">
      <div className="bg-[#1a1b21] w-[317px]">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
    </div>
  )
}
   