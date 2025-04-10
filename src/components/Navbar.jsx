import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Login } from './Login';
import { SignUp } from './SignUp';

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLogin, setIsLogin] = useState(true);
  
  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);
  
  return (
    <nav>
      <NavLink to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}>
        Homepage
      </NavLink>
      <NavLink to="/pet-adoption" className={({ isActive }) => (isActive ? "active-link" : "")}>
        Pet Adoption
      </NavLink>
      <NavLink to="/information" className={({ isActive }) => (isActive ? "active-link" : "")}>
        Lost & Found
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
        About
      </NavLink>
      <NavLink to="/support" className={({ isActive }) => (isActive ? "active-link" : "")}>
        Support Us
      </NavLink>
      <Modal 
        opened={opened} 
        onClose={close} 
        title={isLogin ? "Login" : "Sign Up"}
      >
        {isLogin ? 
          <Login onClose={close} onSwitchToSignUp={switchToSignUp} /> : 
          <SignUp onClose={close} onSwitchToLogin={switchToLogin} />
        }
      </Modal>
      
      <FontAwesomeIcon icon={faUser} onClick={open}/> 
    </nav>
  );
};

