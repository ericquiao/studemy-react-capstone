import React, { useState,useEffect } from 'react';
import { ResultCard } from './ResultCard';


export const Add = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(4)

  useEffect(()=>{
    let target="all";
    fetch(`https://api.allorigins.win/raw?url=http://ponyweb.ml/v1/character/${target}`)
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

    fetch(`https://api.allorigins.win/raw?url=http://ponyweb.ml/v1/character/${target}`)
      .then((res) => res.json())
      .then((results) => { 
        
         if (!results.errors) {
           setData(results.data);
         } else {
           setData([]);
         }
       });
  };

  const showMorePonies = () => {
    setVisible(prev => prev+4)
  }

const forLoadMoreDisabled = visible>= data ? true : false;



  

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
              {data.slice(0,visible).map((character) => (
                <li  key={character.id}>
                  <ResultCard character={character}/>
                </li>
              ))}
            </ul>
          )}
          <button 
            className='btn' 
            onClick = {showMorePonies}
            disabled={forLoadMoreDisabled}
            >more ponies</button>
        </div>
      </div>
    </div>
  );
};
