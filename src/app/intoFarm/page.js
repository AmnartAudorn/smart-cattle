/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Typography, Row, Col, Button, Input, Form, notification } from "antd";
import { useTranslation } from "react-i18next";
import styles from "../styles/intoFarm.module.css";
import userService from "../service/user";
import Header from "../header";
import i18n from "../i18n";
import Image from "next/image";

const { Title } = Typography;

const FarmDetail = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const [farm, setFarm] = useState(null);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") || "th" : "th";
		i18n.changeLanguage(savedLanguage).then(() => {
			setIsMounted(true);
		});
	}, []);

	useEffect(() => {
		const checkAuthToken = () => {
			const token = getCookie("authToken");
			if (!token) {
				router.push("/");
			}
		};

		const getCookie = (name) => {
			const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
			return match ? match[2] : null;
		};

		checkAuthToken();
		const userEmail = localStorage.getItem("userEmail");
		if (userEmail) {
			fetchUserByEmail(userEmail);
		} else {
			setIsMounted(true);
		}
	}, [router]);

	const fetchUserByEmail = async (email) => {
		try {
			const response = await userService.getUser(email);
			if (response) {
				setFarm(response);
				setIsMounted(true);
			} else {
				console.error("Expected a single object but got:", response);
			}
		} catch (error) {
			console.error("Error fetching farm details:", error);
		}
	};

	const handleSubmit = async (values) => {
		try {
			await userService.updateUser(farm._id, values);
			notification.success({
				message: t("UpdateSuccess"),
			});
			fetchUserByEmail(farm.email); // Refresh the user details after editing
		} catch (error) {
			console.error("Error updating farm details:", error);
		}
	};

	if (!isMounted) {
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.spinner}></div>
				<span className={styles.loadingText}>Loading...</span>
			</div>
		);
	}

	if (!farm) {
		return <span className={styles.loadingText}>Loading...</span>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.registerContainer}>
				<Header />
				<div className={styles.formContainer}>
					<Image
						alt='Farm'
						src='/cattle.png'
						className={styles.img}
						width={500}
						height={500}
					/>
					<Title
						level={2}
						className={styles.formTitle}
					>
						{t("farmInfo")}
					</Title>
					<Form
						name='register_form'
						className={styles.form}
						initialValues={farm}
						onFinish={handleSubmit}
					>
						<Row gutter={16}>
							<Col
								xs={24}
								sm={12}
							>
								<Form.Item
									name='farmName'
									label={t("farmName")}
									rules={[{ required: true, message: t("validation.farmName") }]}
								>
									<Input
										id={styles.searchBar}
										placeholder={t("farmName")}
									/>
								</Form.Item>
							</Col>
							<Col
								xs={24}
								sm={12}
							>
								<Form.Item
									name='email'
									label={t("email")}
									rules={[
										{ required: true, message: t("validation.email") },
										{ pattern: /.+\@.+\..+/, message: t("validation.email_format") },
									]}
								>
									<Input
										id={styles.searchBar}
										placeholder={t("email")}
									/>
								</Form.Item>
							</Col>
							<Col
								xs={24}
								sm={12}
							>
								<Form.Item
									name='firstName'
									label={t("firstName")}
									rules={[{ required: true, message: t("validation.firstName") }]}
								>
									<Input
										id={styles.searchBar}
										placeholder={t("firstName")}
									/>
								</Form.Item>
							</Col>
							<Col
								xs={24}
								sm={12}
							>
								<Form.Item
									name='lastName'
									label={t("lastName")}
									rules={[{ required: true, message: t("validation.lastName") }]}
								>
									<Input
										id={styles.searchBar}
										placeholder={t("lastName")}
									/>
								</Form.Item>
							</Col>
							<Col
								xs={24}
								sm={12}
							>
								<Form.Item
									name='phoneNumber'
									label={t("phoneNumber")}
									rules={[{ required: true, message: t("validation.phoneNumber") }]}
								>
									<Input
										id={styles.searchBar}
										placeholder={t("phoneNumber")}
									/>
								</Form.Item>
							</Col>
							<Col
								xs={24}
								sm={12}
							>
								<Form.Item
									name='address'
									label={t("address")}
									rules={[{ required: true, message: t("validation.address") }]}
								>
									<Input.TextArea
										id={styles.searchBar}
										placeholder={t("address")}
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
								{t("saveButton")}
							</Button>
						</Form.Item>
					</Form>
				</div>
				<footer className={styles.footer}>© 2024 Smart Cattle</footer>
			</div>
		</div>
	);
};

export default FarmDetail;
