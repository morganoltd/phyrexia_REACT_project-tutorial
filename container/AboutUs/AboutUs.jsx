import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-content flex__center'>
<div className='app__aboutus-content_about'>
<h1 className='headtext__cormorant' style={{color: '#999999'}}>past</h1>
<img src={images.spoon} alt='about_spoon' className='spoon__img' /> 
<p className='p__opensans'>Ut pariatur adipisicing esse Lorem excepteur elit. Ea voluptate dolore culpa nulla elit exercitation fugiat reprehenderit. Exercitation voluptate consequat magna nisi fugiat sunt commodo dolor anim veniam consectetur. Aliqua dolore nostrud proident occaecat culpa ipsum id dolore. Consectetur consequat eu quis ipsum in. Amet elit veniam sit est nisi nisi ipsum esse. Amet est aliquip nostrud aliqua fugiat irure.</p>
<button type='button' className='custom__button'>Know More</button>
</div>

<div className='app__aboutus-content_knife flex__center'>
<img src={images.knife} alt='about_knife' />
</div>

<div className='app__aboutus-content_history'>
<h1 className='headtext__cormorant' style={{color: '#FFFFFF'}}>present</h1>
<img src={images.spoon} alt='about_spoon' className='spoon__img' /> 
<p className='p__opensans'>Ut pariatur adipisicing esse Lorem excepteur elit. Ea voluptate dolore culpa nulla elit exercitation fugiat reprehenderit. Exercitation voluptate consequat magna nisi fugiat sunt commodo dolor anim veniam consectetur. Aliqua dolore nostrud proident occaecat culpa ipsum id dolore. Consectetur consequat eu quis ipsum in. Amet elit veniam sit est nisi nisi ipsum esse. Amet est aliquip nostrud aliqua fugiat irure.</p>
<button type='button' className='custom__button'>Know More</button>
</div>
    </div>
  </div>
);

export default AboutUs;
