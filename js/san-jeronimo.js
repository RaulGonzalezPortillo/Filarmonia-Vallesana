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
          "content-organization": "<strong>Director and Community Manager</strong><br />Adriana Gonz&aacute;lez Dolores.",
          "content-description": "San Jeronimo is a community in the municipality of Amanalco where the project of Filarmonia Vallesana's musical training methodology is being implemented.<br /><br />San Jeronimo is part of the expansion project with the idea of providing new opportunities for children and young people, thanks to sponsors who have believed in the project of education to continue forming a society with values.",
          "content-details": "Belonging to Filarmon&iacute;a from a very young age, this venue has participated in all ensembles and major concerts, tours, etc. This allows it to develop its community in a natural and constant way.<br /><br />In addition, this branch has participated in the Second Generation Instructor Training Program for the last 4 years.",
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
          "content-organization": "<strong>Directora y L&iacute;der Comunitaria</strong><br />Adriana Gonz&aacute;lez Dolores.",
          "content-description": "San Jer&oacute;nimo es una comunidad del Municipio de Amanalco en donde se lleva a cabo la implementaci&oacute;n de la metodolog&iacute;a de entrenamiento musical de Filarmon&iacute;a Vallesana.<br /><br />Es parte del proyecto de expansi&oacute;n con la idea de brindar nuevas oportunidades a ni&ntilde;os y j&oacute;venes, gracias a patrocinadores que han cre&iacute;do en el proyecto de la educaci&oacute;n para seguir formando una sociedad con valores.",
          "content-details": "Perteneciente a Filarmon&iacute;a desde muy tierna edad, esta sede ha participado en todos los ensambles y principales conciertos, giras, etc. Lo cual le permite desarrollar su comunidad de forma natural y constante.<br /><br />Adem&aacute;s, esta sede participa en el programa de Capacitaci&oacute;n de Instructores Segunda Generaci&oacute;n desde hace 4 a&ntilde;os.",
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
  // document.getElementById('btn-proyects').innerHTML = i18next.t('btn-proyects');
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