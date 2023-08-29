import React from 'react'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-lg bg-${props.mode} navbar-${props.mode} p-2 `} >
  <div className="container-fluid " id='navbar-head'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <a className="navbar-brand " href="/">{props.title}</a>

    <div className={`form-check form-switch mx-50 text-${props.mode==="light"?"dark":"light"}`}>
      <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} mode</label>
    </div>
    
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mt-3 border rounded px-2 text-center"  >
          <a className="nav-link active " aria-current="page" href="/">Home</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}
