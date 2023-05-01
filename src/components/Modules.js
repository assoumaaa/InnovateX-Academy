import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../sass/Modules.scss'
import { BiLockAlt } from "react-icons/bi";

export const Modules = () => {

  const [selectedIndex, setSelectedIndex] = useState();
  const modules_names = ["Design Thinking", "Six Thinking Hats", "Selection", "Persona", "Jobs To Be Done", "Value Proposition", "POV", "Ideation", "Prototype", "Module 9", "Module 10", "Module 11", "Module 12", "Module 13", "Module 14"];
  const hrefs = ['/modules/m0', '/modules/m1', '/modules/m2', '/modules/m3', '/modules/m4', '/modules/m5', '/modules/m6', '/modules/m7', '/modules/m8', '/modules/m9', '/modules/m10', '/modules/m11', '/modules/m12', '/modules/m13', '/modules/m14']

  


  const navigate = useNavigate();


  useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedIndex = hrefs.findIndex(href => currentPath.startsWith(href));
    setSelectedIndex(selectedIndex);
    console.log('inside useEffect' + hrefs.findIndex(href => href === currentPath.startsWith(href)));
  }, [hrefs]);

  return (
    <div className="modules">
      <div className="sideBar">

        <div className="logo">
          <img src='../../images/logo.png' alt='logo' onClick={handleBack} />
          <span>InnovateX Academy</span> 
        </div>

        <div className="modules">
          {modules_names.map((module, index) => (
            <a key={index} href={hrefs[index]}>
              <div className={`${index === selectedIndex ? 'eachModule selected' : 'eachModule'}`} onClick={() => setSelectedIndex(index)}>
                <BiLockAlt className='lock'/>
                <h1> {modules_names[index]}</h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div >
  )
}
