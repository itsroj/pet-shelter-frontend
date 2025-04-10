import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { TextInput, PasswordInput, Group, Box, Checkbox, Anchor, Button, Text } from '@mantine/core';
import './LoginSignUp.css';

// Define API_URL as a fallback if environment variable isn't available
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';

export const Login = ({ onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const nav = useNavigate();
  const { authenticateUser } = useContext(AuthContext);

  function handleLogin(event) {
    event.preventDefault();
    const userToLogin = { email, password };
    
    // Use the explicit API_URL
    axios
      .post(`${API_URL}/auth/login`, userToLogin)
      .then((res) => {
        console.log("user was logged in", res.data);
        localStorage.setItem("authToken", res.data.authToken);
        return authenticateUser();
      })
      .then(() => {
        onClose(); // Close the modal on success
        nav("/profile");
      })
      .catch((err) => {
        console.log(err);
        // Improved error handling
        if (err.code === 'ERR_NETWORK') {
          setErrorMessage("Cannot connect to server. Is the backend running?");
        } else if (err.response) {
          setErrorMessage(err.response.data.errorMessage || "Login failed");
        } else {
          setErrorMessage("An unexpected error occurred");
        }
      });
  }

  return (
    <Box className="login-container">
      <form onSubmit={handleLogin}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          className="password-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Group className="form-actions">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        
        {errorMessage && (
          <Text className="error-message">
            {errorMessage}
          </Text>
        )}
        
        <Group className="button-group">
          <Button variant="default" onClick={onClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </Group>
        
        <Text className="signup-text">
          New Here? <Anchor component="button" onClick={onSwitchToSignUp}>Sign Up</Anchor>
        </Text>
      </form>
    </Box>
  );
};