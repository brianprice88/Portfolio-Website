import React from 'React'

export default function Projects() {
    return (
        <div className="main">

        <div className="content">
        <h3>Rock Paper Scissors online multiplayer game</h3>
          <p>Technologies used: <strong>React, Socket.IO, Express</strong></p>
          <p>Play game <a href='https://rock-paper-scissors-brianprice.herokuapp.com/' target="_blank">here!</a></p>
          <p>Or view the source code <a href='https://github.com/brianprice88/Rock-Paper-Scissors' target="_blank">here</a></p>
          <video src="assets/RockPaperScissors.mov" autoPlay loop muted alt="Rock Paper Scissors"/>
        </div>

        <div className="content">
        <h3>Minesweeper online game</h3>
          <p>Technologies used: <strong>HTML, CSS, JavaScript, MongoDB</strong></p>
          <p>Play game <a href='https://minesweeper-brian-price.herokuapp.com/' target="_blank">here!</a></p>
          <p>Or view the source code <a href='https://github.com/brianprice88/Minesweeper' target="_blank">here</a></p>
          <video src="assets/Minesweeper.mov" autoPlay loop muted alt="Minesweeper demo"/>
        </div>
        
        <div className="row">
            <h3>Geofencing-notification mobile app</h3>
            <p>Technologies used: <strong>React Native, GraphQ, and MongoDB</strong></p>
            <p>View the source code <a href='https://github.com/hrla34-MVP/Server-database' target="_blank">here</a></p>
          <div className="column">
            <div className="content">
              <img src='assets/Geofencing.png' alt="Geofencing app image"/>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src='assets/Geofencing2.png' alt="Geofencing app image"/>
            </div>
          </div>
                
          </div>

          <div className='row'>

          <h3>REI Product View</h3>
          <p>Technologies used: <strong>Express, PostgresSQL, MongoDB</strong></p>
          <p>View the source code <a href='https://github.com/The-Good-Place-HRLA/Product-View-service' target="_blank">here</a></p>

          <div className="column">
            <div className="content">
              <img src="assets/SDC.png" alt="REI Product View testing image"/>
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src="assets/SDC2.png" alt="REI Product View testing image"/>
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        <div className='column'>
        <div className="content">
          <img src="assets/SDC3.png" alt="REI Product View testing image"/>
          <h3>Some Other Work</h3>
          <p>Lorem ipsum..</p>
        </div>
        </div>

        </div>


        <div className="content">
        <h3>Trafalgar trip page</h3>
          <p>Technologies used: <strong>React, Express, MongoDB</strong></p>
          <p>View the source code <a href='https://github.com/Front-End-Capstone-hrla34/Searchbar' target="_blank">here</a></p>
          <video src="assets/Trafalgar.mp4" autoPlay loop muted alt="Trafalgar trip page demo"/>
        </div>
        
        </div>
    )
}