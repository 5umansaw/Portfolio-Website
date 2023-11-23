
export const particles = {
        background: {
            color: {
                value: "#1d1d1d",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };


export const skills = [
    {
        label:"FRONT END",
        data:[
            {
                skillName: "HTML",
                percentage: "80",
            },
            {
                skillName: "CSS",
                percentage: "60",
            },
            {
                skillName: "REACT.JS",
                percentage: "70",
            },
            {
                skillName: "JAVASCRIPT",
                percentage: "70",
            },
        ]
    },
    {
        label:"BACK END",
        data:[
            {
                skillName: "NODE.JS",
                percentage: "80",
            },
            {
                skillName: "EXPRESS.JS",
                percentage: "80",
            },
            {
                skillName: "PYTHON",
                percentage: "60",
            },
            {
                skillName: "C++",
                percentage: "85",
            },
        ]
    },
    {
        label:"DATABASE",
        data:[
            {
                skillName: "MONGODB",
                percentage: "70",
            },
            {
                skillName: "SQL",
                percentage: "80",
            }
        ]
    }
];

export const data = {
    experience: [
        {
            title:"Backend Developer",
            subTitle:"New Delhi",
            description:"Joined the backend development team and worked majorly on testing API routes and reported 10+ bugs. Tested and successfully implemented sorting feature, streamlining process for prospective recruiters"
        },
        {
            title:"Microsoft Future Ready Talent",
            subTitle:"Virtual Mode",
            description:"Completed a month long training on Azure fundamentals which included hands-on practice, after which the project was deployed on Microsoft Azure cloud service Successfully completed the 3 month virtual internship based on Azure Cloud"
        }  
    ],

    education: [
        {
            title:"Bachelor Degree - B.Tech",
            subTitle:"Delhi Technological University",
            description:"Grade:  8.05 CGPA"
        },
        {
            title:"Higher Secondary",
            subTitle:"Vishal International School",
            description:"Percentage:  80%"
        },
        {
            title:"Secondary School",
            subTitle:"RSI Public School",
            description:"Grade:  8.0 CGPA"
        } 
    ]

}
