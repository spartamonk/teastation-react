import React from 'react'
import {skills} from '../utils/constants'
import { useGlobalContext } from '../context/context'
const Skills = () => {
 const { closeNavbar } = useGlobalContext()
 return (
  <section className="skills clearfix" onClick={closeNavbar}>
   {
    skills.map(skill=> {
     const {id, icon,title, text} = skill;
     return (
      <article key={id} className="skill">
       <span className="skill-icon">
        {icon}
       </span>
       <h4 className="skill-title">{title}</h4>
       <p className="skill-text">{text}</p>
      </article>
     )
    })
   }
  </section>
 )
}

export default Skills
