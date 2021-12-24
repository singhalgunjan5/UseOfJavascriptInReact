import React from 'react';
import ReactDOM from 'react-dom';

const s1="season1";
const s2="season2";
const s3="season3";
ReactDOM.render(
  <>
  <h1>My Five Favourite Netflix Series or Movies</h1>
  <p>
   <ol>
   <h1>
  <li> Cobra Kai all seasons {1+1+1}</li>
  <li> {`lock and key ${s1} ${s2}`}</li>
  <li> Squid Games</li>
  <li> Crash landing on you</li>
  <li> Mismatched</li>
  </h1>
   </ol>


  </p>
  </>,
  document.getElementById('root')
);


