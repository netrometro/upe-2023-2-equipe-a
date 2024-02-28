import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BancoQuestoes } from '../pages/Home/BancoQuestoes';
import { FormProvas } from '../pages/Home/FormProvas';
import { ListaAlternativas } from '../pages/Home/ListaAlternativas';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BancoQuestoes />} />
        <Route path="/FormProvas" element={<FormProvas />} />
        <Route path="/ListaAlternativas" element={<ListaAlternativas />} />
      </Routes>
    </BrowserRouter>
  );
};