import React from 'react';

function Accord() {
  return (   
   <>
      <div className="bg-success p-2 text-white">
        This is default success background
      </div>
      <div className="bg-success p-2 text-white bg-opacity-75">
        This is 75% opacity success background
      </div>
      <div className="bg-success p-2 text-dark bg-opacity-50">
        This is 50% opacity success background
      </div>
      <div className="bg-success p-2 text-dark bg-opacity-25">
        This is 25% opacity success background
      </div>
      <div className="bg-success p-2 text-dark bg-opacity-10">
        This is 10% opacity success background
      </div>
   </>
 )
}
export default Accord;