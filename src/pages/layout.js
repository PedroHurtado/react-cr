import { Outlet } from "react-router-dom";
import Menu from "./menu";
import Styles from './Layout.module.css'

export default function Layout(){
    return(
        <div className={Styles.layout}>
            <Menu/>
            <div>
                <Outlet/>
            </div>            
        </div>
    )
}