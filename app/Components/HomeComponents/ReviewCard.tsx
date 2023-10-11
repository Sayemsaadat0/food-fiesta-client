"use client"
import { Rating, Star } from '@smastrom/react-rating'

interface data {
  review: any
}

const ReviewCard = ({review} : data) => {
  const customStyles = {
    itemShapes: Star,
    activeFillColor: '#1F2935',
    inactiveFillColor: '#c1c2c5',
  };
  return (
    <div className='p-5 border-2 border-gray-300 max-w-2xl w-full'>
      <div className='flex items-center gap-5'>
        <Rating
          style={{ maxWidth: 150, height: 25 }}
          value={review.rating}
          itemStyles={customStyles}
          readOnly
        />
        <span className='font-medium'>{review.rating} out of 5 stars</span>
      </div>

      {/* Reviewer Details and comment */}
      <div className='mt-4'>
        <span className='flex items-center gap-3'><h6 className='font-bold gap-3'>{review.name} </h6><p className='italic text-gray-600'>-{review.date}</p> </span>
        <p className="text-gray-400 mt-3">
          {review.review}
        </p>
      </div>

    </div>
  );
};

export default ReviewCard;