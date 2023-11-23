import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../component/pageHeader";
import { Animate } from 'react-simple-animate'
import { DiNodejs, DiReact } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import './styles.scss'


const personalDetails = [
    {
        label: "Name",
        value: "Suman Gupta",
    },
    {
        label: "Age",
        value: "24",
    },
    {
        label: "Address",
        value: "India",
    },
    {
        label: "Email",
        value: "sumansaw81@gmail.com",
    },
    {
        label: "Contact No",
        value: "9625395210",
    }
]

const jobSummary = 'I am Suman Gupta just passout student from DTU, skilled in data structure and algorithms with proficiency to write code in different programming languages as I have solved 1200+ problems on leetcode coding platform, got pupil tag at codeforces and achieve excellent problem solving skills. About experience I have 2 months backend development internship experience in Node.js, Express.js and mongodb with some exciting projects on MERN tech stack'
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeader
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className="about__content__personal">
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(-900px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>


                    </Animate>



                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(-500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3 className="personalData">Personal Detail</h3>
                        <ul>
                            {
                                personalDetails.map((item, idx) => {
                                    return (<li key={idx}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__services">
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(600px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >


                        <div className="about__content__services__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-colour)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-colour)" />
                            </div>
                            <div>
                                <DiNodejs size={150} color="var(--yellow-theme-main-colour)" />
                            </div>
                            <div>
                                <DiReact size={60} color="var(--yellow-theme-main-colour)" />
                            </div>
                        </div>
                    </Animate>

                </div>


            </div>



        </section>
    )
}

export default About