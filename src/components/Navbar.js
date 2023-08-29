import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-lg bg-${props.mode} navbar-${props.mode} px-4 `} >
        <a className="navbar-brand " href="/">{props.title}</a>
        <div className={`form-check form-switch mx-50 text-${props.mode==="light"?"dark":"light"}`}>
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} mode</label>
        </div>
      </nav>
    </div>
    
  )
}
