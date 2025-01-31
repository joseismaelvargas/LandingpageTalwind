import logo from "../../images/logo.svg"
import icono from "../../images/icon-menu.svg"
import flecha from "../../images/icon-arrow-down.svg"
import List from "../../images/icon-calendar.svg"
import planing  from "../../images/icon-todo.svg"
import reamander  from "../../images/icon-reminders.svg"
import hours  from "../../images/icon-planning.svg"
import cerrar from "../../images/icon-close-menu.svg"
import React,{useState} from "react"
export const Header=()=>{
    const [open,setopen]=useState(false)
    const [menu,setmenu]=useState(false)
    const [menu2,setmenu2]=useState(false)
    return(
        <>
        <header className="flex justify-between  !my-[16px] !mx-[24px] ">
            <img src={logo} alt="logo" className="logo"  />
            <img  className={open?"hidden":"amburguesa cursor-pointer "}src={icono} onClick={()=>!setopen(true)} alt="icon"  />
            <nav className={open?"  cursor-pointer":" hidden  cursor-pointer "}>
                <div className="back bg-gray-500  ">    </div>
                <div className="front" >
                    <div className="close  my-5">
                           <img src={cerrar} onClick={()=>!setopen(false)}  alt="cerrar" className="cerrar cursor-pointer" />
                    </div>
                 
                    <ul className="ulfront list-disc pl-4 ">
                    <li className="">
                        <button className="menu-btn" onClick={()=>!setmenu(prev=>!prev)}>Feacture   <img className="mt-5" src={flecha} alt="flecha" /></button>
                     
                       
                    <ul className={menu?"feacture":"hidden"}>
                        <li className="flex items-center "> <img src={planing} alt="plannin" />Todo List</li>
                        <li  className="flex items-center"><img src={List} alt="list" />Calendar </li>
                        <li  className="flex items-center"> <img src={reamander} alt="" />Reminder</li>
                        <li  className="flex items-center"> <img src={hours} alt="" />Planning</li>
                    </ul>
                        </li>
                    <li className=""><button className="menu-btn" onClick={()=>setmenu2(prev=>!prev)}>Companny <img src={flecha} alt="flecha" /></button>
                    <ul  className={menu2?"feacture":"hidden"}>
                        <li className="flex items-center">History</li>
                        <li className="flex items-center">Our Team</li>
                        <li className="flex items-center">Blog</li>
                   </ul>
                        </li>
                   
                </ul>  
                <div className="link">
<li className=" careus flex items-center space-x-1 ">Careus</li>
                    <li className=" careus flex items-center space-x-1">About</li>
                </div>
                 
                  <div className="btn-container ">
 <button className="login w-[200px] rounded-2xl h-[40px] border cursor-pointer">Login</button>
   <button className="register w-[200px] rounded-2xl h-[40px]  border cursor-pointer">Register</button>
                  </div>
                   
              
                </div>
                
            
                
              
                
            </nav>
        </header>
        </>
    )
}