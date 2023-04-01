import React, { useState, useEffect } from 'react';
import { ApiGetCoin } from './api';

function App(props) {
  const [apiData, setApiData] = useState('');
  const newTittle = '<Code Signal/>';
  useEffect(() => {
    ApiGetCoin().then((res) => setApiData(res.data));
  }, []);

  return (
    <>
      <h1 className="main-Tittle">{newTittle}</h1>
      <p className="main-Subtitle">Code Solutions For Everyone!</p>
      <p className="main-Subtitle">{apiData.msg}</p>
      <ul className="main-Nav">
        <li>
          <a href="#1">News</a>
        </li>
        <li>
          <a href="#">Post</a>
        </li>
        <li>
          <a href="#2">About Us</a>
        </li>
        <li>
          <a href='#3'>Contact Us</a>
        </li>
      </ul>
    </>
  );
}


export default App;
