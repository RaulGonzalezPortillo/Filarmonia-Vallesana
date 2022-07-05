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
          "content-managing-board": "<b>President of the Board:</b> Leticia Hernández Ramírez<br><b>General Director:</b> Úrsula Verea Hernández",
          "title-administrative-body": "Administrative department",
          "content-administrative-body": "<b>Legal Counsel:</b> Horacio Mafre<br><b>Coordination and general management assistant:</b> Roxana Rivas Flores<br><b>Accounting Department:</b> Aldo Herrera Cortez<br><b>Media department:</b> Carla González Uribe y Edna Silva<br><br><b>Valle de Bravo Headquarters coordination:</b> Ivett Velazco<br><b>Amanalco Headquarters coordination:</b> Rosa María Martínez de la Cruz<br><b>Donato Guerra Headquarters coordination:</b> Roxana Rivas Flores<br><b>Acatitlan Headquarters coordination:</b> Susana Aguilar Cerezo<br><b>Maintenance department:</b> José Manuel Colin González",
          "title-instructional-body": "Faculty Members",
          "content-instructional-body": "<b>General artistic and SICOEM director:</b> Prospero Reyes Cedeño",
          "title-valle-de-bravo": "Valle de Bravo",
          "content-valle-de-bravo": "<b>Director:</b> Prospero Reyes Cedeño<br>",
          "title-amanalco": "Amanalco de Becerra",
          "content-amanalco": "<b>Assistant director:</b> Víctor Castillo Osorio<br><br><b>Instructors:</b><br>• Julieta Soto Guadarrama<br>• Álvaro Daniel Martínez<br>• Joel Omar Martínez<br>• Berenice Pineda Santiago<br>• Denisse Pineda Santiago<br>• Álvaro Osorio Jiménez<br>• Adriana González Dolores",
          "title-donato-guerra": "Donato Guerra",
          "content-donato-guerra": "<b>Director:</b> Felipe Gómez Pérez<br><b>Assistant director:</b> Jesús Gómez Pérez",
          "title-acatitlan": "Acatitlán",
          "content-acatitlan": "<b>Assistant director:</b> Víctor Castillo Osorio",
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
          "content-managing-board": "<b>Presidenta patronato:</b> Leticia Hernández Ramírez<br><b>Directora general:</b> Úrsula Verea Hernández",
          "title-administrative-body": "Órgano administrativo",
          "content-administrative-body": "<b>Asesoría jurídica:</b> Horacio Mafre<br><b>Coordinación y asistente de dirección general:</b> Roxana Rivas Flores<br><b>Departamento contable:</b> Aldo Herrera Cortez<br><b>Departamento de medios:</b> Carla González Uribe y Edna Silva<br><br><b>Coordinación Sede Valle de Bravo:</b> Ivett Velazco<br><b>Coordinación Sede Amanalco:</b> Rosa María Martínez de la Cruz<br><b>Coordinación Sede Donato Guerra:</b> Roxana Rivas Flores<br><b>Coordinación Acatitlan:</b> Susana Aguilar Cerezo<br><b>Departamento de mantenimiento:</b> José Manuel Colin González",
          "title-instructional-body": "Órgano docente",
          "content-instructional-body": "<b>Director general artística y del SICOEM:</b> Prospero Reyes Cedeño",
          "title-valle-de-bravo": "Valle de Bravo",
          "content-valle-de-bravo": "<b>Director:</b> Prospero Reyes Cedeño<br>",
          "title-amanalco": "Amanalco de Becerra",
          "content-amanalco": "<b>Director asistente:</b> Víctor Castillo Osorio<br><br><b>Instructores:</b><br>• Julieta Soto Guadarrama<br>• Álvaro Daniel Martínez<br>• Joel Omar Martínez<br>• Berenice Pineda Santiago<br>• Denisse Pineda Santiago<br>• Álvaro Osorio Jiménez<br>• Adriana González Dolores",
          "title-donato-guerra": "Donato Guerra",
          "content-donato-guerra": "<b>Director:</b> Felipe Gómez Pérez<br><b>Director asistente:</b> Jesús Gómez Pérez",
          "title-acatitlan": "Acatitlán",
          "content-acatitlan": "<b>Director asistente:</b> Víctor Castillo Osorio",
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
  document.getElementById('title-organizational-chart').innerHTML = i18next.t('title-organizational-chart');
  document.getElementById('title-managing-board').innerHTML = i18next.t('title-managing-board');
  document.getElementById('content-managing-board').innerHTML = i18next.t('content-managing-board');
  document.getElementById('title-administrative-body').innerHTML = i18next.t('title-administrative-body');
  document.getElementById('content-administrative-body').innerHTML = i18next.t('content-administrative-body');
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