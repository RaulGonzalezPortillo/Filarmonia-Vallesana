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
          "title-sponsors": "Supporters",
          "content-sponsors": "We are very grateful to our sponsors for supporting our cause and helping us create more life-changing development experiences through music.",
          "footer-get-involved": "Get involved!",
          "footer-franchise": "Consultancy",
          "footer-donation": "Donation",
          "footer-sponsorship": "Sponsorship",
          "footer-more": "More",
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
          "title-sponsors": "Patrocinadores",
          "content-sponsors": "Estamos muy agradecidos con nuestros patrocinadores por apoyar nuestra causa y ayudarnos a crear más experiencias de desarrollo integral a través de la música",
          "footer-get-involved": "¡Participa!",
          "footer-franchise": "Asesoría",
          "footer-donation": "Donación",
          "footer-sponsorship": "Patrocinio",
          "footer-more": "Más",
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
  document.getElementById('title-sponsors').innerHTML = i18next.t('title-sponsors');
  document.getElementById('content-sponsors').innerHTML = i18next.t('content-sponsors');
  document.getElementById('footer-get-involved').innerHTML = i18next.t('footer-get-involved');
  document.getElementById('footer-franchise').innerHTML = i18next.t('footer-franchise');
  document.getElementById('footer-donation').innerHTML = i18next.t('footer-donation');
  document.getElementById('footer-sponsorship').innerHTML = i18next.t('footer-sponsorship');
  document.getElementById('footer-more').innerHTML = i18next.t('footer-more');
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
