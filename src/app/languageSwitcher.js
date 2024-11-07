/** @format */
import React from "react";
import { GlobalOutlined, FlagOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import styles from "./styles/languageSwitcher.module.css";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation();

	const handleMenuClick = (e) => {
		const lang = e.key;
		i18n.changeLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item
				key='th'
				icon={
					<img
						src='/thai.png'
						alt='Thai Flag'
						width='24'
						height='16'
					/>
				}
			>
				ไทย
			</Menu.Item>
			<Menu.Item
				key='lo'
				icon={
					<img
						src='/laos.png'
						alt='Laos Flag'
						width='24'
						height='16'
					/>
				}
			>
				ລາວ
			</Menu.Item>
			<Menu.Item
				key='km'
				icon={
					<img
						src='/cambodia.png'
						alt='Cambodia Flag'
						width='24'
						height='16'
					/>
				}
			>
				ខ្មែរ
			</Menu.Item>
		</Menu>
	);

	return (
		<div className={styles.languageSwitcher}>
			<Dropdown
				overlay={menu}
				trigger={["click"]}
			>
				<div className={styles.dropdownContent}>
					<GlobalOutlined className={styles.icon} />
					<span className={styles.text}>{t("select")}</span>
				</div>
			</Dropdown>
		</div>
	);
};

export default LanguageSwitcher;
