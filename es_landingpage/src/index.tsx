import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App page='home'/>} />
      <Route path='/home' element={<App page='home'/>} />
      <Route path='/quem_somos' element={<App page='quem_somos'/>} />
      <Route path='/produtos' element={<App page='produtos'/>} />
      <Route path='/servicos' element={<App page='servicos'/>} />
      <Route path='/contato' element={<App page='contato'/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
