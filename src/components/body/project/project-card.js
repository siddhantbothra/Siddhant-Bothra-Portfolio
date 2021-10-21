import React from 'react'
import './project-card.css'
function ProjectCard({item}) {
    return (
        <div className='project-card'>
            <div className='project-info'>
            <label className='project-title'>{item.title}</label>
            <div className='project-links'>
                {item.link1&& 
                <a href={item.link1} className='project-link'>
                    
                    <div className='link-button'>
                    <i class="fi fi-rr-globe"></i>Demo
                    </div>
                </a>
                }
                {item.github&&
                    <a href={item.github} className='project-link'>
                    
                    <div className='link-button'>
                    <i class="devicon-github-original colored"></i>Github
                    </div>
                </a>
                }
            </div>
            <p>{item.about}</p>
            <div className='project-tabs'>
                    {item.tab.map((tabs)=>{
                        return <label className='tab'>{tabs}</label>
                    })}
            </div>
            </div>
            <div className='project-image'>
                <img src={item.image} className='project-photo'/>
            </div>
        </div>
    )
}

export default ProjectCard
