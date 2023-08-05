import React from 'react';
import './Card.css';

function Card({image, ProjectName, projectURL}) {
  return (
    <div className='Card CardScale'>
        <img className='CardScale' src={image} alt={`${ProjectName}-Pic`}/>
        <p>{ProjectName}</p>
        <a href={projectURL} rel="noreferrer" target='_blank'>Visit Site</a>
    </div>
  )
}

export default Card