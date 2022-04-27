import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar'
import { Characters } from './components/Characters';
import { Pagination } from './components/Pagination';
import React from 'react';

function App() {
  // uso de estados
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({});
  // Request
  const InitialUrl = "https://rickandmortyapi.com/api/character"
  const fetchCharacters = (InitialUrl) => {
    // esto nos ayuda a hacer un request api
    fetch(InitialUrl)
      .then(response => response.json())
      .then((data) => {
        setcharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.error(error))
  }
  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)
  }
  useEffect(() => {
    fetchCharacters(InitialUrl)
  }, [])
  return (
    <React.Fragment>
      <NavBar brand="Rick and Morty App" />
      <Pagination  prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>

      <div className='container mt-5'>
        <Characters characters={characters} />
      </div>
      <Pagination  prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>

    </React.Fragment>

  );
}

export default App;
