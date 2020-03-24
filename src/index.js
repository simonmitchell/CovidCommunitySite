import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
        	cy: {
                translation: {
                	category: {
	            		all: "Popeth",
	            		services: "Gwasanaethau",
	            		food: "Bwyd",
	            		groceries: "Bwydydd",
	            		community: "Cymuned",
	            		healthcare: "Gofal Iechyd",
	            		foodbank: "Banc Bwyd",
	            		laundry: "Golchdy",
	            		transport: "Trafnidiaeth"
	            	},
                	regions: {
                		all: "Popeth"
                	},
                	subCategory: {
                		community_support: "Cefnogaeth Gymunedol",
                		community_information: "Gwybodaeth Gymunedol",
                		fruit_and_veg: "Ffrwythau a Llysiau",
                		meals_on_wheels: "Pryd ar Glud",
                		restaurant: "Bwyty",
                		cafe: "Caffi",
                		bakery: "Pobydd",
                		butchers: "Cigyddion",
                		fish_and_chips: "Pysgod a Sglodion",
                		fishmonger: "Pysgod",
                		laundry: "Golchdy",
                		shop: "Siop",
                		foodbank: "Banc Bwyd",
                		hotel: "Gwesty",
                		tv: "Teledu",
                		milkman: "Dyn Llaeth",
                		pharmacist: "Fferyllydd",
                		taxi: "Tasci"
                	},
                    home: {
                    	searchPlaceholder: "Chwilio yn ôl enw, tref, neu gategori",
                        title: "Adnoddau Ceredigion",
                        updated: "Wedi'i ddiweddaru ddiwethaf: {{time_ago}}",
                        noResults: "Dim canlyniadau. Trio chwilo am rhywbeth arall"
                    }
                }
            },
            en: {
                translation: {
                	category: {
	            		all: "All",
	            		services: "Services",
	            		food: "Food",
	            		community: "Community",
	            		groceries: "Groceries",
	            		healthcare: "Healthcare",
	            		foodbank: "Food Bank",
	            		laundry: "Laundry",
	            		transport: "Transport"
	            	},
                	regions: {
                		all: "All"
                	},
                	subCategory: {
                		community_support: "Community Support",
                		community_information: "Community Information",
                        deli: "Deli",
                		fruit_and_veg: "Fruit & Veg",
                		meals_on_wheels: "Meals on Wheels",
                		restaurant: "Restaurant",
                		bakery: "Bakery",
                		cafe: "Café",
                		butchers: "Butchers",
                		fish_and_chips: "Fish & Chips",
                		fishmonger: "Fishmonger",
                		laundry: "Laundy",
                		shop: "Shop",
                		foodbank: "Food Bank",
                		hotel: "Hotel",
                		tv: "TV",
                		milkman: "Milkman",
                		pharmacist: "Pharmacist",
                		taxi: "Taxi"
                	},
                    home: {
                        getListed: "Get Listed",
                    	searchPlaceholder: "Search by name, town, or category",
                        title: "Ceredigion Resources",
                        updated: "Last updated: {{time_ago}}",
                        noResults: "No results. Try searching for something else or switching to another area"
                    },
                    submit: {
                        linkTitlePlaceholder: "Title",
                        linkURLPlaceholder: "https://facebook.com, tel:01111111111, mailto://email@example.com",
                        contactPlaceholder: "01111 111111",
                        townPlaceholder: "Town",
                        namePlaceholder: "Name",
                        descriptionPlaceholder: "Description",
                        addressNamePlaceholder: "Name",
                        addressStreetPlaceholder: "Street",
                        addressCityPlaceholder: "Town",
                        addressPostcodePlaceholder: "Post Code",
                        addOrganiser: "Add organiser",
                        organiserName: "Name",
                        organiserContact: "Contact",
                        removeOrganiser: "Remove",
                        addLink: "Add link",
                        removeLink: "Remove",
                        link: "Link {{index}}",
                        linkUrl: "URL",
                        organisers: "Organisers",
                        organiser: "Organiser {{index}}",
                        title: "Home",
                        links: "Links",
                        city: "City (The city, town, or areas you service)",
                        instructions: "Please fill in the below form and send the text at the bottom to: simonmitchell.dev@gmail.com",
                        description: "Description",
                        name: "Name",
                        category: "Category (Not displayed, but used for filtering)",
                        subCategory: "Sub-category",
                        preview: "Preview"
                    }
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App/></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
