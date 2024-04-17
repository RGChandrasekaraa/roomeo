import Navbar from '../../components/navbar/navbar'
import './layout.scss'

import { Outlet } from 'react-router-dom';

function Layout(){
    return (
         <div className="layout">
                <div className="Navbar">
                    <Navbar />
                </div>
                    <div className="content">
                        <Outlet/>
                </div>
            </div> 
    )
}

export default Layout