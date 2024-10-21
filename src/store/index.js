import { createStore } from 'vuex';
import i18n from '../i18n';

export default new createStore({
    state: {
        layout: 'app',
        is_show_sidebar: true,
        is_show_search: false,
        is_dark_mode: false,
        dark_mode: 'light',
        locale: null,
        menu_style: 'vertical',
        layout_style: 'full',
        countryList: [
            { code: 'zh', name: 'Chinese' },
            { code: 'da', name: 'Danish' },
            { code: 'en', name: 'English' },
            { code: 'fr', name: 'French' },
            { code: 'de', name: 'German' },
            { code: 'el', name: 'Greek' },
            { code: 'hu', name: 'Hungarian' },
            { code: 'it', name: 'Italian' },
            { code: 'ja', name: 'Japanese' },
            { code: 'pl', name: 'Polish' },
            { code: 'pt', name: 'Portuguese' },
            { code: 'ru', name: 'Russian' },
            { code: 'es', name: 'Spanish' },
            { code: 'sv', name: 'Swedish' },
            { code: 'tr', name: 'Turkish' },
        ],
        termDateMap: {
            // 2021
            "Winter (A) 2021": "01/11/2021",
            "Winter (B) 2021": "02/08/2021",
            "Winter (C) 2021": "03/08/2021",
            "Winter (D) 2021": "04/05/2021",
            "Summer (A) 2021": "05/10/2021",
            "Summer (B) 2021": "06/07/2021",
            "Summer (C) 2021": "07/05/2021",
            "Summer (D) 2021": "08/02/2021",
            "Fall (A) 2021": "09/07/2021",
            "Fall (B) 2021": "10/04/2021",
            "Fall (C) 2021": "11/01/2021",
            "Fall (D) 2021": "11/29/2021",

            // 2022
            "Winter (A) 2022": "01/10/2022",
            "Winter (B) 2022": "02/07/2022",
            "Winter (C) 2022": "03/07/2022",
            "Winter (D) 2022": "04/04/2022",
            "Summer (A) 2022": "05/09/2022",
            "Summer (B) 2022": "06/06/2022",
            "Summer (C) 2022": "07/05/2022",
            "Summer (D) 2022": "08/01/2022",
            "Fall (A) 2022": "08/29/2022",
            "Fall (B) 2022": "09/26/2022",
            "Fall (C) 2022": "10/24/2022",
            "Fall (D) 2022": "11/21/2022",

            // 2023
            "Winter (A) 2023": "01/09/2023",
            "Winter (B) 2023": "02/06/2023",
            "Winter (C) 2023": "03/06/2023",
            "Winter (D) 2023": "04/03/2023",
            "Summer (A) 2023": "05/08/2023",
            "Summer (B) 2023": "06/05/2023",
            "Summer (C) 2023": "07/03/2023",
            "Summer (D) 2023": "07/31/2023",
            "Fall (A) 2023": "08/28/2023",
            "Fall (B) 2023": "09/25/2023",
            "Fall (C) 2023": "10/23/2023",
            "Fall (D) 2023": "11/20/2023",

            // 2024
            "Winter (A) 2024": "01/08/2024",
            "Winter (B) 2024": "02/05/2024",
            "Winter (C) 2024": "03/04/2024",
            "Winter (D) 2024": "04/01/2024",
            "Summer (A) 2024": "05/06/2024",
            "Summer (B) 2024": "06/03/2024",
            "Summer (C) 2024": "07/01/2024",
            "Summer (D) 2024": "07/29/2024",
            "Fall (A) 2024": "08/26/2024",
            "Fall (B) 2024": "09/23/2024",
            "Fall (C) 2024": "10/21/2024",
            "Fall (D) 2024": "11/18/2024",

            // 2025
            "Winter (A) 2025": "01/06/2025",
            "Winter (B) 2025": "02/03/2025",
            "Winter (C) 2025": "03/04/2025",
            "Winter (D) 2025": "03/31/2025",
            "Summer (A) 2025": "05/05/2025",
            "Summer (B) 2025": "06/02/2025",
            "Summer (C) 2025": "06/30/2025",
            "Summer (D) 2025": "07/28/2025",
            "Fall (A) 2025": "08/25/2025",
            "Fall (B) 2025": "09/22/2025",
            "Fall (C) 2025": "10/20/2025",
            "Fall (D) 2025": "11/17/2025"
        },
        programs_versions: {
            "AS Info. Tech.": [
                "AS Computer Information Technology",
                "AS Information Technology"
            ],
            "AS Info. Tech. DE": [
                "AS Computer Information Technology (O)",
                "AS Information Technology (O)",
                "AS Information Technology (O.S)"
            ],
            "BS Mgmt. Info Sys": [
                "BS Management Information Systems"
            ],
            "BS Mgmt Info Sys DE": [
                "BS Management Information Systems (O)"
            ],
            "MS Info. Tech.": [
                "Master of Information Technology"
            ],
            "MBA": [
                "* MBA Major: Business Intelligence and Analytics ",
                "MBA in Business Intelligence and Analytics",
                "MBA in Digital Marketing (OS)",
                "MBA in Information Technology",
                "MBA in International Business",
                "MBA Major: Management & Innovation in Energy Proje",
                "MBA Master of Business Administration",
                "MBA Master of Business Administration (O)",
                "MBA Master of Business Administration (O.S)"
            ],
            "MS Info. Tech. DE": [
                "MIT Master of Information Technology (E)",
                "Master of Information Technology (O)",
                "Master of Information Technology (O.S)"
            ],
            "AS Business Admin.": [
                "AS Business Administration"
            ],
            "AS Business Administration DE": [
                "AS Business Administration (O)",
                "AS Business Administration (O.S)"
            ],
            "AS Int. Business": [
                "AS International Business"
            ],
            "AS Int. Bus.DE": [
                "AS International Business (O)",
                "AS International Business (O.S)"
            ],
            "BS Nursing": [
                "Bachelor of Science in Nursing (RN to BSN)"
            ],
            "BS Nursing DE": [
                "Bachelor of Science in Nursing (RN to BSN) (O)",
                "Bachelor of Science in Nursing (RN to BSN) (O.S)",
                "Bachelor of Science in Nursing (RN to BSN) (O.S) "
            ],
            "BS Business Admin.": [
                "BS Business Administration",
                "BS Business Administration - Health Management"
            ],
            "BS Business Administration DE": [
                "BS Business Administration (O)",
                "BS Business Administration (O.S)",
                "BS Business Administration(International Business)"
            ],
            "BS Computer Eng.": [
                "BS Computer Engineering",
                "BS Computer Engineering (O)"
            ],
            "BS Inf. Tech.": [
                "BS Information Technology"
            ],
            "BS Info Tech (DE)": [
                "BS Information Technology (O)",
                "BS Information Technology (O.S)"
            ],
            "Comp. Net. Prof.": [
                "CNP - Computer Network Professional"
            ],
            "MS Business Admin.": [
                "Master of Business Administration - MBA. V1",
                "Master of Business Administration - MBA. V2",
                "Master of Science in Business Administration (MS)"
            ],
            "MS Business Administration DE": [
                "Master of Science Business Administration MS (O)",
                "Master of Science in Business Administration (MS.O.S)"
            ],
            "MS Computer Eng.": [
                "Master of Science in Computer Engineering",
                "Master of Science in Computer Engineering (O)"
            ],
            "MS Cybersecurity": [
                "Master of Science in Cybersecurity"
            ],
            "MS Cybersecurity DE": [
                "Master of Science in Cybersecurity (O)",
                "Master of Science in Cybersecurity (O.S)"
            ],
            "MS Education": [
                "Master of Science in Education (O.S)"
            ],
            "MS Health. Mgmt.": [
                "Master of Science in Healthcare Management"
            ],
            "MS Healthcare Management DE": [
                "Master of Science in Healthcare Management (O)",
                "Master of Science in Healthcare Management (O.S)"
            ],
            "MS Hospitality Mgmt.": [
                "Master of Science in Hospitality Management"
            ],
            "MS Nursing": [
                "Master of Science in Nursing (O.S)"
            ],
            "Microsoft IT Prof.": [
                "MITP - Microsoft Certified IT Professional"
            ]
        },
        programMonthsMap: {
            "20": [
                "MS Business Admin.",
                "AS Business Admin.",
                "AS Business Administration DE",
                "MS Business Administration DE",
                "MS Computer Eng.",
                "AS Comp I. Tech",
                "AS Info. Tech. DE",
                "MS Health. Mgmt.",
                "MS Info. Tech.",
                "MS Info. Tech. DE",
                "AS Int. Business",
                "AS Int. Bus.DE",
                "MS Hospitality Mgmt.",
                "MS Healthcare Management DE",
                "AS Info. Tech.",
                "BS Nursing",
                "BS Nursing DE"
            ],
            "41": [
                "BS Business Admin.",
                "BS Business Administration DE",
                "BS Computer Eng.",
                "BS Mgmt. Info Sys",
                "BS Mgmt Info Sys DE",
                "BS Inf. Tech.",
                "BS Info Tech (DE)"
            ],
            14: [
                "Comp. Net. Prof.",
                "Comp. Info. Tech."
            ],
            4: [
                "Comp. Net. Tech.",
                "Sys. & Net. Admin.",
                "Network Op."
            ],
            6: [
                "Microsoft IT Prof.",
                "Ent. Cloud Prof."
            ],
            8: [
                "Office Admin."
            ],
            5: [
                "InfoSec Prof."
            ],
            24: [
                "MBA"
            ],
            15: [
                "MS Cybersecurity",
                "MS Cybersecurity DE"
            ],
            12: [
                "MS Nursing",
                "MS Education"
            ]
        }

    },
    mutations: {
        // Mutaciones para gestionar el mapa de términos si es necesario
        setTermDateMap(state, newMap) {
            state.termDateMap = newMap;
        },
        setLayout(state, payload) {
            state.layout = payload;
        },
        toggleSideBar(state, value) {
            state.is_show_sidebar = value;
        },
        toggleSearch(state, value) {
            state.is_show_search = value;
        },
        toggleLocale(state, value) {
            value = value || 'en';
            i18n.global.locale = value;
            localStorage.setItem('i18n_locale', value);
            state.locale = value;
        },

        toggleDarkMode(state, value) {
            //light|dark|system
            value = value || 'light';
            localStorage.setItem('dark_mode', value);
            state.dark_mode = value;
            if (value == 'light') {
                state.is_dark_mode = false;
            } else if (value == 'dark') {
                state.is_dark_mode = true;
            } else if (value == 'system') {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    state.is_dark_mode = true;
                } else {
                    state.is_dark_mode = false;
                }
            }

            if (state.is_dark_mode) {
                document.querySelector('body').classList.add('dark');
            } else {
                document.querySelector('body').classList.remove('dark');
            }
        },

        toggleMenuStyle(state, value) {
            //horizontal|vertical|collapsible-vertical
            value = value || '';
            localStorage.setItem('menu_style', value);
            state.menu_style = value;
            if (!value || value === 'vertical') {
                state.is_show_sidebar = true;
            } else if (value === 'collapsible-vertical') {
                state.is_show_sidebar = false;
            }
        },

        toggleLayoutStyle(state, value) {
            //boxed-layout|large-boxed-layout|full
            value = value || '';
            localStorage.setItem('layout_style', value);
            state.layout_style = value;
        },
    },
    getters: {
        layout(state) {
            return state.layout;
        },
        getTermDateMap(state) {
            return state.termDateMap;
        },
        getProgramsVersions(state) {
            return state.programs_versions;
        },
        getProgramMonthsMap(state) {
            return state.programMonthsMap;
        },
    },
    actions: {},
    modules: {},
});