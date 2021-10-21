import React from 'react'
import SocialContact from '../../common/socialcontact/index'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className = 'about-top'>
                <div className = 'about-info'>
                    Hi there, Iam
                    <br/><span className = 'info-name'>Siddhant Bothra</span>.
                    <br/>I love experimenting with web-applications.
                </div>
                <div className = 'about-pic'>
                    <img src ={require('../../../images/Coding.png').default} className = 'pic'/>
                </div>
            </div>
            <div className='about-bottom'>
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
