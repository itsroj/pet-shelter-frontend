import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { AuthContext } from '../contexts/AuthContext';

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // const [isLogin, setIsLogin] = useState(true);
  const { isLoggedIn, setIsLoggedIn, authenticateUser } = useContext(AuthContext)
  const switchToSignUp = () => setIsLoggedIn(false);
  const switchToLogin = () => setIsLoggedIn(true);
  const handleLogOut = async () => {
    localStorage.removeItem("authToken")
    await authenticateUser();
  }
  
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
        title={isLoggedIn ? "Login" : "Sign Up"}
      >
        {isLoggedIn ? 
          <Login onClose={close} onSwitchToSignUp={switchToSignUp} /> : 
          <SignUp onClose={close} onSwitchToLogin={switchToLogin} />
        }
      </Modal>
      {isLoggedIn ? <button onClick={handleLogOut}>logout</button>:
      <FontAwesomeIcon icon={faUser} onClick={open}/> 
      }
    </nav>
  );
};

