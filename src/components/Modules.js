import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../sass/Modules.scss'

export const Modules = () => {

  const [selectedIndex, setSelectedIndex] = useState();
  const modules = ["Module 0", "Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10", "Module 11", "Module 12", "Module 13", "Module 14"];
  const modules_names = ["Design Thinking", "Six Thinking Hats", "Selection", "Persona", "Jobs To Be Done", "Value Proposition", "POV", "Ideation", "Prototype", "Module 9", "Module 10", "Module 11", "Module 12", "Module 13", "Module 14"];
  const hrefs = ['/modules/m0', '/modules/m1', '/modules/m2', '/modules/m3', '/modules/m4', '/modules/m5', '/modules/m6', '/modules/m7', '/modules/m8', '/modules/m9', '/modules/m10', '/modules/m11', '/modules/m12', '/modules/m13', '/modules/m14']
  
  

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/')
  }

  useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedIndex = hrefs.findIndex(href => href === currentPath);
    const userID = window.localStorage.getItem("userID")
    console.log(userID)
    setSelectedIndex(selectedIndex);
  }, [hrefs]);

  return (
    <div className="modules">
      <div className="sideBar">

        <div className="logo">
          <img src='../../images/logo.png' alt='logo' onClick={handleBack} />
          <span>InnovateX Academy</span>
        </div>

        <div className="modules">
          {modules.map((module, index) => (
            <a key={index} href={hrefs[index]}>
              <div className={`${index === selectedIndex ? 'eachModule selected' : 'eachModule'}`} onClick={() => setSelectedIndex(index)}>
                <h1>{module} </h1>
                <span className='modules_names'> {modules_names[index]}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div >
  )
}
