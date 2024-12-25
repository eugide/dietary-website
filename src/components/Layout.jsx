import {Link, Outlet } from "react-router"
import Footer from "./Footer"



function Layout() {
  return (
    <>
      <nav>
        <div className="w-11/12 flex justify-between m-auto pt-3">
            <h1 className="text-black/60 font-bold text-2xl">Logo</h1>
            <div className="flex gap-3 font-semibold text-center">
                
                <Link className="hover:bg-[#61805e] px-4 hover:text-white" to="/">ABOUT</Link>
                <Link className="hover:bg-[#61805e] px-4 hover:text-white" to="/contact">CONTACT</Link>
                <Link className="hover:bg-[#61805e] px-4 hover:text-white" to="/home">HOME</Link>
            </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
      
    </>
  )
}

export default Layout