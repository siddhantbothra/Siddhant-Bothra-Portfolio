import React from 'react'
import Seperator from '../../common/seperator'
import SocialContact from '../../common/socialcontact'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            <Seperator/>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact/>
                </div>
                <div className="contact-right">
                    <a download href = {require('../../../images/resume.pdf').default}>
                    <i class="fi fi-rr-cloud-download download-icon"></i>Download Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact
