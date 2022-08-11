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
          "title-organizational-chart": "Organizational chart",
          "title-managing-board": "Directive council",
          "content-managing-board": "<b>President of the Board</b><br>Leticia Hernández Ramírez",
          "content-managing-board-2": "<b>General Director</b><br>Úrsula Verea Hernández",
          "title-administrative-body": "Administrative department",
          "content-administrative-body": "<b>Legal Counsel</b><br>Horacio Mafre<br><br><b>Coordination and general management assistant</b><br>Roxana Rivas Flores<br><br><b>Accounting Department</b><br>Aldo Herrera Cortez<br><br><b>Media department</b></b><br>Carla González Uribe y Edna Silva<br><br><b>Valle de Bravo headquarters coordination</b><br>Ivett Velazco",
          "content-administrative-body-2": "<b>Amanalco headquarters coordination</b><br>Rosa María Martínez de la Cruz<br><br><b>Donato Guerra headquarters coordination</b><br>Roxana Rivas Flores<br><br><b>Acatitlán headquarters coordination</b><br>Susana Aguilar Cerezo<br><br><b>Maintenance department</b><br>José Manuel Colin González",
          "title-instructional-body": "Faculty Members",
          "content-instructional-body": "<b>General artistic and SICOEM director</b><br>Prospero Reyes Cedeño",
          "title-valle-de-bravo": "Valle de Bravo",
          "content-valle-de-bravo": "<b>Director</b><br>Prospero Reyes Cedeño<br><br><b>Instructor</b><br>Gibran Montes de Oca Guarneros",
          "title-amanalco": "Amanalco de Becerra",
          "content-amanalco": "<b>Assistant director</b><br>Víctor Castillo Osorio<br><br><b>Instructors</b><br>Julieta Soto Guadarrama<br>Álvaro Daniel Martínez<br>Joel Omar Martínez<br>Berenice Pineda Santiago<br>Denisse Pineda Santiago<br>Álvaro Osorio Jiménez<br>Adriana González Dolores",
          "title-donato-guerra": "Donato Guerra",
          "content-donato-guerra": "<b>Director</b><br>Felipe Gómez Pérez<br><br><b>Assistant director</b><br>Jesús Gómez Pérez",
          "title-acatitlan": "Acatitlán",
          "content-acatitlan": "<b>Assistant director</b><br>Víctor Castillo Osorio",
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
          "title-organizational-chart": "Diagrama organizacional",
          "title-managing-board": "Consejo directivo",
          "content-managing-board": "<b>Presidenta patronato</b><br>Leticia Hernández Ramírez",
          "content-managing-board-2": "<b>Directora general</b><br>Úrsula Verea Hernández",
          "title-administrative-body": "Órgano administrativo",
          "content-administrative-body": "<b>Asesoría jurídica</b><br>Horacio Mafre<br><br><b>Coordinación y asistente de dirección general</b><br>Roxana Rivas Flores<br><br><b>Departamento contable</b><br>Aldo Herrera Cortez<br><br><b>Departamento de medios</b><br>Carla González Uribe y Edna Silva<br><br><b>Coordinación sede Valle de Bravo</b><br>Ivett Velazco",
          "content-administrative-body-2" : "<b>Coordinación sede Amanalco</b><br>Rosa María Martínez de la Cruz<br><br><b>Coordinación sede Donato Guerra</b><br>Roxana Rivas Flores<br><br><b>Coordinación sede Acatitlán</b><br>Susana Aguilar Cerezo<br><br><b>Departamento de mantenimiento</b><br>José Manuel Colin González",
          "title-instructional-body": "Órgano docente",
          "content-instructional-body": "<b>Director general artística y del SICOEM</b><br>Prospero Reyes Cedeño",
          "title-valle-de-bravo": "Valle de Bravo",
          "content-valle-de-bravo": "<b>Director</b><br>Prospero Reyes Cedeño<br><br><b>Instructor</b><br>Gibran Montes de Oca Guarneros",
          "title-amanalco": "Amanalco de Becerra",
          "content-amanalco": "<b>Director asistente</b><br>Víctor Castillo Osorio<br><br><b>Instructores</b><br>Julieta Soto Guadarrama<br>Álvaro Daniel Martínez<br>Joel Omar Martínez<br>Berenice Pineda Santiago<br>Denisse Pineda Santiago<br>Álvaro Osorio Jiménez<br>Adriana González Dolores",
          "title-donato-guerra": "Donato Guerra",
          "content-donato-guerra": "<b>Director</b><br>Felipe Gómez Pérez<br><br><b>Director asistente</b><br>Jesús Gómez Pérez",
          "title-acatitlan": "Acatitlán",
          "content-acatitlan": "<b>Director asistente</b><br>Víctor Castillo Osorio",
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
  document.getElementById('title-organizational-chart').innerHTML = i18next.t('title-organizational-chart');
  document.getElementById('title-managing-board').innerHTML = i18next.t('title-managing-board');
  document.getElementById('content-managing-board').innerHTML = i18next.t('content-managing-board');
  document.getElementById('content-managing-board-2').innerHTML = i18next.t('content-managing-board-2');
  document.getElementById('title-administrative-body').innerHTML = i18next.t('title-administrative-body');
  document.getElementById('content-administrative-body').innerHTML = i18next.t('content-administrative-body');
  document.getElementById('content-administrative-body-2').innerHTML = i18next.t('content-administrative-body-2');
  document.getElementById('title-instructional-body').innerHTML = i18next.t('title-instructional-body');
  document.getElementById('content-instructional-body').innerHTML = i18next.t('content-instructional-body');
  document.getElementById('title-valle-de-bravo').innerHTML = i18next.t('title-valle-de-bravo');
  document.getElementById('content-valle-de-bravo').innerHTML = i18next.t('content-valle-de-bravo');
  document.getElementById('title-amanalco').innerHTML = i18next.t('title-amanalco');
  document.getElementById('content-amanalco').innerHTML = i18next.t('content-amanalco');
  document.getElementById('title-donato-guerra').innerHTML = i18next.t('title-donato-guerra');
  document.getElementById('content-donato-guerra').innerHTML = i18next.t('content-donato-guerra');
  document.getElementById('title-acatitlan').innerHTML = i18next.t('title-acatitlan');
  document.getElementById('content-acatitlan').innerHTML = i18next.t('content-acatitlan');
  document.getElementById('footer-get-involved').innerHTML = i18next.t('footer-get-involved');
  document.getElementById('footer-franchise').innerHTML = i18next.t('footer-franchise');
  document.getElementById('footer-donation').innerHTML = i18next.t('footer-donation');
  document.getElementById('footer-sponsorship').innerHTML = i18next.t('footer-sponsorship');
  document.getElementById('footer-more').innerHTML = i18next.t('footer-more');
  document.getElementById('footer-our-supporters').innerHTML = i18next.t('footer-our-supporters');
  document.getElementById('footer-privacy-notice').innerHTML = i18next.t('footer-privacy-notice');
  //document.getElementById('').innerHTML = i18next.t('');
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