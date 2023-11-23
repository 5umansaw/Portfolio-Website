import React , {useState} from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../component/pageHeader";
import { Animate } from "react-simple-animate";
import M from "materialize-css"
import './styles.scss'
import { data } from "../../helper/util";

const Contact = () => {

    const [name , SetName] = useState('')
    const [email , setEmail] = useState('')
    const [desc , setDesc] = useState('')


   const sendMsg = ()=>{
    console.log("calling toast")

    if(name.trim() === '' || email.trim() === '' || desc.trim() === ''){
        M.toast({html: "Please fill the field" , classes: "toastMsg"})
        return
    }
    
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        M.toast({html: "Invalid Email" , classes: "toastMsg"})
        return
    }

    fetch('/contact' , {
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name,
            email,
            desc
        })
    }).then(res=>{
       console.log(res)
       if(res.statusText === "OK"){
         M.toast({html: "Email Sent" , classes: "toastMsg"})
       }else{
         M.toast({html: "Server Error" , classes: "toastMsg"})
       }
    })
       
   }





    return (
        <section id="contact" className="contact">
            <PageHeader
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: 'translate(-200px)' }}
                    end={{ transform: 'translate(0px)' }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: 'translate(200px)' }}
                    end={{ transform: 'translate(0px)' }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__control">
                            <div>
                                <label htmlFor="name" className="nameLabel">Name</label>
                                <input required name="name" className="inputName" type={'text'} onChange={(e)=>SetName(e.target.value)}/>

                            </div>
                            <div>
                                <label htmlFor="email" className="emailLabel">Email</label>
                                <input required name="email" className="inputEmail" type={'text'} onChange={(e)=>setEmail(e.target.value)}/>

                            </div>
                            <div>
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                                <textarea name="description" className="inputDescription" type={'text'} rows="5" onChange={(e)=>setDesc(e.target.value)}/>

                            </div>
                        </div>

                       <button onClick={()=>sendMsg()}>Submit</button>
                    </div>
                </Animate>


            </div>
        </section>
    )
}

export default Contact