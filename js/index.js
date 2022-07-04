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
          "content-educational-proposal": "Our learning method focuses on continually innovating the traditional education system, breaking the barriers imposed by a system that's perfectionist, repetitive, idealist and without cultural empathy, with euro-centric academic principles that deny the path or learning through trial, error and continous improvement.<br><br>We foster an active, participative and group centered education, developing abilities and skills with a focus on the students, managing to impact cultural identity for their proper adaptation and educational growth.<br><br>We don't teach, we train. We're inspired by the sports system, where playing and practicing are integrated, sharpening discipline, a sense of community and traditions.",
          "title-educational-proposal": "Educational proposal",
          "content-program-innovation": "<b>Musical education program innovation</b><br><br>• Creation of the first juvenile jazz band.<br>• Formation of the first virtual keyboards ensemble, developed online within the limits of the pandemic.",
          "content-proposals": "<b>Educational proposals</b><br>",
          "link-proposals": "• SICOEM's recognition by Finnish organization HundrED",
          "high-impact-achievements": "Filarmonía Vallesana.<br><br>Social program with one of the 100 most innovative training programs in the world.",
          "title-achievements": "Achievements",
          "content-hundred-1": "Professor Próspero and our team were present at HundrED's 2018 Innovation Summit at Helinski, Finnland, sharing experiences and knowledge with the greatest education innovators in the world.",
          "content-hector-infanzon": "Concerts with Hector Infanzón, Hernando Castro, Daniel Wong (from MAD trio) and Felipe Gordillo",
          "content-julio-castillo": "Concert at the Julio Castillo teather, along with great international singers such as Olivia Gorra and James Dempster.",
          "content-quintana-roo": "First juvenile Jazz festival in Quintana Roo, México.",
          "content-forum": "Concert at the opening of the International Forum against Internet Violence in 2014, at the Memory and Tolerance Museum in México City.",
          "content-hundred-2": "Our musical training program, in place since 2012 and created by our principal, professor Próspero Reyes, has been selected by international organization HundrED as one of the 100 most innovative education programs.",
          "content-santa-maria": "Santa María concert 6 months after the start of the program.",
          "content-primer-festival": "First band festival in Valle de Bravo with the participation of the “Big Band Jazz México”.",
          "content-jazz-pop": "Concerts “Juvenile Jazz & Pop Symphony” (violin ensemble) with OSN at Palacio de las Bellas artes, directed by professor Próspero Reyes.",
          "content-radio-imer": "2 concerts to celebrate internacional Jazz day and Children's day at IMER."
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
          "title-educational-proposal": "Propuesta educativa",
          "content-educational-proposal": "Nuestro método de aprendizaje se enfoca en la innovación continua del sistema educativo tradicional, rompiendo las barreras de estudio de un sistema perfeccionista, repetitivo, idealista y sin una empatía cultural, con fundamentos académicos euro-centristas que niega el camino del aprendizaje a través de prueba, error y mejora continua.<br><br>Fomentamos una educación activa, participativa y grupal, desarrollando habilidades y competencias con un enfoque en los alumnos, logrando impactar en la identidad cultural para su correcta adaptación y desarrollo educativo.<br><br>No enseñamos, entrenamos. Nos inspiramos en el sistema deportivo, donde se intercala entre el juego y la práctica enfocándonos en la disciplina, comunidad y tradición.",
          "content-program-innovation": "<b>Innovación del programa educativo musical</b>          <br><br>• Desarrollo de la primera banda de jazz infantil y juvenil.<br>• Formación del primer Ensamble de Teclados Digitales de Filarmonía Vallesana desarrollado en línea a raíz de la pandemia y su confinamiento.",
          "content-proposals": "<b>Propuestas educativas</b><br>",
          "link-proposals": "• Reconocimiento de la organización Finlandesa HundrED al SICOEM",
          "high-impact-achievements": "Filarmonía Vallesana.<br><br>Programa social con uno de los 100 sistemas de entrenamiento más innovadores del mundo.",
          "title-achievements": "Logros",
          "content-hundred-1": "El Maestro Próspero y nuestros directivos estuvieron presentes en la Cumbre de Innovación HundrED 2018 en Helsinki, Finlandia, compartiendo experiencias y conocimientos al lado de los más importantes innovadores del mundo en temas de educación.",
          "content-hector-infanzon": "Conciertos con Hector Infanzón, Hernando Castro, Daniel Wong (de MAD trio) y Felipe Gordillo.",
          "content-julio-castillo": "Concierto en el teatro Julio Castillo alternando con grandes solistas internacionales como la maestra Olivia Gorra y el maestro James Dempster.",
          "content-quintana-roo": "Realización del Primer Festival de Jazz Infantil y Juvenil en Quintana Roo, Mexico.",
          "content-forum": "Concierto de inauguración en el Foro Internacional contra la violencia en internet 2014 en el Museo Memoria y Tolerancia de la Ciudad de México.",
          "content-hundred-2": "Nuestro Sistema de Entrenamiento Musical, aplicado en Filarmonía Vallesana desde el año 2012 y creado por nuestro Director, el Maestro Próspero Reyes, ha sido seleccionado por la organización mundial HundrED como uno de los 100 Programas de Enseñanza más innovadores del mundo.",
          "content-santa-maria": "Concierto Santa María A los 6 meses de iniciado el programa.",
          "content-primer-festival": "Primer Festival de Bandas en Valle de Bravo con la participacion de la “Big Band Jazz de México”.",
          "content-jazz-pop": "Conciertos “Jazz & Pop Sinfónico Infantil” (ensamble de violines) con la OSN en el Palacio de las Bellas Artes dirigido por el maestro Próspero Reyes.",
          "content-radio-imer": "2 conciertos para celebrar el Día Internacional del Jazz en el IMER en coincidencia con el Día del Niño."
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
  document.getElementById('title-educational-proposal').innerHTML = i18next.t('title-educational-proposal');
  document.getElementById('content-educational-proposal').innerHTML = i18next.t('content-educational-proposal');
  document.getElementById('content-program-innovation').innerHTML = i18next.t('content-program-innovation');
  document.getElementById('content-proposals').innerHTML = i18next.t('content-proposals');
  document.getElementById('link-proposals').innerHTML = i18next.t('link-proposals');
  document.getElementById('high-impact-achievements').innerHTML = i18next.t('high-impact-achievements');
  document.getElementById('title-achievements').innerHTML = i18next.t('title-achievements');
  document.getElementById('content-hundred-1').innerHTML = i18next.t('content-hundred-1');
  document.getElementById('content-hector-infanzon').innerHTML = i18next.t('content-hector-infanzon');
  document.getElementById('content-julio-castillo').innerHTML = i18next.t('content-julio-castillo');
  document.getElementById('content-quintana-roo').innerHTML = i18next.t('content-quintana-roo');
  document.getElementById('content-forum').innerHTML = i18next.t('content-forum');
  document.getElementById('content-hundred-2').innerHTML = i18next.t('content-hundred-2');
  document.getElementById('content-santa-maria').innerHTML = i18next.t('content-santa-maria');
  document.getElementById('content-primer-festival').innerHTML = i18next.t('content-primer-festival');
  document.getElementById('content-jazz-pop').innerHTML = i18next.t('content-jazz-pop');
  document.getElementById('content-radio-imer').innerHTML = i18next.t('content-radio-imer');
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