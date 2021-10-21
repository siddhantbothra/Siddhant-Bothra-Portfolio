import React from 'react'
import Seperator from '../../common/seperator/index'
import {WorkData} from '../../data/work'
import Workcard from './work-card'
import './work.css'

function Work() {
    const data = WorkData;
    return (
        <div className='work'>
           <Seperator/>
           <label className='section-title'>Work</label>
           <div className='work-list'>
            {data.map((item)=>{
                return(
                    <Workcard item={item}/>
                )
            })}
            
           </div>
        </div>
    )
}

export default Work
