import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { BancoQuestoes } from '../pages/Home/BancoQuestoes';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BancoQuestoes" element={<BancoQuestoes />} />
        <Route path="/FormProvas" element={<BancoQuestoes />} />
      </Routes>
    </BrowserRouter>
  );
};