/** @format */

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Button, Input, Form, message, notification } from "antd";
import styles from "../../styles/resetPassword.module.css";
import forgotService from "../../service/passwordReset";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const { token } = useParams();
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async () => {
		if (!token) {
			message.error(t("noTokenFound"));
			return;
		}

		if (password !== confirmPassword) {
			message.error(t("passwordsDoNotMatch"));
			return;
		}

		try {
			await forgotService.resetPassword(password, token);
			notification.success({
				message: t("resetPasswordSuccess"),
			});
			router.push("/");
		} catch (error) {
			notification.error({
				message: t("resetPasswordFailure"),
				description: error.message || error.toString(),
			});
		}
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>{t("resetPassword")}</header>
			<div className={styles.resetBox}>
				<Form
					className={styles.form}
					onFinish={handleSubmit}
				>
					<Form.Item
						name='password'
						rules={[{ required: true, message: t("inputNewPassword") }]}
					>
						<Input.Password
							id={styles.searchBar}
							placeholder={t("newPasswordPlaceholder")}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Item>
					<Form.Item
						name='confirmPassword'
						rules={[{ required: true, message: t("inputConfirmPassword") }]}
					>
						<Input.Password
							id={styles.searchBar}
							placeholder={t("confirmPasswordPlaceholder")}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</Form.Item>
					<Form.Item>
						<Button
							className={styles.resetButton}
							type='primary'
							htmlType='submit'
						>
							{t("resetPasswordButton")}
						</Button>
					</Form.Item>
				</Form>
			</div>
			<footer className={styles.footer}>
				<p>@ 2024 Smart Cattle.</p>
			</footer>
		</div>
	);
};

export default ResetPassword;
