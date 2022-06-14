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
          "first-display-text": "Be part of the most innovative musical and pedagogical training program.",
          "btn-franchise": "Franchise",
          "btn-donation": "Donation",
          "btn-sponsorship": "Sponsorship",
          "title-where": "Where we act",
          "title-what-is": "What is Filarmonía Vallesana?",
          "content-what-is": "Filarmonía Vallesana is a Social Program that impacts society through pedagogical and musical training.<br><br>It all begins in June 2011, with a high quality musical development model for children from 6 to 18 years old with limited recourses, that serves as a complement for school and home education with the objective of full-fledged development of the personality of the child.<br><br>At Filarmonía Vallesana we want to create a collective social development experience, integrating children from various socio-economic levels through music, channeling their time in study and learning activities, that will allow a healthy growth, civic values, cognitive, social and intellectual abilities, a rich self esteem, a search for excellence and creativity, all through musical teaching.<br><br>We want a youth that, thanks to the integral development of their abilities and talent, has a sense of belonging, pride and self esteem, generating the vission for a better future for them and their families, strenghtening the social fabric and showcasing the mexican talent.",
          "content-educational-proposal": "Our learning method focuses on continually innovating the traditional education system, breaking the barriers imposed by a system thats perfectionist, repetitive, idealist and without cultural empathy, with euro-centric academic principles that deny the path or learning through trial, error and continous improvement.<br><br>We foster an active, participative and group centered education, developing abilities and skills with a focus on the students, managing to impact cultural identity for their proper adaptation and educational growth.<br><br>We don't teach, we train. We're inspired by the sports system, where playing and practicing are integrated, sharpening discipline, a sense of community and traditions.",
          "content-program-innovation": "<b>Musical education program innovation</b><br><br>• Creation of the first juvenile jazz band.<br>• Formation of the first virtual keyboards ensemble, developed online within the limits of the pandemic.",
          "content-proposals": "<b>Educational proposals</b><br>",
          "link-proposals": "• SICOEM's recognition by Finnish organization HundrED",
          "high-impact-achievements": "Filarmonía Vallesana.<br><br>Social program with one of the 100 most innovative training programs in the world.",
          "title-achievements": "Achievements"
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
          "first-display-text": "Sé parte del programa de entrenamiento pedagógico músical más innovador.",
          "btn-franchise": "Franquicia",
          "btn-donation": "Donación",
          "btn-sponsorship": "Patrocinio",
          "title-where": "Dónde actuamos",
          "title-what-is": "¿Qué es Filarmonía Vallesana?",
          "content-what-is": "Filarmonía Vallesana es un Programa Social que incide en la sociedad a través del entrenamiento. pedagógico musical.<br><br>Comenzamos en Junio del 2011 como un modelo de desarrollo pedagógico musical de calidad para niñ@s y jóvenes de entre 6 y 18 años en su mayoría de escasos recursos, complementando la educación en las escuelas y los hogares teniendo como objetivo el pleno desarrollo de la personalidad del niño.<br><br>En Filarmonía Vallesana queremos generar una experiencia colectiva de desarrollo social, integrando a niñ@s y jóvenes de diversos niveles socioeconómicos a través de la música, canalizando su tiempo en actividades de estudio y aprendizaje que permitan un sano desarrollo, valores cívicos, habilidades cognitivas, sociales e intelectuales, la nutrición de su autoestima, su búsqueda de la excelencia y su creatividad a través de la enseñanza de la música.<br><br>Queremos una niñez que, gracias al desarrollo integral de sus habilidades y talentos, tenga un sentido de pertenencia, orgullo y autoestima, generando una visión de un futuro mejor para ellos y sus familias, fortaleciendo el tejido social y destacando el talento mexicano.",
          "content-educational-proposal": "Nuestro método de aprendizaje se enfoca en la innovación continua del sistema educativo tradicional, rompiendo las barreras de estudio de un sistema perfeccionista, repetitivo, idealista y sin una empatía cultural, con fundamentos académicos euro-centristas que niega el camino del aprendizaje a través de prueba, error y mejora continua.<br><br>Fomentamos una educación activa, participativa y grupal, desarrollando habilidades y competencias con un enfoque en los alumnos, logrando impactar en la identidad cultural para su correcta adaptación y desarrollo educativo.<br><br>No enseñamos, entrenamos. Nos inspiramos en el sistema deportivo, donde se intercala entre el juego y la práctica enfocándonos en la disciplina, comunidad y tradición.",
          "content-program-innovation": "<b>Innovación del programa educativo musical</b>          <br><br>• Desarrollo de la primera banda de jazz infantil y juvenil.<br>• Formación del primer Ensamble de Teclados Digitales de Filarmonía Vallesana desarrollado en línea a raíz de la pandemia y su confinamiento.",
          "content-proposals": "<b>Propuestas educativas</b><br>",
          "link-proposals": "• Reconocimiento de la organización Finlandesa HundrED al SICOEM",
          "high-impact-achievements": "Filarmonía Vallesana.<br><br>Programa social con uno de los 100 sistemas de entrenamiento más innovadores del mundo.",
          "title-achievements": "Logros"
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
  document.getElementById('first-display-text').innerHTML = i18next.t('first-display-text');
  document.getElementById('btn-franchise').innerHTML = i18next.t('btn-franchise');
  document.getElementById('btn-donation').innerHTML = i18next.t('btn-donation');
  document.getElementById('btn-sponsorship').innerHTML = i18next.t('btn-sponsorship');
  document.getElementById('title-where').innerHTML = i18next.t('title-where');
  document.getElementById('title-what-is').innerHTML = i18next.t('title-what-is');
  document.getElementById('content-what-is').innerHTML = i18next.t('content-what-is');
  document.getElementById('content-educational-proposal').innerHTML = i18next.t('content-educational-proposal');
  document.getElementById('content-program-innovation').innerHTML = i18next.t('content-program-innovation');
  document.getElementById('content-proposals').innerHTML = i18next.t('content-proposals');
  document.getElementById('link-proposals').innerHTML = i18next.t('link-proposals');
  document.getElementById('high-impact-achievements').innerHTML = i18next.t('high-impact-achievements');
  document.getElementById('title-achievements').innerHTML = i18next.t('title-achievements');
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