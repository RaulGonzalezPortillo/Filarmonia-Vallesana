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
          "btn-download": "Download",
          "content-organization": "<strong>Music Director</strong><br />Felipe G&oacute;mez P&eacute;rez<br /><br /><strong>Teacher</strong><br />Jes&uacute;s G&oacute;mez P&eacute;rez<br /><br /><strong>General Coordination</strong><br />Roxana Rivas Flores",
          "content-description": "Filarmon&iacute;a Donato Guerra starts in March 2016 thanks to the commitment and initiative of the Festival Internacional de M&uacute;sica Pro Valle de Bravo A.C.,<br /><br />It has presence in the communities of Donato Guerra and San Martin Obispo in the State of Mexico, in addition to supporting with musical training to elementary schools in the region with the objective of making practices oriented to the teaching of musical language.<br /><br />At present the program is made up of:<br /><strong>&bull; </strong>&nbsp;Two symphonic bands<br /><strong>&bull; </strong>&nbsp;An orchestra of Venovas<br /><strong>&bull; </strong>&nbsp;A choral ensemble<br /><strong>&bull; </strong>&nbsp;A group of Child Conductors",
          "content-details": "Five years after its birth and two years after the formation of its Symphonic Band under the baton of its director; maestro Felipe G&oacute;mez P&eacute;rez, Filarmon&iacute;a Donato Guerra has performed several concerts in the region highlighting presentations:<br /><strong>&bull; </strong> The XV Festival de las Almas in 2017<br /><strong>&bull; </strong> The festival uniting cultures Cozumel - State of Mexico in commemoration of the 500th anniversary of the arrival of Hern&aacute;n Cort&eacute;s to Mexico.<br /><strong>&bull; </strong> The closing of the Children's Day Cultural Festival at the Conservatory of Music of the State of Mexico.<br /><strong>&bull; </strong> The participation of one of our students and our director in the Simanof South Korea tour, where they shared the stage with musicians of different nationalities.",
          "content-details-2": "Filarmon&iacute;a Donato Guerra has shared the stage with musicians such as:<br /><strong>&bull; </strong> Denise De Kalafe.<br /><strong>&bull; </strong> Soprano singer Olivia Gorra.<br /><strong>&bull; </strong> Rodrigo Mac&iacute;as conductor of the Orquesta Sinf&oacute;nica del Estado de M&eacute;xico (OSEM).<br /><strong>&bull; </strong> The prestigious Professor James Demster.",
          "content-biannual-report": "Download our January-July 2022's biannual report",
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
          "btn-download": "Descargar",
          "content-organization": "<strong>Director Musical <br /></strong>Felipe G&oacute;mez P&eacute;rez <br /><br /><strong>Docente</strong><br />Jes&uacute;s G&oacute;mez P&eacute;rez<br /><br /><strong>Coordinaci&oacute;n General </strong><br />Roxana Rivas Flores",
          "content-description": "Filarmon&iacute;a Donato Guerra inicia en marzo del 2016 gracias al compromiso e iniciativa del Festival Internacional de M&uacute;sica Pro Valle de Bravo A.C., <br /><br />Tiene presencia en las comunidades de Donato Guerra y San Martin Obispo en el Estado de M&eacute;xico, adem&aacute;s de apoyar con el entrenamiento musical a escuelas primarias de la regi&oacute;n con el objetivo de hacer pr&aacute;cticas orientadas a la ense&ntilde;anza del lenguaje musical. <br /><br />En la actualidad el programa se conforma por: <br /><strong>&bull; </strong> Dos Bandas sinf&oacute;nicas <br /><strong>&bull; </strong> Una orquesta de Venovas <br /><strong>&bull; </strong> Un ensamble coral <br /><strong>&bull; </strong> Un grupo de Ni&ntilde;os Directores",
          "content-details": "A cinco a&ntilde;os de su nacimiento y a dos a&ntilde;os de la conformaci&oacute;n de su Banda Sinf&oacute;nica bajo la batuta de su director; el maestro Felipe G&oacute;mez P&eacute;rez, Filarmon&iacute;a Donato Guerra ha realizado varios conciertos en la regi&oacute;n destacando presentaciones:<br /><strong>&bull; </strong> El XV Festival de las Almas en 2017.<br /><strong>&bull; </strong> El festival uniendo culturas Cozumel - Estado de M&eacute;xico en conmemoraci&oacute;n de los 500 a&ntilde;os de la llegada de Hern&aacute;n Cortés a M&eacute;xico.<br /><strong>&bull; </strong> El cierre del Festival Cultural del d&iacute;a del ni&ntilde;o en el Conservatorio de M&uacute;sica del Estado de M&eacute;xico.<br /><strong>&bull; </strong> La participaci&oacute;n de uno de nuestros alumnos y de nuestro director en la gira Simanof Corea del Sur, en donde compartieron escenario con m&uacute;sicos de distintas nacionalidades.",
          "content-details-2": "Filarmon&iacute;a Donato Guerra ha compartido escenario con m&uacute;sicos de la talla de:<br /><strong>&bull; </strong> Denise De Kalafe. <br /><strong>&bull; </strong> La soprano Olivia Gorra. <br /><strong>&bull; </strong> Rodrigo Mac&iacute;as, director de la Orquesta Sinf&oacute;nica del Estado de M&eacute;xico (OSEM).<br /><strong>&bull; </strong> El prestigiado maestro James Demster.",
          "content-biannual-report": "Descarga nuestro reporte semestral Enero-Julio 2022",
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
  document.getElementById('btn-download').innerHTML = i18next.t('btn-download');
  document.getElementById('content-organization').innerHTML = i18next.t('content-organization');
  document.getElementById('content-description').innerHTML = i18next.t('content-description');
  document.getElementById('content-details').innerHTML = i18next.t('content-details');
  document.getElementById('content-details-2').innerHTML = i18next.t('content-details-2');
  document.getElementById('content-biannual-report').innerHTML = i18next.t('content-biannual-report');
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