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
          "title-objective": "Objective",
          "content-objective": "The most important thing for Filarmonía Vallesana is to offer children and young people new challenges and opportunities to face life through music, reducing exposure to addictions and violence in their social environment, with a mentality that promotes play-teaching-learning.<br><br>In addition to improving their lives, they inspire their families and communities, thus strengthening the social fabric.",
          "title-mission-vision": "Mission and vision",
          "title-mission": "Mission",
          "content-mission": "The mission is to generate a collective experience of social development, integrating children and young people of diverse socioeconomic levels through music. We also intend to channel their leisure time into study and learning activities that allow a healthy development of civic values and cognitive, social, and intellectual skills, which nurture their self-esteem, encourage their search for excellence and stimulate their creativity.",
          "title-vision": "Vision",
          "content-vision": "Our vision is to become a model among social organizations thanks to the solidity and the transcendence of our work.  As well as our capacity to effectively promote intellectual and social development and healthy coexistence, always counting on the participation of residents in the communities, neighborhoods, and barrios, mainly in Valle de Bravo and nearby towns."
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
          "title-objective": "Objetivo",
          "content-objective": "Lo más importante para Filarmonía Vallesana es oferecer a niños y jovenes nuevos retos y oportunidades para afrontar la vida a través de la música,disminuyendo la exposición a las adicciones y la violencia de su entorno social, con una mentalidad que promueve el juego-enseñanza-aprendizaje.<br><br>Ademas de mejorar su vida, inspiran a sus familias y comunidades, logrando así, fortalecer el tejido social.",
          "title-mission-vision": "Misión y visión",
          "title-mission": "Misión",
          "content-mission": "Generar una experiencia colectiva de desarrollo social, integrando a niños y jovenes de diversos niveles socioeconómicos a través de la música, canalizando su tiempo de ocio en actividades de estudio y aprendizaje, que permitan un sano desarrollo, valores cívicos y habilidades cognitivas, sociales e intelectuales, que nutran su autoestima, fomenten su busqueda de la excelencia e incentiven su creatividad.",
          "title-vision": "Visión",
          "content-vision": "Ser un referente entre las organizaciones sociales, por su solidez y la trascendencia de su trabajo, así como, por la capacidad de potenciar de manera efectiva el desarrollo intelectual, social y la sana convivencia, siempre contando con la participación de los habitantes de las comunidades, colonias y barrios, principalmente en Valle de Bravo y municipios cercanos."
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
  document.getElementById('title-objective').innerHTML = i18next.t('title-objective');
  document.getElementById('content-objective').innerHTML = i18next.t('content-objective');
  document.getElementById('title-mission-vision').innerHTML = i18next.t('title-mission-vision');
  document.getElementById('title-mission').innerHTML = i18next.t('title-mission');
  document.getElementById('content-mission').innerHTML = i18next.t('content-mission');
  document.getElementById('title-vision').innerHTML = i18next.t('title-vision');
  document.getElementById('content-vision').innerHTML = i18next.t('content-vision');
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
