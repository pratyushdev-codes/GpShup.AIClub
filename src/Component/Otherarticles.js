import React, { Component } from 'react'
import VideoPlayer from "react-video-js-player";
export class Otherarticles extends Component {
    render() {
        return (
            <div id="other" >
                <br />
                <br />
                <h1><center>We bring you the latest news!</center></h1>
                <div class="container-sm">
                    <img src="./images/comp.png" class="rounded mx-auto d-block" alt="Responsive image" />
                </div>
                <br />
                <br />
                <center><h1>Articles</h1></center>
                <h3> <center><a href="https://timesofindia.indiatimes.com/gadgets-news/tech-layoffs-over-288-tech-companies-slashed-more-than-3300-jobs-daily-on-average-in-january/articleshow/97615077.cms"  style={{ color: 'white', textDecoration: 'none' }}>Tech LayOffs</a></center></h3>
                <br />
                <div class="container-sm">
                    <div class="ratio ratio-16x9 autoplay loop">
                        <iframe src="./images/video.mp4" allowautoplay title="" allowfullscreen mute loop></iframe>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3> <center><a href="https://www.bbc.com/news/explainers-53337780"  style={{ color: 'white', textDecoration: 'none' }}>Black Lives Matter</a></center></h3>
                <br />
                <div class="container-sm">
                    <div class="ratio ratio-16x9 autoplay loop">
                        <iframe src="./images/police.mp4" title="" allowfullscreen autoplay loop></iframe>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3> <center><a href="https://reliefweb.int/report/turkiye/turkey-and-syria-earthquake"  style={{ color: 'white', textDecoration: 'none' }}>Turkey- Syria Earthquake</a></center></h3>
                <br />
                <div class="container-sm">
                    <div class="ratio ratio-16x9">
                        <iframe src="./images/syria.mp4" mute="1" title="" allowfullscreen></iframe>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3> <center> Experience the unparalleled impact of promoting your brand with our advertisement advertising services.</center></h3>
                <h5> <center>Connect with us to advertise and grow your business.</center></h5>
                <br />
                <div class="container-sm">
                    <div class="ratio ratio-16x9">
                        <iframe src="./images/bann.mp4" mute="1" title="" allowfullscreen></iframe>
                    </div>
                </div>
               <br />
                <br />
                <br />
                <br />
                <h3> <center><a href="https://timesofindia.indiatimes.com/gadgets-news/tech-layoffs-over-288-tech-companies-slashed-more-than-3300-jobs-daily-on-average-in-january/articleshow/97615077.cms"  style={{ color: 'white', textDecoration: 'none' }}>Best Places to visit in 2023 !</a></center></h3>
                <br />
                <div>
                    <div class="container-sm">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://images.pexels.com/photos/4172918/pexels-photo-4172918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://images.pexels.com/photos/6642541/pexels-photo-6642541.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://images.pexels.com/photos/3816807/pexels-photo-3816807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" disabled>
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>        
                </div>
                <br/>
                <br/>
                <h1><center>About Me</center></h1>
                <br/>
                <center>I am Pratyush,a dedicated student developer with a passion for finding innovative solutions to complex problems. My journey into programming began in 2018,<br/> mastering HTML, 
                JavaScript,and Java, among several other languages, recognizing that staying curious and continuously learning are crucial  elements for success<br/> in the field of software development.
                    My fascination with technology's endless possibilities has been present from a young age, and the journey started as a hobby<br/> in middle school,which turned into a passion pursued throughout high school and now into college. For fellow developers, potential employers or individuals , <br/> hope this website provides a wealth of informative and enjoyable experiences.</center>                    
                <div class="container-sm"><center>
                    <img src="./images/linkedin.gif" class="rounded mx-auto d-block" alt="Responsive image" />
                    </center>
                    <br/>
                    <br/>
                    <h1><center>Contact Me</center></h1>
                    <img src="./images/end.png" class="rounded mx-auto d-block" alt="Responsive image" />
                </div>
                </div>
        )
    }
}

export default Otherarticles
