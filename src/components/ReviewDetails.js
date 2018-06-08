import React from 'react'
import StarRating from './StarRating';

function ReviewDetails(props){
  // const { author = {} } = props;
  // const author = props.author || {};
  return (
    <div className="ReviewDetails">
      <p>{props.rating}</p>
      <p>{props.body}</p>
      <p>{props.created_at}</p>
      <p>By {props.reviewer.full_name}</p>
      <div className="starDiv">
        <StarRating max={5} current={props.rating} />
      </div>
    </div>
  )
}

export default ReviewDetails;
