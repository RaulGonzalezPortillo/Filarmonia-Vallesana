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
          "content-organization": "<strong>Operative Director</strong><br />Victor Castillo Osorio<br /><br /><strong>Coordination</strong><br />Susana Aguilar Cerezo",
          "content-description": "<strong>A unique community, a place with great history, plains, ravines, mountains and beautiful water sources.</strong><br /><br />Thanks to the support of a group of supporters with great social conscience, in Acatitl&aacute;n the program is developed with great teamwork capacity that translates such support, fostering the creativity of each child who lives in this town, transforming their games into music and continuously achieving the development and growth in this place",
          "content-details": "It is fundamental for our program and its future the promotion of the pedagogical vocation from the beginning to the new members, which is why we have a group of instructors.<br /><br />The presence of these unique child development programs has had a great impact on communities that lack this type of opportunity, promoting through the children models of success and community empathy by sharing and expanding possibilities of interaction with other entities.&nbsp;",
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
          "content-organization": "<strong>Director Operativo</strong><br />V&iacute;ctor Castillo Osorio<br /><br /><strong>Coordinaci&oacute;n</strong><br />Susana Aguilar Cerezo",
          "content-description": "<strong>Singular comunidad, lugar con gran historia, llanuras, barrancas, montes y hermosos nacimientos de agua.</strong><br /><br />Gracias al apoyo de un grupo de patrocinadores con gran conciencia social, en Acatitl&aacute;n se desarrolla el programa que con gran capacidad de trabajo en equipo traduce dichos apoyos, fomentando la creatividad de cada ni&ntilde;o que habita en este pueblo, transformando sus juegos en m&uacute;sica y logrando continuamente el desarrollo y crecimiento en esta sede.",
          "content-details": "Es fundamental para nuestro programa y su futuro el fomento de la vocaci&oacute;n pedag&oacute;gica desde el inicio a los nuevos integrantes, por lo cual contamos con un grupo de instructores.<br /><br />La presencia de estos singulares programas de desarrollo infantil han tenido gran impacto en las comunidades que carecen de este tipo de oportunidades, promoviendo a trav&eacute;s de los ni&ntilde;os modelos de &eacute;xito y empat&iacute;a comunitaria al compartir y expandir posibilidades de interacci&oacute;n con otras entidades.",
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
  //document.getElementById('btn-proyects').innerHTML = i18next.t('btn-proyects');
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