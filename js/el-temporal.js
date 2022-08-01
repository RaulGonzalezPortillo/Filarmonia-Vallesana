// import i18next from 'i18next';

i18next
  .init({
    //Set the stored prefered language, if not selected, use English.
    lng: localStorage.getItem('language') != null? localStorage.getItem('language'): "en",
    debug: false,
    //Define the translations
    resources: {
      en: {
        translation: {
          "btn-home": "Home",
          "btn-about-us": "About us",
          "btn-what-we-do": "What we do",
          "btn-organizational-chart": "Organizational chart",
          "btn-transparency": "Transparency",
          "btn-privacy-notice": "Privacy notice",
          "btn-sponsors": "Supporters",
          "btn-students": "Students",
          "btn-proyects": "Proyects",
          "btn-get-involved": "Get involved",
          "btn-language": "Language",
          "btn-english": "English",
          "btn-spanish": "Spanish",
          "content-organization": "<strong>Director and Community Leader</strong><br />&Aacute;lvaro Osorio Jim&eacute;nez.<br /><br /><strong>Group Coordinator</strong><br />Virginia Rosas Osorio",
          "content-description": "El Temporal is a community that belongs to the municipality of Amanalco where the methodology of the Filarmon&iacute;a Vallesana program is developed.<br /><br />The development of our community is the result of the Training for Instructors program that promotes not only the pedagogical vocation but also the leadership skills in the participants of the different communities.",
          "content-details": "Examples such as the case of Director &Aacute;lvaro Osorio Jim&eacute;nez, a brilliant and talented participant of Filarmon&iacute;a Vallesana, Filarmon&iacute;a San Juan Amanalco and community leader belonging to the Second Generation of Instructors.<br /><br />It provides a space for coexistence with new opportunities for growth, development, training and communication with other communities that are part of the program through collaborative musical instruction and inter-community support.",
          "footer-get-involved": "Get involved!",
          "footer-franchise": "Consultancy",
          "footer-donation": "Donation",
          "footer-sponsorship": "Sponsorship",
          "footer-more": "More",
          "footer-our-supporters": "Our supporters",
          "footer-privacy-notice": "Privacy notice"
        }
      },
      es: {
        translation: {
          "btn-home": "Inicio",
          "btn-about-us": "Conócenos",
          "btn-what-we-do": "Lo que hacemos",
          "btn-organizational-chart": "Diagrama organizacional",
          "btn-transparency": "Transparencia",
          "btn-privacy-notice": "Aviso de privacidad",
          "btn-sponsors": "Patrocinadores",
          "btn-students": "Ex-Alumnos",
          "btn-proyects": "Proyectos",
          "btn-get-involved": "Participa",
          "btn-language": "Lenguaje",
          "btn-english": "Inglés",
          "btn-spanish": "Español",
          "content-organization": "<strong>Director y L&iacute;der Comunitario</strong><br />&Aacute;lvaro Osorio Jim&eacute;nez.<br /><br /><strong>Coordinaci&oacute;n de Grupo</strong><br />Virginia Rosas Osorio <br /><br />",
          "content-description": "El Temporal es una comunidad perteneciente al Municipio de Amanalco donde se desarrolla la metodolog&iacute;a del programa Filarmon&iacute;a Vallesana. El desarrollo de nuestra comunidad es resultado del programa de Capacitaci&oacute;n para Instructores que promueve no solo la vocaci&oacute;n pedag&oacute;gica sino tambi&eacute;n las capacidades de liderazgo en los participantes de las diferentes comunidades.",
          "content-details": "Ejemplos como el caso del Director &Aacute;lvaro Osorio Jim&eacute;nez, brillante y talentoso participante de Filarmon&iacute;a Vallesana, Filarmon&iacute;a San Juan Amanalco y L&iacute;der comunitario perteneciente a la Segunda Generaci&oacute;n de Instructores.<br /><br />Brinda un espacio de convivencia con nuevas oportunidades de crecimiento, desarrollo, formaci&oacute;n y comunicaci&oacute;n con otras comunidades pertenecientes al programa a partir de la instrucci&oacute;n musical de colaboraci&oacute;n y apoyo intercomunitario.",
          "footer-get-involved": "¡Participa!",
          "footer-franchise": "Asesoría",
          "footer-donation": "Donación",
          "footer-sponsorship": "Patrocinio",
          "footer-more": "Más",
          "footer-our-supporters": "Nuestros patrocinadores",
          "footer-privacy-notice": "Aviso de privacidad"
        }
      }
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });
  
//Update the contents on the page
function updateContent() {
  document.getElementById('btn-home').innerHTML = i18next.t('btn-home');
  document.getElementById('btn-about-us').innerHTML = i18next.t('btn-about-us');
  document.getElementById('btn-what-we-do').innerHTML = i18next.t('btn-what-we-do');
  document.getElementById('btn-organizational-chart').innerHTML = i18next.t('btn-organizational-chart');
  document.getElementById('btn-transparency').innerHTML = i18next.t('btn-transparency');
  document.getElementById('btn-privacy-notice').innerHTML = i18next.t('btn-privacy-notice');
  document.getElementById('btn-sponsors').innerHTML = i18next.t('btn-sponsors');
  document.getElementById('btn-students').innerHTML = i18next.t('btn-students');
  document.getElementById('btn-proyects').innerHTML = i18next.t('btn-proyects');
  document.getElementById('btn-get-involved').innerHTML = i18next.t('btn-get-involved');
  document.getElementById('btn-language').innerHTML = i18next.t('btn-language');
  document.getElementById('btn-english').innerHTML = i18next.t('btn-english');
  document.getElementById('btn-spanish').innerHTML = i18next.t('btn-spanish');
  document.getElementById('content-organization').innerHTML = i18next.t('content-organization');
  document.getElementById('content-description').innerHTML = i18next.t('content-description');
  document.getElementById('content-details').innerHTML = i18next.t('content-details');
  document.getElementById('footer-get-involved').innerHTML = i18next.t('footer-get-involved');
  document.getElementById('footer-franchise').innerHTML = i18next.t('footer-franchise');
  document.getElementById('footer-donation').innerHTML = i18next.t('footer-donation');
  document.getElementById('footer-sponsorship').innerHTML = i18next.t('footer-sponsorship');
  document.getElementById('footer-more').innerHTML = i18next.t('footer-more');
  document.getElementById('footer-our-supporters').innerHTML = i18next.t('footer-our-supporters');
  document.getElementById('footer-privacy-notice').innerHTML = i18next.t('footer-privacy-notice');
}

//Save the prefered language after changing it
function changeLng(lng) {
  i18next.changeLanguage(lng);
  localStorage.setItem('language', lng)
  console.log("Saved prefered language");
}

i18next.on('languageChanged', () => {
  updateContent();
});