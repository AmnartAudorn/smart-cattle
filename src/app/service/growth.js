/** @format */
const axios = require("axios");
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getCattleByEmail = async (cattleData, authToken) => {
	try {
		const response = await axios.post(`${API_URL}/get-cattle-by-email`, cattleData, {
			headers: {
				Authorization: `Bearer ${authToken}`, // Securely pass the auth token
			},
		});

		// Optionally validate the response if needed
		if (response.data) {
			return response.data; // Return the data directly
		} else {
			throw new Error("No data returned from the server");
		}
	} catch (error) {
		// Log the error for better debugging
		console.error("Error in getCattleByEmail:", error);

		// Handle error response gracefully
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const getCattleRecords = async (authToken) => {
	try {
		const response = await axios.get(`${API_URL}/getCattleRecords`, {
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

const createGrowthRecord = async (CattleRecordsData, authToken) => {
	try {
		const response = await axios.post(`${API_URL}/addCattleRecords`, CattleRecordsData, {
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
	getCattleByEmail,
	getCattleRecords,
	createGrowthRecord,
};
