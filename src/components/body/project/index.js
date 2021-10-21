import React from 'react'
import {ProjectData} from '../../data/projectdata'
import ProjectCard from './project-card'
import Seperator from '../../common/seperator/index'
import "./project.css"

function Project() {
    const data = ProjectData;
    return (
        
        <div  className='project'>
            <Seperator />
            <label className='section-title'>Projects</label>
            <div >
                {data.map((item)=>{
                   return(
                    <ProjectCard item ={item}/>
                   ) 
                })}
            </div>

            
        </div>
    )
}

export default Project
