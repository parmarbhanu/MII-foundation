import React, {Component} from 'react';
import './Ourpartner.css';
import Carousel from 'react-elastic-carousel';
import ourpartnerImg1 from './assets/ourpartnerImg1.png';
import ourpartnerImg2 from './assets/ourpartnerImg2.png';
import ourpartnerImg3 from './assets/ourpartnerImg3.png';
import ourpartnerImg4 from './assets/ourpartnerImg4.png';
import ourpartnerImg5 from './assets/ourpartnerImg5.png';
import ourpartnerImg6 from './assets/ourpartnerImg6.png';
import ourpartnerImg7 from './assets/ourpartnerImg7.png';


const breakPoints = [
    {width: 1 , itemsToShow: 1},
    {width: 550 , itemsToShow: 2},
    {width: 768 , itemsToShow: 3},
    {width: 1200 , itemsToShow: 4},
]

const Ourpartner_images = () =>{
    return(
        <div className='home-sec6-carousel'>
            <Carousel buttonsVisibility="Visible" breakPoints={breakPoints}>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg1} className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg2} className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg3} className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg4} className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg5} className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg6} className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"><img src={ourpartnerImg7} className="home-sec6-img" alt="" /></div>
            </Carousel>
        </div>
    )
}   

export default Ourpartner_images;