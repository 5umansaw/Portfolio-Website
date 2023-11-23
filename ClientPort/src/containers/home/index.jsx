import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss'
const Home = ()=>{

   const nevigate = useNavigate()

   const nevigateToContact = ()=>{
        nevigate('/contact')
   }

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
              <h1>
                Hello, I am Suman Gupta
                <br/>
                Fullstack Developer
              </h1>
            </div>
            <Animate
             play
             duration={1.5}
             delay={1}
             start={{transform: "translateY(550px)"}}
             end={{transform: "translateY(0px)"}}
            >
             <div className="home__contact-me">
                <button onClick={nevigateToContact}>Hire Me</button>
             </div>
            </Animate>
           
        </section>
    )
}

export default Home