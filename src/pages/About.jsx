import { Link } from "react-router"
import Section from "../components/Section"

function About() {
  return (
        <>   
         <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2
         md:grid-cols-2 md:bg-[#61805e] sm:bg-[#61805e] sm:grid-cols-1">
          
              <div className="bg-[#61805e] felx flex-cols px-20 py-6">
                <h1 className="xl:text-6xl lg:text-4xl md:text-4xl sm:text-xl text-white  font-bold">Be healthy,enjoy life!</h1>
                <p className="text-white mb-5">Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                  <p className="text-white mb-5">Images from <Link className="underline underline-offset-4" to="www.freepik.com refused to connect.">Freepick</Link></p>
                  <div>
                   <button className="border-2 text-white px-8 py-1.5 rounded-md hover:bg-gray-100 hover:text-[#61805e]">JOIN NOW</button>
                 </div>
              </div>
                  <div>
                    <img src="/images/girl.png" alt="Sister" />
                  </div>
                  
                  
          </div>
       <Section/>
      </>

   
  )
}

export default About