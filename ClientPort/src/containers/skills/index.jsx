import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../component/pageHeader";
import { skills } from "../../helper/util";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss'

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeader
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="skills__content"> 
                {
                    skills.map((item , i)=>{
                        return(
                        <div key={i} className="skills__content__inner-content">
                            <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: "translateX(-300px)"
                            }}
                            end={{
                                transform: "translateX(0px)"
                            }}>
                             
                            <h3 className="skills__content__inner-content__category">{item.label}</h3>
                            <div className="skills__content__inner-content__skill-progress">
                                {
                                    item.data.map((skillItem , i)=>{
                                        return (
                                            <div className="progressbar">
                                              <p>{skillItem.skillName}</p>
                                              <Line
                                              percent={skillItem.percentage}
                                              strokeWidth="2"
                                              strokeColor="var(--yellow-theme-main-colour)"
                                              trailWidth={"2"}
                                              strokeLinecap="square"
                                              />
                                            </div>
                                        )
                                       
                                    })
                                }
                            </div>
                            </Animate>
                        </div>
                    )})
                }
            </div>
        </section>
    )
}

export default Skills