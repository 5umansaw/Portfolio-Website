import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../component/pageHeader";
import { data } from "../../helper/util";
import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss'
import {MdWork} from 'react-icons/md'

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeader
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header"> Experience </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-colour)"
                    >
                       {
                        data.experience.map((item , i)=>{
                            return (
                               <VerticalTimelineElement
                               key={i}
                               className="timeline__experience__vertical-element"
                               contentStyle={{
                                background: 'none',
                                color: 'var(--yellow-theme-sub-text-colour)',
                                border: '1.5px solid var(--yellow-theme-main-colour)'
                               }}
                               date="2022 - present"
                               icon = {<MdWork/>}
                               iconStyle={{
                                background:'#181818',
                                color:'var(--yellow-theme-main-colour)'
                               }}
                               >
                               <div className="vertical-element-wrapper">
                                    <h3 className="vertical-element-title">{item.title}</h3>
                                    <h4 className="vertical-element-subtitle">{item.subTitle}</h4>
                                    <p>{item.description}</p>
                               </div>
                               </VerticalTimelineElement>
                            )
                        })
                       }
                    </VerticalTimeline>
                </div>

                <div className="timeline__education">
                    <h3 className="timeline__education__header">Education</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-colour)"
                    >
                       {
                        data.education.map((item , i)=>{
                            return (
                               <VerticalTimelineElement
                               key={i}
                               className="timeline__experience__vertical-element"
                               contentStyle={{
                                background: 'none',
                                color: 'var(--yellow-theme-sub-text-colour)',
                                border: '1.5px solid var(--yellow-theme-main-colour)'
                               }}
                               date="2022 - present"
                               icon = {<MdWork/>}
                               iconStyle={{
                                background:'#181818',
                                color:'var(--yellow-theme-main-colour)'
                               }}
                               >
                               <div className="vertical-element-wrapper">
                                    <h3 className="vertical-element-title">{item.title}</h3>
                                    <h4 className="vertical-element-subtitle">{item.subTitle}</h4>
                                    <p>{item.description}</p>
                               </div>
                               </VerticalTimelineElement>
                            )
                        })
                       }
                    </VerticalTimeline>
                </div>
            </div>

        </section>
    )
}

export default Resume