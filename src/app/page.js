/** @format */
"use client";
import Login from "./login.js";
import "./i18n";

export default function Home() {
	const handleChangeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div>
			<Login />
		</div>
	);
}
