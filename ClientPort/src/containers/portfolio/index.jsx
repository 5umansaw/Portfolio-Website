import React from "react";
import { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../component/pageHeader";
import Image1 from "../../helper/images/Image1.jpg"
import Image2 from "../../helper/images/Image2.jpeg"
import Image3 from "../../helper/images/Image3.jpeg"
import Image4 from "../../helper/images/Image4.jpeg"
import Image5 from "../../helper/images/Image5.png"
import Image6 from "../../helper/images/Image6.jpeg"

import './styles.scss';

const portfolioData = [
    {
        id: "2",
        name: "Social App",
        image: Image1,
        link: 'https://intsta-lite.onrender.com/',
    },
    {
        id: "3",
        name: "TODO APP",
        image: Image4,
        link: 'https://github.com/5umansaw/TODO-App',
    },
    {
        id: "2",
        name: "Weather App",
        image: Image6,
        link: 'https://github.com/5umansaw/Weather-App',
    },
    {
        id: "3",
        name: "Chat App",
        image: Image2,
        link: 'https://suman-chat-app.onrender.com',
    },
    {
        id: "2",
        name: "Task Manager API",
        image: Image3,
        link: 'https://github.com/5umansaw/Task-manager_api',
    },
    {
        id: "3",
        name: "Sorting Visualiser",
        image: Image5,
        link: 'https://5umansaw.github.io/Sorting-Visualiser',
    },

]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Design'
    },
]


const Portfolio = () => {

    const [filterValue, setFilterValue] = useState(1)
    const [hoverValue, setHoverValue] = useState(null)

    const handleFilter = (id) => {
        setFilterValue(id);
        console.log(filterValue)
    }

    const handleHover = (index) => {
        setHoverValue(index);
    }


    const filterItems = filterValue === 1 ? portfolioData : portfolioData.filter((item) => item.id == filterValue)
    console.log(filterItems)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeader
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item) => {
                            return (
                                <li className={item.filterId === filterValue ? 'active' : ''} key={item.filterId} onClick={() => handleFilter(item.filterId)}>{item.label}</li>
                            )
                        })
                    }
                </ul>
                <div className="portfolio__content__card">
                    {
                        filterItems.map((item, index) => {
                            return (
                                <div className="portfolio__content__card__item"
                                    key={item.name.trim()}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(null)}>

                                    <div className="portfolio__content__card__item__image">
                                        
                                            <img src={item.image} alt="" />
                                        
                                    </div>

                                    <div className="overlay">
                                        {
                                            index === hoverValue && (
                                                <div>
                                                    <p>{item.name}</p>
                                                    <a href={item.link}>
                                                       <button>Visit</button>
                                                    </a>
                                                    
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio