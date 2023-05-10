import { useEffect } from 'react';
import axios from 'axios';
const url = 'https://thronesapi.com/api/v2/Characters';

function CharactersRequest(props) {
  const { setCharacters } = props;

  const getCharacters = async function getCharactersFromAPI() {
    const response = await axios(url);
    return response;
  };

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data.data);
      })
      .catch((error) => console.log(error));
  }, [setCharacters]);
  return;
}

export default CharactersRequest;
