import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container mx-auto p-10 bg-slate-300 text-base-content mt-5">
      <div className="text-center">
        <h1 className='text-slate-600 font-semibold font-serif'>2022 © Task List.</h1>
        <p className='text-slate-600'>Design & Develop by Rashid khan</p>
      </div>
    </footer>
  );
};

export default Footer;