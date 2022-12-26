import {Cards} from './components/Cards';
import './App.css';
import React from 'react';
import Title from './components/Title';
import Images from './components/Images';

function App() {
  const r = {
    imgs: 'https://abrakadabra.fun/uploads/posts/2022-03/1648457985_1-abrakadabra-fun-p-risunok-kompyutera-dlya-prezentatsii-6.jpg',
    alt: 'картинка компьютера',
    tit:'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.'
  }
  return (
    <Cards>
      <Images src={r.imgs} alt={r.alt}/>
      <Title title={r.tit} text={r.text}/>
    </Cards>
  );
}

export default App;
