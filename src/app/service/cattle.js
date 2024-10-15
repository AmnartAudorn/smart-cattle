/** @format */

const axios = require("axios");
const API_URL = "http://smart-cattle-back-end.vercel.app/api";

// ดึง token จาก localStorage หรือแหล่งจัดเก็บที่ปลอดภัยอื่นๆ
const token = localStorage.getItem("authToken");

const createCattle = async (cattleData) => {
	console.log(cattleData);
	try {
		const response = await axios.post(`${API_URL}/create-cattle`, cattleData, {
			headers: {
				Authorization: `Bearer ${token}`, // เพิ่ม token ใน Authorization header
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const getCattleByEmail = async (email) => {
	console.log(email);
	try {
		const response = await axios.get(`${API_URL}/get-cattle-by-email/${email}`, {
			headers: {
				Authorization: `Bearer ${token}`, // เพิ่ม token ใน Authorization header
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const updateCattle = async (id, cattleData) => {
	try {
		const response = await axios.put(`${API_URL}/update-cattle/${id}`, cattleData, {
			headers: {
				Authorization: `Bearer ${token}`, // เพิ่ม token ใน Authorization header
			},
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || "Internal Server Error.";
		throw new Error(errorMessage);
	}
};

const deleteCattle = async (id) => {
	try {
		const response = await axios.delete(`${API_URL}/delete-cattle/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`, // เพิ่ม token ใน Authorization header
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
