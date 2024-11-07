/** @format */
"use client";
import "./i18n";
import styles from "./styles/header.module.css"; // Import styles correctly
import Navbar from "./navbar"; // Ensure to import the Navbar component
import { BellOutlined, CalendarOutlined, MenuOutlined } from "@ant-design/icons"; // Import Ant Design icons
import { Button } from "antd"; // Import Button for icons

export default function Header() {
	return (
		<header className={styles.header}>
			<h3 className={styles.headerTitle}>Smart Cattle</h3>
			<Navbar className={styles.navbar} />
		</header>
	);
}
