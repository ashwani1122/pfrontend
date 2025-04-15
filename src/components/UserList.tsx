import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function UserList({users}: {users: any[]}) { 
    const navigate = useNavigate();
    return(
        <>
            <div className=" w-full text-center flex justify-center items-center  ">
            </div>
            <div className="flex flex-col  w-full justify-center items-center ">
                {users.map((user: any) => (
                    <div key={user._id} className=" text-center flex  justify-between items-center  w-full  ">
                        <div className=" flex justify-center items-center gap-1  px-2 py-1 rounded-md text-white">
                            <div className="flex text-white  text-2xl justify-center 
                            font-light  items-center  rounded-full h-10 w-10 bg-green-400 cursor-pointer">
                                {user.firstName[0].toUpperCase()}
                                
                            </div>
                            {user.firstName.toUpperCase()}. {user.lastName.toUpperCase()}
                    </div>
                    
                    <Button label="Send Money" onClick={()=>{
                        navigate("/send?id="+user._id+"&name="+user.firstName)
                    }} />
                    </div>
                ))}
            </div>
            </>
        
    )
}