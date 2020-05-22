import React from 'react'

export default function Projects() {
    return (
        <div id='Projects'>

            <div className="Projectsrow">
                <div className="Projectscontent">
                    <div className='Projectsheader'>
                        <p><strong>Rock Paper Scissors</strong></p>
                        <p><strong>React, Socket.IO, Express</strong></p>
                        <a href='https://rock-paper-scissors-brianprice.herokuapp.com/' target="_blank">Play the game here</a>
                        <br />
                        <a href='https://github.com/brianprice88/Rock-Paper-Scissors' target="_blank">View the source code here</a>
                    </div>
                    <figure>
                        <video src="assets/RockPaperScissors.mov" autoPlay loop muted alt="Rock Paper Scissors" />
                    </figure>
                </div>
            </div>

            <hr className='projectDivider' />

            <div className="Projectsrow">
                <div className="Projectscontent">
                    <div className='Projectsheader'>
                        <p><strong>Minesweeper</strong></p>
                        <p><strong>HTML, CSS, JavaScript, MongoDB</strong></p>
                        <a href='https://minesweeper-brian-price.herokuapp.com/' target="_blank">Play the game here</a>
                        <br />
                        <a href='https://github.com/brianprice88/Minesweeper' target="_blank">View the source code here</a>
                    </div>
                    <figure>
                        <video src="assets/Minesweeper.mov" autoPlay loop muted alt="Minesweeper demo" />
                    </figure>
                </div>
            </div>

            <hr className='projectDivider' />

            <div className='Projectsrow'>
                <div className='Projectscontent'>
                    <div className='Projectsheader'>
                        <p><strong>REI Product View</strong></p>
                        <p><strong>Express, PostgreSQL, MongoDB</strong></p>
                        <a href='https://github.com/The-Good-Place-HRLA/Product-View-service' target="_blank">View the source code here</a>
                    </div>

                    <h1 className='blinkingText'>Hover over an image to enlarge it</h1>
                    <div className="ProjectscolumnSDC">
                        <div className="Projectscontent">
                            <figure>
                                <img id='SDCimg1' src="assets/SDC.png" alt="REI Product View testing image" />
                                <figcaption>
                                    Optimized database for REI product page mockup to allow queries drawn from 10 million unique records, with average response time lowered from >1000ms to 5-10ms
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="ProjectscolumnSDC">
                        <div className="Projectscontent">
                            <figure>
                                <img id='SDCimg2' src="assets/SDC2.png" alt="REI Product View testing image" />
                                <figcaption>
                                    Horizontally scaled application across multiple AWS EC2 instances using proxy load balancer, so requests had 0% errors and 60ms latency at 3500+ clients per second
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className='ProjectscolumnSDC'>
                        <div className="Projectscontent">
                            <figure>
                                <img id='SDCimg3' src="assets/SDC3.png" alt="REI Product View testing image" />
                                <figcaption>
                                    Applied server-side rendering, bundle compression, and caching to increase initial page load speed by more than five times
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='projectDivider' />

            <div className="Projectsrow">
                <div className="Projectscontent">
                    <div className='Projectsheader'>
                        <p><strong>Trafalgar trip page</strong></p>
                        <p><strong>React, Express, MongoDB</strong></p>
                        <a href='https://github.com/Front-End-Capstone-hrla34/Searchbar' target="_blank">View the source code here</a>
                    </div>
                    <figure>
                        <video src="assets/Trafalgar.mp4" autoPlay loop muted alt="Trafalgar trip page demo" />
                        <figcaption>
                            &#8226; Built model of site’s search bar and trip details components, ensuring 15 trip-
                            specific properties would be accurately updated throughout frequent page re-renderings
                    </figcaption>
                        <figcaption>
                            &#8226; Routed user queries through server to database, providing clients with results
                            drawn from 100 realistic trips that are searchable by continents, countries, and cities
                    </figcaption>
                    </figure>
                </div>
            </div>

            <hr className='projectDivider' />

            <div className="Projectsrow">
                <div className='Projectscontent'>
                    <div className='Projectsheader'>
                        <p><strong>Geofencing-notification mobile app</strong></p>
                        <p><strong>React Native, GraphQL, MongoDB</strong></p>
                        <a href='https://github.com/hrla34-MVP/Server-database' target="_blank">View the source code here</a>
                    </div>

                    <div className="ProjectscolumnMVP">
                        <div className="Projectscontent">
                            <figure>
                                <img src='assets/Geofencing2.png' alt="Geofencing app image" />
                                <figcaption>
                                    To meet project’s one-week deadline, constructed the entire backend server and database, then deployed them on Heroku to allow clients global access
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="ProjectscolumnMVP">
                        <div className="Projectscontent">
                            <figure>
                                <img src='assets/Geofencing.png' alt="Geofencing app image" />
                                <figcaption>
                                    Wrote all of app’s front-end logic for users to save desired geofenced areas along with
                                    notifications to be delivered upon entering and/or exiting a region
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <a id='backToTop' href='#Navbar'>Return to top</a>
            </div>
        </div>
    )
}