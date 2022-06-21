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
          "btn-students": "Students",
          "btn-proyects": "Proyects",
          "btn-get-involved": "Get involved",
          "btn-language": "Language",
          "btn-english": "English",
          "btn-spanish": "Spanish",
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
          "title-students": "Alumnos",
          "content-students": "Nuestro enfoque es la atenci&oacute;n personalizada que les brindamos a nuestros alumn@s para su educaci&oacute;n y desarrollo. Se les dota de herramientas b&aacute;sicas de emprendimiento y de liderazgo, desarrollo humano e inteligencia emocional que se ver&aacute;n reflejadas en su vida futura. <br /><br />Canalizamos el talento y desarrollo de sus habilidades, generando entornos de &eacute;xito social tanto individual, familiar y comunitario, satisfaciendo la falta de programas culturales y de uni&oacute;n familiar en las comunidades donde se desarrolla el programa. <br /><br />Nuestros egresados del Filarmon&iacute;a Vallesana (mayores de 18 a&ntilde;os) contin&uacute;an con sus estudios en grados superiores en varios estados de la Rep&uacute;blica Mexicana, siendo que en las comunidades en las que se desarrollan nuestros programas no hay instituciones de estudios superiores y la deserci&oacute;n en esta etapa de la vida de los j&oacute;venes suele darse en gran medida",
          "content-social-inclusion": "<strong>Inclusi&oacute;n social</strong><br /><br />Otra de las acciones importantes que se realizan es la promoci&oacute;n de equidad de g&eacute;nero y la inclusi&oacute;n social. El 68% del total de alumn@s son ni&ntilde;as y contamos tambi&eacute;n con la presencia de grupos &eacute;tnicos representativos de cada localidad (Mazahuas, Otom&iacute;es) <br /><br />Se cuenta con casos documentados de alumn@s que presentan alguna capacidad diferente y la mejora en sus habilidades cognitivas y sociales a partir de su inclusi&oacute;n y desarrollo en el programa.",
          "content-strategy": "<strong>Estrategia</strong><br /><br />Se crea la estrategia &ldquo;Todo Mundo Ayuda a Todo Mundo&rdquo; en la cual los alumn@s m&aacute;s destacados a partir de los 16 a&ntilde;os son capacitados y toman el cargo de &ldquo;instructores&rdquo; para transmitir sus conocimientos y experiencia a las nuevas generaciones. Se les brinda un apoyo econ&oacute;mico moderado en este transcurso y se les dota de herramientas b&aacute;sicas de emprendimiento que ser&aacute;n de gran utilidad para incentivarlos a seguir con sus estudios superiores al cumplir la mayor&iacute;a de edad. <br /><br />Se les capacita para emplear a su favor los aprendizajes adquiridos en su beneficio econ&oacute;mico y de crecimiento personal a trav&eacute;s del programa de capacitaci&oacute;n de instructores, ofreciendo un aprendizaje activo que provee de experiencia &uacute;til para el mundo real. <br /><br />Trabajamos sobre 3 premisas:<br /><br /><em>Todo Mundo Ayuda a Todo Mundo<br /></em><em>Todo lo que Hacemos, lo Hacemos con Todas las Ganas<br /></em><em>No Corremos, Caminamos</em>",
          "content-achievements": "<strong>Otros Beneficiados:</strong><br /><br />La creaci&oacute;n de puestos de trabajo Filarmon&iacute;a brinda la oportunidad a los padres de familia y alumn@s de ser capacitados y ocupar puestos de trabajo en el programa apoyando su econom&iacute;a familiar. <br /><br /><br /><strong>Logros</strong><br /><br />Nos enorgullece reconocer el crecimiento individual de alumn@s sobresalientes en el mundo de la m&uacute;sica: <br /><br /><strong>&bull;</strong>&nbsp;Alumn@s seleccionados para participar en la Primera Bandim <br /><strong>&bull;</strong>&nbsp;Campamento de Verano Iterlochen + direcci&oacute;n orquestal <br /><strong>&bull;</strong>&nbsp;Congreso internacional de cornistas en Itaca, Nueva York (2 alumnas) <br />Tour Korea 2019 con Simanof Orchestral Foundation en las ciudades de Se&uacute;l, Chincheon y Yongin <br /><strong>&bull;</strong>&nbsp;Orquestas Sinf&oacute;nica del Instituto Superior (ISMEV) <br /><strong>&bull;</strong>&nbsp;Camerata de Coahuila <br /><strong>&bull;</strong>&nbsp;Orquesta de Salsa Papakilistli <br /><strong>&bull;</strong>&nbsp;Big Band de la Universidad Veracruzana <br /><strong>&bull;</strong>&nbsp;Ensamble Trombones de Veracruz <br /><strong>&bull;</strong>&nbsp;Apoyo de Orquesta de Stuttgart <br /><strong>&bull;</strong>&nbsp;Alumn@s embajadores, consejo acad&eacute;mico y representantes de Hundred Finlandia."
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
  document.getElementById('title-students').innerHTML = i18next.t('title-students');
  document.getElementById('content-students').innerHTML = i18next.t('content-students');
  document.getElementById('content-social-inclusion').innerHTML = i18next.t('content-social-inclusion');
  document.getElementById('content-strategy').innerHTML = i18next.t('content-strategy');
  document.getElementById('content-achievements').innerHTML = i18next.t('content-achievements');
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