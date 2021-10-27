import React from 'react';

const getSeason = (lat, month) => {
  console.log(lat, month);
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  return (
    <div>
      {season === 'winter' ? "Burr, it's chilly" : "Let's hit the beach!"}
    </div>
  )
}

export default SeasonDisplay;