import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextInput, PasswordInput, FileInput, Group, Box, Button, Text, Anchor } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import './LoginSignUp.css';

// Define API_URL as a fallback if environment variable isn't available
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';

export const SignUp = ({ onClose, onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState();
  const nav = useNavigate();

  function handleSignup(event) {
    event.preventDefault();// Create FormData object to handle file uploads

// Create FormData object to handle file uploads
    
// Create FormData object to handle file uploads
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    
    axios
      .post(`${API_URL}/auth/signup`, formData,)
      .then((res) => {
        // console.log("user created in the DB", res);
        onClose();
        nav("/");
      })
      .catch((err) => {
        console.log(err);
// Improved error handling
        if (err.code === 'ERR_NETWORK') {
          setErrorMessage("Cannot connect to server. Is the backend running?");
        } else if (err.response) {
          setErrorMessage(err.response.data.errorMessage || "Signup failed");
        } else {
          setErrorMessage("An unexpected error occurred");
        }
      });
  }

  return (
    <Box className="signup-container">
      <form onSubmit={handleSignup}>
        <TextInput
          label="Username"
          placeholder="Enter a username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          className="email-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <PasswordInput
          label="Password"
          placeholder="Create a password"
          required
          className="password-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
        <FileInput
          label="Profile Image"
          placeholder="Upload your profile picture"
          accept="image/png,image/jpeg,image/jpg"
          className="profile-image-field"
          onChange={setProfileImage}
          icon={<IconUpload size={14} />} // Optional
        />
        
        {errorMessage && (
          <Text className="error-message">
            {errorMessage}
          </Text>
        )}
        
        <Group className="button-group">
          <Button variant="default" onClick={onClose}>Cancel</Button>
          <Button type="submit">Sign Up</Button>
        </Group>
        
        <Text className="login-text">
          Already have an account? <Anchor component="button" onClick={onSwitchToLogin}>Log In</Anchor>
        </Text>
      </form>
    </Box>
  );
};