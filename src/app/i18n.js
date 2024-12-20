/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
	km: {
		translation: {
			farmOwner: "ម្ចាស់កសិដ្ឋាន",
			register: "ចុះឈ្មោះ",
			hello: "ជំរាបសួរ, អ្នកអាចចូលដើម្បីប្រើនៅទីនេះ",
			rulesEmail: "សូមបញ្ចូលអ៊ីមែល!",
			rulesPass: "សូមបញ្ចូលពាក្យសម្ងាត់!",
			login: "ចូល",
			forgotPass: "ភ្លេចពាក្យសម្ងាត់",
			createUser: "បង្កើតគណនីមួយ។",
			register: "ចុះឈ្មោះ",
			welcome_message: "សួស្ដី, អ្នកអាចចុះឈ្មោះដើម្បីប្រើប្រាស់បាននៅទីនេះ",
			farmName: "ឈ្មោះចម្ការ",
			email: "អ៊ីមែល",
			firstName: "នាម",
			lastName: "គោត្តនាម",
			password: "ពាក្យសម្ងាត់",
			confirmPassword: "បញ្ជាក់ពាក្យសម្ងាត់",
			phoneNumber: "លេខទូរស័ព្ទ",
			submit: "យល់ព្រម",
			login_redirect: "ត្រឡប់ទៅទំព័រ ចូលទៅប្រព័ន្ធ",
			address: "អាសយដ្ឋានកសិដ្ឋាន",
			validation: {
				farmName: "សូមបញ្ចូលឈ្មោះចម្ការ!",
				email: "សូមបញ្ចូលអ៊ីមែល!",
				email_format: "ទម្រង់អ៊ីមែលមិនត្រឹមត្រូវ!",
				firstName: "សូមបញ្ចូលនាម!",
				lastName: "សូមបញ្ចូលគោត្តនាម!",
				password: "សូមបញ្ចូលពាក្យសម្ងាត់!",
				confirmPassword: "សូមបញ្ចាក់ពាក្យសម្ងាត់!",
				password_mismatch: "ពាក្យសម្ងាត់មិនដូចគ្នា!",
				phoneNumber: "សូមបញ្ចូលលេខទូរស័ព្ទ!",
				password_length: "ពាក្យសម្ងាត់ត្រូវតែមានប្រវែងយ៉ាងហោចណាស់ 8 តួអក្សរ",
			},
			rfid_label: "លេខគោ (RFID)",
			rfid_placeholder: "បញ្ចូលលេខគោ (RFID)",
			name_label: "ឈ្មោះគោដែលនាំចូល",
			name_placeholder: "បញ្ចូលឈ្មោះគោដែលនាំចូល",
			gender_label: "ភេទ",
			male: "ភេទប្រុស",
			female: "ភេទស្រី",
			weight_label: "ទំងន់គោ (Kg)",
			weight_placeholder: "បញ្ចូលទំងន់គោ (Kg)",
			nid_label: "លេខគោ (NID)",
			nid_placeholder: "បញ្ចូលលេខគោ (NID)",
			lineage_label: "ពូជគោដែលនាំចូល",
			lineage_placeholder: "បញ្ចូលពូជគោ",
			birthDate_label: "ថ្ងៃកំណើតរបស់គោ",
			submit_button: "យល់ព្រម",
			required_message: "សូមបញ្ចូល",
			sentEmailSuccess: "អ៊ីមែលបានផ្ញើរួចហើយ",
			submissionFailed: "ការចុះឈ្មោះមិនជោគជ័យ",
			emailPlaceholder: "សូមបញ្ចូលអ៊ីមែលរបស់អ្នក",
			emailRequired: "សូមបញ្ចូលអ៊ីមែលដែលត្រឹមត្រូវ",
			confirmationText: "*សូមបញ្ចូលអ៊ីមែលដើម្បីបញ្ជាក់ការផ្លាស់ប្តូរពាក្យសម្ងាត់",
			resetPasswordSuccess: "ពាក្យសម្ងាត់ត្រូវបានកំណត់ឡើងវិញដោយជោគជ័យ",
			resetPasswordFailure: "មិនអាចកំណត់ពាក្យសម្ងាត់ឡើងវិញបានទេ",
			noTokenFound: "មិនមានToken",
			passwordsDoNotMatch: "ពាក្យសម្ងាត់មិនត្រូវគ្នាឡើយ",
			newPasswordPlaceholder: "ពាក្យសម្ងាត់ថ្មី",
			confirmPasswordPlaceholder: "បញ្ជាក់ពាក្យសម្ងាត់ថ្មី",
			inputNewPassword: "សូមបញ្ចូលពាក្យសម្ងាត់ថ្មីរបស់អ្នក!",
			inputConfirmPassword: "សូមបញ្ជាក់ពាក្យសម្ងាត់ថ្មីរបស់អ្នក!",
			resetPasswordButton: "កំណត់ពាក្យសម្ងាត់ឡើងវិញ",
			searchPlaceholder: "ស្វែងរកគោនៅក្នុងហ្វាម",
			addCattleButton: "បន្ថែមគោ",
			noCattleFound: "មិនមានគោ",
			editModalTitle: "កែសម្រួលព័ត៌មានគោ",
			rfidLabel: "លេខកូរ (RFID)",
			nameLabel: "ឈ្មោះគោដែលបន្ថែម",
			genderLabel: "ភេទ",
			genderMale: "ប្រុស",
			genderFemale: "ស្រី",
			weightLabel: "ទំងន់គោ (Kg)",
			lineageLabel: "ពូជ",
			nidLabel: "លេខកូរ (NID)",
			birthDateLabel: "ថ្ងៃខែឆ្នាំកំណើតគោ",
			deleteButton: "លុប",
			saveButton: "រក្សាទុក",
			cancelButton: "បោះបង់",
			drawerTitle: "ម៉ឺនុយ",
			listCattle: "បញ្ជីពងមាន់",
			addCattle: "បន្ថែមពងមាន់",
			farmInfo: "ព័ត៌មានកសិដ្ឋាន",
			logout: "ចាកចេញពីប្រព័ន្ធ",
			version: "v 1.0.0",
			statusCattleLabel: "ស្ថានភាពនាំចូលគោ",
			status_label: "ស្ថានភាពនាំចូលគោ",
			dateCreated: "កាលបរិច្ឆេទបង្កើត",
			select: "ជ្រើស",
			forgotPassword: "ចុះចេះពាក្យសំងាត់",
			resetPassword: "កំណត់ពាក្យសម្ងាត់ថ្មី",
			growth: "ការលូតលាស់",
			lineageOptions: [
				"មិនដឹងជាតិសាសន៍ - មិនដឹងជាតិសាសន៍ 75.0%, គ្រាន់តែ 25%",
				"កូនសត្វនាគ - កូនសត្វនាគ 100.0%",
				"កូនសត្វនាគ - កូនសត្វនាគ 75.0%, គ្រាន់តែ 25%",
				"កូនសត្វព្រៃ - កូនសត្វព្រៃ 100.0%",
				"កូនសត្វព្រៃ - កូនសត្វព្រៃ 75.0%, គ្រាន់តែ 25%",
				"ចូលចិត្ត - ចូលចិត្ត 100.0%",
				"ចូលចិត្ត - ចូលចិត្ត 75.0%, គ្រាន់តែ 25%",
				"វែងជូត - វែងជូត 100.0%",
				"វែងជូត - វែងជូត 75.0%, គ្រាន់តែ 25%",
				"ហ៊ីត - ហ៊ីត 100.0%",
				"ហ៊ីត - ហ៊ីត 75.0%, គ្រាន់តែ 25%",
				"តែមូត - តែមូត 100.0%",
				"តែមូត - តែមូត 75.0%, គ្រាន់តែ 25%",
				"ស្រេច - ស្រេច 100.0%",
				"ស្រេច - ស្រេច 75.0%, គ្រាន់តែ 25%",
				"មេឃសក់ខ្មៅ - មេឃសក់ខ្មៅ 100.0%",
				"មេឃសក់ខ្មៅ - មេឃសក់ខ្មៅ 75.0%, គ្រាន់តែ 25%",
				"សាច់ស្តី - សាច់ស្តី 100.0%",
				"សាច់ស្តី - សាច់ស្តី 75.0%, គ្រាន់តែ 25%",
				"យ៉េ - យ៉េ 100.0%",
				"យ៉េ - យ៉េ 75.0%, គ្រាន់តែ 25%",
				"ជី - ជី 100.0%",
				"ជី - ជី 75.0%, គ្រាន់តែ 25%",
				"ខ្លា - ខ្លា 100.0%",
				"ខ្លា - ខ្លា 75.0%, គ្រាន់តែ 25%",
				"ស្រី - ស្រី 100.0%",
				"ស្រី - ស្រី 75.0%, គ្រាន់តែ 25%",
				"ឆ្កែ - ឆ្កែ 100.0%",
				"ឆ្កែ - ឆ្កែ 75.0%, គ្រាន់តែ 25%",
				"ស្រមោល - ស្រមោល 100.0%",
				"ស្រមោល - ស្រមោល 75.0%, គ្រាន់តែ 25%",
				"សុពល - សុពល 100.0%",
				"សុពល - សុពល 75.0%, គ្រាន់តែ 25%",
				"ច្បាប់ - ច្បាប់ 100.0%",
				"ច្បាប់ - ច្បាប់ 75.0%, គ្រាន់តែ 25%",
				"ប្រមាញ់ - ប្រមាញ់ 100.0%",
				"ប្រមាញ់ - ប្រមាញ់ 75.0%, គ្រាន់តែ 25%",
				"គោទាំងពីរ - គោទាំងពីរ 100.0%",
				"គោទាំងពីរ - គោទាំងពីរ 75.0%, គ្រាន់តែ 25%",
				"រំភើប - រំភើប 100.0%",
				"រំភើប - រំភើប 75.0%, គ្រាន់តែ 25%",
				"គ្រិច - គ្រិច 100.0%",
				"គ្រិច - គ្រិច 75.0%, គ្រាន់តែ 25%",
				"ព្រៃ - ព្រៃ 100.0%",
				"ព្រៃ - ព្រៃ 75.0%, គ្រាន់តែ 25%",
				"យ៉ូកូ - យ៉ូកូ 100.0%",
				"យ៉ូកូ - យ៉ូកូ 75.0%, គ្រាន់តែ 25%",
				"កក - កក 100.0%",
				"កក - កក 75.0%, គ្រាន់តែ 25%",
			],
			createNotification: "បង្កើតការជូនដំណឹង",
			save: "រក្សាទុក",
			cancel: "បោះបង់",
			notificationDate: "កាលបរិច្ឆេទជូនដំណឹង",
			selectDate: "សូមជ្រើសរើសកាលបរិច្ឆេទ",
			notificationTitle: "ចំណងជើងការជូនដំណឹង",
			enterTitle: "សូមបញ្ចូលចំណងជើង",
			notificationTitlePlaceholder: "បញ្ចូលចំណងជើងការជូនដំណឹង",
			notificationDescription: "ការពិពណ៌នាការជូនដំណឹង",
			enterDescription: "សូមបញ្ចូលការពិពណ៌នា",
			notificationDescriptionPlaceholder: "បញ្ចូលការពិពណ៌នាការជូនដំណឹង",
			notificationList: "បញ្ជីការជូនដំណឹង",
			loginSuccess: "ចូលប្រព័ន្ធបានជោគជ័យ",
			categories: {
				3: "កូនគោ",
				5: "គោស្រីវ័យក្មេង",
				7: "គោស្រីចំរុះ",
				9: "គោស្រីកំពុងសំរើស",
				11: "គោសំរើស",
				13: "គោប៉ា",
				15: "គោសំរាប់បំប៉ន",
				17: "គោវ័យក្មេង",
			},
			status_placeholder: "សូមជ្រើសរើសស្ថានភាព",
			please_select_breed: "សូមជ្រើសរើសពូជ",
			weighingDay: "ថ្ងៃទំងន់",
			cattle_growth: "ការលូតលាស់របស់វាក្រៅ",
			cattle_growth_statistics: "ស្ថិតិការលូតលាស់របស់វាក្រៅ",
			noDataS: "មិនមានទិន្នន័យសង្ខេបការលូតលាស់",
			monthly_avg_weight: "គណនីមធ្យមទំងន់ការលូតលាស់",
			growth_average_chart: "បន្ទាត់តារាងសង្ខេបការលូតលាស់",
			select_type: "ជ្រើសរើសប្រភេទ",
			select_growth: "ជ្រើសរើសការលូតលាស់",
			individual_growth: "ការលូតលាស់តែមួយ",
			individual_growth_type: "ការលូតលាស់តាមប្រភេទ",
			average_individual_growth: "សង្ខេបការលូតលាស់តែមួយ",
			average_individual_growth_type: "សង្ខេបការលូតលាស់តាមប្រភេទ",
			No_growth_records_for_cattle: "គ្មានការសម្គាល់ការលូតលាស់របស់គោ",
			select_cattle: "ជ្រើសរើសគោ",
			loginFailed: "ចូលប្រព័ន្ធមិនជោគជ័យ",
			InvalidEmail: "រកមិនឃើញអ៊ីមែលរបស់អ្នក",
			InvalidPassword: "លេខសម្ងាត់របស់អ្នកមិនត្រឹមត្រូវ",
			cattleCreated: "បង្កើតទិន្នន័យគោជោគជ័យ",
			cattleCreatedSuccess: "ទិន្នន័យគោត្រូវបានបង្កើតជោគជ័យ",
			cattleUpdated: "ធ្វើបច្ចុប្បន្នភាពទិន្នន័យគោជោគជ័យ",
			cattleUpdatedSuccess: "ទិន្នន័យគោត្រូវបានធ្វើបច្ចុប្បន្នភាពជោគជ័យ",
			cattleDeleted: "លុបទិន្នន័យគោជោគជ័យ",
			cattleDeletedSuccess: "ទិន្នន័យគោត្រូវបានលុបជោគជ័យ",
			infoUpdated: "ព័ត៌មានត្រូវបានអាប់ដេត",
			UpdateSuccess: "អាប់ដេតជោគជ័យ!",
			add_weight_record: "បន្ថែមទម្ងន់គោ",
			enter_weight: "សូមបញ្ចូលទម្ងន់គោ",
			error_message: "បញ្ហា",
			error_description: "មិនអាចបង្កើតកំណត់ត្រានៅសីតុណ្ហភាពបាន។ សូមព្យាយាមម្ដងទៀត។",
			success_message: "ជោគជ័យ",
			success_description: "ការបញ្ជូលទិន្នន័យអំពីទំងន់គោបានជោគជ័យ!",
		},
	},
	lo: {
		translation: {
			farmOwner: "ເຈົ້າຂອງຟາມ",
			register: "ລົງທະບຽນ",
			hello: "ສະບາຍດີ, ທ່ານສາມາດເຂົ້າສູ່ລະບົບເພື່ອໃຊ້ທີ່ນີ້",
			rulesEmail: "ກະລຸນາໃສ່ອີເມວ!",
			rulesPass: "ກະລຸນາໃສ່ລະຫັດຜ່ານ!",
			login: "ເຂົ້າສູ່ລະບົບ",
			forgotPass: "ລືມລະຫັດຜ່ານ",
			createUser: "ສ້າງບັນຊີ",
			register: "ລົງທະບຽນ",
			welcome_message: "ສະບາຍດີ, ທ່ານສາມາດລົງທະບຽນເພື່ອເຂົ້າໃຊ້ງານໄດ້ທີ່ນີ້",
			farmName: "ຊື່ຟາມ",
			email: "ອີເມວ",
			firstName: "ຊື່",
			lastName: "ນາມສະກຸນ",
			password: "ລະຫັດຜ່ານ",
			confirmPassword: "ຢືນຢັນລະຫັດຜ່ານ",
			phoneNumber: "ເບີໂທ",
			submit: "ຕົກລົງ",
			login_redirect: "ກັບໄປໜ້າ ເຂົ້າສູ່ລະບົບ",
			address: "ທີ່ຢູ່ຟາມ",
			validation: {
				farmName: "ກະລຸນາປ້ອນຊື່ຟາມ!",
				email: "ກະລຸນາປ້ອນອີເມວ!",
				email_format: "ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ!",
				firstName: "ກະລຸນາປ້ອນຊື່!",
				lastName: "ກະລຸນາປ້ອນນາມສະກຸນ!",
				password: "ກະລຸນາປ້ອນລະຫັດຜ່ານ!",
				confirmPassword: "ກະລຸນາຢືນຢັນລະຫັດຜ່ານ!",
				password_mismatch: "ລະຫັດຜ່ານບໍ່ຕົງກັນ!",
				phoneNumber: "ກະລຸນາປ້ອນເບີໂທ!",
				password_length: "ລະຫັດຜ່ານຕ້ອງມີຄວາມຍາວຢ່າງນ້ອຍ 8 ຕົວອັກສອນ",
			},
			rfid_label: "ເລກປະຈຳໂຄ (RFID)",
			rfid_placeholder: "ປ້ອນເລກປະຈຳໂຄ (RFID)",
			name_label: "ຊື່ໂຄທີ່ນຳເຂົ້າ",
			name_placeholder: "ປ້ອນຊື່ໂຄທີ່ນຳເຂົ້າ",
			gender_label: "ເພດ",
			male: "ເພດຜູ້",
			female: "ເພດເມຍ",
			weight_label: "ນ້ຳໜັກໂຄ (Kg)",
			weight_placeholder: "ປ້ອນນ້ຳໜັກໂຄ (Kg)",
			nid_label: "ເລກປະຈຳໂຄ (NID)",
			nid_placeholder: "ປ້ອນເລກປະຈຳໂຄ (NID)",
			lineage_label: "ສາຍພັນຂອງໂຄທີ່ນຳເຂົ້າ",
			lineage_placeholder: "ປ້ອນສາຍພັນ",
			birthDate_label: "ວັນເກີດຂອງໂຄທີ່ນຳເຂົ້າ",
			submit_button: "ຕົກລົງ",
			required_message: "ກະລຸນາປ້ອນ",
			sentEmailSuccess: "ສົ່ງອີເມວສໍາເລັດ",
			submissionFailed: "ສະໝັກສະມາຊິກບໍ່ສໍາເລັດ",
			emailPlaceholder: "ກະລຸນາໃສ່ອີເມວຂອງທ່ານ",
			emailRequired: "ກະລຸນາໃສ່ອີເມວທີ່ຖືກຕໍ່",
			confirmationText: "*ກະລຸນາໃສ່ອີເມວເພື່ອຢືນຢັນການເປຍນລະຫັດຜໍ່ອອກ",
			resetPasswordSuccess: "ປ່ອນລະຫັດຜໍ່ອອກສໍາເລັດ",
			resetPasswordFailure: "ບໍ່ສາມາດເປຍນລະຫັດຜໍ່ອອກ",
			noTokenFound: "ບໍ່ພົບທົ່ງ",
			passwordsDoNotMatch: "ລະຫັດຜໍ່ອອກບໍ່ຕໍ່ກັນ",
			newPasswordPlaceholder: "ລະຫັດຜໍ່ອອກໃໝ່",
			confirmPasswordPlaceholder: "ຢືນຢັນລະຫັດຜໍ່ອອກໃໝ່",
			inputNewPassword: "ກະລຸນາໃສ່ລະຫັດຜໍ່ອອກໃໝ່ຂອງທ່ານ!",
			inputConfirmPassword: "ກະລຸນາຢືນຢັນລະຫັດຜໍ່ອອກໃໝ່ຂອງທ່ານ!",
			resetPasswordButton: "ປ່ອນລະຫັດຜໍ່ອອກ",
			searchPlaceholder: "ຄົ້ນຫາວົວໃນເຟອມ",
			addCattleButton: "ເພີ່ມວົວ",
			noCattleFound: "ບໍ່ມີວົວທີ່ພົບ",
			editModalTitle: "ແກ້ໄຂຂໍໍຂອງວົວ",
			rfidLabel: "ບະແລງຄອງວົວ (RFID)",
			nameLabel: "ຊື່ວົວທີ່ເພີ່ມເຂົ້າ",
			genderLabel: "ເພດ",
			genderMale: "ເພດບຸກ",
			genderFemale: "ເພດຍິງ",
			weightLabel: "ນໍ້າໜັກວົວ (Kg)",
			lineageLabel: "ສາຍພັນ",
			nidLabel: "ບະແລງຄອງວົວ (NID)",
			birthDateLabel: "ວັນເກິດຂອງວົວ",
			deleteButton: "ລົບ",
			saveButton: "ບັນທຶກ",
			cancelButton: "ຍົກເລີກ",
			drawerTitle: "ເມນູ",
			listCattle: "ລາຍການໝູ",
			addCattle: "ເພີ່ມໝູ",
			farmInfo: "ຂໍໍມູນຟາມ",
			logout: "ອອກຈາກລະບົບ",
			version: "v 0.0.01",
			dateCreated: "ວັນທີສ້າງ",
			select: "ເລືອກ",
			statusCattleLabel: "ສະຖານະນຳເຂົ້າວັວ",
			status_label: "ສະຖານະນຳເຂົ້າວັວ",
			forgotPassword: "ລືມລະຫັດຜ່ານ",
			resetPassword: "ປ່ອນລະຫັດໃໝ່",
			growth: "ການເຕີບໂຕ",
			lineageOptions: [
				"ບໍ່ທັນສານພັນ - ບໍ່ທັນສານພັນ 75.0%, ອື່ນໆ 25%",
				"ຊິບູ - ຊິບູ 100.0%",
				"ຊິບູ - ຊິບູ 75.0%, ອື່ນໆ 25%",
				"THAI MILKING ZEBU - THAI MILKING ZEBU 100.0%",
				"THAI MILKING ZEBU - THAI MILKING ZEBU 75.0%, ອື່ນໆ 25%",
				"ຊາຮິວາລ - ຊາຮິວາລ 100.0%",
				"ຊາຮິວາລ - ຊາຮິວາລ 75.0%, ອື່ນໆ 25%",
				"SWEDISH RED - SWEDISH RED 100.0%",
				"SWEDISH RED - SWEDISH RED 75.0%, ອື່ນໆ 25%",
				"ຂາວ-ແດນ - ຂາວ-ແດນ 100.0%",
				"ຂາວ-ແດນ - ຂາວ-ແດນ 75.0%, ອື່ນໆ 25%",
				"ແລດຊິນຕີ - ແລດຊິນຕີ 100.0%",
				"ແລດຊິນຕີ - ແລດຊິນຕີ 75.0%, ອື່ນໆ 25%",
				"ແລດເດນ - ແລດເດນ 100.0%",
				"ແລດເດນ - ແລດເດນ 75.0%, ອື່ນໆ 25%",
				"ອາເມຣິກັນບຣາຮາ - ອາເມຣິກັນບຣາຮາ 100.0%",
				"ອາເມຣິກັນບຣາຮາ - ອາເມຣິກັນບຣາຮາ 75.0%, ອື່ນໆ 25%",
				"ມິລິງຊອດອນອິນ - ມິລິງຊອດອນອິນ 100.0%",
				"ມິລິງຊອດອນອິນ - ມິລິງຊອດອນອິນ 75.0%, ອື່ນໆ 25%",
				"ອິນເດຽນ - ອິນເດຽນ 100.0%",
				"ອິນເດຽນ - ອິນເດຽນ 75.0%, ອື່ນໆ 25%",
				"ຈິຣອລັນດໍ - ຈິຣອລັນດໍ 100.0%",
				"ຈິຣອລັນດໍ - ຈິຣອລັນດໍ 75.0%, ອື່ນໆ 25%",
				"ກີດ GIR GYR - ກີດ GIR GYR 100.0%",
				"ກີດ GIR GYR - ກີດ GIR GYR 75.0%, ອື່ນໆ 25%",
				"ຢູໂລປ - ຢູໂລປ 100.0%",
				"ຢູໂລປ - ຢູໂລປ 75.0%, ອື່ນໆ 25%",
				"ອິນເດຽນ - ອິນເດຽນ 100.0%",
				"ອິນເດຽນ - ອິນເດຽນ 75.0%, ອື່ນໆ 25%",
				"ໄອ໌ໃບ - ໄອ໌ໃບ 100.0%",
				"ໄອ໌ໃບ - ໄອ໌ໃບ 75.0%, ອື່ນໆ 25%",
				"ອອສເທລຽນ - ອອສເທລຽນ 100.0%",
				"ອອສເທລຽນ - ອອສເທລຽນ 75.0%, ອື່ນໆ 25%",
				"ອອສເທລຽນ - ອອສເທລຽນ 100.0%",
				"ອອສເທລຽນ - ອອສເທລຽນ 75.0%, ອື່ນໆ 25%",
				"ວົງໃສດົດ - ວົງໃສດົດ 100.0%",
				"ວົງໃສດົດ - ວົງໃສດົດ 75.0%, ອື່ນໆ 25%",
				"ກະທິ່ງ - ກະທິ່ງ 100.0%",
				"ກະທິ່ງ - ກະທິ່ງ 75.0%, ອື່ນໆ 25%",
				"ສິວິລອດສານບອດ - ສິວິລອດສານບອດ 100.0%",
				"ສິວິລອດສານບອດ - ສິວິລອດສານບອດ 75.0%, ອື່ນໆ 25%",
				"ປິໂຣຄ - ປິໂຮຕ 100.0%",
				"ປິໂຮຕ - ປິໂຮຕ 75.0%, ອື່ນໆ 25%",
				"ແກຊັອສ - ແກຊັອສ 100.0%",
				"ແກຊັອສ - ແກຊັອສ 75.0%, ອື່ນໆ 25%",
				"ວົງຂາວສິບູລ - ວົງຂາວສິບູລ 100.0%",
				"ວົງຂາວສິບູລ - ວົງຂາວສິບູລ 75.0%, ອື່ນໆ 25%",
			],
			createNotification: "ສ້າງການແຈ້ງເຕືອນ",
			save: "ບັນທຶກ",
			cancel: "ຍົກເລີກ",
			notificationDate: "ວັນທີແຈ້ງເຕືອນ",
			selectDate: "ກະລຸນາເລືອກວັນທີ",
			notificationTitle: "ຫົວຂໍ້ການແຈ້ງເຕືອນ",
			enterTitle: "ກະລຸນາໃສ່ຫົວຂໍ້",
			notificationTitlePlaceholder: "ກົດຫົວຂໍ້ການແຈ້ງເຕືອນ",
			notificationDescription: "ລາຍລະອຽດການແຈ້ງເຕືອນ",
			enterDescription: "ກະລຸນາໃສ່ລາຍລະອຽດ",
			notificationDescriptionPlaceholder: "ກົດລາຍລະອຽດການແຈ້ງເຕືອນ",
			notificationList: "ລາຍການການແຈ້ງເຕືອນ",
			loginSuccess: "ເຂົ້າລະບົບສຳເລັດ",
			categories: {
				3: "ລູກງົວ",
				5: "ງົວສາວ",
				7: "ແມ່ງົວຜະສົມ",
				9: "ແມ່ງົວຄອດ",
				11: "ງົວຄອດ",
				13: "ພໍ່ງົວ",
				15: "ງົວຂຸນ",
				17: "ງົວລຸ້ນ",
			},
			status_placeholder: "ກະລຸນາເລືອກສະຖານະ",
			please_select_breed: "ກະລຸນາເລືອກສາຍພັນ",
			weighingDay: "ວັນທີຊ່ອງ",
			cattle_growth: "ການເຕິບຕົວຂອງແຄວ",
			cattle_growth_statistics: "ສະຖິຕິການເຕິບຕົວຂອງແຄວ",
			noDataS: "ບໍ່ມີຂໍ້ມູນຄ່າເຊົາປະມານການເຕີບໂຕ",
			monthly_avg_weight: "ຄ່າເຊົາປະມານນ້ຳໜັກການເຕີບໂຕ",
			growth_average_chart: "ການຖາວຣະພາບຄ່າເຊົາປະມານການເຕີບໂຕ",
			select_type: "ເລືອກປະເພດ",
			select_growth: "ເລືອກການເຕີບໂຕ",
			individual_growth: "ເຕີບໂຕລາຍຕົວ",
			individual_growth_type: "ເຕີບໂຕລາຍປະເພດ",
			average_individual_growth: "ຄ່າເຊົາປະມານເຕີບໂຕລາຍຕົວ",
			average_individual_growth_type: "ຄ່າເຊົາປະມານເຕີບໂຕລາຍປະເພດ",
			No_growth_records_for_cattle: "ບໍ່ມີບັນທຶກການເຕີບໂຕຂອງລູກເຄົາ",
			select_cattle: "ເລືອກລູກເຄົາ",
			loginFailed: "ເຂົ້າລະບົບບໍ່ສໍາເລັດ",
			InvalidEmail: "ບໍ່ພົບອີເມລຂອງທ່ານ",
			InvalidPassword: "ລະຫັດຜ່ານຂອງທ່ານບໍ່ຖືກຕ້ອງ",
			cattleCreated: "ສ້າງຂໍ້ມູນງົວສໍາເລັດ",
			cattleCreatedSuccess: "ຂໍ້ມູນງົວຖືກສ້າງສໍາເລັດແລ້ວ",
			cattleUpdated: "ອັບເດດຂໍ້ມູນງົວສໍາເລັດ",
			cattleUpdatedSuccess: "ຂໍ້ມູນງົວຖືກອັບເດດສໍາເລັດແລ້ວ",
			cattleDeleted: "ລຶບຂໍ້ມູນງົວສໍາເລັດ",
			cattleDeletedSuccess: "ຂໍ້ມູນງົວຖືກລຶບສໍາເລັດແລ້ວ",
			infoUpdated: "ຂໍ້ມູນໄດ້ຮັບການອັບເດດ",
			UpdateSuccess: "ອັບເດດສໍາເລັດ!",
			add_weight_record: "ເພີ່ມນ້ຳໜັກໂຄ",
			enter_weight: "ກະລຸນາປ້ອນນ້ຳໜັກໂຄ",
			success_message: "ສຳເລັດ",
			success_description: "ບັນທຶກນ້ຳໜັກຂອງງົວສຳເລັດແລ້ວ!",
			error_message: "ຜິດພາດ",
			error_description: "ບໍ່ສາມາດສ້າງບັນທຶກນ້ຳໜັກໄດ້. ກະລຸນາລອງໃໝ່",
		},
	},
	th: {
		translation: {
			// --------- หน้า login ----------
			farmOwner: "เจ้าของฟาร์ม",
			hello: "สวัสดีค่ะ, คุณสามารถล็อกอินเข้าใช้งานได้ที่นี่",
			rulesEmail: "กรุณากรอกอีเมล!",
			rulesPass: "กรุณากรอกรหัสผ่าน!",
			login: "เข้าสู่ระบบ",
			forgotPass: "ลืมรหัสผ่าน",
			createUser: "สร้างบัญชี",
			createUsersuccess: "สร้างฟาร์มสำเร็จ",
			updateUser: "อัพเดทข้อมูลฟาร์มสำเร็จ",
			// --------- หน้า register ----------
			register: "ลงทะเบียน",
			welcome_message: "สวัสดีค่ะ, คุณสามารถลงทะเบียนเพื่อเข้าใช้งานได้ที่นี่",
			farmName: "ชื่อฟาร์ม",
			email: "อีเมล",
			firstName: "ชื่อ",
			lastName: "นามสกุล",
			password: "รหัสผ่าน",
			confirmPassword: "ยืนยันรหัสผ่าน",
			phoneNumber: "เบอร์โทรศัพท์",
			submit: "ตกลง",
			login_redirect: "กลับไปหน้า เข้าสู่ระบบ",
			address: "ที่อยู่ฟาร์ม",
			validation: {
				farmName: "กรุณากรอกชื่อฟาร์ม!",
				email: "กรุณากรอกอีเมล!",
				email_format: "รูปแบบอีเมลไม่ถูกต้อง!",
				firstName: "กรุณากรอกชื่อ!",
				lastName: "กรุณากรอกนามสกุล!",
				password: "กรุณากรอกรหัสผ่าน!",
				confirmPassword: "กรุณายืนยันรหัสผ่าน!",
				password_mismatch: "รหัสผ่านไม่ตรงกัน!",
				phoneNumber: "กรุณากรอกเบอร์โทร!",
				address: "กรุณากรอกที่อยู่ฟาร์ม!",
				password_length: "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร",
			},
			// --------- หน้า add Cattle ----------

			rfid_label: "เบอร์โค (RFID)",
			rfid_placeholder: "กรอกเบอร์โค (RFID)",
			name_label: "ชื่อโคที่นำเข้า",
			name_placeholder: "กรอกชื่อโคที่นำเข้า",
			gender_label: "เพศ",
			male: "เพศผู้",
			female: "เพศเมีย",
			weight_label: "น้ำหนักโค (Kg)",
			weight_placeholder: "กรอกน้ำหนักโค (Kg)",
			nid_label: "เบอร์โค (NID)",
			nid_placeholder: "กรอกเบอร์โค (NID)",
			lineage_label: "สายพันธุ์ของโคที่นำเข้า",
			lineage_placeholder: "กรอกสายพันธุ์",
			birthDate_label: "วันเกิดของโคที่นำเข้า",
			submit_button: "ตกลง",
			required_message: "กรุณากรอก",

			//-------forgot pass -------
			sentEmailSuccess: "ส่งอีเมลสำเร็จ",
			submissionFailed: "สมัครสมาชิกไม่สำเร็จ",
			emailPlaceholder: "กรุณากรอกอีเมลของคุณ",
			emailRequired: "กรุณากรอกอีเมลที่ถูกต้อง",
			confirmationText: "*กรุณากรอก email เพื่อยืนยันการเปลี่ยนรหัสผ่านด้วยค่ะ",

			//-----reset pass------
			resetPasswordSuccess: "รีเซ็ตรหัสผ่านสำเร็จ",
			resetPasswordFailure: "ไม่สามารถรีเซ็ตรหัสผ่านได้",
			noTokenFound: "ไม่พบโทเคน",
			passwordsDoNotMatch: "รหัสผ่านไม่ตรงกัน",
			newPasswordPlaceholder: "รหัสผ่านใหม่",
			confirmPasswordPlaceholder: "ยืนยันรหัสผ่านใหม่",
			inputNewPassword: "กรุณากรอกรหัสผ่านใหม่ของคุณ!",
			inputConfirmPassword: "กรุณายืนยันรหัสผ่านใหม่ของคุณ!",
			resetPasswordButton: "รีเซ็ตรหัสผ่าน",
			forgotPassword: "ลืมรหัสผ่าน",
			resetPassword: "รีเซ็ตรหัสผ่าน",

			//--------- list ----------
			searchPlaceholder: "ค้นหาวัวในฟาร์ม",
			addCattleButton: "นำเข้า",
			noCattleFound: "ไม่พบวัว",
			editModalTitle: "แก้ไขข้อมูลโค",
			rfidLabel: "เบอร์โค (RFID)",
			nameLabel: "ชื่อโคที่นำเข้า",
			genderLabel: "เพศ",
			genderMale: "เพศผู้",
			genderFemale: "เพศเมีย",
			weightLabel: "น้ำหนักโค (Kg)",
			lineageLabel: "สายพันธุ์",
			nidLabel: "เบอร์โค (NID)",
			birthDateLabel: "วันเกิดของโคที่นำเข้า",
			deleteButton: "ลบ",
			saveButton: "บันทึก",
			cancelButton: "ยกเลิก",
			// --------- nevbar -----
			drawerTitle: "เมนู",
			listCattle: "รายการโค",
			addCattle: "นำเข้าโค",
			farmInfo: "ข้อมูลฟาร์ม",
			logout: "ออกจากระบบ",
			version: "v 0.0.01",
			dateCreated: "วันที่สร้าง",
			weighingDay: "วันที่ชั่ง",
			select: "เลือก",
			statusCattleLabel: "สถานะนำเข้าวัว",
			status_label: "สถานะนำเข้าวัว",
			growth: "การเจริญเติบโต",

			lineageOptions: [
				"ไม่ทราบสายพันธุ์ - ไม่ทราบสายพันธุ์ 75.0%, อื่นๆ 25%",
				"ชีบู - ชีบู 100.0%",
				"ชีบู - ชีบู 75.0%, อื่นๆ 25%",
				"THAI MILKING ZEBU - THAI MILKING ZEBU 100.0%",
				"THAI MILKING ZEBU - THAI MILKING ZEBU 75.0%, อื่นๆ 25%",
				"ชาฮิวาล - ชาฮิวาล 100.0%",
				"ชาฮิวาล - ชาฮิวาล 75.0%, อื่นๆ 25%",
				"SWEDISH RED - SWEDISH RED 100.0%",
				"SWEDISH RED - SWEDISH RED 75.0%, อื่นๆ 25%",
				"ขาว-แดง - ขาว-แดง 100.0%",
				"ขาว-แดง - ขาว-แดง 75.0%, อื่นๆ 25%",
				"เรดซินตี้ - เรดซินตี้ 100.0%",
				"เรดซินตี้ - เรดซินตี้ 75.0%, อื่นๆ 25%",
				"เรดเดน - เรดเดน 100.0%",
				"เรดเดน - เรดเดน 75.0%, อื่นๆ 25%",
				"อเมริกันบราห์แดง - อเมริกันบราห์แดง 100.0%",
				"อเมริกันบราห์แดง - อเมริกันบราห์แดง 75.0%, อื่นๆ 25%",
				"มิลล์กิ้ง ชอทฮอนร์ - มิลล์กิ้ง ชอทฮอนร์ 100.0%",
				"มิลล์กิ้ง ชอทฮอนร์ - มิลล์กิ้ง ชอทฮอนร์ 75.0%, อื่นๆ 25%",
				"อินเดียน - อินเดียน 100.0%",
				"อินเดียน - อินเดียน 75.0%, อื่นๆ 25%",
				"จิโรล้านโด้ - จิโรล้านโด้ 100.0%",
				"จิโรล้านโด้ - จิโรล้านโด้ 75.0%, อื่นๆ 25%",
				"กีร์ GIR GYR - กีร์ GIR GYR 100.0%",
				"กีร์ GIR GYR - กีร์ GIR GYR 75.0%, อื่นๆ 25%",
				"ยุโรป - ยุโรป 100.0%",
				"ยุโรป - ยุโรป 75.0%, อื่นๆ 25%",
				"อินเดีย - อินเดีย 100.0%",
				"อินเดีย - อินเดีย 75.0%, อื่นๆ 25%",
				"ไอร์ไชร์ - ไอร์ไชร์ 100.0%",
				"ไอร์ไชร์ - ไอร์ไชร์ 75.0%, อื่นๆ 25%",
				"ออสเตรเลียน อิลลาเวร่า ชอตฮอร์น - ออสเตรเลียน อิลลาเวร่า ชอตฮอร์น 100.0%",
				"ออสเตรเลียน อิลลาเวร่า ชอตฮอร์น - ออสเตรเลียน อิลลาเวร่า ชอตฮอร์น 75.0%, อื่นๆ 25%",
				"ออสเตรเลียน ฟรีเชี่ยน ซาฮิวาล - ออสเตรเลียน ฟรีเชี่ยน ซาฮิวาล 100.0%",
				"ออสเตรเลียน ฟรีเชี่ยน ซาฮิวาล - ออสเตรเลียน ฟรีเชี่ยน ซาฮิวาล 75.0%, อื่นๆ 25%",
				"วัวแดง - วัวแดง 100.0%",
				"วัวแดง - วัวแดง 75.0%, อื่นๆ 25%",
				"กระทิง - กระทิง 100.0%",
				"กระทิง - กระทิง 75.0%, อื่นๆ 25%",
				"โคพื้นเมืองวัวชน - โคพื้นเมืองวัวชน 100.0%",
				"โคพื้นเมืองวัวชน - โคพื้นเมืองวัวชน 75.0%, อื่นๆ 25%",
				"ทาจิมะภูพาน - ทาจิมะภูพาน 100.0%",
				"ทาจิมะภูพาน - ทาจิมะภูพาน 75.0%, อื่นๆ 25%",
				"โคพื้นเมืองขาวลำพูน - โคพื้นเมืองขาวลำพูน 100.0%",
				"โคพื้นเมืองขาวลำพูน - โคพื้นเมืองขาวลำพูน 75.0%, อื่นๆ 25%",
				"กำแพงแสน - กำแพงแสน 100.0%",
				"กำแพงแสน - กำแพงแสน 75.0%, อื่นๆ 25%",
				"กบินทร์บุรี - กบินทร์บุรี 100.0%",
				"กบินทร์บุรี - กบินทร์บุรี 75.0%, อื่นๆ 25%",
				"วากิว - วากิว 100.0%",
				"วากิว - วากิว 75.0%, อื่นๆ 25%",
				"แบรงกัสอัลตราแบล็ค - แบรงกัสอัลตราแบล็ค 100.0%",
				"แบรงกัสอัลตราแบล็ค - แบรงกัสอัลตราแบล็ค 75.0%, อื่นๆ 25%",
				"ทาจิมะไทยแบล็ค - ทาจิมะไทยแบล็ค 100.0%",
				"ทาจิมะไทยแบล็ค - ทาจิมะไทยแบล็ค 75.0%, อื่นๆ 25%",
				"ตาก - ตาก 100.0%",
				"ตาก - ตาก 75.0%, อื่นๆ 25%",
				"ทาจิมะ - ทาจิมะ 100.0%",
				"ทาจิมะ - ทาจิมะ 75.0%, อื่นๆ 25%",
				"ซิมเมนทอล - ซิมเมนทอล 100.0%",
				"ซิมเมนทอล - ซิมเมนทอล 75.0%, อื่นๆ 25%",
				"ชอร์ตฮอร์น - ชอร์ตฮอร์น 100.0%",
				"ชอร์ตฮอร์น - ชอร์ตฮอร์น 75.0%, อื่นๆ 25%",
				"ซานต้า เทอร์ทรูดิส - ซานต้า เทอร์ทรูดิส 100.0%",
				"ซานต้า เทอร์ทรูดิส - ซานต้า เทอร์ทรูดิส 75.0%, อื่นๆ 25%",
				"เซเนโพล - เซเนโพล 100.0%",
				"เซเนโพล - เซเนโพล 75.0%, อื่นๆ 25%",
				"เรดบราห์มัน - เรดบราห์มัน 100.0%",
				"เรดบราห์มัน - เรดบราห์มัน 75.0%, อื่นๆ 25%",
				"เรดแองกัส - เรดแองกัส 100.0%",
				"เรดแองกัส - เรดแองกัส 75.0%, อื่นๆ 25%",
				"เรดแบรงกัส - เรดแบรงกัส 100.0%",
				"เรดแบรงกัส - เรดแบรงกัส 75.0%, อื่นๆ 25%",
				"โคพื้นเมือง - โคพื้นเมือง 100.0%",
				"โคพื้นเมือง - โคพื้นเมือง 75.0%, อื่นๆ 25%",
				"ลิมูซิน - ลิมูซิน 100.0%",
				"ลิมูซิน - ลิมูซิน 75.0%, อื่นๆ 25%",
				"อินดูบราซิล - อินดูบราซิล 100.0%",
				"อินดูบราซิล - อินดูบราซิล 75.0%, อื่นๆ 25%",
				"เฮียร์ฟอร์ด - เฮียร์ฟอร์ด 100.0%",
				"เฮียร์ฟอร์ด - เฮียร์ฟอร์ด 75.0%, อื่นๆ 25%",
				"ชอร์ฮอร์น - ชอร์ฮอร์น 100.0%",
				"ชอร์ฮอร์น - ชอร์ฮอร์น 75.0%, อื่นๆ 25%",
				"อัลมอนด์ - อัลมอนด์ 100.0%",
				"อัลมอนด์ - อัลมอนด์ 75.0%, อื่นๆ 25%",
			],
			createNotification: "สร้างการแจ้งเตือน",
			save: "บันทึก",
			cancel: "ยกเลิก",
			notificationDate: "วันที่แจ้งเตือน",
			selectDate: "กรุณาเลือกวันที่",
			notificationTitle: "หัวข้อการแจ้งเตือน",
			enterTitle: "กรุณาใส่หัวข้อ",
			notificationTitlePlaceholder: "กรอกหัวข้อการแจ้งเตือน",
			notificationDescription: "รายละเอียดการแจ้งเตือน",
			enterDescription: "กรุณาใส่รายละเอียด",
			notificationDescriptionPlaceholder: "กรอกรายละเอียดการแจ้งเตือน",
			notificationList: "รายการการแจ้งเตือน",
			loginSuccess: "เข้าสู่ระบบสำเร็จ",
			categories: {
				3: "ลูกโค",
				5: "โคสาว",
				7: "แม่โครอผสม",
				9: "แม่โครอคลอด",
				11: "โคคลอด",
				13: "พ่อโค",
				15: "โคขุน",
				17: "โครุ่น",
			},
			status_placeholder: "กรุณาเลือกสถานะ",
			please_select_breed: "กรุณาเลือกสายพันธุ์",
			cattle_growth: "การเจริญเติบโตของโค",
			cattle_growth_statistics: "สถิติการเจริญเติบโตของโค",
			noDataS: "ไม่มีข้อมูลค่าเฉลี่ยการเจริญเติบโต",
			monthly_avg_weight: "ค่าเฉลี่ยน้ำหนักการเจริญเติบโต",
			growth_average_chart: "กราฟค่าเฉลี่ยการเจริญเติบโต",
			select_type: "เลือกประเภท",
			select_growth: "เลือกการเติบโต",
			individual_growth: "เติบโตรายตัว",
			individual_growth_type: "เติบโตรายประเภท",
			average_individual_growth: "ค่าเฉลี่ยเติบโตรายตัว",
			average_individual_growth_type: "ค่าเฉลี่ยเติบโตรายประเภท",
			No_growth_records_for_cattle: "ไม่มีรายการการเจริญเติบโตของโค",
			select_cattle: "เลือกวัว",
			loginFailed: "เข้าสู่ระบบไม่สำเร็จ",
			InvalidEmail: "ไม่พบอีเมลของท่าน",
			InvalidPassword: "รหัสผ่านของท่านไม่ถูกต้อง",
			cattleCreated: "สร้างข้อมูลโคสำเร็จ",
			cattleCreatedSuccess: "ข้อมูลโคถูกสร้างสำเร็จแล้ว",
			cattleUpdated: "อัปเดตข้อมูลโคสำเร็จ",
			cattleUpdatedSuccess: "ข้อมูลโคถูกอัปเดตสำเร็จแล้ว",
			cattleDeleted: "ลบข้อมูลโคสำเร็จ",
			cattleDeletedSuccess: "ข้อมูลโคถูกลบสำเร็จแล้ว",
			infoUpdated: "ข้อมูลได้รับการอัปเดต",
			UpdateSuccess: "อัปเดตสำเร็จ!",
			add_weight_record: "เพิ่มน้ำหนักโค",
			enter_weight: "กรุณากรอกน้ำหนักโค",
			success_message: "สำเร็จ",
			success_description: "บันทึกน้ำหนักของวัวสำเร็จแล้ว!",
			error_message: "ข้อผิดพลาด",
			error_description: "ไม่สามารถสร้างบันทึกน้ำหนักได้ กรุณาลองอีกครั้ง",
		},
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: typeof window !== "undefined" ? localStorage.getItem("language") || "th" : "th",
		fallbackLng: "th",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
