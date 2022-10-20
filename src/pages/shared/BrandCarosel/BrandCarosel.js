import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../assets/images/banner.png'
import banner1 from '../../../assets/images/banner1.png'

const BrandCarosel = () => {
    return (
        <>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />

        
      </Carousel.Item>
     
    </Carousel>  
        </>
    );
};

export default BrandCarosel;