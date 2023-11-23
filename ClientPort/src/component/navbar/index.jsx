import React, { useState } from "react";
import { FaReact , FaBars} from "react-icons/fa";
import { HiX } from "react-icons/hi"
import { Link } from "react-router-dom";
import './styles.scss'




const Navbar = ()=>{

  const [toggleIcon , setToggleIcon] = useState(false)

   const handleToggleIcon = () =>{
      setToggleIcon(!toggleIcon)
   }


    return (
        <div>
           <nav className="navbar">
             <div className="navbar__container">
                <Link to={'/'} className="navbar__container__logo"> <FaReact size={40}/> </Link>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                     <li className="navbar__container__menu__item"> 
                     <Link to={'/'} className="navbar__container__menu__item__links">HOME</Link>
                     </li>

                     <li className="navbar__container__menu__item"> 
                     <Link to={'/about'} className="navbar__container__menu__item__links">ABOUT ME</Link>
                     </li>

                     <li className="navbar__container__menu__item"> 
                     <Link to={'/skills'} className="navbar__container__menu__item__links">SKILLS</Link>
                     </li>

                     <li className="navbar__container__menu__item"> 
                     <Link to={'/resume'} className="navbar__container__menu__item__links">RESUME</Link>
                     </li>

                     <li className="navbar__container__menu__item"> 
                     <Link to={'/portfolio'} className="navbar__container__menu__item__links">PORTFOLIO</Link>
                     </li>

                     <li className="navbar__container__menu__item"> 
                     <Link to={'/contact'} className="navbar__container__menu__item__links">CONTACT</Link>
                     </li>
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                        {
                            toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                        }
                </div>
             </div>
           </nav>
        </div>
    );
}

export default Navbar;