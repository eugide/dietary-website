import { CgCheck } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

function SectionCard({mont,name,perfect,online,daily,weekly,strategy,weight}) {
  return (
    <div>
               <p className="font-bold text-2xl text-[#61805e]">{mont}</p>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="italic mb-4">{perfect}</p>
                <div className="flex">
                <CgCheck />
                    <p className="italic">{online}</p>
                </div>
                <div className="flex">
                <CgCheck />
                    <p className="italic">{daily}</p>
                </div>
                <div className="flex">
                    <CgCheck />
                    <p className="italic">{weekly}</p> 
                </div>
                <div className="flex text-black/50">
                <CgClose />
                  
                    <p className="italic">{strategy}</p>
                </div>
                <div className="flex text-black/50  ">
                    
                    <p className="italic">{weight}</p>
                </div>

                <button className="border border-[#61805e] px-3 rounded-md text-[#61805e]
                 hover:bg-[#61805e] hover:text-white my-4">SELECT PLAN </button>
    </div>
  )
}

export default SectionCard