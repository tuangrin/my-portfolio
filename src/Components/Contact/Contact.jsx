import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import water from './img/water.png';
import github from './img/github.png';
import cloud2 from './img/cloud2.png';
import cloud3 from './img/cloud3.png';
import linkedin from './img/linkedin.png';

const Contact = () => {
  return (
    <div className='contactBeach' id='contact'>
      <div className='contactTop'>
        <motion.div
          className='cloudInfo'
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            className='indexCloud'
            src={cloud3}
            alt='cloud'
            width='300px'
            height='300px'
          />
          <div className='cloudText'>
            <h2>CONTACT</h2>
            <p>Rinlapad Suesawad</p>
            <p>Nonthaburi, Thailand</p>
            <p>Tel. +66 845272075</p>
            <p>E-mail: rinlapad.s@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
          className='cloudContact'
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            className='rightCloud'
            src={cloud2}
            alt='cloud'
            width='300px'
            height='200px'
          />
          <div className='cloudGit'>
            <a href='https://github.com/tuangrin' target='_blank' rel="noreferrer">
              <img src={github} alt='github logo' width='50px' height='50px' />
            </a>
            <a href='https://www.linkedin.com/in/rinlapad-s/' target='_blank' rel="noreferrer">
              <img
                src={linkedin}
                alt='github logo'
                width='50px'
                height='50px'
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* รูปน้ำ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={water} alt='water at beach' className='water' />
      </motion.div>
    </div>
  );
};

export default Contact;
