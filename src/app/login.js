/** @format */
"use client";
import React from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./styles/login.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LanguageSwitcher from "./languageSwitcher";
import userService from "./service/user.js";
import { useTranslation } from "react-i18next";

import CookieConsent from "./CookieConsent";

const Login = () => {
	const { t, i18n } = useTranslation();
	const router = useRouter();
	const lang = i18n.language;

	const onFinish = async (values) => {
		try {
			const response = await userService.login(values);

			localStorage.setItem("authToken", response.token);
			localStorage.setItem("userEmail", values.email);
			localStorage.setItem("language", lang);
			document.cookie = `authToken=${response.token}; path=/; max-age=${1 * 24 * 60 * 60}; SameSite=Lax; Secure`;

			notification.success({
				message: t("loginSuccess"),
			});

			router.push("/listCattle");
		} catch (error) {
			notification.error({
				message: t("loginFailed"),
				description: error.message,
			});
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				Smart Cattle
				<div className={styles.languageSwitcher}>
					<LanguageSwitcher />
				</div>
			</div>
			<div className={styles.loginContainer}>
				<div className={styles.loginBox}>
					<Image
						src='/farm.png'
						alt='Farm'
						width={200}
						height={150}
					/>
					<h2 style={{ textAlign: "center" }}>{t("farmOwner")}</h2>
					<p style={{ textAlign: "center", marginBottom: "20px" }}>{t("hello")}</p>
					<Form
						name='normal_login'
						className={styles.form}
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name='email'
							rules={[{ required: true, message: t("rulesEmail") }]}
						>
							<Input
								prefix={<UserOutlined className='site-form-item-icon' />}
								placeholder={t("rulesEmail")}
							/>
						</Form.Item>
						<Form.Item
							name='password'
							rules={[{ required: true, message: t("rulesPass") }]}
						>
							<Input
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder={t("rulesPass")}
							/>
						</Form.Item>

						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								className={styles.loginButton}
							>
								{t("login")}
							</Button>
						</Form.Item>

						<div className={styles.footerLinks}>
							<Link href='/forgot-password'>{t("forgotPass")}</Link>
							<Link href='/register'>{t("createUser")}</Link>
						</div>
					</Form>
				</div>
			</div>
			<footer className={styles.footer}>
				<p>© 2024 Smart Cattle.</p>
			</footer>

			<CookieConsent />
		</div>
	);
};

export default Login;
