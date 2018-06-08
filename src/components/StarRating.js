import React from 'react';
import Star from './Star'

function StarRating(max, current){
  let stars = [];
  for(let i = 0; i < 5; i += 1){
    stars.push(<Star key={i} />)
  }
  return stars;
}

export default StarRating;
