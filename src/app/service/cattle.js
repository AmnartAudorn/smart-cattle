/** @format */

const axios = require("axios");
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createCattle = async (cattleData, authToken) => {
	try {
		const response = await axios.post(`${API_URL}/create-cattle`, cattleData, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const getCattleByEmail = async (email, authToken) => {
	try {
		const response = await axios.get(`${API_URL}/get-cattle-by-email/${email}`, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const updateCattle = async (id, cattleData, authToken) => {
	try {
		const response = await axios.put(`${API_URL}/update-cattle/${id}`, cattleData, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const deleteCattle = async (id, authToken) => {
	try {
		const response = await axios.delete(`${API_URL}/delete-cattle/${id}`, {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

module.exports = {
	deleteCattle,
	updateCattle,
	getCattleByEmail,
	createCattle,
};
