import React from 'react';
import { useStateValue } from './StateProvider';

export function Searchpage(props) {
  
  const [{ term }, dispath] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{ term }</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  )
}

export default Searchpage