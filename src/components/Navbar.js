import React from 'react'


export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-lg bg-dark navbar-dark " >
  <div class="container-fluid " id='navbar-head'>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand " href="/">{props.title}</a>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mt-3 border rounded px-2 text-center"  >
          <a class="nav-link active " aria-current="page" href="/">Home</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}
