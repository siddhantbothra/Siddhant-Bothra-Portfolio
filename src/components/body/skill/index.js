import React from 'react'
import './skill.css'
import Seperator from '../../common/seperator/index'
import {Frontend} from '../../data/frontend'

function Skill() {
   const data = Frontend;
    return (
        <div className='skills'>
            <Seperator/>
            <label className="section-title">Skills</label>
            <div className="skill-container">
                {
                    data.map((item)=>{
                        return(
                            <div className='skill-section'>
                                <label className="skills-section-title">{item.title}</label>
                                <div className="skill-list">
                                    {item.list.map((skill)=>{
                                       return <div className="skill-card">
                                            <div className="skill-icon">
                                                {skill.icon}
                                            </div>
                                            <label className="skill-label">
                                                {skill.name}
                                            </label>
                                        </div>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Skill
