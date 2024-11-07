/** @format */

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styles from "./styles/login.module.css";

const CookieConsent = () => {
	const [showConsent, setShowConsent] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (!consent) setShowConsent(true);
	}, []);

	const acceptCookies = () => {
		localStorage.setItem("cookieConsent", "true");
		setShowConsent(false);
	};

	if (!showConsent) return null;

	return (
		<div className={styles.cookieConsent}>
			<p>เว็บไซต์นี้ใช้คุกกี้เพื่อเพิ่มประสิทธิภาพการใช้งานของคุณ</p>
			<Button
				onClick={acceptCookies}
				type='primary'
			>
				Accept
			</Button>
		</div>
	);
};

export default CookieConsent;
