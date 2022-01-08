import React from 'react';

const ErrorExample = () => {
  let title = 'random data';
  return <React.Fragment>
    <h2>{title}</h2>      
    <button type='button' className='btn'>change title</button>
  </React.Fragment>;
};

export default ErrorExample;
