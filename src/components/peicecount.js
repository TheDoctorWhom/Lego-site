import React from 'react';
import './PeiceCount.css'

const PeiceCount = ({ videos }) => {

const videosPieces = videos.map(video => video.PIECES);
const numberBuilt = videos.map(video => video.BUILT ? 1 : 0);

let numberOfSets = 0;

numberBuilt.forEach(x => x === 1 || x === 0 ? numberOfSets++ : null);

const reducer = (previousValue, currentValue) => previousValue + currentValue;

//filter out empty elements
const videosPiecesFiltered = videosPieces.filter(Number);
const numberBuiltFiltered = numberBuilt.filter(Number);


const numberOfPieces = ((videosPiecesFiltered && videosPiecesFiltered.length) ? videosPiecesFiltered.reduce(reducer): null);
const percentBuilt = ((numberBuiltFiltered && numberBuiltFiltered.length) ? ((numberBuiltFiltered.reduce(reducer)/numberOfSets) * 100).toFixed(2) : null);

return (
  <div className='peice-count'>
  <p>Pieces: {numberOfPieces}</p>
  <p>% Built: {percentBuilt}</p>
  </div>
  );
};

export default PeiceCount;
