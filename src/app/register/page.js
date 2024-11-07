/** @format */

"use client";
import React from "react";
import { Form, Input, Button, Row, Col, notification } from "antd";
import styles from "../styles/register.module.css";
import Link from "next/link";
import userService from "../service/user.js";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../i18n";

const Register = () => {
	const { t, i18n } = useTranslation();
	const router = useRouter();

	if (!i18n.isInitialized) {
		return <div>Loading...</div>;
	}

	const onFinish = async (values) => {
		try {
			await userService.createUser(values);
			notification.success({
				message: t("success"),
				description: t("created success"),
			});
			router.push("/");
		} catch (error) {
			notification.error({
				message: t("submission failed"),
				description: error.toString(),
			});
		}
	};

	return (
		<div className={styles.registerContainer}>
			<div className={styles.header}>Smart Cattle</div>
			<div className={styles.formContainer}>
				<h2 className={styles.formTitle}>{t("register")}</h2>
				<p className={styles.formSubtitle}>{t("welcome_message")}</p>
				<Form
					name='register_form'
					className={styles.form}
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Row gutter={16}>
						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='farmName'
								rules={[{ required: true, message: t("validation.farmName") }]}
							>
								<Input placeholder={t("farmName")} />
							</Form.Item>
						</Col>
						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='email'
								rules={[
									{ required: true, message: t("validation.email") },
									{
										pattern: /.+\@.+\..+/,
										message: t("validation.email_format"),
									},
								]}
							>
								<Input placeholder={t("email")} />
							</Form.Item>
						</Col>

						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='firstName'
								rules={[{ required: true, message: t("validation.firstName") }]}
							>
								<Input placeholder={t("firstName")} />
							</Form.Item>
						</Col>
						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='lastName'
								rules={[{ required: true, message: t("validation.lastName") }]}
							>
								<Input placeholder={t("lastName")} />
							</Form.Item>
						</Col>

						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='password'
								rules={[{ required: true, message: t("validation.password") }]}
								hasFeedback
							>
								<Input.Password placeholder={t("password")} />
							</Form.Item>
						</Col>

						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='confirmPassword'
								dependencies={["password"]}
								hasFeedback
								rules={[
									{ required: true, message: t("validation.confirmPassword") },
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue("password") === value) {
												return Promise.resolve();
											}
											return Promise.reject(new Error(t("validation.password_mismatch")));
										},
									}),
								]}
							>
								<Input.Password placeholder={t("confirmPassword")} />
							</Form.Item>
						</Col>

						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='phoneNumber'
								rules={[{ required: true, message: t("validation.phoneNumber") }]}
							>
								<Input placeholder={t("phoneNumber")} />
							</Form.Item>
						</Col>

						<Col
							xs={24}
							sm={12}
						>
							<Form.Item
								name='address'
								rules={[{ required: true, message: t("validation.address") }]}
							>
								<Input.TextArea placeholder={t("address")} />
							</Form.Item>
						</Col>
					</Row>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className={styles.submitButton}
						>
							{t("submit")}
						</Button>
						<div style={{ textAlign: "center", marginTop: "15px", color: "red" }}>
							<Link href='/'>{t("login_redirect")}</Link>
						</div>
					</Form.Item>
				</Form>
			</div>
			<footer className={styles.footer}>
				<p>@ 2024 Smart Cattle.</p>
			</footer>
		</div>
	);
};

export default Register;
