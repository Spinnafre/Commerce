import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/index'
import Cadastro from './pages/SignUp/index'
import Index from './pages/index/Index'
import AdminPage from './pages/AdminPage/index'
import UserInfo from './pages/UserPage/index'
import MinhasCompras from './pages/MinhasCompras/index'
import Relatorios from './pages/Relatorios/index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Index />} />
          <Route path='login' element={<Login />}/>
          <Route path='cadastro' element={<Cadastro />}/>
          {/* Verificar se é adm e mostrar a AdminPage */}
          <Route path='admin' element={<AdminPage />}/>
          <Route path='userinfo' element={<UserInfo />}/>
          <Route path='compras' element={<MinhasCompras />}/>
          <Route path='relatorios' element={<Relatorios />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
