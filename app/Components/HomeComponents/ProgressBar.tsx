import {AiTwotoneStar} from 'react-icons/ai'

interface Size {
  length: number;
  value: number
}

const ProgressBar = ({length, value}: Size) => {
  return (
    <div className='flex gap-3 items-center w-full'>
      <span className='flex gap-1 items-center justify-between w-10'>
        <span>{value}</span>
        <AiTwotoneStar size={20} />
      </span>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="bg-gray-200 rounded-full h-2.5 w-full">
         <div className="bg-gray-900 h-2.5 rounded-full" style={{width: `${length}%`}}></div>
        </div>
        <span>{length}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;