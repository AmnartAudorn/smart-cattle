/** @format */

const axios = require("axios");
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const resetPassword = async (password, token) => {
	try {
		const response = await axios.post(`${API_URL}/reset-password`, { token, password });
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const forgotPassword = async (email) => {
	try {
		const token = localStorage.getItem("authToken");
		const response = await axios.post(`${API_URL}/request-password-reset`, email, {
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
	resetPassword,
	forgotPassword,
};
