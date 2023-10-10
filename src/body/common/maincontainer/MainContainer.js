import {React} from 'react';

import './MainContainer.css';

const MainContainer = ({ className, ...props }) => 
{
  return (
    <div className={`main-container p-5 ${className ? className : ''}`} {...props} />
  );
};

export default MainContainer;
