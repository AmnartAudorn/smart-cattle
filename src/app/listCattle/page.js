/** @format */

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Input, Button, Card, Modal, Form, Select, InputNumber, DatePicker, notification } from "antd";
import { useRouter } from "next/navigation";
import styles from "../styles/listCattle.module.css";
import Header from "../header";
import { SearchOutlined } from "@ant-design/icons";
import cattleService from "../service/cattle";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
const { Option } = Select;
import Image from "next/image";
import "../i18n";

const ListCattle = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [cattleData, setCattleData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [form] = Form.useForm();
	const router = useRouter();
	const { t } = useTranslation();
	const [isMounted, setIsMounted] = useState(false);
	const [noResults, setNoResults] = useState(false);
	const [authToken, setAuthToken] = useState(null);
	const [userEmail, setUserEmail] = useState(null);
	const [gender, setGender] = useState(null);
	const [statusOptions, setStatusOptions] = useState([]);

	const lineageOptions = t("lineageOptions", { returnObjects: true });

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

	const handleGenderChange = (value) => {
		setGender(value);

		// Filter the categoryList based on the selected gender
		const filteredOptions = categoryList.filter(
			(category) => category.gender === value || category.gender === "unisex" // Include unisex if applicable
		);

		// Map the filtered options to statusOptions
		const statusOptions = filteredOptions.map((category) => ({
			value: category.id.toString(),
			label: category.name,
		}));

		setStatusOptions(statusOptions);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedEmail = localStorage.getItem("userEmail");
			setUserEmail(storedEmail);
		}
	}, []);

	const saveNotification = (title, message) => {
		const notifications = JSON.parse(localStorage.getItem("cattleUpdateNotification")) || [];
		notifications.push({ title, message, date: new Date().toISOString() });
		localStorage.setItem("cattleUpdateNotification", JSON.stringify(notifications));
	};

	const getCookie = useCallback((name) => {
		const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
		return match ? match[2] : null;
	}, []);

	const checkAuthToken = useCallback(() => {
		const token = getCookie("authToken");
		if (!token) {
			router.push("/");
		} else {
			setAuthToken(token);
		}
	}, [getCookie, router]);

	useEffect(() => {
		checkAuthToken();
	}, [checkAuthToken]);

	useEffect(() => {
		if (userEmail && authToken) {
			fetchCattleByEmail(userEmail);
			setIsMounted(true);
		}
	}, [userEmail, authToken]);

	const fetchCattleByEmail = async (email) => {
		try {
			const response = await cattleService.getCattleByEmail(email, authToken);
			if (Array.isArray(response)) {
				setCattleData(response);
				setFilteredData(response);
				setNoResults(response.length === 0);
			} else {
				console.error("Expected an array but got:", response);
			}
		} catch (error) {
			console.error("Error fetching cattle:", error);
		}
	};

	const showModal = (item) => {
		setSelectedItem(item);
		handleGenderChange(item.gender);
		form.setFieldsValue({
			...item,
			birthDate: item.birthDate ? dayjs(item.birthDate) : null,
		});
		setIsModalOpen(true);
	};

	const handleOk = async () => {
		try {
			const values = await form.validateFields();
			const formattedValues = {
				...values,
				birthDate: values.birthDate ? values.birthDate.toISOString() : null,
			};
			await cattleService.updateCattle(selectedItem._id, formattedValues, authToken);
			notification.success({
				message: t("UpdateSuccess"),
				description: t("cattleUpdatedSuccess"),
			});
			saveNotification(" Cattle Updated", `Cattle ${values.name} has been added successfully!`);

			setIsModalOpen(false);
			fetchCattleByEmail(userEmail);
		} catch (info) {
			console.log("Validation Failed:", info);
		}
	};

	const handleChangeDate = (date) => {
		if (date && date.isValid()) {
			form.setFieldsValue({ birthDate: date });
		}
	};

	const handleDelete = async () => {
		try {
			await cattleService.deleteCattle(selectedItem._id, authToken);
			notification.success({
				message: t("UpdateSuccess"),
				description: t("cattleDeletedSuccess"),
			});
			setIsModalOpen(false);
			fetchCattleByEmail(userEmail);
		} catch (error) {
			console.error("Error deleting cattle:", error);
			notification.error({
				message: t("error"),
				description: t("cattleDeleteFailed"),
			});
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
		const newFilteredData = cattleData.filter((item) => item.name.includes(term) || item.lineage.includes(term) || item.rfid.includes(term));
		setFilteredData(newFilteredData);
		setNoResults(newFilteredData.length === 0 && term !== "");
	};

	if (!isMounted) {
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.spinner}></div>
				<div className={styles.loadingText}>{t("loading")}</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Input
					placeholder={t("searchPlaceholder")}
					value={searchTerm}
					onChange={handleSearch}
					className={styles.searchBar}
					prefix={<SearchOutlined />}
				/>
				{noResults && searchTerm && <p className={styles.noResultsMessage}>{t("noCattleFound")}</p>}
				<Button
					type='primary'
					className={styles.mainButton}
					href='/addCattle'
				>
					{t("addCattleButton")}
				</Button>
				<div className={styles.cardContainer}>
					{filteredData.length > 0 ? (
						filteredData.map((item) => (
							<Card
								key={item._id}
								title={
									<h3>
										{item.name} ({item.rfid})
									</h3>
								}
								className={styles.card}
								onClick={() => showModal(item)}
							>
								<Image
									alt={item.name}
									src='/cow.png'
									className={styles.cardImage}
									width={200}
									height={200}
								/>
								<p>
									{t("lineageLabel")}: {item.lineage}
								</p>
								<p>
									{t("weightLabel")}: {item.weight}
								</p>
							</Card>
						))
					) : (
						<p>{t("noCattleFound")}</p>
					)}
				</div>
			</main>

			<Modal
				title={t("editModalTitle")}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button
						key='delete'
						type='danger'
						onClick={handleDelete}
					>
						{t("deleteButton")}
					</Button>,
					<Button
						key='submit'
						type='primary'
						onClick={handleOk}
					>
						{t("saveButton")}
					</Button>,
					<Button
						key='cancel'
						onClick={handleCancel}
					>
						{t("cancelButton")}
					</Button>,
				]}
			>
				<Form
					form={form}
					name='edit_form'
					className={styles.formContainer}
				>
					<Image
						alt=''
						src='/pngegg.png'
						className={styles.img}
						width={200}
						height={200}
					/>

					<Form.Item
						name='rfid'
						label={t("rfidLabel")}
					>
						<Input
							id={styles.searchBar}
							placeholder={t("rfidLabel")}
							disabled
						/>
					</Form.Item>

					<Form.Item
						name='nid'
						label={t("nidLabel")}
					>
						<Input
							id={styles.searchBar}
							placeholder={t("nidLabel")}
							disabled
						/>
					</Form.Item>

					<Form.Item
						name='name'
						label={t("nameLabel")}
					>
						<Input
							id={styles.searchBar}
							placeholder={t("nameLabel")}
						/>
					</Form.Item>

					<Form.Item
						name='gender'
						label={t("genderLabel")}
					>
						<Select
							placeholder={t("genderLabel")}
							onChange={handleGenderChange}
						>
							<Option value='male'>{t("genderMale")}</Option>
							<Option value='female'>{t("genderFemale")}</Option>
						</Select>
					</Form.Item>

					<Form.Item
						name='weight'
						label={t("weightLabel")}
					>
						<InputNumber
							id={styles.searchBar}
							min={0}
							placeholder={t("weightLabel")}
							style={{ width: "100%" }}
						/>
					</Form.Item>

					<Form.Item
						name='lineage'
						label={t("lineageLabel")}
						rules={[{ required: true, message: t("please_select_breed") }]} // Validation rule
					>
						<Select
							placeholder={t("please_select_breed")}
							id={styles.searchBar}
						>
							{lineageOptions.map((option, index) => (
								<Select.Option
									key={index}
									value={option}
								>
									{option}
								</Select.Option>
							))}
						</Select>
					</Form.Item>

					<Form.Item
						name='birthDate'
						label={t("birthDateLabel")}
					>
						<DatePicker
							id={styles.searchBar}
							style={{ width: "100%" }}
							value={form.getFieldValue("birthDate") ? dayjs(form.getFieldValue("birthDate")) : null}
							onChange={(date) => handleChangeDate(date)}
						/>
					</Form.Item>

					<Form.Item
						name='statusCattle'
						label={t("statusCattleLabel")}
						rules={[{ required: true, message: t("status_placeholder") }]}
					>
						<Select placeholder={t("status_placeholder")}>
							{statusOptions.map((option) => (
								<Option
									key={option.value}
									value={option.value}
								>
									{option.label}
								</Option>
							))}
						</Select>
					</Form.Item>
				</Form>
			</Modal>

			<footer className={styles.footer}>
				<p>© 2024 Smart Cattle</p>
			</footer>
		</div>
	);
};

export default ListCattle;
