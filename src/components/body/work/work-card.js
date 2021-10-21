import React from 'react'
import './work-card.css'

function Workcard({item}) {
    return (
        <div className='work-card'>
            
            <div className='work-info'>
                <label className='company-name'>{item.company}</label>
                <div className='work-dates'>
                    <label>{item.dateofjoin}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className='work-desc'>
                    <p>{item.desc}</p>
                </div>

            </div>
            <img src ={item.icon} className='company-logo'/>
        </div>
    )
}

export default Workcard
