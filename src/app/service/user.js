/** @format */

const axios = require("axios");
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createUser = async (userData) => {
	try {
		const response = await axios.post(`${API_URL}/create-user`, userData);
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const updateUser = async (userId, userData) => {
	try {
		const response = await axios.put(`${API_URL}/update-user/${userId}`, userData);
		return response.data; // Returns the updated user data
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const login = async (credentials) => {
	try {
		const response = await axios.post(`${API_URL}/login`, credentials);
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const getUser = async (email) => {
	try {
		const token = localStorage.getItem("authToken");

		const response = await axios.get(`${API_URL}/get-user-by-email/${email}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

module.exports = {
	createUser,
	login,
	getUser,
	updateUser,
};
