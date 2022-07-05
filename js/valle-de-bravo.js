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
          "btn-sponsors": "Sponsors",
          "btn-students": "Supporters",
          "btn-proyects": "Proyects",
          "btn-get-involved": "Get involved",
          "btn-language": "Language",
          "btn-english": "English",
          "btn-spanish": "Spanish",
          "title-valle-de-bravo": "Valle de Bravo",
          "content-organization": "<strong>Director</strong><br />Prof. Pr&oacute;spero Reyes Cede&ntilde;o.<br /><br /><strong>Coordination</strong><br />Leticia Ivett Velasco Sandoval.<br /><br /><strong>Assistant Director</strong><br />Gibran Montes de oca Guarneros.<br /><br /><strong>Department of Technology and Instrumental maintenance</strong><br />Jos&eacute; Manuel Col&iacute;n Gonz&aacute;lez.<br /><br /><strong>Intendance</strong><br />Rosalina L&oacute;pez G&oacute;mez.",
          "content-description": "With its lake, waterfalls and forest, Valle de Bravo is the heart and engine of the program. Based on a solid work team, we propose and develop diverse projects for the expansion and development of the participating communities in diverse contextual programs such as:<br /><br />&bull; Chamber orchestra<br />&bull; Violin ensemble<br />&bull; Symphonic band<br />&bull; Jazz band<br />&bull; Choir and recorder<br />&bull; Guitars<br />&bull; Mariachi<br />&bull; Training of instructors <br />&bull; Instrumental technology<br />&bull; Elaboration of didactic materials",
          "content-details": "It's also the center of intercommunity cooperation and communication for concerts, programs and special projects. Some examples are the training of instructors, which is emerging as the future developer and continuator of our program, or the department of technology and instrumental maintenance, fundamental for the maintenance and development of the program."
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
          "title-valle-de-bravo": "Valle de Bravo",
          "content-organization": "<strong>Director</strong><br />Mtro. Pr&oacute;spero Reyes Cede&ntilde;o.<br /><br /><strong>Coordinaci&oacute;n General</strong><br />Leticia Ivett Velasco Sandoval.<br /><br /><strong>Director Asistente<br /></strong>Gibran Montes de oca Guarneros.<br /><br /><strong>Departamento de Tecnolog&iacute;a y Mantenimiento Instrumental</strong><br />Jos&eacute; Manuel Col&iacute;n Gonz&aacute;lez.<br /><br /><strong>Intendencia</strong><br />Rosalina L&oacute;pez G&oacute;mez.",
          "content-description": "Con su lago, cascadas y bosque, Valle de Bravo es el coraz&oacute;n y motor del programa. En base a un s&oacute;lido equipo de trabajo, propone y desarrolla diversas propuestas para la expansi&oacute;n y el desarrollo de las comunidades participantes en diversos programas contextuales como:<br /><br /><strong>&bull; </strong>Orquesta de c&aacute;mara<br /><strong>&bull; </strong>Ensamble de violines<br /><strong>&bull; </strong>Banda sinf&oacute;nica<br /><strong>&bull; </strong>Banda de Jazz<br /><strong>&bull; </strong>Coro y Flauta Dulce<br /><strong>&bull; </strong>Guitarras<br /><strong>&bull; </strong>Mariachi<br /><strong>&bull; </strong>Capacitaci&oacute;n de Instructores<br /><strong>&bull; </strong>Tecnolog&iacute;a Instrumental<br /><strong>&bull; </strong>Elaboraci&oacute;n de Materiales Did&aacute;cticos",
          "content-details": "Es tambi&eacute;n el centro de la cooperaci&oacute;n y comunicaci&oacute;n intercomunitaria para conciertos, programas y proyectos especiales. Unos ejemplos son la capacitaci&oacute;n de Instructores que se perfila como el futuro desarrollador y continuador de nuestro programa o el departamento de tecnolog&iacute;a y mantenimiento instrumental, fundamental para el mantenimiento y desarrollo del programa."
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
  document.getElementById('title-valle-de-bravo').innerHTML = i18next.t('title-valle-de-bravo');
  document.getElementById('content-organization').innerHTML = i18next.t('content-organization');
  document.getElementById('content-description').innerHTML = i18next.t('content-description');
  document.getElementById('content-details').innerHTML = i18next.t('content-details');
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