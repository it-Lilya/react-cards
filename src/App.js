import React from 'react';
import {Cards} from './components/Cards';
import {Title} from './components/Title';
import {Images} from './components/Images';

function App({products}) {
  // const r = {
  //   imgs: '...',
  //   alt: 'Image cap',
  //   tit:'Special title treatment',
  //   text: 'With supporting text below as a natural lead-in to additional content.'
  // }
  // return (
  //   <Cards>
  //     <Images src={r.imgs} alt={r.alt}/>
  //     <Title title={r.tit} text={r.text}/>
  //   </Cards>
  // );
  return (
  <Cards >
    <Images src={products.src} alt={products.alt} />
    <Title title={products.title} text={products.text} />
  </Cards>
  )
}

export default App;
