import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // State for error messages
    const [errorMessage, setErrorMessage] = useState('');

    // Handler to update state when inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Close modal function
    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // API call to login endpoint
            const response = await axios.post('http://localhost:4001/user/login', {
                email: formData.email,
                password: formData.password
            });

            // Handle successful login (e.g., save token, navigate)
            console.log(response.data);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            alert('Login successful!');
            closeModal(); // Close the modal
            window.location.reload(); // Reload the page

            navigate('/'); // Redirect to the home page or dashboard

        } catch (error) {
            // Handle errors (e.g., invalid credentials)
            console.error(error);
            setErrorMessage(error.response?.data?.message || 'An error occurred during login.');
        }
    };

    return (
        <div>
            {/* You can open the modal using document.getElementById('my_modal_3').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <p className="py-2">Enter your credentials to access your account.</p>

                        {/* Display error message if any */}
                        {errorMessage && (
                            <div className="text-red-500 text-center mb-4">
                                {errorMessage}
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="form-control my-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
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
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-around items-center mt-3">
                            <button
                                type="submit"
                                className="cursor-pointer bg-pink-500 hover:bg-pink-700 text-white rounded-lg px-4 py-2"
                            >
                                Login
                            </button>
                            <div>
                                <p className="text-sm">
                                    Not registered? <span className="text-blue-500 hover:underline" onClick={() => {
                                        closeModal();
                                        navigate('/Signup');
                                    }}>Signup</span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
