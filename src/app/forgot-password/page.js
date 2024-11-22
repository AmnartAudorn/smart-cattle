/** @format */

"use client";
import { useState, useEffect } from "react";
import { Button, Input, Form, notification } from "antd";
import forgotService from "../service/passwordReset";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "../styles/forgotPassword.module.css";
import "../i18n";

const ForgotPassword = () => {
	const { t, i18n } = useTranslation();
	const [email, setEmail] = useState("");
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (i18n.isInitialized) {
			setIsLoading(false);
		}
	}, [i18n.isInitialized, router]);

	const handleSubmit = async (value) => {
		try {
			const updatedProductData = await forgotService.forgotPassword(value);

			notification.success({
				message: t("sentEmailSuccess"),
			});

			router.push(updatedProductData.resetURL);
		} catch (error) {
			notification.error({
				message: t("submissionFailed"),
				description: error.message || error.toString(),
			});
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>{t("forgotPassword")}</header>
			<div className={styles.loginContainer}>
				<div className={styles.loginBox}>
					<p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{t("confirmationText")}</p>
					<Form
						className={styles.form}
						onFinish={handleSubmit}
					>
						<Form.Item
							name='email'
							rules={[{ required: true, type: "email", message: t("emailRequired") }]}
						>
							<Input
								id={styles.searchBar}
								type='email'
								placeholder={t("emailPlaceholder")}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Item>
						<Form.Item>
							<Button
								className={styles.loginButton}
								type='primary'
								htmlType='submit'
							>
								{t("submit_button")}
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
			<footer className={styles.footer}>@ 2024 Smart Cattle.</footer>
		</div>
	);
};

export default ForgotPassword;
