/* eslint-disable react/jsx-pascal-case */
import React , {useEffect,useState ,Fragment , useRef} from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import Aos from 'aos';
import { AiOutlineClose } from "react-icons/ai";
import ReactLoading from 'react-loading';
import store from './Redux/store';
import emailjs from "emailjs-com"
import axios from 'axios'
import cryptoRandomString from 'crypto-random-string';

//#region IMPORT HEADER + FOOTER
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";
//#endregion

//#region IMPORT CARD + DETAIL + PAGINATION
import Card from './component/Pages/Card'
import CardDetail from "./component/Pages/CardDetail";
import Datatable from "./component/Pages/Filtre Research/Datatable";
//#endregion

//#region IMPORT PAGE PRINCIPAL
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Command from './component/Pages/Command';
import ContactUs from './component/Pages/ContactUs';
import FilterSearch from './component/Pages/Filtre Research/FilterSearch';
import Profile from './component/Pages/Profile.js'
import General_Condition from "./component/Pages/General Condition";
import Politique_de_Comfidentialite from "./component/Pages/Politique de Comfidentialite";
import Mention_Legal from "./component/Pages/Mention Legal";
import Bienvenu from "./component/Pages/Bienvenu";
import InscriptionConnection2 from "./component/Inscription&Connection/InscriptionConnection2";
import Mots_de_passe_Oublier from "./component/Pages/Mots de passe Oublier";
import Erreur_Page from "./component/ErreurPage/ErreurPage";
//#endregion

//#region IMPORT PAGE ARTICLE DE TOUTE CATEGORIES

import Bagues from './component/Categories/Bagues/Bagues.js';

import Alliances from './component/Categories/Bagues/Bagues Dropdown/Alliances.js';
import Alliences_Homme from './component/Categories/Bagues/Bagues Genres/Alliances/Alliances Homme.js';
import Alliences_Femme from './component/Categories/Bagues/Bagues Genres/Alliances/Alliances Femme.js';
import Alliences_Enfant from './component/Categories/Bagues/Bagues Genres/Alliances/Alliances Enfant.js';
import Alliences_Mix from './component/Categories/Bagues/Bagues Genres/Alliances/Alliances Mix.js';

import Autres_Bagues from './component/Categories/Bagues/Bagues Dropdown/Autres Bagues.js';
import Autres_Bagues_Homme from './component/Categories/Bagues/Bagues Genres/Autres Bagues/Autres Bagues Homme.js';
import Autres_Bagues_Femme from './component/Categories/Bagues/Bagues Genres/Autres Bagues/Autres Bagues Femme.js';
import Autres_Bagues_Enfant from './component/Categories/Bagues/Bagues Genres/Autres Bagues/Autres Bagues Enfant.js';
import Autres_Bagues_Mix from './component/Categories/Bagues/Bagues Genres/Autres Bagues/Autres Bagues Mix.js';

import Chevalières from './component/Categories/Bagues/Bagues Dropdown/Chevalières.js';
import Chevalières_Homme from './component/Categories/Bagues/Bagues Genres/Chevalières/Chevalières Homme.js';
import Chevalières_Femme from './component/Categories/Bagues/Bagues Genres/Chevalières/Chevalières Femme.js';
import Chevalières_Enfant from './component/Categories/Bagues/Bagues Genres/Chevalières/Chevalières Enfant.js';
import Chevalières_Mix from './component/Categories/Bagues/Bagues Genres/Chevalières/Chevalières Mix.js';

import Solitaires from './component/Categories/Bagues/Bagues Dropdown/Solitaires.js';
import Solitaires_Homme from './component/Categories/Bagues/Bagues Genres/Solitaires/Solitaires Homme.js';
import Solitaires_Femme from './component/Categories/Bagues/Bagues Genres/Solitaires/Solitaires Femme.js';
import Solitaires_Enfant from './component/Categories/Bagues/Bagues Genres/Solitaires/Solitaires Enfant.js';
import Solitaires_Mix from './component/Categories/Bagues/Bagues Genres/Solitaires/Solitaires Mix.js';

import Boucles_d_oreilles from './component/Categories/Boucle d_oreilles/Boucles d_oreilles.js';

import Autres_Boucles_d_oreilles from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Dropdown/Autres Boucles d_oreilles.js';
import Autres_Boucles_d_oreilles_Homme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Autres Boucles d_oreilles/Autres Boucles d_oreilles Homme.js';
import Autres_Boucles_d_oreilles_Femme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Autres Boucles d_oreilles/Autres Boucles d_oreilles Femme.js';
import Autres_Boucles_d_oreilles_Enfant from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Autres Boucles d_oreilles/Autres Boucles d_oreilles Enfant.js';
import Autres_Boucles_d_oreilles_Mix from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Autres Boucles d_oreilles/Autres Boucles d_oreilles Mix.js';

import Créoles from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Dropdown/Créoles.js';
import Créoles_Homme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Créoles/Créoles Homme.js';
import Créoles_Femme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Créoles/Créoles Femme.js';
import Créoles_Enfant from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Créoles/Créoles Enfant.js';
import Créoles_Mix from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Créoles/Créoles Mix.js';

import Pendantes from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Dropdown/Pendantes.js';
import Pendantes_Homme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Pendantes/Pendantes Homme.js';
import Pendantes_Femme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Pendantes/Pendantes Femme.js';
import Pendantes_Enfant from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Pendantes/Pendantes Enfant.js';
import Pendantes_Mix from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Pendantes/Pendantes Mix.js';

import Puces from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Dropdown/Puces.js';
import Puces_Homme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Puces/Puces Homme.js';
import Puces_Femme from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Puces/Puces Femme.js';
import Puces_Enfant from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Puces/Puces Enfant.js';
import Puces_Mix from './component/Categories/Boucle d_oreilles/Boucles d_oreilles Genres/Puces/Puces Mix.js';

import Bracelets from './component/Categories/Bracelets/Bracelets.js';

import Autres_Bracelets from './component/Categories/Bracelets/Bracelets Dropdown/Autres Bracelets.js';
import Autres_Bracelets_Homme from './component/Categories/Bracelets/Bracelets Genres/Autres Bracelets/Autres Bracelets Homme.js';
import Autres_Bracelets_Femme from './component/Categories/Bracelets/Bracelets Genres/Autres Bracelets/Autres Bracelets Femme.js';
import Autres_Bracelets_Enfant from './component/Categories/Bracelets/Bracelets Genres/Autres Bracelets/Autres Bracelets Enfant.js';
import Autres_Bracelets_Mix from './component/Categories/Bracelets/Bracelets Genres/Autres Bracelets/Autres Bracelets Mix.js';

import Bracelets_Identité from './component/Categories/Bracelets/Bracelets Dropdown/Bracelets Identité.js';
import Bracelets_Identité_Homme from './component/Categories/Bracelets/Bracelets Genres/Bracelets Identité/Bracelets Identité Homme.js';
import Bracelets_Identité_Femme from './component/Categories/Bracelets/Bracelets Genres/Bracelets Identité/Bracelets Identité Femme.js';
import Bracelets_Identité_Enfant from './component/Categories/Bracelets/Bracelets Genres/Bracelets Identité/Bracelets Identité Enfant.js';
import Bracelets_Identité_Mix from './component/Categories/Bracelets/Bracelets Genres/Bracelets Identité/Bracelets Identité Mix.js';

import Bracelets_Rigides from './component/Categories/Bracelets/Bracelets Dropdown/Bracelets Rigides.js';
import Bracelets_Rigides_Homme from './component/Categories/Bracelets/Bracelets Genres/Bracelets Rigides/Bracelets Rigides Homme.js';
import Bracelets_Rigides_Femme from './component/Categories/Bracelets/Bracelets Genres/Bracelets Rigides/Bracelets Rigides Femme.js';
import Bracelets_Rigides_Enfant from './component/Categories/Bracelets/Bracelets Genres/Bracelets Rigides/Bracelets Rigides Enfant.js';
import Bracelets_Rigides_Mix from './component/Categories/Bracelets/Bracelets Genres/Bracelets Rigides/Bracelets Rigides Mix.js';


import Collections from './component/Categories/Collections/Collections';
import Collection_Acier from './component/Categories/Collections/Collection Dropdown/Collection Acier.js';
import Collection_Argent_925_ml from './component/Categories/Collections/Collection Dropdown/Collection Argent 925 millièmes.js';
import Collection_Diamants from './component/Categories/Collections/Collection Dropdown/Collection Diamants.js';
import Collection_Or_9_Carats_375_ml from './component/Categories/Collections/Collection Dropdown/Collection Or 9 Carats 375 millièmes.js';
import Collection_Or_18_Carats_750_ml from './component/Categories/Collections/Collection Dropdown/Collection Or 18 Carats 750 millièmes.js';

import Colliers_Chaînes from './component/Categories/Colliers/Colliers Chaînes.js';

import Colliers from './component/Categories/Colliers//Collier Dropdown/Colliers.js';
import Colliers_Homme from './component/Categories/Colliers/Collier Genres/Colliers/Colliers Homme.js';
import Colliers_Femme from './component/Categories/Colliers/Collier Genres/Colliers/Colliers Femme.js';
import Colliers_Enfant from './component/Categories/Colliers/Collier Genres/Colliers/Colliers Enfant.js';
import Colliers_Mix from './component/Categories/Colliers/Collier Genres/Colliers/Colliers Mix.js';

import Autres_Chaînes from './component/Categories/Colliers/Collier Dropdown/Autres Chaînes.js';
import Autres_Chaînes_Homme from './component/Categories/Colliers/Collier Genres/Autres Chaînes/Autres Chaînes Homme.js';
import Autres_Chaînes_Femme from './component/Categories/Colliers/Collier Genres/Autres Chaînes/Autres Chaînes Femme.js';
import Autres_Chaînes_Enfant from './component/Categories/Colliers/Collier Genres/Autres Chaînes/Autres Chaînes Enfant.js';
import Autres_Chaînes_Mix from './component/Categories/Colliers/Collier Genres/Autres Chaînes/Autres Chaînes Mix.js';

import Chaînes_Fines from './component/Categories/Colliers/Collier Dropdown/Chaînes Fines.js';
import Chaînes_Fines_Homme from './component/Categories/Colliers/Collier Genres/Chaînes Fines/Chaînes Fines Homme.js';
import Chaînes_Fines_Femme from './component/Categories/Colliers/Collier Genres/Chaînes Fines/Chaînes Fines Femme.js';
import Chaînes_Fines_Enfant from './component/Categories/Colliers/Collier Genres/Chaînes Fines/Chaînes Fines Enfant.js';
import Chaînes_Fines_Mix from './component/Categories/Colliers/Collier Genres/Chaînes Fines/Chaînes Fines Mix.js';


import Parures from './component/Categories/Parures/Parures.js';
import Parures_Homme from './component/Categories/Parures/Parures Genres/Parures Hommes.js';
import Parures_Femme from './component/Categories/Parures/Parures Genres/Parures Femme.js';
import Parures_Enfant from './component/Categories/Parures/Parures Genres/Parures Enfant.js';
import Parures_Mix from './component/Categories/Parures/Parures Genres/Parures Mix.js';


import Pendentifs from './component/Categories/Pendentifs/Pendentifs.js';

import Autres_Pendentifs from './component/Categories/Pendentifs/Pendentifs Dropdown/Autres Pendentifs.js';
import Autres_Pendentifs_Homme from './component/Categories/Pendentifs/Pendentifs Genres/Autres Pendentifs/Autres Pendentifs Homme.js';
import Autres_Pendentifs_Femme from './component/Categories/Pendentifs/Pendentifs Genres/Autres Pendentifs/Autres Pendentifs Femme.js';
import Autres_Pendentifs_Enfant from './component/Categories/Pendentifs/Pendentifs Genres/Autres Pendentifs/Autres Pendentifs Enfant.js';
import Autres_Pendentifs_Mix from './component/Categories/Pendentifs/Pendentifs Genres/Autres Pendentifs/Autres Pendentifs Mix.js';

import Pendentifs_Religieux from './component/Categories/Pendentifs/Pendentifs Dropdown/Pendentifs Religieux.js';
import Pendentifs_Religieux_Homme from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Religieux/Pendentifs Religieux Homme.js';
import Pendentifs_Religieux_Femme from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Religieux/Pendentifs Religieux Femme.js';
import Pendentifs_Religieux_Enfant from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Religieux/Pendentifs Religieux Enfant.js';
import Pendentifs_Religieux_Mix from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Religieux/Pendentifs Religieux Mix.js';

import Pendentifs_Plaque from './component/Categories/Pendentifs/Pendentifs Dropdown/Pendentifs Plaque.js';
import Pendentifs_Plaque_Homme from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Plaque/Pendentifs Plaque Homme.js';
import Pendentifs_Plaque_Femme from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Plaque/Pendentifs Plaque Femme.js';
import Pendentifs_Plaque_Enfant from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Plaque/Pendentifs Plaque Enfant.js';
import Pendentifs_Plaque_Mix from './component/Categories/Pendentifs/Pendentifs Genres/Pendentifs Plaque/Pendentifs Plaque Mix.js';


import Piercings from './component/Categories/Percings/Piercings.js';

import Piercings_Nez from "./component/Categories/Percings/Piercings Dropdown/Piercings Nez";
import Piercings_Nez_Homme from './component/Categories/Percings/Piercings Genres/Piercings Nez/Piercings Nez Homme.js';
import Piercings_Nez_Femme from './component/Categories/Percings/Piercings Genres/Piercings Nez/Piercings Nez Femme.js';
import Piercings_Nez_Enfant from './component/Categories/Percings/Piercings Genres/Piercings Nez/Piercings Nez Enfant.js';
import Piercings_Nez_Mix from './component/Categories/Percings/Piercings Genres/Piercings Nez/Piercings Nez Mix.js';

import Piercings_Divers from './component/Categories/Percings/Piercings Dropdown/Piercings Divers.js';
import Piercings_Divers_Homme from './component/Categories/Percings/Piercings Genres/Piercings Divers/Piercings Divers Homme.js';
import Piercings_Divers_Femme from './component/Categories/Percings/Piercings Genres/Piercings Divers/Piercings Divers Femme.js';
import Piercings_Divers_Enfant from './component/Categories/Percings/Piercings Genres/Piercings Divers/Piercings Divers Enfant.js';
import Piercings_Divers_Mix from './component/Categories/Percings/Piercings Genres/Piercings Divers/Piercings Divers Mix.js';
//#endregion

//#region IMPORT CSS
import './App.css'
import './component/Categories/styles/Categorie.css'
import './component/Pages/styles/Page.css'
import 'aos/dist/aos.css'
import 'react-phone-input-2/lib/style.css';
import './component/Pages/styles/Datatable.css'
import ErreurPage from "./component/ErreurPage/ErreurPage";
//#endregion



const App = () => {

    //#region VARIABLE REACT
    //---------------------------------VARIABLE REACT---------------------------------
    const form = useRef();
    const showdate = new Date();
    const date = showdate.getFullYear() + `-` + showdate.getMonth() + `-` + showdate.getDate();
    const crypto = cryptoRandomString({length: 70 , type: 'alphanumeric'});
    const cryptoNewMdp = cryptoRandomString({length: 12 , type: 'alphanumeric'});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //#endregion

    //#region VARIABLE BAGUES
    //---------------------------------VARIABLE BAGUES---------------------------------
    const [ArticlesBagues , setArticleBagues] = useState([])

    const [ArticlesBaguesAlliances , setArticleBaguesAlliances] = useState([])
    const [ArticlesBaguesAlliancesHomme , setArticleBaguesAlliancesHomme] = useState([])
    const [ArticlesBaguesAlliancesFemme , setArticleBaguesAlliancesFemme] = useState([])
    const [ArticlesBaguesAlliancesEnfant , setArticleBaguesAlliancesEnfant] = useState([])
    const [ArticlesBaguesAlliancesMix , setArticleBaguesAlliancesMix] = useState([])

    const [ArticlesBaguesAutresBagues , setArticleBaguesAutresBagues] = useState([])
    const [ArticlesBaguesAutresBaguesHomme , setArticleBaguesAutresBaguesHomme] = useState([])
    const [ArticlesBaguesAutresBaguesFemme , setArticleBaguesAutresBaguesFemme] = useState([])
    const [ArticlesBaguesAutresBaguesEnfant , setArticleBaguesAutresBaguesEnfant] = useState([])
    const [ArticlesBaguesAutresBaguesMix , setArticleBaguesAutresBaguesMix] = useState([])

    const [ArticlesBaguesChevalieres , setArticleBaguesChevalieres] = useState([])
    const [ArticlesBaguesChevalieresHomme , setArticleBaguesChevalieresHomme] = useState([])
    const [ArticlesBaguesChevalieresFemme , setArticleBaguesChevalieresFemme] = useState([])
    const [ArticlesBaguesChevalieresEnfant , setArticleBaguesChevalieresEnfant] = useState([])
    const [ArticlesBaguesChevalieresMix , setArticleBaguesChevalieresMix] = useState([])

    const [ArticlesBaguesSolitaires , setArticleBaguesSolitaires] = useState([])
    const [ArticlesBaguesSolitairesHomme , setArticleBaguesSolitairesHomme] = useState([])
    const [ArticlesBaguesSolitairesFemme , setArticleBaguesSolitairesFemme] = useState([])
    const [ArticlesBaguesSolitairesEnfant , setArticleBaguesSolitairesEnfant] = useState([])
    const [ArticlesBaguesSolitairesMix , setArticleBaguesSolitairesMix] = useState([])


    const ArticlesBaguesLenght = ArticlesBagues.length

    const ArticlesBaguesAlliancesLenght = ArticlesBaguesAlliances.length
    const ArticlesBaguesAlliancesHommeLenght = ArticlesBaguesAlliancesHomme.length
    const ArticlesBaguesAlliancesFemmeLenght = ArticlesBaguesAlliancesFemme.length
    const ArticlesBaguesAlliancesEnfantLenght = ArticlesBaguesAlliancesEnfant.length
    const ArticlesBaguesAlliancesMixLenght = ArticlesBaguesAlliancesMix.length

    const ArticlesBaguesAutresBaguesLenght = ArticlesBaguesAutresBagues.length
    const ArticlesBaguesAutresBaguesHommeLenght = ArticlesBaguesAutresBaguesHomme.length
    const ArticlesBaguesAutresBaguesFemmeLenght = ArticlesBaguesAutresBaguesFemme.length
    const ArticlesBaguesAutresBaguesEnfantLenght = ArticlesBaguesAutresBaguesEnfant.length
    const ArticlesBaguesAutresBaguesMixLenght = ArticlesBaguesAutresBaguesMix.length

    const ArticlesBaguesChevalieresLenght = ArticlesBaguesChevalieres.length
    const ArticlesBaguesChevalieresHommeLenght = ArticlesBaguesChevalieresHomme.length
    const ArticlesBaguesChevalieresFemmeLenght = ArticlesBaguesChevalieresFemme.length
    const ArticlesBaguesChevalieresEnfantLenght = ArticlesBaguesChevalieresEnfant.length
    const ArticlesBaguesChevalieresMixLenght = ArticlesBaguesChevalieresMix.length


    const ArticlesBaguesSolitairesLenght = ArticlesBaguesSolitaires.length
    const ArticlesBaguesSolitairesHommeLenght = ArticlesBaguesSolitairesHomme.length
    const ArticlesBaguesSolitairesFemmeLenght = ArticlesBaguesSolitairesFemme.length
    const ArticlesBaguesSolitairesEnfantLenght = ArticlesBaguesSolitairesEnfant.length
    const ArticlesBaguesSolitairesMixLenght = ArticlesBaguesSolitairesMix.length
    //#endregion

    //#region VARIABLE BOUCLE D'OREILLES
    //---------------------------------VARIABLE BOUCLE D'OREILLES---------------------------------
    const [ArticlesBoucleDOreilles , setArticlesBoucleDOreilles] = useState([])

    const [ArticlesBoucleDOreillesPuces , setArticlesBoucleDOreillesPuces] = useState([])
    const [ArticlesBoucleDOreillesPucesHomme , setArticlesBoucleDOreillesPucesHomme] = useState([])
    const [ArticlesBoucleDOreillesPucesFemme , setArticlesBoucleDOreillesPucesFemme] = useState([])
    const [ArticlesBoucleDOreillesPucesEnfant , setArticlesBoucleDOreillesPucesEnfant] = useState([])
    const [ArticlesBoucleDOreillesPucesMix , setArticlesBoucleDOreillesPucesMix] = useState([])

    const [ArticlesBoucleDOreillesPendantes , setArticlesBoucleDOreillesPendantes] = useState([])
    const [ArticlesBoucleDOreillesPendantesHomme , setArticlesBoucleDOreillesPendantesHomme] = useState([])
    const [ArticlesBoucleDOreillesPendantesFemme , setArticlesBoucleDOreillesPendantesFemme] = useState([])
    const [ArticlesBoucleDOreillesPendantesEnfant , setArticlesBoucleDOreillesPendantesEnfant] = useState([])
    const [ArticlesBoucleDOreillesPendantesMix , setArticlesBoucleDOreillesPendantesMix] = useState([])

    const [ArticlesBoucleDOreillesCreoles , setArticlesBoucleDOreillesCreoles] = useState([])
    const [ArticlesBoucleDOreillesCreolesHomme , setArticlesBoucleDOreillesCreolesHomme] = useState([])
    const [ArticlesBoucleDOreillesCreolesFemme , setArticlesBoucleDOreillesCreolesFemme] = useState([])
    const [ArticlesBoucleDOreillesCreolesEnfant , setArticlesBoucleDOreillesCreolesEnfant] = useState([])
    const [ArticlesBoucleDOreillesCreolesMix , setArticlesBoucleDOreillesCreolesMix] = useState([])

    const [ArticlesBoucleDOreillesAtresBoucleDOreilles , setArticlesBoucleDOreillesAtresBoucleDOreilles] = useState([])
    const [ArticlesBoucleDOreillesAtresBoucleDOreillesHomme , setArticlesBoucleDOreillesAtresBoucleDOreillesHomme] = useState([])
    const [ArticlesBoucleDOreillesAtresBoucleDOreillesFemme , setArticlesBoucleDOreillesAtresBoucleDOreillesFemme] = useState([])
    const [ArticlesBoucleDOreillesAtresBoucleDOreillesEnfant , setArticlesBoucleDOreillesAtresBoucleDOreillesEnfant] = useState([])
    const [ArticlesBoucleDOreillesAtresBoucleDOreillesMix , setArticlesBoucleDOreillesAtresBoucleDOreillesMix] = useState([])
    
    const ArticlesBoucleDOreillesLenght = ArticlesBoucleDOreilles.length

    const ArticlesBoucleDOreillesPucesLenght = ArticlesBoucleDOreillesPuces.length
    const ArticlesBoucleDOreillesPucesHommeLenght = ArticlesBoucleDOreillesPucesHomme.length
    const ArticlesBoucleDOreillesPucesFemmeLenght = ArticlesBoucleDOreillesPucesFemme.length
    const ArticlesBoucleDOreillesPucesEnfantLenght = ArticlesBoucleDOreillesPucesEnfant.length
    const ArticlesBoucleDOreillesPucesMixLenght = ArticlesBoucleDOreillesPucesMix.length

    const ArticlesBoucleDOreillesPendantesLenght = ArticlesBoucleDOreillesPendantes.length
    const ArticlesBoucleDOreillesPendantesHommeLenght = ArticlesBagues.length
    const ArticlesBoucleDOreillesPendantesFemmeLenght = ArticlesBoucleDOreillesPendantesFemme.length
    const ArticlesBoucleDOreillesPendantesEnfantLenght = ArticlesBoucleDOreillesPendantesEnfant.length
    const ArticlesBoucleDOreillesPendantesMixLenght = ArticlesBoucleDOreillesPendantesMix.length

    const ArticlesBoucleDOreillesCreolesLenght = ArticlesBoucleDOreillesCreoles.length
    const ArticlesBoucleDOreillesCreolesHommeLenght = ArticlesBoucleDOreillesCreolesHomme.length
    const ArticlesBoucleDOreillesCreolesFemmeLenght = ArticlesBoucleDOreillesCreolesFemme.length
    const ArticlesBoucleDOreillesCreolesEnfantLenght = ArticlesBoucleDOreillesCreolesEnfant.length
    const ArticlesBoucleDOreillesCreolesMixLenght = ArticlesBoucleDOreillesCreolesMix.length

    const ArticlesBoucleDOreillesAtresBoucleDOreillesLenght = ArticlesBoucleDOreillesAtresBoucleDOreilles.length
    const ArticlesBoucleDOreillesAtresBoucleDOreillesHommeLenght = ArticlesBoucleDOreillesAtresBoucleDOreillesHomme.length
    const ArticlesBoucleDOreillesAtresBoucleDOreillesFemmeLenght = ArticlesBoucleDOreillesAtresBoucleDOreillesFemme.length
    const ArticlesBoucleDOreillesAtresBoucleDOreillesEnfantLenght = ArticlesBoucleDOreillesAtresBoucleDOreillesEnfant.length
    const ArticlesBoucleDOreillesAtresBoucleDOreillesMixLenght = ArticlesBoucleDOreillesAtresBoucleDOreillesMix.length
    
    //#endregion

    //#region VARIABLE BRACELETS
    //---------------------------------VARIABLE BRACELETS---------------------------------
    const [ArticlesBracelets , setArticlesBracelets] = useState([])

    const [ArticlesBraceletsRigides , setArticlesBraceletsRigides] = useState([])
    const [ArticlesBraceletsRigidesHomme , setArticlesBraceletsRigidesHomme] = useState([])
    const [ArticlesBraceletsRigidesFemme , setArticlesBraceletsRigidesFemme] = useState([])
    const [ArticlesBraceletsRigidesEnfant , setArticlesBraceletsRigidesEnfant] = useState([])
    const [ArticlesBraceletsRigidesMix , setArticlesBraceletsRigidesMix] = useState([])

    const [ArticlesBraceletsIdentite , setArticlesBraceletsIdentite] = useState([])
    const [ArticlesBraceletsIdentiteHomme , setArticlesBraceletsIdentiteHomme] = useState([])
    const [ArticlesBraceletsIdentiteFemme , setArticlesBraceletsIdentiteFemme] = useState([])
    const [ArticlesBraceletsIdentiteEnfant , setArticlesBraceletsIdentiteEnfant] = useState([])
    const [ArticlesBraceletsIdentiteMix , setArticlesBraceletsIdentiteMix] = useState([])

    const [ArticlesBraceletsAutresBracelets , setArticlesBraceletsAutresBracelets] = useState([])
    const [ArticlesBraceletsAutresBraceletsHomme , setArticlesBraceletsAutresBraceletsHomme] = useState([])
    const [ArticlesBraceletsAutresBraceletsFemme , setArticlesBraceletsAutresBraceletsFemme] = useState([])
    const [ArticlesBraceletsAutresBraceletsEnfant , setArticlesBraceletsAutresBraceletsEnfant] = useState([])
    const [ArticlesBraceletsAutresBraceletsMix , setArticlesBraceletsAutresBraceletsMix] = useState([])

    const ArticlesBraceletsLenght = ArticlesBracelets.length

    const ArticlesBraceletsRigidesLenght = ArticlesBraceletsRigides.length
    const ArticlesBraceletsRigidesHommeLenght = ArticlesBraceletsRigidesHomme.length
    const ArticlesBraceletsRigidesFemmeLenght = ArticlesBraceletsRigidesFemme.length
    const ArticlesBraceletsRigidesEnfantLenght = ArticlesBraceletsRigidesEnfant.length
    const ArticlesBraceletsRigidesMixLenght = ArticlesBraceletsRigidesMix.length

    const ArticlesBraceletsIdentiteLenght = ArticlesBraceletsIdentite.length
    const ArticlesBraceletsIdentiteHommeLenght = ArticlesBraceletsIdentiteHomme.length
    const ArticlesBraceletsIdentiteFemmeLenght= ArticlesBraceletsIdentiteFemme.length
    const ArticlesBraceletsIdentiteEnfantLenght = ArticlesBraceletsIdentiteEnfant.length
    const ArticlesBraceletsIdentiteMixLenght = ArticlesBraceletsIdentiteMix.length

    const ArticlesBraceletsAutresBraceletsLenght = ArticlesBraceletsAutresBracelets.length
    const ArticlesBraceletsAutresBraceletsHommeLenght = ArticlesBraceletsAutresBraceletsHomme.length
    const ArticlesBraceletsAutresBraceletsFemmeLenght = ArticlesBraceletsAutresBraceletsFemme.length
    const ArticlesBraceletsAutresBraceletsEnfantLenght = ArticlesBraceletsAutresBraceletsEnfant.length
    const ArticlesBraceletsAutresBraceletsMixLenght = ArticlesBraceletsAutresBraceletsMix.length
    //#endregion

    //#region VARIABLE COLIER ET CHAINES
    //---------------------------------VARIABLE COLIER ET CHAINES---------------------------------
    const [ArticlesCollierChaines , setArticlesCollierChaines] = useState([])

    const [ArticlesCollierChainesColliers , setArticlesCollierChainesColliers] = useState([])
    const [ArticlesCollierChainesColliersHomme , setArticlesCollierChainesColliersHomme] = useState([])
    const [ArticlesCollierChainesColliersFemme , setArticlesCollierChainesColliersFemme] = useState([])
    const [ArticlesCollierChainesColliersEnfant , setArticlesCollierChainesColliersEnfant] = useState([])
    const [ArticlesCollierChainesColliersMix , setArticlesCollierChainesColliersMix] = useState([])

    const [ArticlesCollierChainesChainesFines , setArticlesCollierChainesChainesFines] = useState([])
    const [ArticlesCollierChainesChainesFinesHomme , setArticlesCollierChainesChainesFinesHomme] = useState([])
    const [ArticlesCollierChainesChainesFinesFemme , setArticlesCollierChainesChainesFinesFemme] = useState([])
    const [ArticlesCollierChainesChainesFinesEnfant , setArticlesCollierChainesChainesFinesEnfant] = useState([])
    const [ArticlesCollierChainesChainesFinesMix , setArticlesCollierChainesChainesFinesMix] = useState([])

    const [ArticlesCollierChainesAutresChaines , setArticlesCollierChainesAutresChaines] = useState([])
    const [ArticlesCollierChainesAutresChainesHomme , setArticlesCollierChainesAutresChainesHomme] = useState([])
    const [ArticlesCollierChainesAutresChainesFemme , setArticlesCollierChainesAutresChainesFemme] = useState([])
    const [ArticlesCollierChainesAutresChainesEnfant , setArticlesCollierChainesAutresChainesEnfant] = useState([])
    const [ArticlesCollierChainesAutresChainesMix , setArticlesCollierChainesAutresChainesMix] = useState([])


    const ArticlesCollierChainesLenght = ArticlesCollierChaines.length

    const ArticlesCollierChainesColliersLenght = ArticlesCollierChainesColliers.length
    const ArticlesCollierChainesColliersHommeLenght = ArticlesCollierChainesColliersHomme.length
    const ArticlesCollierChainesColliersFemmeLenght = ArticlesCollierChainesColliersFemme.length
    const ArticlesCollierChainesColliersEnfantLenght = ArticlesCollierChainesColliersEnfant.length
    const ArticlesCollierChainesColliersMixLenght = ArticlesCollierChainesColliersMix.length

    const ArticlesCollierChainesChainesFinesLenght = ArticlesCollierChainesChainesFines.length
    const ArticlesCollierChainesChainesFinesHommeLenght = ArticlesCollierChainesChainesFinesHomme.length
    const ArticlesCollierChainesChainesFinesFemmeLenght = ArticlesCollierChainesChainesFinesFemme.length
    const ArticlesCollierChainesChainesFinesEnfantLenght = ArticlesCollierChainesChainesFinesEnfant.length
    const ArticlesCollierChainesChainesFinesMixLenght = ArticlesCollierChainesChainesFinesMix.length

    const ArticlesCollierChainesAutresChainesLenght = ArticlesCollierChainesAutresChaines.length
    const ArticlesCollierChainesAutresChainesHommeLenght = ArticlesCollierChainesAutresChainesHomme.length
    const ArticlesCollierChainesAutresChainesFemmeLenght = ArticlesCollierChainesAutresChainesFemme.length
    const ArticlesCollierChainesAutresChainesEnfantLenght = ArticlesCollierChainesAutresChainesEnfant.length
    const ArticlesCollierChainesAutresChainesMixLenght = ArticlesCollierChainesAutresChainesMix.length


    //#endregion

    //#region VARIABLE PARURES
    //---------------------------------VARIABLE PARURES---------------------------------
    const [ArticlesParures , setArticleParures] = useState([])
    const [ArticlesParuresHomme , setArticleParuresHomme] = useState([])
    const [ArticlesParuresFemme , setArticleParuresFemme] = useState([])
    const [ArticlesParuresEnfant , setArticleParuresEnfant] = useState([])
    const [ArticlesParuresMix , setArticleParuresMix] = useState([])


    const ArticlesParuresLenght = ArticlesParures.length
    const ArticlesParuresHommeLenght = ArticlesParuresHomme.length
    const ArticlesParuresFemmeLenght = ArticlesParuresFemme.length
    const ArticlesParuresEnfantLenght = ArticlesParuresEnfant.length
    const ArticlesParuresMixLenght = ArticlesParuresMix.length
 

    //#endregion
  
    //#region VARIABLE PENDENTIFS
    //---------------------------------VARIABLE PENDENTIFS---------------------------------
    const [ArticlesPendentifs , setArticlePendentifs] = useState([])

    const [ArticlesPendentifsPendentifsReligieux , setArticlePendentifsPendentifsReligieux] = useState([])
    const [ArticlesPendentifsPendentifsReligieuxHomme , setArticlePendentifsPendentifsReligieuxHomme] = useState([])
    const [ArticlesPendentifsPendentifsReligieuxFemme , setArticlePendentifsPendentifsReligieuxFemme] = useState([])
    const [ArticlesPendentifsPendentifsReligieuxEnfant , setArticlePendentifsPendentifsReligieuxEnfant] = useState([])
    const [ArticlesPendentifsPendentifsReligieuxMix , setArticlePendentifsPendentifsReligieuxMix] = useState([])

    const [ArticlesPendentifsPendentifsPlaque , setArticlePendentifsPendentifsPlaque] = useState([])
    const [ArticlesPendentifsPendentifsPlaqueHomme , setArticlePendentifsPendentifsPlaqueHomme] = useState([])
    const [ArticlesPendentifsPendentifsPlaqueFemme , setArticlePendentifsPendentifsPlaqueFemme] = useState([])
    const [ArticlesPendentifsPendentifsPlaqueEnfant , setArticlePendentifsPendentifsPlaqueEnfant] = useState([])
    const [ArticlesPendentifsPendentifsPlaqueMix , setArticlePendentifsPendentifsPlaqueMix] = useState([])

    const [ArticlesPendentifsAutresPendentifs , setArticlePendentifsAutresPendentifs] = useState([])
    const [ArticlesPendentifsAutresPendentifsHomme , setArticlePendentifsAutresPendentifsHomme] = useState([])
    const [ArticlesPendentifsAutresPendentifsFemme , setArticlePendentifsAutresPendentifsFemme] = useState([])
    const [ArticlesPendentifsAutresPendentifsEnfant , setArticlePendentifsAutresPendentifsEnfant] = useState([])
    const [ArticlesPendentifsAutresPendentifsMix , setArticlePendentifsAutresPendentifsMix] = useState([])


    const ArticlesPendentifsLenght = ArticlesPendentifs.length

    const ArticlesPendentifsPendentifsReligieuxLenght = ArticlesPendentifsPendentifsReligieux.length
    const ArticlesPendentifsPendentifsReligieuxHommeLenght = ArticlesPendentifsPendentifsReligieuxHomme.length
    const ArticlesPendentifsPendentifsReligieuxFemmeLenght = ArticlesPendentifsPendentifsReligieuxFemme.length
    const ArticlesPendentifsPendentifsReligieuxEnfantLenght = ArticlesPendentifsPendentifsReligieuxEnfant.length
    const ArticlesPendentifsPendentifsReligieuxMixLenght = ArticlesPendentifsPendentifsReligieuxMix.length

    const ArticlesPendentifsPendentifsPlaqueLenght = ArticlesPendentifsPendentifsPlaque.length
    const ArticlesPendentifsPendentifsPlaqueHommeLenght = ArticlesPendentifsPendentifsPlaqueHomme.length
    const ArticlesPendentifsPendentifsPlaqueFemmeLenght = ArticlesPendentifsPendentifsPlaqueFemme.length
    const ArticlesPendentifsPendentifsPlaqueEnfantLenght = ArticlesPendentifsPendentifsPlaqueEnfant.length
    const ArticlesPendentifsPendentifsPlaqueMixLenght = ArticlesPendentifsPendentifsPlaqueMix.length

    const ArticlesPendentifsAutresPendentifsLenght = ArticlesPendentifsAutresPendentifs.length
    const ArticlesPendentifsAutresPendentifsHommeLenght = ArticlesPendentifsAutresPendentifsHomme.length
    const ArticlesPendentifsAutresPendentifsFemmeLenght = ArticlesPendentifsAutresPendentifsFemme.length
    const ArticlesPendentifsAutresPendentifsEnfantLenght = ArticlesPendentifsAutresPendentifsEnfant.length
    const ArticlesPendentifsAutresPendentifsMixLenght = ArticlesPendentifsAutresPendentifsMix.length

   //#endregion

    //#region VARIABLE PIERCINGS
    //---------------------------------VARIABLE PIERCINGS---------------------------------
    const [ArticlesPiercings , setArticlesPiercings] = useState([])

    const [ArticlesPiercingsPiercingsNez , setArticlesPiercingsPiercingsNez] = useState([])
    const [ArticlesPiercingsPiercingsNezHomme , setArticlesPiercingsPiercingsNezHomme] = useState([])
    const [ArticlesPiercingsPiercingsNezFemme , setArticlesPiercingsPiercingsNezFemme] = useState([])
    const [ArticlesPiercingsPiercingsNezEnfant , setArticlesPiercingsPiercingsNezEnfant] = useState([])
    const [ArticlesPiercingsPiercingsNezMix , setArticlesPiercingsPiercingsNezMix] = useState([])

    const [ArticlesPiercingsPiercingsDivers , setArticlesPiercingsPiercingsDivers] = useState([])
    const [ArticlesPiercingsPiercingsDiversHomme , setArticlesPiercingsPiercingsDiversHomme] = useState([])
    const [ArticlesPiercingsPiercingsDiversFemme , setArticlesPiercingsPiercingsDiversFemme] = useState([])
    const [ArticlesPiercingsPiercingsDiversEnfant , setArticlesPiercingsPiercingsDiversEnfant] = useState([])
    const [ArticlesPiercingsPiercingsDiversMix , setArticlesPiercingsPiercingsDiversMix] = useState([])


    const ArticlesPiercingsLenght = ArticlesPiercings.length

    const ArticlesPiercingsPiercingsNezLenght = ArticlesPiercingsPiercingsNez.length
    const ArticlesPiercingsPiercingsNezHommeLenght = ArticlesPiercingsPiercingsNezHomme.length
    const ArticlesPiercingsPiercingsNezFemmeLenght = ArticlesPiercingsPiercingsNezFemme.length
    const ArticlesPiercingsPiercingsNezEnfantLenght = ArticlesPiercingsPiercingsNezEnfant.length
    const ArticlesPiercingsPiercingsNezMixLenght = ArticlesPiercingsPiercingsNezMix.length

    const ArticlesPiercingsPiercingsDiversLenght = ArticlesPiercingsPiercingsDivers.length
    const ArticlesPiercingsPiercingsDiversHommeLenght = ArticlesPiercingsPiercingsDiversHomme.length
    const ArticlesPiercingsPiercingsDiversFemmeLenght = ArticlesPiercingsPiercingsDiversFemme.length
    const ArticlesPiercingsPiercingsDiversEnfantLenght = ArticlesPiercingsPiercingsDiversEnfant.length
    const ArticlesPiercingsPiercingsDiversMixLenght = ArticlesPiercingsPiercingsDiversMix.length

    //#endregion

    //#region VARIABLE FILTRE
    //---------------------------------VARIABLE FILTRE---------------------------------
    const [AllArticles ,setAllArticles] = useState([]);
    const [query , setQuery] = useState("");
    const [queryRef , setQueryRef] = useState("");

    const AllArticlesLenght = AllArticles.length

    
    //#endregion

    //#region VARIABLE D'ETAT
    //---------------------------------VARIABLE D'ETAT---------------------------------
    const [DetailCard, setDetailCard] = useState(false)
    const [ItemDetailCard , setItemDetailCard] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    //#endregion

    //#region VARIABLE KEY LOCAL STORAGE + SESSION STORAGE
    //---------------------------------VARIABLE KEY LOCAL STORAGE + SESSION STORAGE---------------------------------
    const [Key] = useState(() => {
        let AllStorage = []
        for(let i = 0 ; i < localStorage.length ;i++)
        {
            const saved = localStorage.getItem(localStorage.key(i));
            const initialValue = JSON.parse(saved);
            AllStorage.push(initialValue)
        }
       
        return AllStorage || "";
    });
    const [Client] = useState(() => {
        
        const saved = sessionStorage.getItem(sessionStorage.key([1]));
        const initialValue = JSON.parse(saved);
    
        return initialValue || "";
    })
    //#endregion
    
    

    

    //#region CURRENT ARTICLES BAGUES
    const currentArticlesBagues = ArticlesBagues.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBaguesAlliances = ArticlesBaguesAlliances.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAlliancesHomme = ArticlesBaguesAlliancesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAlliancesFemme = ArticlesBaguesAlliancesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAlliancesEnfant = ArticlesBaguesAlliancesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAlliancesMix = ArticlesBaguesAlliancesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBaguesAutresBagues = ArticlesBaguesAutresBagues.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAutresBaguesHomme = ArticlesBaguesAutresBaguesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAutresBaguesFemme = ArticlesBaguesAutresBaguesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAutresBaguesEnfant = ArticlesBaguesAutresBaguesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesAutresBaguesMix = ArticlesBaguesAutresBaguesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBaguesChevalieres = ArticlesBaguesChevalieres.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesChevalieresHomme = ArticlesBaguesChevalieresHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesChevalieresFemme = ArticlesBaguesChevalieresFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesChevalieresEnfant = ArticlesBaguesChevalieresEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesChevalieresMix = ArticlesBaguesChevalieresMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBaguesSolitaires = ArticlesBaguesSolitaires.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesSolitairesHomme = ArticlesBaguesSolitairesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesSolitairesFemme = ArticlesBaguesSolitairesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesSolitairesEnfant = ArticlesBaguesSolitairesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBaguesSolitairesMix = ArticlesBaguesSolitairesMix.slice(indexOfFirstPost, indexOfLastPost);
    //#endregion

    //#region CURRENT ARTICLES BOUCLE D'OREILLE
    const currentArticlesBoucleDOreilles = ArticlesBoucleDOreilles.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBoucleDOreillesPuces = ArticlesBoucleDOreillesPuces.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPucesHomme = ArticlesBoucleDOreillesPucesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPucesFemme = ArticlesBoucleDOreillesPucesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPucesEnfant = ArticlesBoucleDOreillesPucesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPucesMix = ArticlesBoucleDOreillesPucesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBoucleDOreillesPendantes = ArticlesBoucleDOreillesPendantes.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPendantesHomme = ArticlesBoucleDOreillesPendantesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPendantesFemme = ArticlesBoucleDOreillesPendantesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPendantesEnfant = ArticlesBoucleDOreillesPendantesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesPendantesMix = ArticlesBoucleDOreillesPendantesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBoucleDOreillesCreoles = ArticlesBoucleDOreillesCreoles.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesCreolesHomme = ArticlesBoucleDOreillesCreolesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesCreolesFemme = ArticlesBoucleDOreillesCreolesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesCreolesEnfant = ArticlesBoucleDOreillesCreolesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesCreolesMix = ArticlesBoucleDOreillesCreolesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBoucleDOreillesAtresBoucleDOreilles = ArticlesBoucleDOreillesAtresBoucleDOreilles.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesAtresBoucleDOreillesHomme = ArticlesBoucleDOreillesAtresBoucleDOreillesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesAtresBoucleDOreillesFemme = ArticlesBoucleDOreillesAtresBoucleDOreillesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesAtresBoucleDOreillesEnfant = ArticlesBoucleDOreillesAtresBoucleDOreillesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBoucleDOreillesAtresBoucleDOreillesMix = ArticlesBoucleDOreillesAtresBoucleDOreillesMix.slice(indexOfFirstPost, indexOfLastPost);
    //#endregion

    //#region CURRENT ARTICLES BRACELETS

    const currentArticlesBracelets = ArticlesBracelets.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBraceletsRigides = ArticlesBraceletsRigides.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsRigidesHomme = ArticlesBraceletsRigidesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsRigidesFemme = ArticlesBraceletsRigidesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsRigidesEnfant = ArticlesBraceletsRigidesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsRigidesMix = ArticlesBraceletsRigidesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBraceletsIdentite = ArticlesBraceletsIdentite.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsIdentiteHomme = ArticlesBraceletsIdentiteHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsIdentiteFemme = ArticlesBraceletsIdentiteFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsIdentiteEnfant = ArticlesBraceletsIdentiteEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsIdentiteMix = ArticlesBraceletsIdentiteMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesBraceletsAutresBracelets = ArticlesBraceletsAutresBracelets.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsAutresBraceletsHomme = ArticlesBraceletsAutresBraceletsHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsAutresBraceletsFemme = ArticlesBraceletsAutresBraceletsFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsAutresBraceletsEnfant = ArticlesBraceletsAutresBraceletsEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesBraceletsAutresBraceletsMix = ArticlesBraceletsAutresBraceletsMix.slice(indexOfFirstPost, indexOfLastPost);

    //#endregion

    //#region CURRENT ARTICLES COLLIERS
    const currentArticlesCollierChaines = ArticlesBracelets.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesCollierChainesColliers = ArticlesCollierChainesColliers.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesColliersHomme = ArticlesCollierChainesColliersHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesColliersFemme = ArticlesCollierChainesColliersFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesColliersEnfant = ArticlesCollierChainesColliersEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesColliersMix = ArticlesCollierChainesColliersMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesCollierChainesChainesFines = ArticlesCollierChainesChainesFines.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesChainesFinesHomme = ArticlesCollierChainesChainesFinesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesChainesFinesFemme = ArticlesCollierChainesChainesFinesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesChainesFinesEnfant = ArticlesCollierChainesChainesFinesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesChainesFinesMix = ArticlesCollierChainesChainesFinesMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesCollierChainesAutresChaines = ArticlesCollierChainesAutresChaines.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesAutresChainesHomme = ArticlesCollierChainesAutresChainesHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesAutresChainesFemme = ArticlesCollierChainesAutresChainesFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesAutresChainesEnfant = ArticlesCollierChainesAutresChainesEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesCollierChainesAutresChainesMix = ArticlesCollierChainesAutresChainesMix.slice(indexOfFirstPost, indexOfLastPost);

    //#endregion

    //#region CURRENT ARTICLES PARURES
    const currentArticlesParures = ArticlesParures.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesParuresHomme = ArticlesParuresHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesParuresFemme = ArticlesParuresFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesParuresEnfant = ArticlesParuresEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesParuresMix = ArticlesParuresMix.slice(indexOfFirstPost, indexOfLastPost);
   
    //#endregion

    //#region CURRENT ARTICLES PENDENTIFS
    const currentArticlesPendentifs = ArticlesPendentifs.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesPendentifsPendentifsReligieux = ArticlesPendentifsPendentifsReligieux.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsReligieuxHomme = ArticlesPendentifsPendentifsReligieuxHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsReligieuxFemme = ArticlesPendentifsPendentifsReligieuxFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsReligieuxEnfant = ArticlesPendentifsPendentifsReligieuxEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsReligieuxMix = ArticlesPendentifsPendentifsReligieuxMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesPendentifsPendentifsPlaque = ArticlesPendentifsPendentifsPlaque.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsPlaqueHomme = ArticlesPendentifsPendentifsPlaqueHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsPlaqueFemme = ArticlesPendentifsPendentifsPlaqueFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsPlaqueEnfant = ArticlesPendentifsPendentifsPlaqueEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsPendentifsPlaqueMix = ArticlesPendentifsPendentifsPlaqueMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesPendentifsAutresPendentifs = ArticlesPendentifsAutresPendentifs.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsAutresPendentifsHomme = ArticlesPendentifsAutresPendentifsHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsAutresPendentifsFemme = ArticlesPendentifsAutresPendentifsFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsAutresPendentifsEnfant = ArticlesPendentifsAutresPendentifsEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPendentifsAutresPendentifsMix = ArticlesPendentifsAutresPendentifsMix.slice(indexOfFirstPost, indexOfLastPost);
    //#endregion

    //#region CURRENT ARTICLES PIERCINGS
    const currentArticlesPiercings = ArticlesPiercings.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesPiercingsPiercingsNez = ArticlesPiercingsPiercingsNez.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsNezHomme = ArticlesPiercingsPiercingsNezHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsNezFemme = ArticlesPiercingsPiercingsNezFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsNezEnfant = ArticlesPiercingsPiercingsDiversEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsNezMix = ArticlesPiercingsPiercingsNezMix.slice(indexOfFirstPost, indexOfLastPost);

    const currentArticlesPiercingsPiercingsDivers = ArticlesPiercingsPiercingsDivers.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsDiversHomme = ArticlesPiercingsPiercingsDiversHomme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsDiversFemme = ArticlesPiercingsPiercingsDiversFemme.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsDiversEnfant = ArticlesPiercingsPiercingsDiversEnfant.slice(indexOfFirstPost, indexOfLastPost);
    const currentArticlesPiercingsPiercingsDiversMix = ArticlesPiercingsPiercingsDiversMix.slice(indexOfFirstPost, indexOfLastPost);

    //#endregion

    //#region CURRENT ARTICLES FILTER
    const currentAllArticles = AllArticles.slice(indexOfFirstPost, indexOfLastPost);

    //#endregion





    //#region USEEFFECT + FETCHING
    useEffect(() => {  

        //---------------------------------FETCHING---------------------------------

        const FetchDemandeDeDevis = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/DemandeDevis',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((json) => {
                    setIsLoading(true);})
                .catch((error) => {console.log(error)})    
        }



        const FetchDataArticles = () => {
        fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((json) => {
                setAllArticles(json); 
                setIsLoading(true);})
            .catch((error) => {console.log(error)})    
        }



        const FetchBague = () => {
        fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                let arr = []
                res.map(item => arr.push(
                    
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj} />
                            <div className = "btnBx">
                                <button type = "submit" 
                                onClick = {() => {ViewCard(item)}} 
                                className="card-btn">
                                    Voir l'article 
                                </button>
                                <button type = "submit" 
                                onClick = {() => {AddShop(item)}} 
                                className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                            </div> 
                        </div>
                ))
                setArticleBagues(arr);
                setIsLoading(true)
        })
        .catch((error) => {console.log(error)}) 
        }
        const FetchBaguesAlliances = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Alliances',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAlliances(arr);
                })
                .catch((error) => {console.log(error)})   
        }
        const FetchBaguesAlliancesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Alliances/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAlliancesHomme(arr);
                })
                .catch((error) => {console.log(error)})   
        }
        const FetchBaguesAlliancesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Alliances/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAlliancesFemme(arr);
                })
                .catch((error) => {console.log(error)})   
        }
        const FetchBaguesAlliancesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Alliances/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAlliancesEnfant(arr);
                })
                .catch((error) => {console.log(error)})   
        }
        const FetchBaguesAlliancesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Alliances/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAlliancesMix(arr);
                })
                .catch((error) => {console.log(error)})   
        }
        const FetchBagueAtresBagues = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/AutresBagues',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAutresBagues(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueAtresBaguesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/AutresBagues/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAutresBaguesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueAtresBaguesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/AutresBagues/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAutresBaguesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueAtresBaguesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/AutresBagues/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAutresBaguesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueAtresBaguesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/AutresBagues/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesAutresBaguesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueChevalieres = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Chevalieres',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesChevalieres(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueChevalieresHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Chevalieres/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesChevalieresHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueChevalieresFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Chevalieres/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesChevalieresFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueChevalieresEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Chevalieres/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesChevalieresEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueChevalieresMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Chevalieres/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesChevalieresMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueSolitaires = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Solitaires',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesSolitaires(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueSolitairesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Solitaires/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesSolitairesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueSolitairesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Solitaires/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesSolitairesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueSolitairesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Solitaires/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesSolitairesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBagueSolitairesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bagues/Solitaires/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleBaguesSolitairesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }





        const FetchBoucleDOreilles = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreilles(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPuces = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Puces',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPuces(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPucesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Puces/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPucesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPucesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Puces/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPucesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPucesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Puces/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPucesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPucesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Puces/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPucesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesCreoles = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Creoles',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesCreoles(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesCreolesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Creoles/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesCreolesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesCreolesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Creoles/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesCreolesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesCreolesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Creoles/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesCreolesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesCreolesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Creoles/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesCreolesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBaguBoucleDOreillesAtresBoucleDOreilles = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/AutresBoucleDOreilles',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesAtresBoucleDOreilles(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBaguBoucleDOreillesAtresBoucleDOreillesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/AutresBoucleDOreilles/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesAtresBoucleDOreillesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBaguBoucleDOreillesAtresBoucleDOreillesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/AutresBoucleDOreilles/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesAtresBoucleDOreillesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBaguBoucleDOreillesAtresBoucleDOreillesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/AutresBoucleDOreilles/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesAtresBoucleDOreillesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBaguBoucleDOreillesAtresBoucleDOreillesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/AutresBoucleDOreilles/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesAtresBoucleDOreillesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPendantes = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Pendentes',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPendantes(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPendantesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Pendentes/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPendantesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPendantesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Pendentes/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPendantesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPendantesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Pendentes/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPendantesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBoucleDOreillesPendantesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/BoucleDOreilles/Pendentes/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBoucleDOreillesPendantesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }



        const FetchBracelets = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBracelets(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsRigides = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsRigides',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsRigides(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsRigidesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsRigides/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsRigidesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsRigidesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsRigides/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsRigidesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsRigidesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsRigides/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsRigidesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsRigidesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsRigides/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsRigidesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsIdentite = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsIdentite',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsIdentite(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsIdentiteHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsIdentite/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsIdentiteHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsIdentiteFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsIdentite/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsIdentiteFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsIdentiteEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsIdentite/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsIdentiteEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchBraceletsIdentiteMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/BraceletsIdentite/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsIdentiteMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresBracelets = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/AutresBracelets',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsAutresBracelets(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresBraceletsHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/AutresBracelets/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsAutresBraceletsHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresBraceletsFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/AutresBracelets/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsAutresBraceletsFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresBraceletsEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/AutresBracelets/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsAutresBraceletsEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresBraceletsMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Bracelets/AutresBracelets/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesBraceletsAutresBraceletsMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }



        const FetchCollierChaines = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChaines(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchColliers = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/Colliers',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesColliers(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchColliersHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/Colliers/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesColliersHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchColliersFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/Colliers/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesColliersFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchColliersEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/Colliers/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesColliersEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchColliersMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/Colliers/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesColliersMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetcChainesFines = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/ChaineFine',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesChainesFines(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetcChainesFinesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/ChaineFine/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesChainesFinesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetcChainesFinesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/ChaineFine/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesChainesFinesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetcChainesFinesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/ChaineFine/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesChainesFinesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetcChainesFinesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/ChaineFine/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesChainesFinesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresChaines = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/AutreChaines',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesAutresChaines(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresChainesHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/AutreChaines/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesAutresChainesHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresChainesFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/AutreChaines/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesAutresChainesFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresChainesEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/AutreChaines/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesAutresChainesEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchAutresChainesMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/ColliersEtChaines/AutreChaines/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesCollierChainesAutresChainesMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }




        const FetchParures = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Parures',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleParures(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchParuresHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Parures/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleParuresHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchParuresFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Parures/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleParuresFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchParuresEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Parures/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleParuresEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchParuresMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Parures/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticleParuresMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }

        

        const FetchPendentif = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifs(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchReligieux = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsReligieux',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsReligieux(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchReligieuxHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsReligieux/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsReligieuxHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchReligieuxFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsReligieux/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsReligieuxFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchReligieuxEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsReligieux/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsReligieuxEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchReligieuxMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsReligieux/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsReligieuxMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPlaque = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsPlaques',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsPlaque(arr);
                })
                .catch((error) => {console.log(error)})       
        }
        const FetchPlaqueHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsPlaques/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsPlaqueHomme(arr);
                })
                .catch((error) => {console.log(error)})       
        }
        const FetchPlaqueFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsPlaques/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsPlaqueFemme(arr);
                })
                .catch((error) => {console.log(error)})       
        }
        const FetchPlaqueEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsPlaques/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsPlaqueEnfant(arr);
                })
                .catch((error) => {console.log(error)})       
        }
        const FetchPlaqueMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/PendentifsPlaques/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsPendentifsPlaqueMix(arr);
                })
                .catch((error) => {console.log(error)})       
        }
        const FetchAutresPendentif = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/AutresPendentifs',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsAutresPendentifs(arr);
                })
                .catch((error) => {console.log(error)})          
        }
        const FetchAutresPendentifHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/AutresPendentifs/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                </div> 
                                <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                        </div>
                    ))
                    setArticlePendentifsAutresPendentifsHomme(arr);
                })
                .catch((error) => {console.log(error)})          
        }
        const FetchAutresPendentifFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/AutresPendentifs/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsAutresPendentifsFemme(arr);
                })
                .catch((error) => {console.log(error)})          
        }
        const FetchAutresPendentifEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/AutresPendentifs/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsAutresPendentifsEnfant(arr);
                })
                .catch((error) => {console.log(error)})          
        }
        const FetchAutresPendentifMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Pendentifs/AutresPendentifs/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlePendentifsAutresPendentifsMix(arr);
                })
                .catch((error) => {console.log(error)})          
        }




        const FetchPiercings = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercings(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingNez = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsNez',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsNez(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingNezHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsNez/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsNezHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingNezFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsNez/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsNezFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingNezEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsNez/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsNezEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingNezMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsNez/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsNezMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingsDivers = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsDivers',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                     <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsDivers(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingsDiversHomme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsDivers/Homme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsDiversHomme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingsDiversFemme = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsDivers/Femme',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsDiversFemme(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingsDiversEnfant = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsDivers/Enfant',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsDiversEnfant(arr);
                })
                .catch((error) => {console.log(error)})    
        }
        const FetchPiercingsDiversMix = () => {
            fetch('http://proj6.ruppin-tech.co.il/api/Articles/Percings/PiercingsDivers/Mix',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((res) => {
                    let arr = []
                    res.map(item => arr.push(
                        <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                        <Card
                            Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                            Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                            Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                            Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                            Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                            Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                            Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                            Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                            Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                            Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            <div className = "btnBx">
                                    <button type = "submit" 
                                    onClick = {() => {ViewCard(item)}} 
                                    className="card-btn">
                                        Voir l'article 
                                    </button>
                                    <button type = "submit" 
                                    onClick = {() => {AddShop(item)}} 
                                    className="card-btn-add-sh">
                                    Ajouter au panier
                                </button>
                                </div> 
                        </div>
                    ))
                    setArticlesPiercingsPiercingsDiversMix(arr);
                })
                .catch((error) => {console.log(error)})    
        }

        //---------------------------------VIEW CARD---------------------------------
        const ViewCard = (item) => {
        setDetailCard(!DetailCard)
        setItemDetailCard(item)
        }

        FetchDemandeDeDevis();
        FetchDataArticles();
        FetchBague();
        FetchBaguesAlliances();
        FetchBaguesAlliancesHomme();
        FetchBaguesAlliancesFemme();
        FetchBaguesAlliancesEnfant();
        FetchBaguesAlliancesMix();
        FetchBagueAtresBagues();
        FetchBagueAtresBaguesHomme();
        FetchBagueAtresBaguesFemme();
        FetchBagueAtresBaguesEnfant();
        FetchBagueAtresBaguesMix();
        FetchBagueChevalieres();
        FetchBagueChevalieresHomme();
        FetchBagueChevalieresFemme();
        FetchBagueChevalieresEnfant();
        FetchBagueChevalieresMix();
        FetchBagueSolitaires();
        FetchBagueSolitairesHomme();
        FetchBagueSolitairesFemme();
        FetchBagueSolitairesEnfant();
        FetchBagueSolitairesMix();
        FetchBoucleDOreilles();
        FetchBoucleDOreillesPuces();
        FetchBoucleDOreillesPucesHomme();
        FetchBoucleDOreillesPucesFemme();
        FetchBoucleDOreillesPucesEnfant();
        FetchBoucleDOreillesPucesMix();
        FetchBoucleDOreillesCreoles();
        FetchBoucleDOreillesCreolesHomme();
        FetchBoucleDOreillesCreolesFemme();
        FetchBoucleDOreillesCreolesEnfant();
        FetchBoucleDOreillesCreolesMix();
        FetchBaguBoucleDOreillesAtresBoucleDOreilles();
        FetchBaguBoucleDOreillesAtresBoucleDOreillesHomme();
        FetchBaguBoucleDOreillesAtresBoucleDOreillesFemme();
        FetchBaguBoucleDOreillesAtresBoucleDOreillesEnfant();
        FetchBaguBoucleDOreillesAtresBoucleDOreillesMix();
        FetchBoucleDOreillesPendantes();
        FetchBoucleDOreillesPendantesHomme();
        FetchBoucleDOreillesPendantesFemme();
        FetchBoucleDOreillesPendantesEnfant();
        FetchBoucleDOreillesPendantesMix();
        FetchBracelets();
        FetchBraceletsIdentite();
        FetchBraceletsIdentiteHomme();
        FetchBraceletsIdentiteFemme();
        FetchBraceletsIdentiteEnfant();
        FetchBraceletsIdentiteMix();
        FetchBraceletsRigides();
        FetchBraceletsRigidesHomme();
        FetchBraceletsRigidesFemme();
        FetchBraceletsRigidesEnfant();
        FetchBraceletsRigidesMix();
        FetchAutresBracelets();
        FetchAutresBraceletsHomme();
        FetchAutresBraceletsFemme();
        FetchAutresBraceletsEnfant();
        FetchAutresBraceletsMix();
        FetchCollierChaines();
        FetchColliers();
        FetchColliersHomme();
        FetchColliersFemme();
        FetchColliersEnfant();
        FetchColliersMix();
        FetcChainesFines();
        FetcChainesFinesHomme();
        FetcChainesFinesFemme();
        FetcChainesFinesEnfant();
        FetcChainesFinesMix();
        FetchAutresChaines();
        FetchAutresChainesHomme();
        FetchAutresChainesFemme();
        FetchAutresChainesEnfant();
        FetchAutresChainesMix();
        FetchParures();
        FetchParuresHomme();
        FetchParuresFemme();
        FetchParuresEnfant();
        FetchParuresMix();
        FetchPendentif();
        FetchReligieux();
        FetchReligieuxHomme();
        FetchReligieuxFemme();
        FetchReligieuxEnfant();
        FetchReligieuxMix();
        FetchPlaque();
        FetchPlaqueHomme();
        FetchPlaqueFemme();
        FetchPlaqueEnfant();
        FetchPlaqueMix();
        FetchAutresPendentif();
        FetchAutresPendentifHomme();  
        FetchAutresPendentifFemme();  
        FetchAutresPendentifEnfant();  
        FetchAutresPendentifMix();    
        FetchPiercings();  
        FetchPiercingNez(); 
        FetchPiercingNezHomme(); 
        FetchPiercingNezFemme(); 
        FetchPiercingNezEnfant(); 
        FetchPiercingNezMix(); 
        FetchPiercingsDivers();
        FetchPiercingsDiversHomme(); 
        FetchPiercingsDiversFemme(); 
        FetchPiercingsDiversEnfant(); 
        FetchPiercingsDiversMix();   
        Aos.init();
    },[DetailCard])
    //#endregion









    //#region FUNCTION GLOBAL
    const CloseDetail = () => {setDetailCard(false)}
    const AddShop = (item) => { if(!localStorage.getItem(item.Art_Num_ID)){localStorage.setItem(item.Art_Num_ID, JSON.stringify(item))}; window.location.reload();}
    const RemoveItem = (item) =>{localStorage.removeItem(item); window.location.reload();}
    const paginate = pageNumber => {setCurrentPage(pageNumber);}
   // const [qty,setQty]=useState(1)
   
    //#endregion

    //#region RETURN CONTACT-US EMAIL

    //---------------------------------RETURN CONTACT-US EMAIL---------------------------------
    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpyz08r', 'template_wrl8bdj', e.target, 'user_AYfkXbBsNcOJkIhBcoJB9')
        .then((result) => {
          console.log(result.text);
            }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    //#endregion

    //#region RETURN COMMANDE
    const SendCommande = (e,test) => {
        e.preventDefault();
        console.log("je suis dans l envoi de la demande de devis")
        console.log(sessionStorage.key(Client.Cptcli_Num_ID))
        /*emailjs.sendForm("service_qpyz08r","template_wrl8bdj",form.current,'user_VOfgK4lyXlZu4LZoFc61M')
                .then((result) => {
                console.log(result);
                    }, (error) => {
                console.log(error.text);
        });*/        
        //Update demande de devis
        const UpdateClientPourDemandeDeDevis = {
            Cptcli_Num_ID:Client.Cptcli_Num_ID,
            Cptcli_Email_Id:Client.Cptcli_Email_Id,
            Cptcli_Password:Client.Cptcli_Password,
            Cptcli_Actif:Client.Cptcli_Actif,
            Cptcli_Acces_Premium:Client.Cptcli_Acces_Premium,
            Cptcli_Civilite:Client.Cptcli_Civilite,
            Cptcli_Nomcli:Client.Cptcli_Nomcli,
            Cptcli_Prenom:Client.Cptcli_Prenom,
            Cptcli_Tel1:Client.Cptcli_Tel1,
            Cptcli_RaiSoc:Client.Cptcli_RaiSoc,
            Cptcli_No_Siret:Client.Cptcli_No_Siret,
            Cptcli_No_TVAintra:Client.Cptcli_No_TVAintra,
            Cptcli_Adr1:Client.Cptcli_Adr1,
            Cptcli_Adr2:Client.Cptcli_Adr2,
            Cptcli_CP:Client.Cptcli_CP,
            Cptcli_ville:Client.Cptcli_ville,
            Cptcli_Pays:Client.Cptcli_Pays,
            Cptcli_Tel2:Client.Cptcli_Tel2,
            Cptcli_RefcliMB:Client.Cptcli_RefcliMB,
            Cptcli_ComptacliMB:Client.Cptcli_ComptacliMB,
            Cptcli_Cpteur_Devis:Client.Cptcli_Cpteur_Devis,
            Cptcli_Cle_secu:Client.Cptcli_Cle_secu,
            Cptcli_DatCre:Client.Cptcli_DatCre,
            Cptcli_DatMaj:date,
        }

        console.log("les donne de UpdateClientPourDemandeDeDevis")
        console.log(UpdateClientPourDemandeDeDevis)

        axios.put(`http://proj6.ruppin-tech.co.il/api/ComptesClients/${UpdateClientPourDemandeDeDevis.Cptcli_Num_ID}`,UpdateClientPourDemandeDeDevis)
        .then(response => {
            console.log(response)
             //sessionStorage.removeItem(Client.Cptcli_Num_ID)
            if(!sessionStorage.getItem(UpdateClientPourDemandeDeDevis.Cptcli_Num_ID))
            {
                console.log("la donne du session storage est a jours")
                sessionStorage.setItem(UpdateClientPourDemandeDeDevis.Cptcli_Num_ID,JSON.stringify(UpdateClientPourDemandeDeDevis))
            }
        })
    

        //Post demande de devis
        /*let DevnumString = Client.Cptcli_Num_ID.toString() + Client.Cptcli_Cpteur_Devis.toString();
        const Devnum = parseInt(DevnumString)

        const DemandeDeDevisPourUnClient = {
            Demdev_Num_ID:Devnum,
            Cptcli_Num_ID:Client.Cptcli_Num_ID,
            Demdev_Statut:"EV",
            Demdev_MsgCli:"",
            Demdev_MsgMB:"",
            Demdev_MontantHT:0,
            Demdev_NB_Lig_Art:Key.length,
            Demdev_NB_Piece	: 0,
            Demdev_NB_Ligne:Key.length,
            Demdev_DatCre:date,
            Demdev_DatMaj:date
        };
        console.log(DemandeDeDevisPourUnClient)
        axios.post(`http://proj6.ruppin-tech.co.il/api/DemandeDevis`,DemandeDeDevisPourUnClient)
        .then(response => {
            console.log(response)   
        }) 

    
    
        for(let i = 0 ; i < Key.length ; i++ )
        {
            const CptI = i + 1
            const LignumString = Devnum  + CptI.toString();
            const Lignum = parseInt(LignumString)

            const saved = localStorage.getItem(localStorage.key(i));
            const initialValue = JSON.parse(saved);
            
            console.log(test);
            const LigneDeDemandeDeDevis = {
                Ligdev_Num_ID:Lignum,
                Demdev_Num_ID: Devnum,
                Art_Num_ID:initialValue.Art_Num_ID,
                Art_Ref:initialValue.Art_Ref,
                Ligdev_Qte:0,
                Ligdev_Poids_TH:0,
                Ligdev_Prix_HT:0,
                Ligdev_MsgCli:"",
                Ligdev_PrixVteHT:0,
            }
            axios.post(`http://proj6.ruppin-tech.co.il/api/LignesDemandeDevis`,LigneDeDemandeDeDevis)
            .then(response => console.log(response.data)) 
        }*/
    
        //localStorage.clear()
    
    
        //window.location.reload()
    
    
    

    
    }
    //#endregion

    //#region RETURN ARTICLES FILTER
    //---------------------------------RETURN ARTICLES FILTER---------------------------------
    const search = (rows) =>{
        if(queryRef !== ""){
            return (rows.filter((row) => row.Art_Ref.toLowerCase().indexOf(queryRef.toLowerCase()) > -1))
        }
        return (rows.filter((row) => row.Art_Description.toLowerCase().indexOf(query.toLowerCase()) > -1))
    }
    const InputForFilter = <div className = "ct-item-search">
        <div className = "ct-inp-search">
            <div className = "ct-input-filter"><label>Recherche: <input type='text' placeholder = "Entrer la recherche au detail..." value={query} onChange={(e) => setQuery(e.target.value)} onClick = {() => setQueryRef("")}/></label></div>
            <div className = "ct-input-filter"><label>Recherche Reference: <input type='text' placeholder = "Entres la reference du bijoux" value={queryRef} onChange={(e) => setQueryRef(e.target.value)} onClick = {() => setQuery("")}/></label></div>
        </div>
        <div className = "ct-datatable">
            <Datatable data = {search(currentAllArticles)} AddShop={AddShop}
             postsPerPage = {postsPerPage} 
             AllArticlesLenght = {AllArticlesLenght} 
             paginate = {paginate}/>
        </div>
    </div>
    //#endregion

    //#region RETURN ARTICLES DETAIL
    //---------------------------------RETURN ARTICLES DETAIL---------------------------------
    const CardDetailItem = DetailCard && <div className ={DetailCard ? "det-card" : "det-card-close"}>
        <div className = "bx-btn-close-dt-card"><button type = "submit" className ="btn-close-dt-card" onClick = {() => {CloseDetail()}}><AiOutlineClose size ={24}/></button></div>  
        <CardDetail ItemDetailCard = {ItemDetailCard} DetailCard = {DetailCard} AddShop = {AddShop}/>
    </div>
    //#endregion

    //#region RETURN ARTICLES BAGUES-
    //---------------------------------RETURN ARTICLES BAGUES---------------------------------
    const returnArticlesBagues =  isLoading ? <Fragment> {currentArticlesBagues} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBaguesAlliances =  isLoading ? <Fragment> {currentArticlesBaguesAlliances} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAlliancesHomme =  isLoading ? <Fragment> {currentArticlesBaguesAlliancesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAlliancesFemme =  isLoading ? <Fragment> {currentArticlesBaguesAlliancesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAlliancesEnfant =  isLoading ? <Fragment> {currentArticlesBaguesAlliancesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAlliancesMix =  isLoading ? <Fragment> {currentArticlesBaguesAlliancesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBaguesAutresBagues =  isLoading ? <Fragment> {currentArticlesBaguesAutresBagues} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAutresBaguesHomme =  isLoading ? <Fragment> {currentArticlesBaguesAutresBaguesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAutresBaguesFemme =  isLoading ? <Fragment> {currentArticlesBaguesAutresBaguesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAutresBaguesEnfant =  isLoading ? <Fragment> {currentArticlesBaguesAutresBaguesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesAutresBaguesMix =  isLoading ? <Fragment> {currentArticlesBaguesAutresBaguesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBaguesChevalieres =  isLoading ? <Fragment> {currentArticlesBaguesChevalieres} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesChevalieresHomme =  isLoading ? <Fragment> {currentArticlesBaguesChevalieresHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesChevalieresFemme =  isLoading ? <Fragment> {currentArticlesBaguesChevalieresFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesChevalieresEnfant =  isLoading ? <Fragment> {currentArticlesBaguesChevalieresEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesChevalieresMix =  isLoading ? <Fragment> {currentArticlesBaguesChevalieresMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBaguesSolitaires =  isLoading ? <Fragment> {currentArticlesBaguesSolitaires} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesSolitairesHomme =  isLoading ? <Fragment> {currentArticlesBaguesSolitairesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesSolitairesFemme =  isLoading ? <Fragment> {currentArticlesBaguesSolitairesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesSolitairesEnfant =  isLoading ? <Fragment> {currentArticlesBaguesSolitairesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBaguesSolitairesMix =  isLoading ? <Fragment> {currentArticlesBaguesSolitairesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion 
    
    //#region RETURN ARTICLES BOUCLE D'OREILLES
    //---------------------------------RETURN ARTICLES BOUCLE D'OREILLES---------------------------------
    const returnArticlesBoucleDOreilles =  isLoading ? <Fragment> {currentArticlesBoucleDOreilles} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBoucleDOreillesPuces =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPuces} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPucesHomme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPucesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPucesFemme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPucesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPucesEnfant =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPucesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPucesMix =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPucesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBoucleDOreillesPendantes =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPendantes} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPendantesHomme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPendantesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPendantesFemme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPendantesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPendantesEnfant =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPendantesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesPendantesMix =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesPendantesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBoucleDOreillesCreoles =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesCreoles} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesCreolesHomme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesCreolesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesCreolesFemme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesCreolesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesCreolesEnfant =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesCreolesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesCreolesMix =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesCreolesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBoucleDOreillesAtresBoucleDOreilles =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesAtresBoucleDOreilles} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesAtresBoucleDOreillesHomme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesAtresBoucleDOreillesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesAtresBoucleDOreillesFemme =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesAtresBoucleDOreillesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesAtresBoucleDOreillesEnfant =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesAtresBoucleDOreillesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBoucleDOreillesAtresBoucleDOreillesMix =  isLoading ? <Fragment> {currentArticlesBoucleDOreillesAtresBoucleDOreillesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion
    
    //#region RETURN ARTICLES BRACELETS
    //---------------------------------RETURN ARTICLES BRACELETS---------------------------------
    const returnArticlesBracelets =  isLoading ? <Fragment> {currentArticlesBracelets} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBraceletsRigides =  isLoading ? <Fragment> {currentArticlesBraceletsRigides} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsRigidesHomme =  isLoading ? <Fragment> {currentArticlesBraceletsRigidesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsRigidesFemme =  isLoading ? <Fragment> {currentArticlesBraceletsRigidesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsRigidesEnfant =  isLoading ? <Fragment> {currentArticlesBraceletsRigidesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsRigidesMix =  isLoading ? <Fragment> {currentArticlesBraceletsRigidesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBraceletsIdentite =  isLoading ? <Fragment> {currentArticlesBraceletsIdentite} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsIdentiteHomme =  isLoading ? <Fragment> {currentArticlesBraceletsIdentiteHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsIdentiteFemme =  isLoading ? <Fragment> {currentArticlesBraceletsIdentiteFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsIdentiteEnfant =  isLoading ? <Fragment> {currentArticlesBraceletsIdentiteEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsIdentiteMix =  isLoading ? <Fragment> {currentArticlesBraceletsIdentiteMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesBraceletsAutresBracelets =  isLoading ? <Fragment> {currentArticlesBraceletsAutresBracelets} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsAutresBraceletsHomme =  isLoading ? <Fragment> {currentArticlesBraceletsAutresBraceletsHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsAutresBraceletsFemme =  isLoading ? <Fragment> {currentArticlesBraceletsAutresBraceletsFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsAutresBraceletsEnfant =  isLoading ? <Fragment> {currentArticlesBraceletsAutresBraceletsEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesBraceletsAutresBraceletsMix =  isLoading ? <Fragment> {currentArticlesBraceletsAutresBraceletsMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    //#endregion
    
    //#region RETURN ARTICLES COLLIERS ET CHAINES
    //---------------------------------RETURN ARTICLES COLLIERS ET CHAINES---------------------------------
    const returnArticlesCollierChaines =  isLoading ? <Fragment> {currentArticlesCollierChaines} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesCollierChainesColliers =  isLoading ? <Fragment> {currentArticlesCollierChainesColliers} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesColliersHomme =  isLoading ? <Fragment> {currentArticlesCollierChainesColliersHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesColliersFemme =  isLoading ? <Fragment> {currentArticlesCollierChainesColliersFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesColliersEnfant =  isLoading ? <Fragment> {currentArticlesCollierChainesColliersEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesColliersMix =  isLoading ? <Fragment> {currentArticlesCollierChainesColliersMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesCollierChainesChainesFines =  isLoading ? <Fragment> {currentArticlesCollierChainesChainesFines} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesChainesFinesHomme =  isLoading ? <Fragment> {currentArticlesCollierChainesChainesFinesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesChainesFinesFemme =  isLoading ? <Fragment> {currentArticlesCollierChainesChainesFinesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesChainesFinesEnfant =  isLoading ? <Fragment> {currentArticlesCollierChainesChainesFinesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesChainesFinesMix =  isLoading ? <Fragment> {currentArticlesCollierChainesChainesFinesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesCollierChainesAutresChaines =  isLoading ? <Fragment> {currentArticlesCollierChainesAutresChaines} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesAutresChainesHomme =  isLoading ? <Fragment> {currentArticlesCollierChainesAutresChainesHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesAutresChainesFemme =  isLoading ? <Fragment> {currentArticlesCollierChainesAutresChainesFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesAutresChainesEnfant =  isLoading ? <Fragment> {currentArticlesCollierChainesAutresChainesEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesCollierChainesAutresChainesMix =  isLoading ? <Fragment> {currentArticlesCollierChainesAutresChainesMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion
    
    //#region RETURN ARTICLES PARURES
    //---------------------------------RETURN ARTICLES COLLIERS ET CHAINES---------------------------------
    const returnArticlesParures =  isLoading ? <Fragment> {currentArticlesParures} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesParuresHomme =  isLoading ? <Fragment> {currentArticlesParuresHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesParuresFemme =  isLoading ? <Fragment> {currentArticlesParuresFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesParuresEnfant =  isLoading ? <Fragment> {currentArticlesParuresEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesParuresMix =  isLoading ? <Fragment> {currentArticlesParuresMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion
    
    //#region RETURN ARTICLES PENDENTIFS
    //---------------------------------RETURN ARTICLES PENDENTIFS---------------------------------
    const returnArticlesPendentifs =  isLoading ? <Fragment> {currentArticlesPendentifs} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesPendentifsPendentifsReligieux =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsReligieux} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsReligieuxHomme =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsReligieuxHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsReligieuxFemme =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsReligieuxFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsReligieuxEnfant =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsReligieuxEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsReligieuxMix =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsReligieuxMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesPendentifsPendentifsPlaque =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsPlaque} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsPlaqueHomme =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsPlaqueHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsPlaqueFemme =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsPlaqueFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsPlaqueEnfant =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsPlaqueEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsPendentifsPlaqueMix =  isLoading ? <Fragment> {currentArticlesPendentifsPendentifsPlaqueMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesPendentifsAutresPendentifs =  isLoading ? <Fragment> {currentArticlesPendentifsAutresPendentifs} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsAutresPendentifsHomme =  isLoading ? <Fragment> {currentArticlesPendentifsAutresPendentifsHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsAutresPendentifsFemme =  isLoading ? <Fragment> {currentArticlesPendentifsAutresPendentifsFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsAutresPendentifsEnfant =  isLoading ? <Fragment> {currentArticlesPendentifsAutresPendentifsEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPendentifsAutresPendentifsMix =  isLoading ? <Fragment> {currentArticlesPendentifsAutresPendentifsMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion

    //#region RETURN ARTICLES PIERCINGS
    //---------------------------------RETURN ARTICLES PENDENTIFS---------------------------------
    const returnArticlesPiercings =  isLoading ? <Fragment> {currentArticlesPiercings} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesPiercingsPiercingsNez =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsNez} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsNezHomme =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsNezHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsNezFemme =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsNezFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsNezEnfant =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsNezEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsNezMix =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsNezMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    
    const returnArticlesPiercingsPiercingsDivers =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsDivers} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsDiversHomme =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsDiversHomme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsDiversFemme =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsDiversFemme} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsDiversEnfant =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsDiversEnfant} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    const returnArticlesPiercingsPiercingsDiversMix =  isLoading ? <Fragment> {currentArticlesPiercingsPiercingsDiversMix} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion
    
    //#region RETURN ARTICLES FILTER
    //---------------------------------RETURN ARTICLES FILTER---------------------------------
    const returnAllArticles =  isLoading ? <Fragment>{InputForFilter} {CardDetailItem}</Fragment> :  <div className = "ct-react-loading"><ReactLoading type ="bubbles" color ="#59bdff"/></div>
    //#endregion
    


    return (
        <Provider store = {store}>
            <BrowserRouter>    
                <Switch>
                    <Route path = "/" exact component = {Home}>
                    <Navbar Client = {Client}/>  
                        <Home/>
                        <Footer/>
                    </Route>
                    <Route path = "/Command" exact component = {Command}>
                    <Navbar Client = {Client}/>
                        <Command Key = {Key} 
                        Client = {Client} 
                        RemoveItem = {RemoveItem} 
                        form = {form} 
                        SendCommande = {SendCommande}
                       />
                                       <Footer/>
                    </Route>
                    <Route path = "/About" exact component = {About}>
                    <Navbar Client = {Client}/>
                        <About/>
                        <Footer/>
                    </Route>
                    <Route path = "/ContactUs" exact component = {ContactUs}>
                    <Navbar Client = {Client}/>
                        <ContactUs SendEmail = {SendEmail}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/FilterSearch" exact component = {FilterSearch}>
                    <Navbar Client = {Client}/>
                        <FilterSearch returnAllArticles = {returnAllArticles}
                        postsPerPage = {postsPerPage} 
                        AllArticlesLenght = {AllArticlesLenght} 
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Profile" exact component = {Profile}>
                    <Navbar Client = {Client}/>
                        <Profile Client = {Client}
                        date = {date}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/InscriptionConnection2" exact component = {InscriptionConnection2}>
                    <Navbar Client = {Client}/>
                        <InscriptionConnection2 
                        crypto = {crypto}
                        date = {date}
                        regex = {regex}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/ConditionGeneral" exact component = {General_Condition}>
                    <Navbar Client = {Client}/>
                        <General_Condition/>
                                        <Footer/>
                    </Route>  
                    <Route path = "/PolitiqueDeComfidentialite" exact component = {Politique_de_Comfidentialite}>
                    <Navbar Client = {Client}/> 
                        <Politique_de_Comfidentialite/>
                        <Footer/>
                    </Route> 
                    <Route path = "/MentionLegal" exact component = {Mention_Legal}>
                    <Navbar Client = {Client}/>
                        <Mention_Legal/>
                        <Footer/>
                    </Route> 
                    <Route path = "/Bienvenu/:CleSecu" exact component = {Bienvenu}>
                       <Bienvenu date = {date}/>
                    </Route>  
                    <Route path = "/Mots de passe Oublier" exact component = {Mots_de_passe_Oublier}>
                    <Navbar Client = {Client}/>
                        <Mots_de_passe_Oublier cryptoNewMdp = {cryptoNewMdp} date = {date}/> 
                        <Footer/>
                    </Route> 
                    
                       
                    


                    <Route path = "/Bagues" exact component = {Bagues}>
                    <Navbar Client = {Client}/>
                        <Bagues returnArticlesBagues = {returnArticlesBagues} 
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesLenght = {ArticlesBaguesLenght} 
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>


                    <Route path = "/Alliances" exact component = {Alliances}>
                    <Navbar Client = {Client}/>
                        <Alliances returnArticlesBaguesAlliances = {returnArticlesBaguesAlliances} 
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesAlliancesLenght = {ArticlesBaguesAlliancesLenght} 
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Alliences Homme" exact component = {Alliences_Homme}>
                        <Navbar Client = {Client}/>
                        <Alliences_Homme returnArticlesBaguesAlliancesHomme = {returnArticlesBaguesAlliancesHomme} 
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesAlliancesHommeLenght= {ArticlesBaguesAlliancesHommeLenght} 
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Alliances Femme" exact component = {Alliences_Femme}>
                        <Navbar Client = {Client}/>
                        <Alliences_Femme returnArticlesBaguesAlliancesFemme = {returnArticlesBaguesAlliancesFemme}
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesAlliancesFemmeLenght= {ArticlesBaguesAlliancesFemmeLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Alliances Enfant" exact component = {Alliences_Enfant}>
                    <Navbar Client = {Client}/>
                        <Alliences_Enfant returnArticlesBaguesAlliancesEnfant = {returnArticlesBaguesAlliancesEnfant}
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesAlliancesEnfantLenght= {ArticlesBaguesAlliancesEnfantLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Alliances Mix" exact component = {Alliences_Mix}>
                    <Navbar Client = {Client}/>
                        <Alliences_Mix returnArticlesBaguesAlliancesMix = {returnArticlesBaguesAlliancesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesAlliancesMixLenght= {ArticlesBaguesAlliancesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>



                    <Route path = "/Autres Bagues" exact component = {Autres_Bagues}>
                    <Navbar Client = {Client}/>
                        <Autres_Bagues returnArticlesBaguesAutresBagues = {returnArticlesBaguesAutresBagues}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesAutresBaguesLenght= {ArticlesBaguesAutresBaguesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bagues Homme" exact component = {Autres_Bagues_Homme}>
                    <Navbar Client = {Client}/>
                        <Autres_Bagues_Homme returnArticlesBaguesAutresBaguesHomme = {returnArticlesBaguesAutresBaguesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesAutresBaguesHommeLenght= {ArticlesBaguesAutresBaguesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bagues Femme" exact component = {Autres_Bagues_Femme}>
                    <Navbar Client = {Client}/>
                        <Autres_Bagues_Femme returnArticlesBaguesAutresBaguesFemme = {returnArticlesBaguesAutresBaguesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesAutresBaguesFemmeLenght= {ArticlesBaguesAutresBaguesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bagues Enfant" exact component = {Autres_Bagues_Enfant}>
                    <Navbar Client = {Client}/>
                        <Autres_Bagues_Enfant returnArticlesBaguesAutresBaguesEnfant = {returnArticlesBaguesAutresBaguesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesAutresBagueEnfantLenght= {ArticlesBaguesAutresBaguesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bagues Mix" exact component = {Autres_Bagues_Mix}>
                    <Navbar Client = {Client}/>
                        <Autres_Bagues_Mix returnArticlesBaguesAutresBaguesMix = {returnArticlesBaguesAutresBaguesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesAutresBaguesMixLenght = {ArticlesBaguesAutresBaguesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    



                    <Route path = "/Chevalières" exact component = {Chevalières}>
                         <Navbar Client = {Client}/>
                        <Chevalières returnArticlesBaguesChevalieres = {returnArticlesBaguesChevalieres}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesChevalieresLenght = {ArticlesBaguesChevalieresLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Chevalières Homme" exact component = {Chevalières_Homme}>
                    <Navbar Client = {Client}/>
                        <Chevalières_Homme returnArticlesBaguesChevalieresHomme = {returnArticlesBaguesChevalieresHomme}
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesChevalieresHommeLenght = {ArticlesBaguesChevalieresHommeLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Chevalières Femme" exact component = {Chevalières_Femme}>
                    <Navbar Client = {Client}/>
                        <Chevalières_Femme returnArticlesBaguesChevalieresFemme = {returnArticlesBaguesChevalieresFemme}
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesChevalieresFemmeLenght = {ArticlesBaguesChevalieresFemmeLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Chevalières Enfant" exact component = {Chevalières_Enfant}>
                    <Navbar Client = {Client}/>
                        <Chevalières_Enfant returnArticlesBaguesChevalieresEnfant = {returnArticlesBaguesChevalieresEnfant}
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesChevalieresEnfantLenght = {ArticlesBaguesChevalieresEnfantLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Chevalières Mix" exact component = {Chevalières_Mix}>
                         <Navbar Client = {Client}/>
                        <Chevalières_Mix returnArticlesBaguesChevalieresMix = {returnArticlesBaguesChevalieresMix}
                        postsPerPage = {postsPerPage} 
                        ArticlesBaguesChevalieresMixLenght = {ArticlesBaguesChevalieresMixLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    


                    <Route path = "/Solitaires" exact component = {Solitaires}>
                         <Navbar Client = {Client}/>
                        <Solitaires returnArticlesBaguesSolitaires = {returnArticlesBaguesSolitaires}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesSolitairesLenght = {ArticlesBaguesSolitairesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Solitaires Homme" exact component = {Solitaires_Homme}>
                    <Navbar Client = {Client}/>
                        <Solitaires_Homme returnArticlesBaguesSolitairesHomme = {returnArticlesBaguesSolitairesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesSolitairesHommeLenght = {ArticlesBaguesSolitairesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>   
                    <Route path = "/Solitaires Femme" exact component = {Solitaires_Femme}>
                    <Navbar Client = {Client}/>
                        <Solitaires_Femme returnArticlesBaguesSolitairesFemme = {returnArticlesBaguesSolitairesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesSolitairesFemmeLenght = {ArticlesBaguesSolitairesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>   
                    <Route path = "/Solitaires Enfant" exact component = {Solitaires_Enfant}>
                    <Navbar Client = {Client}/>
                        <Solitaires_Enfant returnArticlesBaguesSolitairesEnfant = {returnArticlesBaguesSolitairesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesSolitairesEnfantLenght = {ArticlesBaguesSolitairesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>   
                    <Route path = "/Solitaires Mix" exact component = {Solitaires_Mix}>
                    <Navbar Client = {Client}/>
                        <Solitaires_Mix returnArticlesBaguesSolitairesMix = {returnArticlesBaguesSolitairesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBaguesSolitairesMixLenght = {ArticlesBaguesSolitairesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>      




    
                    <Route path = "/Boucles d'oreilles" exact component = {Boucles_d_oreilles}>
                    <Navbar Client = {Client}/>
                        <Boucles_d_oreilles returnArticlesBoucleDOreilles ={returnArticlesBoucleDOreilles} 
                        postsPerPage = {postsPerPage} 
                        ArticlesBoucleDOreillesLenght = {ArticlesBoucleDOreillesLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Autres Boucles d'oreilles" exact component = {Autres_Boucles_d_oreilles}>
                    <Navbar Client = {Client}/>
                        <Autres_Boucles_d_oreilles returnArticlesBoucleDOreillesAtresBoucleDOreilles = {returnArticlesBoucleDOreillesAtresBoucleDOreilles}
                        postsPerPage = {postsPerPage} 
                        ArticlesBoucleDOreillesAtresBoucleDOreillesLenght = {ArticlesBoucleDOreillesAtresBoucleDOreillesLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Autres Boucles d'oreilles Homme" exact component = {Autres_Boucles_d_oreilles_Homme}>                      
                    <Navbar Client = {Client}/>
                    <Autres_Boucles_d_oreilles_Homme returnArticlesBoucleDOreillesAtresBoucleDOreillesHomme = {returnArticlesBoucleDOreillesAtresBoucleDOreillesHomme}
                        postsPerPage = {postsPerPage} 
                        ArticlesBoucleDOreillesAtresBoucleDOreillesHommeLenght = {ArticlesBoucleDOreillesAtresBoucleDOreillesHommeLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Autres Boucles d'oreilles Femme" exact component = {Autres_Boucles_d_oreilles_Femme}>
                    <Navbar Client = {Client}/>
                        <Autres_Boucles_d_oreilles_Femme returnArticlesBoucleDOreillesAtresBoucleDOreillesFemme = {returnArticlesBoucleDOreillesAtresBoucleDOreillesFemme}
                        postsPerPage = {postsPerPage} 
                        ArticlesBoucleDOreillesAtresBoucleDOreillesFemmeLenght = {ArticlesBoucleDOreillesAtresBoucleDOreillesFemmeLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Autres Boucles d'oreilles Enfant" exact component = {Autres_Boucles_d_oreilles_Enfant}>
                    <Navbar Client = {Client}/>
                        <Autres_Boucles_d_oreilles_Enfant returnArticlesBoucleDOreillesAtresBoucleDOreillesEnfant = {returnArticlesBoucleDOreillesAtresBoucleDOreillesEnfant}
                        postsPerPage = {postsPerPage} 
                        ArticlesBoucleDOreillesAtresBoucleDOreillesEnfantLenght = {ArticlesBoucleDOreillesAtresBoucleDOreillesEnfantLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    <Route path = "/Autres Boucles d'oreilles Mix" exact component = {Autres_Boucles_d_oreilles_Mix}>
                    <Navbar Client = {Client}/>
                        <Autres_Boucles_d_oreilles_Mix returnArticlesBoucleDOreillesAtresBoucleDOreillesMix = {returnArticlesBoucleDOreillesAtresBoucleDOreillesMix}
                        postsPerPage = {postsPerPage} 
                        ArticlesBoucleDOreillesAtresBoucleDOreillesMixLenght = {ArticlesBoucleDOreillesAtresBoucleDOreillesMixLenght}
                        paginate = {paginate}/>
                                        <Footer/>
                    </Route>
                    
                    <Route path = "/Créoles " exact component = {Créoles}>
                    <Navbar Client = {Client}/>
                        <Créoles returnArticlesBoucleDOreillesCreoles = {returnArticlesBoucleDOreillesCreoles}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesCreolesLenght = {ArticlesBoucleDOreillesCreolesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Créoles Homme" exact component = {Créoles_Homme}>
                    <Navbar Client = {Client}/>
                        <Créoles_Homme returnArticlesBoucleDOreillesCreolesHomme = {returnArticlesBoucleDOreillesCreolesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesCreolesHommeLenght = {ArticlesBoucleDOreillesCreolesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Créoles Femme" exact component = {Créoles_Femme}>
                         <Navbar Client = {Client}/>
                        <Créoles_Femme returnArticlesBoucleDOreillesCreolesFemme = {returnArticlesBoucleDOreillesCreolesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesCreolesFemmeLenght = {ArticlesBoucleDOreillesCreolesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Créoles Enfant" exact component = {Créoles_Enfant}>
                    <Navbar Client = {Client}/>
                        <Créoles_Enfant returnArticlesBoucleDOreillesCreolesEnfant = {returnArticlesBoucleDOreillesCreolesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesCreolesEnfantLenght = {ArticlesBoucleDOreillesCreolesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                        </Route>
                    <Route path = "/Créoles Mix" exact component = {Créoles_Mix}>
                    <Navbar Client = {Client}/>
                        <Créoles_Mix returnArticlesBoucleDOreillesCreolesMix = {returnArticlesBoucleDOreillesCreolesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesCreolesMixLenght = {ArticlesBoucleDOreillesCreolesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Pendantes" exact component = {Pendantes}>
                    <Navbar Client = {Client}/>
                        <Pendantes returnArticlesBoucleDOreillesPendantes = {returnArticlesBoucleDOreillesPendantes}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPendantesLenght = {ArticlesBoucleDOreillesPendantesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Pendantes Homme" exact component = {Pendantes_Homme}>
                    <Navbar Client = {Client}/>
                        <Pendantes_Homme returnArticlesBoucleDOreillesPendantesHomme = {returnArticlesBoucleDOreillesPendantesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPendantesHommeLenght = {ArticlesBoucleDOreillesPendantesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendantes Femme" exact component = {Pendantes_Femme}>
                    <Navbar Client = {Client}/>
                        <Pendantes_Femme returnArticlesBoucleDOreillesPendantesFemme = {returnArticlesBoucleDOreillesPendantesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPendantesFemmeLenght = {ArticlesBoucleDOreillesPendantesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendantes Enfant" exact component = {Pendantes_Enfant}>
                    <Navbar Client = {Client}/>
                        <Pendantes_Enfant returnArticlesBoucleDOreillesPendantesEnfant = {returnArticlesBoucleDOreillesPendantesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPendantesEnfantLenght = {ArticlesBoucleDOreillesPendantesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendantes Mix" exact component = {Pendantes_Mix}>
                    <Navbar Client = {Client}/>
                        <Pendantes_Mix returnArticlesBoucleDOreillesPendantesMix = {returnArticlesBoucleDOreillesPendantesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPendantesMixLenght = {ArticlesBoucleDOreillesPendantesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Puces" exact component = {Puces}>
                    <Navbar Client = {Client}/>
                        <Puces returnArticlesBoucleDOreillesPuces = {returnArticlesBoucleDOreillesPuces}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPucesLenght = {ArticlesBoucleDOreillesPucesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                   
                    <Route path = "/Puces Homme" exact component = {Puces_Homme}>
                    <Navbar Client = {Client}/>
                        <Puces_Homme returnArticlesBoucleDOreillesPucesHomme = {returnArticlesBoucleDOreillesPucesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPucesHommeLenght = {ArticlesBoucleDOreillesPucesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Puces Femme" exact component = {Puces_Femme}>
                    <Navbar Client = {Client}/>
                        <Puces_Femme returnArticlesBoucleDOreillesPucesFemme = {returnArticlesBoucleDOreillesPucesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPucesFemmeLenght = {ArticlesBoucleDOreillesPucesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Puces Enfant" exact component = {Puces_Enfant}>
                    <Navbar Client = {Client}/>
                        <Puces_Enfant returnArticlesBoucleDOreillesPucesEnfant = {returnArticlesBoucleDOreillesPucesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPucesEnfantLenght = {ArticlesBoucleDOreillesPucesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Puces Mix" exact component = {Puces_Mix}>
                         <Navbar Client = {Client}/>
                        <Puces_Mix returnArticlesBoucleDOreillesPucesMix = {returnArticlesBoucleDOreillesPucesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBoucleDOreillesPucesMixLenght = {ArticlesBoucleDOreillesPucesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>


                    <Route path = "/Bracelets" exact component = {Bracelets}>
                    <Navbar Client = {Client}/>
                        <Bracelets returnArticlesBracelets = {returnArticlesBracelets}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsLenght = {ArticlesBraceletsLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Autres Bracelets" exact component = {Autres_Bracelets}>
                    <Navbar Client = {Client}/>
                        <Autres_Bracelets returnArticlesBraceletsAutresBracelets = {returnArticlesBraceletsAutresBracelets}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsAutresBraceletsLenght = {ArticlesBraceletsAutresBraceletsLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bracelets Homme" exact component = {Autres_Bracelets_Homme}>
                    <Navbar Client = {Client}/>
                        <Autres_Bracelets_Homme returnArticlesBraceletsAutresBraceletsHomme = {returnArticlesBraceletsAutresBraceletsHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsAutresBraceletsHommeLenght = {ArticlesBraceletsAutresBraceletsHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bracelets Femme" exact component = {Autres_Bracelets_Femme}>
                    <Navbar Client = {Client}/>
                        <Autres_Bracelets_Femme returnArticlesBraceletsAutresBraceletsFemme = {returnArticlesBraceletsAutresBraceletsFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsAutresBraceletsFemmeLenght = {ArticlesBraceletsAutresBraceletsFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bracelets Enfant" exact component = {Autres_Bracelets_Enfant}>
                    <Navbar Client = {Client}/>
                        <Autres_Bracelets_Enfant returnArticlesBraceletsAutresBraceletsEnfant = {returnArticlesBraceletsAutresBraceletsEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsAutresBraceletsEnfantLenght = {ArticlesBraceletsAutresBraceletsEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Bracelets Mix" exact component = {Autres_Bracelets_Mix}>
                    <Navbar Client = {Client}/>
                        <Autres_Bracelets_Mix returnArticlesBraceletsAutresBraceletsMix = {returnArticlesBraceletsAutresBraceletsMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsAutresBraceletsMixLenght = {ArticlesBraceletsAutresBraceletsMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Bracelets Identité" exact component = {Bracelets_Identité}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Identité returnArticlesBraceletsIdentite = {returnArticlesBraceletsIdentite}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsIdentiteLenght = {ArticlesBraceletsIdentiteLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Identité Homme" exact component = {Bracelets_Identité_Homme}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Identité_Homme returnArticlesBraceletsIdentiteHomme = {returnArticlesBraceletsIdentiteHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsIdentiteHommeLenght = {ArticlesBraceletsIdentiteHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Identité Femme" exact component = {Bracelets_Identité_Femme}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Identité_Femme returnArticlesBraceletsIdentiteFemme = {returnArticlesBraceletsIdentiteFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsIdentiteFemmeLenght = {ArticlesBraceletsIdentiteFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Identité Enfant" exact component = {Bracelets_Identité_Enfant}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Identité_Enfant returnArticlesBraceletsIdentiteEnfant = {returnArticlesBraceletsIdentiteEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsIdentiteEnfantLenght = {ArticlesBraceletsIdentiteEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Identité Mix" exact component = {Bracelets_Identité_Mix}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Identité_Mix returnArticlesBraceletsIdentiteMix = {returnArticlesBraceletsIdentiteMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsIdentiteMixLenght = {ArticlesBraceletsIdentiteMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Bracelets Rigides" exact component = {Bracelets_Rigides}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Rigides returnArticlesBraceletsRigides = {returnArticlesBraceletsRigides}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsRigidesLenght = {ArticlesBraceletsRigidesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Rigides Homme" exact component = {Bracelets_Rigides_Homme}>
                         <Navbar Client = {Client}/>
                        <Bracelets_Rigides_Homme returnArticlesBraceletsRigidesHomme = {returnArticlesBraceletsRigidesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsRigidesHommeLenght = {ArticlesBraceletsRigidesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Rigides Femme" exact component = {Bracelets_Rigides_Femme}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Rigides_Femme returnArticlesBraceletsRigidesFemme = {returnArticlesBraceletsRigidesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsRigidesFemmeLenght = {ArticlesBraceletsRigidesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Rigides Enfant" exact component = {Bracelets_Rigides_Enfant}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Rigides_Enfant returnArticlesBraceletsRigidesEnfant = {returnArticlesBraceletsRigidesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsRigidesEnfantLenght = {ArticlesBraceletsRigidesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Bracelets Rigides Mix" exact component = {Bracelets_Rigides_Mix}>
                    <Navbar Client = {Client}/>
                        <Bracelets_Rigides_Mix returnArticlesBraceletsRigidesMix = {returnArticlesBraceletsRigidesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesBraceletsRigidesMixLenght = {ArticlesBraceletsRigidesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>

                    <Route path = "/Collections" exact component = {Collections}> 
                    <Navbar Client = {Client}/>
                        <Collections/>
                        <Footer/>
                    </Route>
                    <Route path = "/Collection Acier" exact component = {Collection_Acier}>
                    <Navbar Client = {Client}/>
                        <Collection_Acier/>
                        <Footer/>
                    </Route>
                    <Route path = "/Collection Argent 925 millièmes" exact component = {Collection_Argent_925_ml}>
                    <Navbar Client = {Client}/>
                        <Collection_Argent_925_ml/>
                        <Footer/>
                    </Route>
                    <Route path = "/Collection Diamants" exact component = {Collection_Diamants}>
                    <Navbar Client = {Client}/>
                        <Collection_Diamants/>
                        <Footer/>
                    </Route>
                    <Route path = "/Collection Or 9 Carats 375 millièmes" exact component = {Collection_Or_9_Carats_375_ml}>
                    <Navbar Client = {Client}/>
                        <Collection_Or_9_Carats_375_ml/>
                        <Footer/>
                    </Route>
                    <Route path = "/Collection Or 18 Carats 750 millièmes" exact component = {Collection_Or_18_Carats_750_ml}>
                    <Navbar Client = {Client}/>
                        <Collection_Or_18_Carats_750_ml/>
                        <Footer/>
                    </Route>

                    <Route path = "/Colliers | Chaînes" exact component = {Colliers_Chaînes}>
                    <Navbar Client = {Client}/>
                        <Colliers_Chaînes returnArticlesCollierChaines = {returnArticlesCollierChaines}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesLenght = {ArticlesCollierChainesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Colliers" exact component = {Colliers}>
                    <Navbar Client = {Client}/>
                        <Colliers returnArticlesCollierChainesColliers = {returnArticlesCollierChainesColliers}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesColliersLenght = {ArticlesCollierChainesColliersLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Colliers Homme" exact component = {Colliers_Homme}>
                    <Navbar Client = {Client}/>
                        <Colliers_Homme returnArticlesCollierChainesColliersHomme = {returnArticlesCollierChainesColliersHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesColliersHommeLenght = {ArticlesCollierChainesColliersHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Colliers Femme" exact component = {Colliers_Femme}>
                    <Navbar Client = {Client}/>
                        <Colliers_Femme returnArticlesCollierChainesColliersFemme = {returnArticlesCollierChainesColliersFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesColliersFemmeLenght = {ArticlesCollierChainesColliersFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Colliers Enfant" exact component = {Colliers_Enfant}>
                    <Navbar Client = {Client}/>
                        <Colliers_Enfant returnArticlesCollierChainesColliersEnfant = {returnArticlesCollierChainesColliersEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesColliersEnfantLenght = {ArticlesCollierChainesColliersEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Colliers Mix" exact component = {Colliers_Mix}>
                    <Navbar Client = {Client}/>
                        <Colliers_Mix returnArticlesCollierChainesColliersMix = {returnArticlesCollierChainesColliersMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesColliersMixLenght = {ArticlesCollierChainesColliersMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Autres Chaînes" exact component = {Autres_Chaînes}>
                    <Navbar Client = {Client}/>
                        <Autres_Chaînes returnArticlesCollierChainesAutresChaines = {returnArticlesCollierChainesAutresChaines}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesAutresChainesLenght = {ArticlesCollierChainesAutresChainesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Chaînes Homme" exact component = {Autres_Chaînes_Homme}>
                    <Navbar Client = {Client}/>
                        <Autres_Chaînes_Homme returnArticlesCollierChainesAutresChainesHomme = {returnArticlesCollierChainesAutresChainesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesAutresChainesHommeLenght = {ArticlesCollierChainesAutresChainesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Chaînes Femme" exact component = {Autres_Chaînes_Femme}>
                    <Navbar Client = {Client}/>
                        <Autres_Chaînes_Femme returnArticlesCollierChainesAutresChainesFemme = {returnArticlesCollierChainesAutresChainesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesAutresChainesFemmeLenght = {ArticlesCollierChainesAutresChainesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Chaînes Enfant" exact component = {Autres_Chaînes_Enfant}>
                    <Navbar Client = {Client}/>
                        <Autres_Chaînes_Enfant returnArticlesCollierChainesAutresChainesEnfant = {returnArticlesCollierChainesAutresChainesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesAutresChainesEnfantLenght = {ArticlesCollierChainesAutresChainesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Chaînes Mix" exact component = {Autres_Chaînes_Mix}>
                    <Navbar Client = {Client}/>
                        <Autres_Chaînes_Mix returnArticlesCollierChainesAutresChainesMix = {returnArticlesCollierChainesAutresChainesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesAutresChainesMixLenght = {ArticlesCollierChainesAutresChainesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Chaînes Fines" exact component = {Chaînes_Fines}>
                    <Navbar Client = {Client}/>
                        <Chaînes_Fines returnArticlesCollierChainesChainesFines = {returnArticlesCollierChainesChainesFines}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesChainesFinesLenght = {ArticlesCollierChainesChainesFinesLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Chaînes Fines Homme" exact component = {Chaînes_Fines_Homme}>
                    <Navbar Client = {Client}/>
                        <Chaînes_Fines_Homme returnArticlesCollierChainesChainesFinesHomme = {returnArticlesCollierChainesChainesFinesHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesChainesFinesHommeLenght = {ArticlesCollierChainesChainesFinesHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Chaînes Fines Femme" exact component = {Chaînes_Fines_Femme}>
                    <Navbar Client = {Client}/>
                        <Chaînes_Fines_Femme returnArticlesCollierChainesChainesFinesFemme = {returnArticlesCollierChainesChainesFinesFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesChainesFinesFemmeLenght = {ArticlesCollierChainesChainesFinesFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Chaînes Fines Enfant" exact component = {Chaînes_Fines_Enfant}>
                    <Navbar Client = {Client}/>
                        <Chaînes_Fines_Enfant returnArticlesCollierChainesChainesFinesEnfant = {returnArticlesCollierChainesChainesFinesEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesChainesFinesEnfantLenght = {ArticlesCollierChainesChainesFinesEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Chaînes Fines Mix" exact component = {Chaînes_Fines_Mix}>
                    <Navbar Client = {Client}/>
                        <Chaînes_Fines_Mix returnArticlesCollierChainesChainesFinesMix = {returnArticlesCollierChainesChainesFinesMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesCollierChainesChainesFinesMixLenght = {ArticlesCollierChainesChainesFinesMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>

                    <Route path = "/Parures" exact component = {Parures}>
                    <Navbar Client = {Client}/>
                        <Parures returnArticlesParures = {returnArticlesParures}
                         postsPerPage = {postsPerPage} 
                         ArticlesParuresLenght = {ArticlesParuresLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Parures Homme" exact component = {Parures_Homme}>
                    <Navbar Client = {Client}/>
                        <Parures_Homme returnArticlesParuresHomme = {returnArticlesParuresHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesParuresHommeLenght = {ArticlesParuresHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Parures Femme" exact component = {Parures_Femme}>
                    <Navbar Client = {Client}/>
                        <Parures_Femme returnArticlesParuresFemme = {returnArticlesParuresFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesParuresFemmeLenght = {ArticlesParuresFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Parures Enfant" exact component = {Parures_Enfant}>
                    <Navbar Client = {Client}/>
                        <Parures_Enfant returnArticlesParuresEnfant = {returnArticlesParuresEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesParuresEnfantLenght = {ArticlesParuresEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Parures Mix" exact component = {Parures_Mix}> 
                    <Navbar Client = {Client}/>
                        <Parures_Mix returnArticlesParuresMix = {returnArticlesParuresMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesParuresMixLenght = {ArticlesParuresMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>

                    <Route path = "/Pendentifs" exact component = {Pendentifs}>
                    <Navbar Client = {Client}/>
                        <Pendentifs returnArticlesPendentifs = {returnArticlesPendentifs}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsLenght = {ArticlesPendentifsLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Autres Pendentifs" exact component = {Autres_Pendentifs}>
                    <Navbar Client = {Client}/>
                        <Autres_Pendentifs returnArticlesPendentifsAutresPendentifs = {returnArticlesPendentifsAutresPendentifs}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsAutresPendentifsLenght = {ArticlesPendentifsAutresPendentifsLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Pendentifs Homme" exact component = {Autres_Pendentifs_Homme}>
                    <Navbar Client = {Client}/>
                        <Autres_Pendentifs_Homme returnArticlesPendentifsAutresPendentifsHomme = {returnArticlesPendentifsAutresPendentifsHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsAutresPendentifsHommeLenght = {ArticlesPendentifsAutresPendentifsHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Pendentifs Femme" exact component = {Autres_Pendentifs_Femme}>
                    <Navbar Client = {Client}/>
                        <Autres_Pendentifs_Femme returnArticlesPendentifsAutresPendentifsFemme = {returnArticlesPendentifsAutresPendentifsFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsAutresPendentifsFemmeLenght = {ArticlesPendentifsAutresPendentifsFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Pendentifs Enfant" exact component = {Autres_Pendentifs_Enfant}>
                    <Navbar Client = {Client}/>
                        <Autres_Pendentifs_Enfant returnArticlesPendentifsAutresPendentifsEnfant = {returnArticlesPendentifsAutresPendentifsEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsAutresPendentifsEnfantLenght = {ArticlesPendentifsAutresPendentifsEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Autres Pendentifs Mix" exact component = {Autres_Pendentifs_Mix}>
                    <Navbar Client = {Client}/>
                        <Autres_Pendentifs_Mix returnArticlesPendentifsAutresPendentifsMix = {returnArticlesPendentifsAutresPendentifsMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsAutresPendentifsMixLenght = {ArticlesPendentifsAutresPendentifsMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Pendentifs Religieux" exact component = {Pendentifs_Religieux}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Religieux returnArticlesPendentifsPendentifsReligieux = {returnArticlesPendentifsPendentifsReligieux}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsReligieuxLenght = {ArticlesPendentifsPendentifsReligieuxLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Religieux Homme" exact component = {Pendentifs_Religieux_Homme}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Religieux_Homme returnArticlesPendentifsPendentifsReligieuxHomme = {returnArticlesPendentifsPendentifsReligieuxHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsReligieuxHommeLenght = {ArticlesPendentifsPendentifsReligieuxHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Religieux Femme" exact component = {Pendentifs_Religieux_Femme}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Religieux_Femme returnArticlesPendentifsPendentifsReligieuxFemme = {returnArticlesPendentifsPendentifsReligieuxFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsReligieuxFemmeLenght = {ArticlesPendentifsPendentifsReligieuxFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Religieux Enfant" exact component = {Pendentifs_Religieux_Enfant}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Religieux_Enfant returnArticlesPendentifsPendentifsReligieuxEnfant = {returnArticlesPendentifsPendentifsReligieuxEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsReligieuxEnfantLenght = {ArticlesPendentifsPendentifsReligieuxEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Religieux Mix" exact component = {Pendentifs_Religieux_Mix}>
                         <Navbar Client = {Client}/>
                        <Pendentifs_Religieux_Mix returnArticlesPendentifsPendentifsReligieuxMix = {returnArticlesPendentifsPendentifsReligieuxMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsReligieuxMixLenght = {ArticlesPendentifsPendentifsReligieuxMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Pendentifs Plaques" exact component = {Pendentifs_Plaque}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Plaque returnArticlesPendentifsPendentifsPlaque = {returnArticlesPendentifsPendentifsPlaque}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsPlaqueLenght = {ArticlesPendentifsPendentifsPlaqueLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Plaques Homme" exact component = {Pendentifs_Plaque_Homme}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Plaque_Homme returnArticlesPendentifsPendentifsPlaqueHomme = {returnArticlesPendentifsPendentifsPlaqueHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsPlaqueHommeLenght = {ArticlesPendentifsPendentifsPlaqueHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Plaques Femme" exact component = {Pendentifs_Plaque_Femme}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Plaque_Femme returnArticlesPendentifsPendentifsPlaqueFemme = {returnArticlesPendentifsPendentifsPlaqueFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsPlaqueFemmeLenght = {ArticlesPendentifsPendentifsPlaqueFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Plaques Enfant" exact component = {Pendentifs_Plaque_Enfant}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Plaque_Enfant returnArticlesPendentifsPendentifsPlaqueEnfant = {returnArticlesPendentifsPendentifsPlaqueEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsPlaqueEnfantLenght = {ArticlesPendentifsPendentifsPlaqueEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Pendentifs Plaques Mix" exact component = {Pendentifs_Plaque_Mix}>
                    <Navbar Client = {Client}/>
                        <Pendentifs_Plaque_Mix returnArticlesPendentifsPendentifsPlaqueMix = {returnArticlesPendentifsPendentifsPlaqueMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesPendentifsPendentifsPlaqueMixLenght = {ArticlesPendentifsPendentifsPlaqueMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>

                    <Route path = "/Piercings" exact component = {Piercings}>
                    <Navbar Client = {Client}/>
                        <Piercings returnArticlesPiercings = {returnArticlesPiercings}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsLenght = {ArticlesPiercingsLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Piercings Nez" exact component = {Piercings_Nez}>
                    <Navbar Client = {Client}/>
                        <Piercings_Nez returnArticlesPiercingsPiercingsNez = {returnArticlesPiercingsPiercingsNez}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsNezLenght = {ArticlesPiercingsPiercingsNezLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Nez Homme" exact component = {Piercings_Nez_Homme}>
                    <Navbar Client = {Client}/>
                        <Piercings_Nez_Homme returnArticlesPiercingsPiercingsNezHomme = {returnArticlesPiercingsPiercingsNezHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsNezHommeLenght = {ArticlesPiercingsPiercingsNezHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Nez Femme" exact component = {Piercings_Nez_Femme}>
                    <Navbar Client = {Client}/>
                        <Piercings_Nez_Femme returnArticlesPiercingsPiercingsNezFemme = {returnArticlesPiercingsPiercingsNezFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsNezFemmeLenght = {ArticlesPiercingsPiercingsNezFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Nez Enfant" exact component = {Piercings_Nez_Enfant}>
                    <Navbar Client = {Client}/>
                        <Piercings_Nez_Enfant returnArticlesPiercingsPiercingsNezEnfant = {returnArticlesPiercingsPiercingsNezEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsNezEnfantLenght = {ArticlesPiercingsPiercingsNezEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Nez Mix" exact component = {Piercings_Nez_Mix}>
                    <Navbar Client = {Client}/>
                        <Piercings_Nez_Mix returnArticlesPiercingsPiercingsNezMix = {returnArticlesPiercingsPiercingsNezMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsNezMixLenght = {ArticlesPiercingsPiercingsNezMixLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    
                    <Route path = "/Piercings Divers" exact component = {Piercings_Divers}>
                    <Navbar Client = {Client}/>
                        <Piercings_Divers returnArticlesPiercingsPiercingsDivers = {returnArticlesPiercingsPiercingsDivers}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsDiversLenght = {ArticlesPiercingsPiercingsDiversLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Divers Homme" exact component = {Piercings_Divers_Homme}>
                    <Navbar Client = {Client}/>
                        <Piercings_Divers_Homme returnArticlesPiercingsPiercingsDiversHomme = {returnArticlesPiercingsPiercingsDiversHomme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsDiversHommeLenght = {ArticlesPiercingsPiercingsDiversHommeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Divers Femme" exact component = {Piercings_Divers_Femme}>
                    <Navbar Client = {Client}/>
                        <Piercings_Divers_Femme returnArticlesPiercingsPiercingsDiversFemme = {returnArticlesPiercingsPiercingsDiversFemme}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsDiversFemmeLenght = {ArticlesPiercingsPiercingsDiversFemmeLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Divers Enfant" exact component = {Piercings_Divers_Enfant}>
                    <Navbar Client = {Client}/>
                        <Piercings_Divers_Enfant returnArticlesPiercingsPiercingsDiversEnfant = {returnArticlesPiercingsPiercingsDiversEnfant}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsDiversEnfantLenght = {ArticlesPiercingsPiercingsDiversEnfantLenght}
                         paginate = {paginate}/>
                                         <Footer/>
                    </Route>
                    <Route path = "/Piercings Divers Mix" exact component = {Piercings_Divers_Mix}>
                         <Navbar Client = {Client}/>
                        <Piercings_Divers_Mix returnArticlesPiercingsPiercingsDiversMix = {returnArticlesPiercingsPiercingsDiversMix}
                         postsPerPage = {postsPerPage} 
                         ArticlesPiercingsPiercingsDiversMixLenght = {ArticlesPiercingsPiercingsDiversMixLenght}
                         paginate = {paginate}/>
                        <Footer/>
                    </Route>
                    <Route  component = {Erreur_Page}>      
                       <Erreur_Page />                   
                    </Route> 

                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

