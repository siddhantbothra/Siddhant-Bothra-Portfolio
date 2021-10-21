import React from 'react'
import './mobilemenu.css'

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className='mobile-view'>
            <div className='close-icon' onClick={()=> setIsOpen(!isOpen)}>
            <i class="fi fi-rr-cross-circle"></i>
            </div>
            <div className = 'mobile-design'>
            <div className='mobile-options' >
                <a href="#project">
                <i class="fi fi-rr-edit-alt option-icon"></i>Project
                </a>
            </div>
            <div className='mobile-options' >
                <a href = "#skills">
                <i class="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-options' >
                <a href="#Work">
                <i class="fi fi-rr-briefcase option-icon"></i>Work
                </a>
            </div>
            <div className='mobile-options' >
                <a href = "#contact">
                <i class="fi fi-rr-user option-icon"></i> Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
