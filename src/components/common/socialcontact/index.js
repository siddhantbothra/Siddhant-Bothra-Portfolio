import React from 'react'
import {Socialdata} from '../../data/data'
import './socialcontact.css'

function SocialContact() {
    const data = Socialdata;
    return (
        <div className='social-contact'>
            {data.map((item) => {
                return (

                    <a href = {item.link}>
                    <div className='social-icon-div'>
                        <img src ={item.logo} className='social-icon'/>
                    </div>
                    </a>
                     
                )
            })}
        </div>
    )
}

export default SocialContact
