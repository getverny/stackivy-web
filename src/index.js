import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'animate.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Ardilla from './pages/ardilla';
import Hargon from './pages/hargon';
import Budgeting from './pages/budgeting';
import FinancialEducation from './pages/financialEducation';
import Wealth from './pages/wealthManagement';
import CrossBorder from './pages/crossBorderPayment';
import Pomelo from './pages/pomelo';
import Crypto from './pages/crypto';
import MicroFinance from './pages/microFinance';
import MobileMoney from './pages/mobilemoney';
import Lending from './pages/lending';
import ScrollToTop from './scrollToTop';
import CustomMade from './pages/custom';
import BookKeep from './pages/bookKeeping';
// import ScrollToTop from 'scroll-to-top-react-router'



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
        <Route path="/cross-border" element={<CrossBorder/>}></Route>
        <Route path="/payment-gateway" element={<Pomelo/>}></Route>
        <Route path="/cryptocurrency" element={<Crypto/>}></Route>
        <Route path="/microfinance" element={<MicroFinance/>}></Route>
        <Route path="/mobile-money" element={<MobileMoney/>}></Route>
        <Route path="/lending" element={<Lending/>}></Route>
        <Route path="/custom-made" element={<CustomMade/>}></Route>
        <Route path="/book-keeping" element={<BookKeep/>}></Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
