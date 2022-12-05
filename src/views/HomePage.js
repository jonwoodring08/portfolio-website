import React from 'react';
import cliffView from '../assets/images/cliff-view.jpg';
import lifecycle from '../assets/images/lifecycle.svg'; 
import pentip from '../assets/images/pen-tip.svg';
let HomePage = () => {
    return(
        <div className = 'homepage-container'>
            <div className = 'greeting-box'>
                <h1 className = 'page-title homepage-title'> Hey, I'm Jon. </h1> 
            </div>
            <div className = 'homepage-info-section'> 
                    <span className = 'light-text large-text homepage-info-text'> I'm a web developer based in Ypsilanti, Michigan. I have years of experience building websites and applications for businesses of all sizes. <br></br><br></br> 
                        I am currently providing a number of services to help people go further online. <br></br><br></br>
                        { <div className = 'services-button-container'><button className = 'services-button' > View Services </button></div> }
                    </span>
                    <figure className = 'portrait-frame'>
                        <img alt="" className = 'portrait-image' srcset = { cliffView }/>
                    </figure>
            </div>
            <div className = 'homepage-section grey'>
              <div className = 'skill-section'>
                <h1 className = 'section-break section-title'> My skills </h1>
                    <div className = 'skill-container'>
                        <div className = 'skill-box'>
                            <img alt="" class = 'skill-image' src = { lifecycle } width = '100'></img>
                            <h1 class = 'skill-title'> Web Development </h1>
                            <h2 class = 'skill-sub-title'> Lifecycle Driven</h2>
                            <div class = 'skill-text-area'>
                                <p class = 'skill-description'> By using a formulated approach to development. I am able to develop and ship products with very little overhead, saving you time and energy.  </p>
                            </div>
                        </div>
                        <div className = 'skill-box'>
                            <img alt="" class = 'skill-image' src = { pentip } width = '100'></img>
                            <h1 class = 'skill-title'> Web Design </h1>
                            <h2 class = 'skill-sub-title'> Fast and Responsive </h2>
                            <div class = 'skill-text-area'>
                                <p class = 'skill-description'> My two beliefs when it comes to design is that every website should be built to be as fast as possible and to look good on all screen sizes. </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

     )
}

export default HomePage; 