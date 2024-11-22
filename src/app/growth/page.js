/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { Collapse, Select, Table, DatePicker, Button, Modal, Form, Input, notification } from "antd";
import { CalculatorOutlined, LineChartOutlined, TableOutlined } from "@ant-design/icons";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import { PlusOutlined } from "@ant-design/icons";
import Header from "../header";
import cattleService from "../service/cattle";
import growthService from "../service/growth";
import moment from "moment";
import "moment/locale/th";
import styles from "../styles/growth.module.css";
import "../i18n";
import { useTranslation } from "react-i18next";

moment.locale("th");
const { Option } = Select;

export default function Growth() {
	const [selectedType, setSelectedType] = useState(null);
	const [selectedCattle, setSelectedCattle] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [searchDate, setSearchDate] = useState(null);
	const [cattleList, setCattleList] = useState([]);
	const [growthRecords, setGrowthRecords] = useState([]);
	const [authToken, setAuthToken] = useState(null);
	const [userEmail, setUserEmail] = useState(null);
	const [chartData, setChartData] = useState([]);
	const [chartM, setChartM] = useState([]);
	const { t } = useTranslation();
	const [finalFilteredRecords, setFinalFilteredRecords] = useState([]);

	// Fetch cattle by email and auth token
	const fetchCattleByEmail = async (email) => {
		try {
			const response = await cattleService.getCattleByEmail(email, authToken);
			if (Array.isArray(response)) {
				setCattleList(response);
			} else {
				console.error("Expected an array but got:", response);
			}
		} catch (error) {
			console.error("Error fetching cattle:", error);
		}
	};

	// Fetch growth records by auth token
	const fetchGrowthRecords = async (authToken) => {
		try {
			if (!authToken) {
				throw new Error("Auth token is missing");
			}
			const records = await growthService.getCattleRecords(authToken);
			setGrowthRecords(records);
		} catch (error) {
			console.error("Error fetching growth records:", error);
		}
	};

	useEffect(() => {
		const storedEmail = localStorage.getItem("userEmail");
		const storedAuthToken = localStorage.getItem("authToken");

		if (!storedAuthToken) {
			notification.error({
				message: "Authentication Error",
				description: "Auth token is missing. You will be redirected to the login page.",
			});

			// Redirect to the login page
			setTimeout(() => {
				router.push("/");
			}, 2000); // Adding a 2-second delay to allow the user to read the notification
		} else {
			setUserEmail(storedEmail);
			setAuthToken(storedAuthToken);

			// Fetch data only if authToken is available
			fetchCattleByEmail(storedEmail);
			fetchGrowthRecords(storedAuthToken);
		}
	}, []);

	const categoryList = [
		{ id: 3, name: t("categories.3"), gender: "female" },
		{ id: 5, name: t("categories.5"), gender: "female" },
		{ id: 7, name: t("categories.7"), gender: "female" },
		{ id: 9, name: t("categories.9"), gender: "female" },
		{ id: 11, name: t("categories.11"), gender: "female" },
		{ id: 13, name: t("categories.13"), gender: "male" },
		{ id: 15, name: t("categories.15"), gender: "male" },
		{ id: 17, name: t("categories.17"), gender: "female" },
	];

	const handleSelectChange = (value) => {
		setSelectedType(value);
		setSelectedCattle(null);
		setSelectedCategory(null);
		setSearchDate(null);
	};

	const handleCattleSelect = (value) => {
		setSelectedCattle(value);
		setSelectedCategory(null);
		prepareChartData("individual", value);
	};

	const handleCategorySelect = (value) => {
		setSelectedCategory(value);
		setSelectedCattle(null);
		prepareChartData("category", value);
	};

	const handleDateChange = (date, dateString) => {
		const formattedDate = new Date(dateString).toLocaleDateString("th-TH");
		if (date) {
			setSearchDate(formattedDate);

			// Filter records by selected date

			const filteredRecords = growthRecords.filter((record) => selectedCattle === record.rfid && new Date(record.date).toLocaleDateString("th-TH") === formattedDate);
			setFinalFilteredRecords(filteredRecords);
		} else {
			setSearchDate(null);
		}
	};

	const calculateMonthlyAverage = (records) => {
		// Group records by month and year
		const groupedByMonth = records.reduce((acc, record) => {
			const monthYear = moment(record.date).format("MMMM YYYY"); // Format as Month Year

			if (!acc[monthYear]) {
				acc[monthYear] = {
					initialWeight: null,
					finalWeight: null,
					initialDate: null,
					finalDate: null,
					totalWeightGain: 0,
					daysCount: 0,
				};
			}

			// Check if current record's date is earlier than the recorded initial date
			if (!acc[monthYear].initialDate || new Date(record.date) < new Date(acc[monthYear].initialDate)) {
				acc[monthYear].initialWeight = record.weight;
				acc[monthYear].initialDate = record.date;
			}

			// Check if current record's date is later than the recorded final date
			if (!acc[monthYear].finalDate || new Date(record.date) > new Date(acc[monthYear].finalDate)) {
				acc[monthYear].finalWeight = record.weight;
				acc[monthYear].finalDate = record.date;
			}

			acc[monthYear].daysCount += 1; // Increment days count
			return acc;
		}, {});

		// Calculate monthly average weight gain for each month
		return Object.keys(groupedByMonth).map((monthYear) => {
			const { initialWeight, finalWeight, daysCount } = groupedByMonth[monthYear];

			// Ensure both initial and final weights are available for the calculation
			if (initialWeight !== null && finalWeight !== null && daysCount > 0) {
				const weightGain = finalWeight - initialWeight;
				const dailyWeightGain = weightGain / daysCount;

				return {
					date: monthYear,
					dailyWeightGain: dailyWeightGain.toFixed(2), // Round to 2 decimal places
				};
			} else {
				return {
					date: monthYear,
					dailyWeightGain: "N/A", // Handle case where weight data is insufficient
				};
			}
		});
	};

	const totalAverage = chartM.length ? (chartM.reduce((acc, record) => acc + parseFloat(record.dailyWeightGain), 0) / chartM.length).toFixed(2) : 0;

	const calculateAverageByDate = (records) => {
		const groupedByDate = records.reduce((acc, record) => {
			const date = new Date(record.date).toLocaleDateString("th-TH");
			if (!acc[date]) {
				acc[date] = { totalWeight: 0, count: 0 };
			}
			acc[date].totalWeight += record.weight;
			acc[date].count += 1;
			return acc;
		}, {});

		return Object.keys(groupedByDate).map((date) => ({
			date,
			averageWeight: (groupedByDate[date].totalWeight / groupedByDate[date].count).toFixed(2),
		}));
	};

	const prepareChartData = (type, value, timeRange = "daily") => {
		let filteredRecords = [];
		if (type === "individual") {
			filteredRecords = growthRecords.filter((record) => record.rfid === value);
		} else if (type === "category") {
			filteredRecords = growthRecords.filter((record) => cattleList.some((cattle) => cattle.rfid === record.rfid && cattle.statusCattle === value.toString()));
		}

		// Calculate data based on time range
		const data = calculateAverageByDate(filteredRecords);
		const M = calculateMonthlyAverage(filteredRecords);
		setChartM(M);
		setChartData(data);
		setFinalFilteredRecords(filteredRecords);
	};

	const columns = [
		{
			title: t("weighingDay"),
			dataIndex: "date",
			key: "date",
			onHeaderCell: () => ({
				style: { backgroundColor: "blue", color: "white" },
			}),
			render: (date) => moment(date).format("D MMMM YYYY"),
		},
		{
			title: t("rfid_label"),
			dataIndex: "rfid",
			key: "rfid",
			onHeaderCell: () => ({
				style: { backgroundColor: "blue", color: "white" },
			}),
		},
		{
			title: t("weightLabel"),
			dataIndex: "weight",
			key: "weight",
			onHeaderCell: () => ({
				style: { backgroundColor: "blue", color: "white" },
			}),
		},
	];

	const collapseItems = [
		{
			key: "1",
			showArrow: false,
			label: (
				<div className={styles.panelHeader}>
					<TableOutlined className={styles.icon} />
					<span>{t("cattle_growth")}</span>
				</div>
			),
			children: (
				<>
					<Select
						placeholder={t("select_growth")}
						style={{ width: "100%" }}
						onChange={handleSelectChange}
					>
						<Option value='individual'>{t("individual_growth")}</Option>
						<Option value='category'>{t("individual_growth_type")}</Option>
					</Select>

					{selectedType === "individual" && (
						<Select
							placeholder={t("select_cattle")}
							style={{ width: "100%", marginTop: "16px" }}
							onChange={handleCattleSelect}
						>
							{cattleList.map((cattle) => (
								<Option
									key={cattle.rfid}
									value={cattle.rfid}
								>
									{cattle.rfid}
								</Option>
							))}
						</Select>
					)}

					{selectedType === "category" && (
						<Select
							placeholder={t("select_type")}
							style={{ width: "100%", marginTop: "16px" }}
							onChange={handleCategorySelect}
						>
							{categoryList.map((category) => (
								<Option
									key={category.id}
									value={category.id}
								>
									{category.name}
								</Option>
							))}
						</Select>
					)}

					{selectedCattle || selectedCategory ? (
						<DatePicker
							placeholder={t("selectDate")}
							style={{ marginTop: "16px", width: "100%" }}
							format='D MMMM YYYY'
							onChange={handleDateChange}
						/>
					) : null}

					{finalFilteredRecords.length > 0 ? (
						<Table
							dataSource={finalFilteredRecords}
							columns={columns}
							rowKey={(record) => `${record.date}-${record.rfid}`}
							style={{ marginTop: "16px" }}
							pagination={{
								pageSize: 5,
								onChange: (page, pageSize) => {
									console.log(`Page changed to: ${page}, Page size: ${pageSize}`);
									setSearchDate(null);
								},
							}}
							locale={{
								emptyText: <p style={{ textAlign: "center", marginTop: "16px", color: "red" }}>{t("No_growth_records_for_cattle")}</p>,
							}}
						/>
					) : null}
				</>
			),
		},
		// {
		// 	key: "2",
		// 	showArrow: false,
		// 	label: (
		// 		<div className={styles.panelHeader}>
		// 			<LineChartOutlined className={styles.icon} />
		// 			<span>{t("cattle_growth_statistics")}</span>
		// 		</div>
		// 	),
		// 	children: (
		// 		<>
		// 			<Select
		// 				placeholder={t("select_growth")}
		// 				style={{ width: "100%" }}
		// 				onChange={handleSelectChange}
		// 			>
		// 				<Option value='individual'>{t("average_individual_growth")}</Option>
		// 				<Option value='category'>{t("average_individual_growth_type")}</Option>
		// 			</Select>

		// 			{selectedType === "individual" && (
		// 				<Select
		// 					placeholder={t("selectCow")}
		// 					style={{ width: "100%", marginTop: "16px" }}
		// 					onChange={handleCattleSelect}
		// 				>
		// 					{cattleList.map((cattle) => (
		// 						<Option
		// 							key={cattle.rfid}
		// 							value={cattle.rfid}
		// 						>
		// 							{cattle.rfid}
		// 						</Option>
		// 					))}
		// 				</Select>
		// 			)}

		// 			{selectedType === "category" && (
		// 				<Select
		// 					placeholder={t("select_type")}
		// 					style={{ width: "100%", marginTop: "16px" }}
		// 					onChange={handleCategorySelect}
		// 				>
		// 					{categoryList.map((category) => (
		// 						<Option
		// 							key={category.id}
		// 							value={category.id}
		// 						>
		// 							{category.name}
		// 						</Option>
		// 					))}
		// 				</Select>
		// 			)}

		// 			{chartData.length > 0 ? (
		// 				<>
		// 					<h3 style={{ marginTop: "14px", textAlign: "center" }}>{t("growth_average_chart")}</h3>
		// 					<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "16px" }}>
		// 						{/* Line Chart */}
		// 						<LineChart
		// 							width={Math.min(600, window.innerWidth - 40)} // Dynamic width based on screen size
		// 							height={window.innerWidth < 600 ? 200 : 200} // Adjust height for mobile devices
		// 							data={chartData}
		// 							style={{ width: "90%" }}
		// 						>
		// 							<CartesianGrid stroke='#ccc' />
		// 							<XAxis dataKey='date' />
		// 							<YAxis />
		// 							<Tooltip />
		// 							<Line
		// 								type='monotone'
		// 								dataKey='averageWeight'
		// 								stroke='#8884d8'
		// 							/>
		// 						</LineChart>

		// 						{/* Text below the chart */}
		// 						<div style={{ display: "flex", justifyContent: "center", width: Math.min(600, window.innerWidth - 40), marginTop: "10px" }}>
		// 							<CalculatorOutlined style={{ fontSize: "14px", marginRight: "8px" }} /> {/* Icon */}
		// 							<span style={{ fontSize: "14px" }}>
		// 								{t("monthly_avg_weight")}: {totalAverage}
		// 							</span>
		// 						</div>
		// 					</div>
		// 				</>
		// 			) : (
		// 				<p style={{ textAlign: "center", marginTop: "14px", color: "red" }}>{t("noDataS")}</p>
		// 			)}
		// 		</>
		// 	),
		// },
	];

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();

	// Show and hide modal
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		form.resetFields();
		setIsModalVisible(false);
	};

	// Handle form submission
	const handleCreateRecord = async (values) => {
		try {
			// Prepare data
			const newRecord = {
				rfid: values.rfid,
				weight: values.weight,
				date: values.date.format("YYYY-MM-DD"), // Format date
				userEmail: userEmail, // Use the logged-in user's email
			};

			// Send data to backend
			await growthService.createGrowthRecord(newRecord, authToken);

			notification.success({
				message: t("success_message"),
				description: t("success_description"),
			});

			// Refresh growth records
			fetchGrowthRecords(authToken);

			// Close modal
			handleCancel();
		} catch (error) {
			notification.error({
				message: t("error_message"),
				description: t("error_description"),
			});
			console.error("Error creating record:", error);
		}
	};

	return (
		<div className={styles.container}>
			<Header />
			<Button
				type='primary'
				icon={<PlusOutlined />}
				onClick={showModal}
				className={styles.mainButton}
			>
				{t("add_weight_record")}
			</Button>

			<Modal
				title={t("add_weight_record")}
				visible={isModalVisible}
				onCancel={handleCancel}
				footer={null}
			>
				<Form
					form={form}
					layout='vertical'
					onFinish={handleCreateRecord}
				>
					<Form.Item
						label={t("rfid_label")}
						name='rfid'
						rules={[{ required: true, message: t("rfid_placeholder") }]}
					>
						<Select
							placeholder={t("select_cattle")}
							style={{ width: "100%" }}
							onChange={handleCattleSelect}
							showSearch
							optionFilterProp='children'
						>
							{cattleList.map((cattle) => (
								<Select.Option
									key={cattle.rfid}
									value={cattle.rfid}
								>
									{cattle.rfid} - {cattle.name}
								</Select.Option>
							))}
						</Select>
					</Form.Item>

					<Form.Item
						label={t("weightLabel")}
						name='weight'
						rules={[{ required: true, message: t("enter_weight") }]}
					>
						<Input placeholder={t("enter_weight")} />
					</Form.Item>

					<Form.Item
						label={t("weighingDay")}
						name='date'
						rules={[{ required: true, message: t("selectDate") }]}
					>
						<DatePicker
							format='D MMMM YYYY'
							style={{ width: "100%" }}
							disabledDate={(current) => {
								const today = moment().startOf("day");
								return (current && current.startOf("day").isAfter(today)) || current.startOf("day").isBefore(today);
							}}
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
						>
							{t("submit")}
						</Button>
					</Form.Item>
				</Form>
			</Modal>
			<Collapse
				items={collapseItems}
				accordion
				bordered={false}
				className={styles.customCollapse}
			/>
			<footer className={styles.footer}>
				<p>© 2024 Smart Cattle</p>
			</footer>
		</div>
	);
}
