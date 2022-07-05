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
          "title-amanalco": "Amanalco de Becerra",
          "content-organization": "<strong>Concertmaster Director</strong><br />Prof. V&iacute;ctor Castillo Osorio.<br /><br /><strong>Coordination</strong><br />Rosa Mar&iacute;a Mart&iacute;nez de la Cruz.<br /><br /><strong>Instructors</strong><br />&bull; Julieta Soto Guadarrama.<br />&bull; &Aacute;lvaro Daniel Mart&iacute;nez Mart&iacute;nez.<br />&bull; Joel Omar Mart&iacute;nez Mart&iacute;nez.<br />&bull; &Aacute;lvaro Osorio Jim&eacute;nez. <br />&bull; Berenice Pineda Santiago.<br />&bull; Adriana Gonz&aacute;lez Dolores.",
          "content-description": "<strong>Amanalli; a place where water, great birds and fauna are born.<br /></strong><br />Amanalco is the community that due to its characteristics was selected for the proposal of expansion and growth of Filarmon&iacute;a Vallesana so that more children could join.<br /><br />Being a place with few development activities, thanks to the support of sponsors and especially Mrs. Leticia Hernandez, we continue to move forward with strength so that more young people continue to benefit from the program.<br /><br />An exemplary model in our community are the graduates of the first generation who conclude their university studies in various careers with great success due to the discipline and learning model fostered.<br /><br /",
          "content-details": "The group of instructors that have been trained makes possible the daily operation, the development of new instrumental ensembles and the growth of 3 communities: Rincon de Guadalupe, El Temporal and San Jeronimo; pragmatically realizing what was thought to be a utopia: the expansion and growth of the Filarmonia Vallesana program."
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
          "title-amanalco": "Amanalco de Becerra",
          "content-organization": "<strong>Director Concertador</strong><br />Mtro. V&iacute;ctor Castillo Osorio.<br /><br /><strong>Coordinaci&oacute;n</strong><br />Rosa Mar&iacute;a Mart&iacute;nez de la Cruz.<br /><br /><strong>Instructores</strong><br />&bull; Julieta Soto Guadarrama. <br />&bull; &Aacute;lvaro Daniel Mart&iacute;nez Mart&iacute;nez. <br />&bull; Joel Omar Mart&iacute;nez Mart&iacute;nez. <br />&bull; &Aacute;lvaro Osorio Jim&eacute;nez. <br />&bull; Berenice Pineda Santiago. <br />&bull; Adriana Gonz&aacute;lez Dolores.</p>",
          "content-description": "<strong>Amanalli; Lugar donde nace el agua, grandes avetos y fauna<br /></strong><br />Amanalco es la comunidad que por sus caracter&iacute;sticas fue seleccionada para la propuesta de expansi&oacute;n y crecimiento de Filarmon&iacute;a Vallesana para que m&aacute;s ni&ntilde;os se integraran.<br /><br />Siendo un lugar con pocas actividades de desarrollo, gracias al apoyo de patrocinadores y especialmente de la Sra. Leticia Hern&aacute;ndez, seguimos avanzando con solidez para que m&aacute;s j&oacute;venes sigan benefici&aacute;ndose del programa.<br /><br />Un modelo ejemplar en nuestra comunidad son los egresados de la primera generaci&oacute;n que concluyen sus estudios universitarios en diversas carreras con gran &eacute;xito por la disciplina y el modelo de aprendizaje fomentado. <br /><br />",
          "content-details": "El grupo de instructores que se han capacitado posibilita el funcionamiento cotidiano, el desarrollo de nuevos ensambles instrumentales y el crecimiento de 3 comunidades: Rinc&oacute;n de Guadalupe, El Temporal y San Jer&oacute;nimo; realizando pragm&aacute;ticamente lo que se pensaba una utop&iacute;a: la expansi&oacute;n y el crecimiento del programa Filarmon&iacute;a Vallesana."
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
  document.getElementById('title-amanalco').innerHTML = i18next.t('title-amanalco');
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