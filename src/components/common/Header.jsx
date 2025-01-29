import logo from "../../images/logo.svg"
import icono from "../../images/icon-menu.svg"
import flecha from "../../images/icon-arrow-down.svg"
import List from "../../images/icon-calendar.svg"
import planing  from "../../images/icon-todo.svg"
import reamander  from "../../images/icon-reminders.svg"
import hours  from "../../images/icon-planning.svg"
export const Header=()=>{
    return(
        <>
        <header className="flex justify-between mx-10 border border-gray-800 ">
            <img src={logo} alt="logo" />
            <img src={icono} alt="icon"/>
            <nav className="hidden ">
                <ul className="  list-disc pl-4">
                    <li className="flex items-center space-x-1">
                        <button>Feacture</button>
                        <img src={flecha} alt="flecha" />
                    <ul>
                        <li className="flex items-center space-x-1"> <img src={planing} alt="plannin" />Todo List</li>
                        <li  className="flex items-center space-x-1"><img src={List} alt="list" />Calendar </li>
                        <li  className="flex items-center space-x-1"> <img src={reamander} alt="" />Reminder</li>
                        <li  className="flex items-center space-x-1"> <img src={hours} alt="" />Planning</li>
                    </ul>
                        </li>
                    <li className="flex items-center space-x-1"><button>Companny</button> <img src={flecha} alt="flecha" />
                    <ul>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                   </ul>
                        </li>
                    <li className="flex items-center space-x-1">Careus</li>
                    <li className="flex items-center space-x-1">About</li>
                </ul>
                <button className="w-[100px] border cursor-pointer">Login</button>
                <button className="w-[100px] border cursor-pointer">Register</button>
            </nav>
        </header>
        </>
    )
}