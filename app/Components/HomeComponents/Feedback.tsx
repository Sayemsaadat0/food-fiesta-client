import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'
import ProgressBar from './ProgressBar'

const Feedback = () => {
  return (
    <div className="container p-5 lg:p-0 py-16">

      {/* Section Heading */}
      <div className="lg:flex justify-between gap-10 ">
        <div className="space-y-5">
          <h4 className="text-3xl font-bold">Customer Review</h4>
          <div className="text-gray-500 space-y-5">
          <p>Our client`s satisfaction is at the heart of our work. Here`s what some of them have to say about their experience with our services. We take pride in delivering high-quality, user-friendly websites and exceptional online meeting experiences.</p>
          {/* <br /><br /> */}
          <p>These reviews reflect our commitment to excellence in both web design and video conferencing solutions.</p>
          </div>
        </div>
        {/* Star Based Review */}
        <div className="max-w-[600px] w-full">
          <p className="text-xl font-semibold">Based on 2304 reviews</p>
          
          <div className='flex items-center gap-5 mt-2'>
            <span className='text-xl font-medium'>4/5</span>
            <div className='flex items-center gap-2'>
            <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
            </div> 
          </div>

          <div className='mt-5'>
              <ProgressBar length={47} value={5} />
              <ProgressBar length={24} value={4} />
              <ProgressBar length={18} value={3} />
              <ProgressBar length={6} value={2} />
              <ProgressBar length={5} value={1} />
          </div>

        </div>
      </div>

      {/* Review Card */}

    </div>
  )
}

export default Feedback