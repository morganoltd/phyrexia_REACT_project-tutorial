import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components';

import './FindUs.css';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
     <SubHeading title='Contact' />
      <h1 className='headtext__cormorant_blue' style={{marginBottom: '3rem'}}>Find Us</h1>
       <div className='app__wrapper-content'>
        <p className='p__opensans'>Proident laborum quis consequat cupidatat reprehenderit adipisicing sint dolore esse eiusmod Lorem officia.</p>

       </div>
        <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
     <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
