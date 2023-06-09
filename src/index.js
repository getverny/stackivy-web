import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import './auth.css';
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
import OpenBanking from './pages/openBanking';
import HealthCare from './pages/healthCare';
import Ecommerce from './pages/ecommerce';
import Education from './pages/education';
import Food from './pages/food';
import HR from './pages/hr';
import Logistics from './pages/logistics';
import ForStartup from './pages/forStartup';
import Webinar from './pages/webinar';
import Events from './pages/events';
import Supports from './pages/support';
import ProductIntegration from './pages/productIntegration';
import AboutUs from './pages/aboutUs';
import Careers from './pages/careers';
import CaseStudies from './pages/CaseStudies';
import Login from './login/login';
import Options from './login/optionLogin';
import PersonalLogin from './login/personalSignup';
import GovtLogin from './login/govtSignup';
import BusinessLogin from './login/businessSignup';



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
        <Route path="/open-banking" element={<OpenBanking/>}></Route>
        <Route path="/healthcare" element={<HealthCare/>}></Route>
        <Route path="/ecommerce" element={<Ecommerce/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/food" element={<Food/>}></Route>
        <Route path="/human-resources" element={<HR/>}></Route>
        <Route path="/logistics" element={<Logistics/>}></Route>
        <Route path="/for-startup" element={<ForStartup/>}></Route>
        <Route path="/webinar" element={<Webinar/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/support" element={<Supports/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/careers" element={<Careers/>}></Route>
        <Route path="/case-studies" element={<CaseStudies/>}></Route>
        <Route path="/product-integration" element={<ProductIntegration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/select-options" element={<Options/>}></Route>
        <Route path="/sign-options" element={<Options/>}></Route>
        <Route path="/signup-for-personal" element={<PersonalLogin/>}></Route>
        <Route path="/signup-for-govt" element={<GovtLogin/>}></Route>
        <Route path="/signup-for-business" element={<BusinessLogin/>}></Route>

      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
