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
          "content-organization": "<strong>Director</strong><br />Berenice Pineda Santiago.<br /><br /><strong>Community Leader</strong><br />Denisse Pineda Santiago.",
          "content-description": "Beautiful community of forests and large hills, where the objectives of the Filarmon&iacute;a Vallesana program are developed through musical training. <br /><br />Sub-site of the program formed thanks to the fruits of the first generation of students. They apply the methodology providing a space of opportunity, growth and development to boys and girls due to the lack of children and youth programs in our region. <br /><br />",
          "content-details": "The director Berenice Pineda Santiago is a young woman of great future, exemplary, belonging in her fourth year to the second generation of Trainers in Training, from a family of outstanding educators that generates in her environment a commitment of congruence, dedication and healthy coexistence enriching the different musical ensembles in which she participates and others that she develops in her community.<br /><br />His example enriches the program, his family and the community in general. <br /><br />",
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
          "content-organization": "<strong>Directora</strong><br />Berenice Pineda Santiago.<br /><br /><strong>Lider Comunitaria</strong><br />Denisse Pineda Santiago.",
          "content-description": "Hermosa comunidad de bosques y grandes colinas, en la que se desarrollan los objetivos del programa Filarmon&iacute;a Vallesana mediante el entrenamiento musical. <br /><br />Subsede del programa formado gracias a los frutos de la primera generaci&oacute;n de Alumnos. Aplican la metodolog&iacute;a brindando un espacio de oportunidad, crecimiento y desarrollo a ni&ntilde;os y ni&ntilde;as ante la carente falta de programas infantiles y juveniles en nuestra regi&oacute;n.",
          "content-details": "La directora Berenice Pineda Santiago es una joven de gran futuro, ejemplar perteneciente en su cuarto a&ntilde;o a la segunda generaci&oacute;n de Capacitadores en Entrenamiento, de una familia de destacados educadores que genera en su entorno un compromiso de congruencia, dedicaci&oacute;n y sana convivencia enriqueciendo los diferentes ensambles musicales en los que participa y otros que desarrolla en su comunidad.<br /><br />Su ejemplo enriquece al programa, a su familia y a la comunidad en general.",
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