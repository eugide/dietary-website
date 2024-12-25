
function FistSection() {
  return (
    <>
        <div className="flex gap-3  w-3/4 mx-auto mb-10">
            <div className=" w-1/2 bg-[#a3b2a1] rounded-md px-5 py-8">
               
               <div className=""> <img className=" w-[150px] h-[150px] rounded-full" src="/images/girl.png" alt="" /></div>
                <h1 className="text-3xl">Say hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <form>
                <div className="flex gap-3">
                    <div className="flex flex-col">
                        <label >First Name</label>
                        <input className="outline-none border-b-2 border-[#61805e] px-3 py-2" type="text" placeholder="Enter Your First Name"/>
                    </div>
                    <div className="flex flex-col">
                      <label >Last Name</label>
                      <input className="outline-none border-b-2 border-[#61805e] px-3 py-2" type="text" placeholder="Enter Your Last Name"/>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col">
                      <label >Email</label>
                      <input className="outline-none border-b-2 border-[#61805e] px-3 py-2" type="text" placeholder="Enter a Valid Email"/>
                    </div>
                    <div className="flex flex-col">
                      <label >Phone</label>
                      <input className="outline-none border-b-2 border-[#61805e] px-3 py-2" type="number" placeholder="Enter Your phone(+2503009574)"/>
                    </div>
                </div>
                    <div className="flex flex-col w-[557px]">
                    <label >Message</label>
                    <textarea className="outline-none  border-b-2 border-[#61805e] px-3 py-2" placeholder="message" />
                    </div>
                   <div className="">
                        <button className="bg-[#61805e] w-[557px] my-3 py-2 text-white rounded-md">SUBMIT</button>
                   </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FistSection