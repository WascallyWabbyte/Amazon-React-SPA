import React from 'react';
import ReviewDetails from './ReviewDetails';

function ReviewList(props){

  const { reviews = [] } = props;
  // const reviews = props.reviews || {};

  return (
      <ul className="ReviewList">
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewDetails {...review} reviewer={ review.reviewer } />
          </li>
        ))}
      </ul>
  )
}

export default ReviewList;
