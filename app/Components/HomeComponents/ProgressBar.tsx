import React from 'react';

const ProgressBar = (number : number) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5">
  <div className="bg-gray-900 h-2.5 rounded-full" style={{width: number}}></div>
</div>
  );
};

export default ProgressBar;