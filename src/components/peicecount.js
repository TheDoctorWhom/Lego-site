import React from 'react';

const peicecount = ({ videos }) => {
// console.log(videos);
const videosPieces = videos.map(video => video.PIECES);
const numberBuilt = videos.map(video => video.BUILT === true ? 1 : 0);

let numberOfSets = 0;

numberBuilt.forEach(x => x === 1 || x === 0 ? numberOfSets++ : null);

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const numberOfPieces = ((videosPieces.length !== [] && videosPieces.length !== 0) ? videosPieces.reduce(reducer): null);
const percentBuilt = ((numberBuilt.length !== [] && numberBuilt.length !== 0) ? ((numberBuilt.reduce(reducer)/numberOfSets) * 100).toFixed(2) : null);

return (
  <div>
  <p>Pieces: {numberOfPieces}</p>
  <p>% Built: {percentBuilt}</p>
  <p></p>
  </div>
  );
};

export default peicecount;
