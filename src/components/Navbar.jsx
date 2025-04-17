import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPaw } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { AuthContext } from "../contexts/AuthContext";
import "./Navbar.css";
import Logo from "../images/logo.png"

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { isLoggedIn, setIsLoggedIn, authenticateUser, isAdmin, currentUser } =
    useContext(AuthContext);

  const switchToSignUp = () => setIsLoggedIn(false);
  const switchToLogin = () => setIsLoggedIn(true);

  const handleLogOut = async () => {
    localStorage.removeItem("authToken");
    await authenticateUser();
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src= { Logo } alt="logo" className="logo-icon"/>
{/* <FontAwesomeIcon icon={faPaw} className="logo-icon" /> */}
            <span className="logo-text">Once Upon a Paw</span>
          </Link>
        </div>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Homepage
          </NavLink>
          <NavLink to="/pet-adoption" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Pet Adoption
          </NavLink>
          <NavLink
            to="/information"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Lost & Found
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Support Us
          </NavLink>
        </nav>

        <div className="navbar-auth">
          <Modal
            opened={opened}
            onClose={close}
            title={isLoggedIn ? "Login" : "Sign Up"}
            withCloseButton
            closeOnClickOutside={true}
            centered={false}
            position={{ top: 75, right: 20 }}
            zIndex={1000}
            styles={{
              content: {
                marginTop: 50  // position under the top
              }
            }}
          >
            {isLoggedIn ? (
              <Login onClose={close} onSwitchToSignUp={switchToSignUp} />
            ) : (
              <SignUp onClose={close} onSwitchToLogin={switchToLogin} />
            )}
          </Modal>

          {isLoggedIn ? (
            <div className="user-menu">
              <div className="user-profile-image">
                {currentUser?.profileImage ? (
                  <img src={currentUser.profileImage} alt="Profile" />
                ) : (
                  <FontAwesomeIcon icon={faUser} className="default-avatar" />
                )}
              </div>
              <span className="user-greeting">
                Hello{currentUser?.username ? `, ${currentUser.username}` : "!"}
              </span>
              {isAdmin && (
                <Link to="/admin" className="admin-link">
                  Admin
                </Link>
              )}
              <button className="logout-button" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={open}>
              <FontAwesomeIcon icon={faUser} /> Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
