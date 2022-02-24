import React, { useState,useEffect } from 'react';
import { ResultCard } from './ResultCard';


export const Add = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  
  useEffect(()=>{
    let target="all";
    fetch(`https://the-ultimate-api-challenge.herokuapp.com/http://ponyweb.ml/v1/character/${target}`)
      .then((res) => res.json())
      .then((results) => { 
        
         if (!results.errors) {
           setData(results.data);
         } else {
           setData([]);
         }
       });
  },[])  
 
  
  const onChange = (e) => {
    e.preventDefault();

    let letters = /^[A-Za-z]+$/;
    let target="all";

    if(e.target.value.match(letters)){
      target = e.target.value
  
    }else{
      target ="all"
    }
    setQuery(e.target.value);

    fetch(`https://the-ultimate-api-challenge.herokuapp.com/http://ponyweb.ml/v1/character/${target}`)
      .then((res) => res.json())
      .then((results) => { 
        
         if (!results.errors) {
           setData(results.data);
         } else {
           setData([]);
         }
       });
  };
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='All Ponies'
              value={query}
              onChange={onChange}
            />
          </div>

          {data.length > 0 && (
            <ul className='results'>
              {data.map((character) => (
                <li  key={character.id}>
                  <ResultCard character={character}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
