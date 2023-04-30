import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import HousesPage from './HousesPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/houses" element={<HousesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
