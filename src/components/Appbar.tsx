
import Logout from "./logout";

export default function Appbar(){
        
    return(
        <div className="  flex justify-between items-center  w-full  rounded-md mt-4 ">
            <div className="flex  w-full items-center text-white justify-between
            shadow-lg border-gray-400
            h-full text-2xl px-4 py-2">
            PayTM App
            </div>
            <span className="flex   items-center  justify-end">
            <Logout/>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  ">
                    <div className="flex  h-full text-2xl justify-center items-center">
                        U
                    </div>
                </div>
            </span>
        </div>
    )
}