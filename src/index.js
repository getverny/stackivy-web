import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Ardilla from './pages/ardilla';
import Hargon from './pages/hargon';
import ScrollToTop from './scrollToTop';
import Budgeting from './pages/budgeting';
import FinancialEducation from './pages/financialEducation';
import Wealth from './pages/wealthManagement';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/ardilla" element={<Ardilla/>}></Route>
        <Route path="/hargon" element={<Hargon/>}></Route>
        <Route path="/budgeting-tools" element={<Budgeting/>}></Route>
        <Route path="/financial-education" element={<FinancialEducation/>}></Route>
        <Route path="/wealth-management" element={<Wealth/>}></Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
