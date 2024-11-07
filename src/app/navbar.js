/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { Typography, Drawer, Menu, Modal, Form, Input, DatePicker, Badge, List } from "antd";
import { MenuOutlined, HomeOutlined, FileAddOutlined, InfoCircleOutlined, LogoutOutlined, BellOutlined, CalendarOutlined, LineChartOutlined } from "@ant-design/icons";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import dayjs from "dayjs"; // Import dayjs
import isBetween from "dayjs/plugin/isBetween"; // Import isBetween plugin

dayjs.extend(isBetween); // Extend dayjs with isBetween plugin

import LanguageSwitcher from "./languageSwitcher";

const Navbar = () => {
	const [visible, setVisible] = useState(false);
	const router = useRouter();
	const { Text } = Typography;
	const { t } = useTranslation();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();
	const [notifications, setNotifications] = useState([]);
	const [unreadCount, setUnreadCount] = useState(0); // Initialize unreadCount

	useEffect(() => {
		// Load notifications from localStorage
		const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
		const storedUpdateNotifications = JSON.parse(localStorage.getItem("cattleUpdateNotification")) || [];

		// Combine notifications if you want them in one state
		let combinedNotifications = [...storedNotifications, ...storedUpdateNotifications];

		// Current date
		const today = dayjs().startOf("day");

		// Define the date range: today to next 3 days
		const startDate = today;
		const endDate = today.add(3, "day").endOf("day");

		// Filter notifications within the desired date range
		combinedNotifications = combinedNotifications.filter((notification) => {
			const notificationDate = dayjs(notification.date, "YYYY-MM-DD");
			return notificationDate.isBetween(startDate, endDate, null, "[]"); // Inclusive
		});

		// Remove notifications older than 1 day from localStorage
		const cleanedNotifications = storedNotifications.filter((notification) => {
			const notificationDate = dayjs(notification.date, "YYYY-MM-DD");
			return notificationDate.isAfter(today.subtract(1, "day"));
		});

		const cleanedUpdateNotifications = storedUpdateNotifications.filter((notification) => {
			const notificationDate = dayjs(notification.date, "YYYY-MM-DD");
			return notificationDate.isAfter(today.subtract(1, "day"));
		});

		// Update localStorage with cleaned notifications
		localStorage.setItem("notifications", JSON.stringify(cleanedNotifications));
		localStorage.setItem("cattleUpdateNotification", JSON.stringify(cleanedUpdateNotifications));

		// Optionally, sort notifications by date descending
		combinedNotifications.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());

		setNotifications(combinedNotifications);

		// Initialize unreadCount from localStorage or set to combinedNotifications.length
		const storedUnreadCount = parseInt(localStorage.getItem("unreadCount"), 10);
		if (!isNaN(storedUnreadCount)) {
			setUnreadCount(storedUnreadCount);
		} else {
			setUnreadCount(combinedNotifications.length);
			localStorage.setItem("unreadCount", combinedNotifications.length);
		}
	}, []);

	// Function to add a notification with date
	const addNotification = (title, description, date) => {
		const newNotification = { title, description, date };
		const updatedNotifications = [...notifications, newNotification];
		setNotifications(updatedNotifications);
		localStorage.setItem("notifications", JSON.stringify(updatedNotifications)); // Save to localStorage

		// Increment unreadCount and update localStorage
		const newUnreadCount = unreadCount + 1;
		setUnreadCount(newUnreadCount);
		localStorage.setItem("unreadCount", newUnreadCount);
	};

	// Function to open the notification modal
	const handleBellClick = () => {
		setIsModalVisible(true);
	};

	// Function to handle modal close and save
	const handleOk = () => {
		form
			.validateFields()
			.then((values) => {
				const formattedDate = values.date.format("YYYY-MM-DD");
				addNotification(values.title, values.description, formattedDate);
				setIsModalVisible(false);
				form.resetFields(); // Reset form after submission
			})
			.catch((info) => {
				console.log("Validate Failed:", info);
			});
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		form.resetFields();
	};

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("userEmail");
		document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		router.push("/");
	};

	// Modal to display notifications list
	const [isNotificationListVisible, setNotificationListVisible] = useState(false);

	// Function to open notifications list
	const openNotificationList = () => {
		setNotificationListVisible(true);
		setUnreadCount(0); // Reset the Badge count
		localStorage.setItem("unreadCount", 0); // Persist unreadCount as 0
	};

	// Function to close notifications list
	const closeNotificationList = () => {
		setNotificationListVisible(false);
	};

	return (
		<div className={styles.navbar}>
			<Badge
				count={unreadCount}
				className={styles.badge}
				style={{ margin: "15px" }}
				overflowCount={99}
			>
				<BellOutlined
					className={styles.menuButton}
					onClick={openNotificationList}
				/>
			</Badge>
			<CalendarOutlined
				onClick={handleBellClick}
				className={styles.menuButton}
			/>
			<MenuOutlined
				onClick={showDrawer}
				className={styles.menuButton}
			/>

			<Drawer
				title={
					<div className={styles.drawerTitle}>
						{t("drawerTitle")}
						<LanguageSwitcher style={{ color: "#000000" }} />
					</div>
				}
				placement='right'
				closable={true}
				onClose={onClose}
				visible={visible}
				className={styles.drawer}
			>
				<Menu
					mode='vertical'
					style={{ fontSize: "18px", padding: "20px 0" }}
				>
					<Menu.Item
						key='1'
						icon={<HomeOutlined />}
						className={styles.menuItem}
						style={{ boxShadow: "0px 2px 10px rgba(248, 3, 3, 0.1)" }}
					>
						<Link href='/listCattle'>{t("listCattle")}</Link>
					</Menu.Item>

					<Menu.Item
						key='2'
						icon={<FileAddOutlined />}
						className={styles.menuItem}
						style={{
							boxShadow: "0px 2px 10px rgba(248, 3, 3, 0.1)",
							marginTop: "10px",
						}}
					>
						<Link href='/addCattle'>{t("addCattle")}</Link>
					</Menu.Item>

					<Menu.Item
						key='3'
						icon={<InfoCircleOutlined />}
						className={styles.menuItem}
						style={{
							boxShadow: "0px 2px 10px rgba(248, 3, 3, 0.1)",
							marginTop: "10px",
						}}
					>
						<Link href='/intoFarm'>{t("farmInfo")}</Link>
					</Menu.Item>

					{/* New "Growth" section */}
					<Menu.Item
						key='4'
						icon={<LineChartOutlined />} // Growth icon
						className={styles.menuItem}
						style={{
							boxShadow: "0px 2px 10px rgba(248, 3, 3, 0.1)",
							marginTop: "10px",
						}}
					>
						<Link href='/growth'>{t("growth")}</Link>
						{/* Use translation key for "การเจริญเติบโต" */}
					</Menu.Item>

					<Menu.Item
						key='5'
						icon={<LogoutOutlined />}
						className={styles.menuItemLogout}
						style={{
							boxShadow: "0px 2px 10px rgba(248, 3, 3, 0.1)",
							marginTop: "10px",
						}}
						onClick={handleLogout}
					>
						{t("logout")}
					</Menu.Item>
				</Menu>

				<Image
					alt='Cow Farm House'
					src='/cow_farm_house.png'
					className={styles.img}
					width={200}
					height={200}
				/>
				<div style={{ marginTop: "30px", textAlign: "center" }}>
					<Text
						type='secondary'
						style={{ fontSize: "12px" }}
					>
						{t("version")}
					</Text>
				</div>
			</Drawer>

			{/* Modal for Creating Notification */}
			<Modal
				title={t("createNotification")}
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				okText={t("save")}
				cancelText={t("cancel")}
			>
				<Form
					form={form}
					layout='vertical'
				>
					<Form.Item
						name='date'
						label={t("notificationDate")}
						rules={[{ required: true, message: t("selectDate") }]}
					>
						<DatePicker
							style={{ width: "100%" }}
							disabledDate={(current) => current && current < dayjs().startOf("day")}
						/>
					</Form.Item>
					<Form.Item
						name='title'
						label={t("notificationTitle")}
						rules={[{ required: true, message: t("enterTitle") }]}
					>
						<Input placeholder={t("notificationTitlePlaceholder")} />
					</Form.Item>
					<Form.Item
						name='description'
						label={t("notificationDescription")}
						rules={[{ required: true, message: t("enterDescription") }]}
					>
						<Input.TextArea
							rows={4}
							placeholder={t("notificationDescriptionPlaceholder")}
						/>
					</Form.Item>
				</Form>
			</Modal>

			{/* Modal for Viewing Notifications */}
			<Modal
				title={t("notificationList")}
				visible={isNotificationListVisible}
				onCancel={closeNotificationList}
				footer={null}
			>
				{notifications.length > 0 ? (
					<List
						itemLayout='horizontal'
						dataSource={notifications}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={item.title}
									description={
										<>
											<p>{item.description}</p>
											<p>
												<strong>Date:</strong> {item.date}
											</p>
										</>
									}
								/>
							</List.Item>
						)}
					/>
				) : (
					<p>No notifications</p>
				)}
			</Modal>
		</div>
	);
};

export default Navbar;
