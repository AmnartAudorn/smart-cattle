/** @format */

"use client";

import { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Select, InputNumber, DatePicker, notification, Typography } from "antd";
import { useRouter } from "next/navigation";
import styles from "../styles/addCattle.module.css";
import Header from "../header";
import { useTranslation } from "react-i18next";
import moment from "moment";
import cattleService from "../service/cattle";

import CookieConsent from "../CookieConsent";

const { Title } = Typography;
const { Option } = Select;

const AddCattle = () => {
	const { t, i18n } = useTranslation();
	const [isMounted, setIsMounted] = useState(false);
	const [authToken, setAuthToken] = useState(null);
	const router = useRouter();
	const [gender, setGender] = useState(""); // State for gender

	const handleGenderChange = (value) => {
		setGender(value); // Update gender state
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedLanguage = localStorage.getItem("language") || "th";
			i18n.changeLanguage(savedLanguage).then(() => {
				setIsMounted(true);
			});

			const token = localStorage.getItem("authToken");
			if (!token) {
				router.push("/");
			} else {
				setAuthToken(token);
			}
		}
	}, [i18n, router]);

	const saveNotification = (title, message) => {
		const notifications = JSON.parse(localStorage.getItem("notifications")) || [];

		// Use moment.js to format the date as "YYYY-MM-DD"
		const currentDate = moment().format("YYYY-MM-DD");

		notifications.push({ title, message, date: currentDate });
		localStorage.setItem("notifications", JSON.stringify(notifications));
	};

	const handleSubmit = async (values) => {
		if (!authToken) return;

		try {
			const userEmail = localStorage.getItem("userEmail");
			const formattedValues = {
				...values,
				birthDate: values.birthDate ? values.birthDate.toISOString() : null,
				owner: userEmail,
			};
			await cattleService.createCattle(formattedValues, authToken);
			notification.success({
				message: t("cattleCreated"),
				description: t("cattleCreatedSuccess"),
			});
			saveNotification("New Cattle Created", `Cattle ${values.name} has been added successfully!`);

			router.push("/listCattle");
		} catch (error) {
			notification.error({
				message: t("submissionFailed"),
				description: error.message,
			});
		}
	};

	if (!isMounted) {
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.spinner}></div>
				<div className={styles.loadingText}>Loading...</div>
			</div>
		);
	}

	// Fetch lineageOptions from translation files
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

	return (
		<div className={styles.container}>
			<Header />

			<Form
				name='import_form'
				layout='vertical'
				className={styles.formContainer}
				onFinish={handleSubmit}
			>
				<Title
					level={2}
					className={styles.formTitle}
				>
					{t("addCattle")}
				</Title>
				<Row gutter={16}>
					<Col
						xs={24}
						sm={12}
					>
						<Form.Item
							name='rfid'
							label={t("rfid_label")}
							rules={[{ required: true, message: t("required_message") + t("rfid_label") }]}
						>
							<Input
								id={styles.searchBar}
								placeholder={t("rfid_placeholder")}
							/>
						</Form.Item>

						<Form.Item
							name='name'
							label={t("name_label")}
							rules={[{ required: true, message: t("required_message") + t("name_label") }]}
						>
							<Input
								id={styles.searchBar}
								placeholder={t("name_placeholder")}
							/>
						</Form.Item>

						<Form.Item
							name='gender'
							label={t("gender_label")}
							rules={[{ required: true, message: t("required_message") + t("gender_label") }]}
						>
							<Select
								placeholder={t("gender_label")}
								onChange={handleGenderChange}
								id={styles.searchBar}
							>
								<Option value='male'>{t("male")}</Option>
								<Option value='female'>{t("female")}</Option>
							</Select>
						</Form.Item>

						<Form.Item
							name='statusCattle'
							label={t("status_label")}
							rules={[{ required: true, message: t("required_message") + t("status_label") }]}
						>
							<Select
								placeholder={t("status_placeholder")}
								id={styles.searchBar}
							>
								{categoryList
									.filter((category) => category.gender === gender)
									.map((category) => (
										<Option
											key={category.id}
											value={category.id}
										>
											{category.name}
										</Option>
									))}
							</Select>
						</Form.Item>
					</Col>

					<Col
						xs={24}
						sm={12}
					>
						<Form.Item
							name='nid'
							label={t("nid_label")}
							rules={[{ required: true, message: t("required_message") + t("nid_label") }]}
						>
							<Input
								id={styles.searchBar}
								placeholder={t("nid_placeholder")}
							/>
						</Form.Item>

						<Form.Item
							name='lineage'
							label={t("lineage_label")}
							rules={[{ required: true, message: t("required_message") + t("lineage_label") }]}
						>
							<Select
								placeholder={t("lineage_placeholder")}
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
							label={t("birthDate_label")}
							rules={[{ required: true, message: t("required_message") + t("birthDate_label") }]}
						>
							<DatePicker style={{ width: "100%" }} />
						</Form.Item>
						<Form.Item
							name='weight'
							label={t("weight_label")}
							rules={[{ required: true, message: t("required_message") + t("weight_label") }]}
						>
							<InputNumber
								min={0}
								placeholder={t("weight_placeholder")}
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</Col>
				</Row>

				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className={styles.submitButton}
					>
						{t("submit_button")}
					</Button>
				</Form.Item>
			</Form>

			<footer className={styles.footer}>© 2024 Smart Cattle</footer>
			<CookieConsent />
		</div>
	);
};

export default AddCattle;
