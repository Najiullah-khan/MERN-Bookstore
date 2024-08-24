import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

function Signup() {
    const navigate = useNavigate(); // Hook to handle navigation

    // State variables for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // State variable for handling error messages
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple frontend validation
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        try {
            // API call using Axios
            const response = await axios.post('http://localhost:4001/user/signup', {
                fullname: formData.name,
                email: formData.email,
                password: formData.password,
            });

            // Handle successful signup
            console.log(response.data);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            alert('Signup successful!'); // Optional: Replace with better user feedback
            navigate('/'); // Redirect to home or login page after signup
            window.location.reload(); // Reload the page

        } catch (error) {
            // Handle errors (e.g., user already exists)
            console.error(error);
            setErrorMessage(error.response?.data?.message || 'An error occurred during signup.');
        }
    };

    const handleClose = () => {
        navigate('/'); // Redirects to the home page when "X" is clicked
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
            {/* Close Button */}
            <button
                type="button"
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
                ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
            <p className="text-center mb-6">Create your account</p>

            {/* Display error message if any */}
            {errorMessage && (
                <div className="text-red-500 text-center mb-4">
                    {errorMessage}
                </div>
            )}

            {/* Signup Form */}
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Confirm Password Field */}
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className="input input-bordered w-full"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button type="submit" className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-lg">
                        Signup
                    </button>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Already have an account? <span className="text-blue-500 hover:underline cursor-pointer"
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                        >Login</span>
                        <Login />
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Signup;
