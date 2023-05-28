import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { BiLockAlt } from "react-icons/bi";
import { getUserData } from '../hooks/hooks';
import { Outlet } from 'react-router-dom';
import '../sass/Modules.scss'
import { Ring } from 'react-spinners-css'


export const Modules = () => {

  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modulesCompleted, setModulesCompleted] = useState();

  const modules_names = ["Design Thinking", "Six Thinking Hats", "Selection", "Persona", "Jobs To Be Done", "Value Proposition", "POV", "Ideation", "Prototype", "Module 9", "Module 10", "Module 11", "Module 12", "Module 13", "Module 14"];
  const hrefs = ['/modules/m0', '/modules/m1', '/modules/m2', '/modules/m3', '/modules/m4', '/modules/m5', '/modules/m6', '/modules/m7', '/modules/m8', '/modules/m9', '/modules/m10', '/modules/m11', '/modules/m12', '/modules/m13', '/modules/m14']


  useEffect(() => {
    getUserData().then(userData => {
      setModulesCompleted(userData.module);
    });
  }, []);


  useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedIndex = hrefs.findIndex(href => currentPath.startsWith(href));
    setSelectedIndex(selectedIndex);
  }, [hrefs]);


  return (

    modulesCompleted ? (
      <div className="modules">
        <div className="sideBar">

          <div className="logo">
            <img src='../../images/logo.png' alt='logo' onClick={() => navigate('/')} />
            <span>InnovateX Academy</span>
          </div>

          <div className="modules">
            {modules_names.map((module, index) => (
              <Link key={index} to={hrefs[index]} className='Link'>
                <div
                  key={index}
                  className={`
                  ${index === selectedIndex ? 'eachModule selected' : 'eachModule'}
                  ${!modulesCompleted[index] ? 'eachModule lockedModule' : 'eachModule'}
                `}
                  onClick={() => setSelectedIndex(index)}
                >
                  <BiLockAlt className='lock' />
                  <h1> {module}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Outlet />
      </div >

    ) : (
      <div className="loading">
        <Ring color="#03b2fd" />
      </div>
    )
  )
}
