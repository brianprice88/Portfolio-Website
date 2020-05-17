import React from 'React'

export default function Projects() {
    return (
        <div className="main">

        <h1>Projects</h1>
        <br />
        
        <h2>PORTFOLIO</h2>
        <p>Resize the browser window to see the responsive effect.</p>

        <div class="content">
          <video src="assets/RockPaperScissors.mov" controls alt="Trafalgar"/>
          <h3>Some Other Work</h3>
          <p>Lorem ipsum..</p>
        </div>

        <div class="content">
          <video src="assets/Minesweeper.mov" controls alt="Trafalgar"/>
          <h3>Some Other Work</h3>
          <p>Lorem ipsum..</p>
        </div>
        
        <div class="row">

          <div class="column">
            <div class="content">
              <img src='assets/Geofencing.png' alt="Mountains"/>
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src='assets/Geofencing2.png' alt="Lights"/>
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src="assets/SDC.png" alt="Nature"/>
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src="assets/SDC2.png" alt="Mountains"/>
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>

        </div>
        
        <div class="content">
          <img src="assets/SDC3.png" alt="Bear"/>
          <h3>Some Other Work</h3>
          <p>Lorem ipsum..</p>
        </div>

        <div class="content">
          <video src="assets/Trafalgar.mp4" controls alt="Trafalgar"/>
          <h3>Some Other Work</h3>
          <p>Lorem ipsum..</p>
        </div>
        
        </div>
    )
}