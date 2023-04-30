import { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://thronesapi.com/api/v2/Characters';

function CharactersRequest() {
  const [characters, setCharacters] = useState();

  const getCharacters = async function getCharactersFromAPI() {
    const response = await axios(url);
    // const data = await response.json(); axios already converts to json?
    // const data = await response.json(); axios already converts to json?
    return response;
  };

  //   const storeCharacters = async function storeCharactersLocally() {
  //     getCharacters()
  //       .then((data) => {
  //         sessionStorage.setItem('characters', JSON.stringify(data));
  //         // setCharacters(data);
  //         // console.log(data);
  //         // console.log(characters);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  useEffect(() => {
    getCharacters()
      .then((data) => {
        sessionStorage.setItem('characters', JSON.stringify(data));
        // setCharacters(data);
        // console.log(data);
        // console.log(characters);
      })
      .catch((error) => console.log(error));
  }, []);
  return;
  //   return (
  //     CharactersRequest,
  //     (
  //       <div>
  //         <button onClick={storeCharacters}>Call API</button>
  //         {/* {characters} */}
  //         {characters && <pre>{JSON.stringify(characters)}</pre>}
  //       </div>
  //     )
  //   );
}

export default CharactersRequest;
