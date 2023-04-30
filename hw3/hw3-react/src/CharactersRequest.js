import { useEffect } from 'react';
import axios from 'axios';
const url = 'https://thronesapi.com/api/v2/Characters';

function CharactersRequest() {
  const getCharacters = async function getCharactersFromAPI() {
    const response = await axios(url);
    return response;
  };

  useEffect(() => {
    getCharacters()
      .then((data) => {
        sessionStorage.setItem('characters', JSON.stringify(data));
      })
      .catch((error) => console.log(error));
  }, []);
  return;
}

export default CharactersRequest;
