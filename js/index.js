// import i18next from 'i18next';

i18next
  .init({
    //Set the stored prefered language, if not selected, use English.
    lng: localStorage.getItem('language') != null? localStorage.getItem('language'): "en",
    debug: true,
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
          "first-display-text": "Become a part of the most revolutionary music education program.",
          "btn-franchise": "Consultancy",
          "btn-donation": "Donation",
          "btn-sponsorship": "Sponsorship",
          "btn-more": "More",
          "title-where": "Places where we operate",
          "title-what-is": "What do we do?",
          "content-what-is": "Filarmon&iacute;a Vallesana is a social program that influences society through a new musical education program.<br /><br />It all began in june 2011 with an excellent musical development model for children and young people between 6 and 18 years old, most of them with limited resources. We wanted to serve as a complement to education in schools and homes, with the objective of helping to develop the child's personality to the fullest. <br /><br />In Filarmon&iacute;a Vallesana we want to generate a shared experience of social development by engaging children and young people from different socioeconomic levels through music. &nbsp;Directing our students&rsquo; free time in practicing our unique musical education model procures a healthy development, as well as promoting civic values, cognitive, social and intellectual skills that nurture their self-esteem, encourage their search for excellence and stimulate their creativity.<br /><br />We want to create a childhood that, thanks to the integral development of their skills and talents, fosters a sense of belonging, pride and self-esteem.&nbsp; We want our students to have a vision of a better future for themselves and their families, therefore reinforcing the social fabric and highlighting Mexican talent.",
          "content-educational-proposal": "Our learning method focuses on the current innovation of the traditional educational system, by breaking the study barriers of a perfectionist, repetitive, idealistic system that lacks of cultural empathy, that is based on Euro-centric academic foundations and denies the path of learning through trial, error and continuous improvement.<br /><br />We promote an active, participative and group-based education, by developing skills and competencies with a focus on the students in order to impact cultural identity to ensure educational development.<br /><br />We do not teach, we train. We take inspiration from the sports system where play and&nbsp;training are combined with discipline, community and tradition.",
          "title-educational-proposal": "Educational proposal",
          "content-program-innovation": "<strong>Innovation of the music education program</strong><br><br><strong>&bull; </strong>Creation of the first children's and youth jazz band.<br><strong>&bull; </strong> Formation of the first Digital Keyboard ensemble of Filarmon??a Vallesana developed as a result of the pandemic confinement.",
          "content-proposals": "<strong>Educational proposals</strong><br>",
          "link-proposals": "<strong>&bull; </strong> SICOEM's recognition by Finnish organization HundrED",
          "high-impact-achievements": "Filarmon??a Vallesana.<br><br>Social program selected as one of the 100 most innovative and scalable educational methods in the world.",
          "title-achievements": "Achievements",
          "content-hundred-1": "Professor Pr??spero and our executives were invited to participate at the HundrED Innovation Summit 2019 in Helsinki, Finland, sharing experiences and knowledge alongside the world's leading innovators in education.",
          "content-hector-infanzon": "Concerts with Hector Infanz??n, Hernando CastroDaniel Wong (MAD trio) and Felipe Gordillo.",
          "content-julio-castillo": "Concert at the Julio Castillo Theater featuring international soloists such as Maestro Olivia Gorra and Maestro James Dempster.",
          "content-quintana-roo": "Organized the First Children's and Youth Jazz Festival in Quintana Roo, M??xico.",
          "content-forum": "Opening concert at the International Forum against Internet Violence 2014 at 'Museo Memoria y Tolerancia' in Mexico City.",
          "content-hundred-2": "Our Musical Training System, applied in Filarmon??a Vallesana since 2012 and created by our Director, Professor Pr??spero Reyes, has been selected by the worldwide organization HundrED as one of the 100 most innovative Teaching Programs in the world.",
          "content-santa-maria": "Concert Santa Mar??a. Took place after only 6 months from the start of the program.",
          "content-primer-festival": "First Band Festival in Valle de Bravo with the performance of the ???Big Band Jazz M??xico???.",
          "content-jazz-pop": "Concert ???Jazz & Pop Sinf??nico Infantil??? (violin ensemble) with the OSN at Palacio de las Bellas Artes, conducted by Professor Pr??spero Reyes.",
          "content-radio-imer": "2 concerts to celebrate internacional Jazz day and Children's day at IMER.",
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
          "btn-about-us": "Con??cenos",
          "btn-what-we-do": "Lo que hacemos",
          "btn-organizational-chart": "Diagrama organizacional",
          "btn-transparency": "Transparencia",
          "btn-privacy-notice": "Aviso de privacidad",
          "btn-sponsors": "Patrocinadores",
          "btn-students": "Ex-Alumnos",
          "btn-proyects": "Proyectos",
          "btn-get-involved": "Participa",
          "btn-language": "Lenguaje",
          "btn-english": "Ingl??s",
          "btn-spanish": "Espa??ol",
          "first-display-text": "S?? parte del programa de entrenamiento pedag??gico m??sical m??s innovador.",
          "btn-franchise": "Asesor??a",
          "btn-donation": "Donaci??n",
          "btn-sponsorship": "Patrocinio",
          "btn-more": "M??s",
          "title-where": "D??nde actuamos",
          "title-what-is": "??Qu?? es Filarmon??a Vallesana?",
          "content-what-is": "Filarmon??a Vallesana es un Programa Social que incide en la sociedad a trav??s del entrenamiento pedag??gico musical.<br><br>Comenzamos en junio del 2011 como un modelo de desarrollo pedag??gico musical de calidad para ni??@s y j??venes de entre 6 y 18 a??os en su mayor??a de escasos recursos, complementando la educaci??n en las escuelas y los hogares teniendo como objetivo el pleno desarrollo de la personalidad del ni??o.<br><br>En Filarmon??a Vallesana queremos generar una experiencia colectiva de desarrollo social, integrando a ni??@s y j??venes de diversos niveles socioecon??micos a trav??s de la m??sica, canalizando su tiempo en actividades de estudio y aprendizaje que permitan un sano desarrollo, valores c??vicos, habilidades cognitivas, sociales e intelectuales, la nutrici??n de su autoestima, su b??squeda de la excelencia y su creatividad a trav??s de la ense??anza de la m??sica.<br><br>Queremos una ni??ez que, gracias al desarrollo integral de sus habilidades y talentos, tenga un sentido de pertenencia, orgullo y autoestima, generando una visi??n de un futuro mejor para ellos y sus familias, fortaleciendo el tejido social y destacando el talento mexicano.",
          "title-educational-proposal": "Propuesta educativa",
          "content-educational-proposal": "Nuestro m??todo de aprendizaje se enfoca en la innovaci??n continua del sistema educativo tradicional, rompiendo las barreras de estudio de un sistema perfeccionista, repetitivo, idealista y sin una empat??a cultural, con fundamentos acad??micos euro-centristas que niega el camino del aprendizaje a trav??s de prueba, error y mejora continua.<br><br>Fomentamos una educaci??n activa, participativa y grupal, desarrollando habilidades y competencias con un enfoque en los alumnos, logrando impactar en la identidad cultural para su correcta adaptaci??n y desarrollo educativo.<br><br>No ense??amos, entrenamos. Nos inspiramos en el sistema deportivo, donde se intercala entre el juego y la pr??ctica enfoc??ndonos en la disciplina, comunidad y tradici??n.",
          "content-program-innovation": "<strong>Innovaci??n del programa educativo musical</strong><br><br><strong>&bull; </strong> Desarrollo de la primera banda de jazz infantil y juvenil.<br><strong>&bull; </strong> Formaci??n del primer Ensamble de Teclados Digitales de Filarmon??a Vallesana desarrollado en l??nea a ra??z de la pandemia y su confinamiento.",
          "content-proposals": "<strong>Propuestas educativas</strong><br>",
          "link-proposals": "<strong>&bull; </strong> Reconocimiento de la organizaci??n Finlandesa HundrED al SICOEM",
          "high-impact-achievements": "Filarmon??a Vallesana.<br><br>Programa social reconocido como uno de los 100 sistemas de entrenamiento m??s innovadores del mundo.",
          "title-achievements": "Logros",
          "content-hundred-1": "El Maestro Pr??spero y nuestros directivos estuvieron presentes en la Cumbre de Innovaci??n HundrED 2018 en Helsinki, Finlandia, compartiendo experiencias y conocimientos al lado de los m??s importantes innovadores del mundo en temas de educaci??n.",
          "content-hector-infanzon": "Conciertos con Hector Infanz??n, Hernando Castro, Daniel Wong (de MAD trio) y Felipe Gordillo.",
          "content-julio-castillo": "Concierto en el teatro Julio Castillo alternando con grandes solistas internacionales como la maestra Olivia Gorra y el maestro James Dempster.",
          "content-quintana-roo": "Realizaci??n del Primer Festival de Jazz Infantil y Juvenil en Quintana Roo, Mexico.",
          "content-forum": "Concierto de inauguraci??n en el Foro Internacional contra la violencia en internet 2014 en el Museo Memoria y Tolerancia de la Ciudad de M??xico.",
          "content-hundred-2": "Nuestro Sistema de Entrenamiento Musical, aplicado en Filarmon??a Vallesana desde el a??o 2012 y creado por nuestro Director, el Maestro Pr??spero Reyes, ha sido seleccionado por la organizaci??n mundial HundrED como uno de los 100 Programas de Ense??anza m??s innovadores del mundo.",
          "content-santa-maria": "Concierto Santa Mar??a A los 6 meses de iniciado el programa.",
          "content-primer-festival": "Primer Festival de Bandas en Valle de Bravo con la participacion de la ???Big Band Jazz de M??xico???.",
          "content-jazz-pop": "Conciertos ???Jazz & Pop Sinf??nico Infantil??? (ensamble de violines) con la OSN en el Palacio de las Bellas Artes dirigido por el maestro Pr??spero Reyes.",
          "content-radio-imer": "2 conciertos para celebrar el D??a Internacional del Jazz en el IMER en coincidencia con el D??a del Ni??o.",
          "footer-get-involved": "??Participa!",
          "footer-franchise": "Asesor??a",
          "footer-donation": "Donaci??n",
          "footer-sponsorship": "Patrocinio",
          "footer-more": "M??s",
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
  document.getElementById('first-display-text').innerHTML = i18next.t('first-display-text');
  document.getElementById('btn-franchise').innerHTML = i18next.t('btn-franchise');
  document.getElementById('btn-donation').innerHTML = i18next.t('btn-donation');
  document.getElementById('btn-sponsorship').innerHTML = i18next.t('btn-sponsorship');
  document.getElementById('btn-more').innerHTML = i18next.t('btn-more');
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