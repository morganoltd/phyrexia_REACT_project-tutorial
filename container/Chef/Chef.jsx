import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
<SubHeading title="Creatures"/>
<h1 className='headtext__cormorant_green'>Unstoppable beasts</h1>

<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img src={images.quote} alt='quote'/>
<p className='p__opensans'>Commodo exercitation ex ex adipisicing eiusmod velit reprehenderit aliquip culpa occaecat est. Aliqua culpa culpa irure esse sit in eu.</p>
</div>
<p className='p__opensans'>Eu reprehenderit fugiat ut id quis dolore non non nostrud. Non do ea anim voluptate deserunt consequat amet qui cupidatat ullamco ea veniam proident. Anim cupidatat nulla eiusmod consectetur minim ad consequat aliqua culpa proident. Consectetur elit proident amet officia occaecat amet aliqua aliquip culpa labore.</p>


</div>
    </div>
  </div>
);

export default Chef;
