import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../components';

const Home = lazy(() => import('../pages/Home/Home'));
const AddGateway = lazy(() => import('../pages/AddGateway/AddGateway'));
const EditGateway = lazy(() => import('../pages/EditGateway/EditGateway'));
const Details = lazy(() => import('../pages/Details/Details'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddGateway />} />
          <Route path="/edit" element={<EditGateway />} />
          <Route path="/details" element={<Details />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
