import { Routes, Route } from 'react-router-dom';

import HomePage from '../home/HomePage';
import SearchPage from '../search/SearchPage';
import HousesPage from '../houses/HousesPage';

function AppRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route
        path="/search"
        element={<SearchPage characters={props.characters} />}
      ></Route>
      <Route
        path="/houses"
        element={<HousesPage characters={props.characters} />}
      ></Route>
    </Routes>
  );
}

export default AppRouter;
