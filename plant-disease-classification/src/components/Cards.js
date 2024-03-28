import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHOOSE ONE OF THE CLASSIFIERS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/potato.jpeg'
              text='Potato Disease Classifier'
              label='Potato'
              path='/potato'
            />
            <CardItem
              src='images/tomato.webp'
              text='Tomato Disease Classifier'
              label='Tomato'
              path='/tomato'
            />
            <CardItem
              src='images/bell.jpg'
              text='Bell Pepper Disease Classifier'
              label='Bell Pepper'
              path='/bell-pepper'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
