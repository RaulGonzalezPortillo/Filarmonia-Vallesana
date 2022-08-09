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
          "title-get-involved": "Get involved!",
          "footer-get-involved": "Get involved!",
          "footer-our-supporters": "Our supporters",
          "footer-privacy-notice": "Privacy notice",
          "btn-franchise": "Consultancy",
          "btn-instrument": "Donate an instrument",
          "btn-social-service": "Social service",
          "btn-sponsorship": "Sponsorship",
          "btn-donation": "Donation",
          "btn-donation-format": "Donation format",
          "content-consultancy": "<strong>Consultancy</strong><br /><br />We are looking to extend our educational program to more locations.<br /><br />Join Filarmonia Vallesana and be part of the most innovative musical pedagogical training program!",
          "content-instrument": "<strong>Donate an instrument<br /></strong><br />Donating an instrument is very easy. You can do it individually or gather a group of friends to do it. Support us!",
          "content-social-service": "<strong>Social service<br /></strong><br />We need the enthusiastic work of young people to support us in the coordination and registration of the orchestra's activities.<br /><br />If you are in the last semesters of your career and want to do your social service with us, contact us!",
          "content-sponsorship": "<strong>Sponsorship<br /></strong><br />Become a supporter and help us to keep moving forward with consistency so that more young people continue to take benefit from the program.",
          "content-donation": "<strong>Donations<br /></strong><br />At your nearest Banamex location<br /><br /><b>Banamex account:</b> 375-1111<br /><br /><b>CLABE:</b> 002 1800 3750 0011 118",
          "content-contact": "<strong>Our office</strong><br /><br />Festival Internacional de M&uacute;sica Pro Valle de Bravo, A.C. Avenida Chapultepec 28, 5th floor, Col. Doctores C.P. 06720, Del. Cuauht&eacute;moc, M&eacute;xico, D.F",
          "title-contact": "<strong>Contact</strong>",
          "content-contact-2": "&Uacute;rsula Verea<br />General Manager<br />(55) 5540 0073",
          "content-contact-4": "Roxana Rivas<br />Donato Guerra Headquarters coordination<br />01 726 262 0107",
          "title-contact-us": 'Contact us',
          "button-scroll-to-contact-us": "Contact us",
          "button-scroll-to-contact-us-2": "Contact us",
          "button-scroll-to-contact-us-3": "Contact us",
          "button-scroll-to-contact-us-4": "Contact us",
          "button-scroll-to-contact-us-5": "Contact us"
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
          "title-get-involved": "¡Participa!",
          "footer-our-supporters": "Nuestros patrocinadores",
          "footer-privacy-notice": "Aviso de privacidad",
          "btn-franchise": "Asesoría",
          "btn-instrument": "Dona un instrumento",
          "btn-social-service": "Servicio social",
          "btn-sponsorship": "Patrocinio",
          "btn-donation": "Donativo",
          "btn-donation-format": "Formato para donativos",
          "content-consultancy": "<strong>Asesoría</strong><br /><br />Buscamos extender nuestra propuesta educativa a m&aacute;s sedes.<br /><br />&iexcl;&Uacute;nete a Filarmon&iacute;a Vallesana y forma parte del programa de entrenamiento pedag&oacute;gico musical m&aacute;s innovador!",
          "content-instrument": "<strong>Dona un instrumento<br /></strong><br />Donar un instrumento es muy sencillo. Puedes hacerlo de forma individual o juntar un grupo de amigos para hacerlo. &iexcl;Ap&oacute;yanos!",
          "content-social-service": "<strong>Servicio social<br /></strong><br />Requerimos del trabajo entusiasta de j&oacute;venes que nos apoyen en las labores de coordinaci&oacute;n, as&iacute; como de registro de las actividades de la orquesta.<br /><br />Si est&aacute;s cursando los &uacute;ltimos semestres de tu carrera y quieres realizar tu servicio social con nosotros, &iexcl;Cont&aacute;ctanos!",
          "content-sponsorship": "<strong>Patrocinio<br /></strong><br />Forma parte de nuestros patrocinadores y ay&uacute;danos a seguir avanzando con solidez para que m&aacute;s j&oacute;venes sigan benefici&aacute;ndose del programa",
          "content-donation": "<strong>Donativos<br /></strong><br />En tu sucursal Banamex m&aacute;s cercana<br /><br /><b>Cuenta Banamex:</b> 375-1111<br /><br /><b>CLABE Interbancaria:</b> 002 1800 3750 0011 118",
          "content-contact": "<strong>Nuestras oficinas</strong><br /><br />Festival Internacional de M&uacute;sica Pro Valle de Bravo, A.C. Avenida Chapultepec 28, 5&deg; piso, Col. Doctores C.P. 06720, Del. Cuauht&eacute;moc, M&eacute;xico, D.F",
          "title-contact": "<strong>Contacto</strong>",
          "content-contact-2": "&Uacute;rsula Verea<br />Directora General<br />(55) 5540 0073",
          "content-contact-4": "Roxana Rivas<br />Coordinadora en Donato Guerra<br />01 726 262 0107",
          "title-contact-us": 'Contáctanos',
          "button-scroll-to-contact-us": "Contáctanos",
          "button-scroll-to-contact-us-2": "Contáctanos",
          "button-scroll-to-contact-us-3": "Contáctanos",
          "button-scroll-to-contact-us-4": "Contáctanos",
          "button-scroll-to-contact-us-5": "Contáctanos"
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
  document.getElementById('title-get-involved').innerHTML = i18next.t('title-get-involved');
  document.getElementById('footer-our-supporters').innerHTML = i18next.t('footer-our-supporters');
  document.getElementById('footer-privacy-notice').innerHTML = i18next.t('footer-privacy-notice');
  document.getElementById('btn-franchise').innerHTML = i18next.t('btn-franchise');
  document.getElementById('btn-instrument').innerHTML = i18next.t('btn-instrument');
  document.getElementById('btn-social-service').innerHTML = i18next.t('btn-social-service');
  document.getElementById('btn-sponsorship').innerHTML = i18next.t('btn-sponsorship');
  document.getElementById('btn-donation').innerHTML = i18next.t('btn-donation');
  document.getElementById('btn-donation-format').innerHTML = i18next.t('btn-donation-format');
  document.getElementById('content-consultancy').innerHTML = i18next.t('content-consultancy');
  document.getElementById('content-instrument').innerHTML = i18next.t('content-instrument');
  document.getElementById('content-social-service').innerHTML = i18next.t('content-social-service')
  document.getElementById('content-sponsorship').innerHTML = i18next.t('content-sponsorship');
  document.getElementById('content-donation').innerHTML = i18next.t('content-donation');
  document.getElementById('content-contact').innerHTML = i18next.t('content-contact');
  document.getElementById('title-contact').innerHTML = i18next.t('title-contact');
  document.getElementById('content-contact-2').innerHTML = i18next.t('content-contact-2');
  document.getElementById('content-contact-4').innerHTML = i18next.t('content-contact-4');
  document.getElementById('title-contact-us').innerHTML = i18next.t('title-contact-us');
  document.getElementById('button-scroll-to-contact-us').innerHTML = i18next.t('button-scroll-to-contact-us');
  document.getElementById('button-scroll-to-contact-us-2').innerHTML = i18next.t('button-scroll-to-contact-us-2');
  document.getElementById('button-scroll-to-contact-us-3').innerHTML = i18next.t('button-scroll-to-contact-us-3');
  document.getElementById('button-scroll-to-contact-us-4').innerHTML = i18next.t('button-scroll-to-contact-us-4');
  document.getElementById('button-scroll-to-contact-us-5').innerHTML = i18next.t('button-scroll-to-contact-us-5');
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