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
          "title-ethic-code": "Code of Ethics and Conduct",
          "content-ethic-code": "This Code of Ethics and Conduct has been adopted by the FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C.; it describes the values, principles and practices that guide the conduct of the Association.<br /><br />This Code reflects the direction's objective to reinforce the ethical standards applicable to all actions undertaken by the Association, as well as to encourage a work environment in which integrity, respect and fairness are the norm.<br /><br />This Code is applicable to the employees that conform the structure of the Association.<br /><br /><strong>1. Compliance with Laws, Rules and Regulations.<br /><br /></strong>The FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C. strives to conduct its activities in compliance with applicable laws, rules and regulations and in accordance with high ethical principles.<br /><br /><strong>2. Anti-Corruption.<br /><br /></strong>The FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C., is opposed to corruption and bribery, and does not tolerate practices which purpose is to do business through improper means. No member and/or collaborator of the Festival is allowed to offer or receive any type of benefit that may affect or appear to affect the ability to make objective and fair decisions.<br /><br /><strong>3. Use of Privileged Information.</strong><br /><br />The Festival requires its collaborators and suppliers to refrain from using privileged information; such privileged information may refer, for example, to Confidential Data of Donors or Suppliers of the FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C.<br /><br />4. Equitable Working Conditions.<br /><br />The Festival contributes to the creation of value, providing a work environment in which each individual has the opportunity to grow professionally and personally. We respect individuals and promote the open exchange of opinions, criticisms and ideas; we are committed to equal employment opportunities for all individuals and do not tolerate illegal forms of discrimination or harassment of any kind.<br /><br />Threats or acts of physical violence and intimidation are prohibited, and the use of drugs in the workplace is not tolerated.<br /><br />5. Conflict of Interest.<br /><br />The collaborators and members of the FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A.C. must not receive undue personal benefits as a result of their positions in the Association, nor enrich themselves in any other way through their access to confidential information; collaborators have the duty to serve the legitimate interests of the Association when the opportunity to do so arises, they must not take advantage of opportunities, nor make use of property or information or take advantage of their position for their own benefit.<br /><br />Any actual or potential conflict of interest must be disclosed to the Board of Trustees.<br /><br /><strong>6. Records and Reports.</strong><br /><br />The FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A.C., applies the highest standards regarding the recording of information. All financial statements, books, records and accounts of the Association, whether in electronic or printed format, must reflect the operations and events accurately and based on the Mexican Financial Reporting Standards, and comply with both legal requirements and accounting principles and also with the accounting system. The issuance of false reports is strictly prohibited.<br /><br />The Association undertakes to provide complete, faithful, accurate, timely and understandable information in all reports and documents to be submitted as requested by the treasury and control institutions and by the Association's Members themselves.<br /><br /><strong>7. Protection and Appropriate Use of Assets.<br /><br /></strong>The associates have the collective responsibility to safeguard the Association's assets and to use them appropriately and efficiently. In addition, there is an obligation to protect the facilities from loss, damage, misuse, theft, misappropriation or destruction. Any situation or incident that could lead to such a result must be reported immediately to the Board of Trustees.<br /><br /><strong>8. Taking Responsibilities<br /><br /></strong>All collaborators, as well as Associates and members of the Board of Trustees, are obliged to comply with the rules set forth in this Code.<br /><br /><em>MARIA TERESA LETICIA HERN&Aacute;NDEZ RAM&Iacute;REZ, PRESIDENT OF THE INTERNATIONAL MUSIC FESTIVAL PRO VALLE DE BRAVO A.C. </em><br /><em>VALLE DE BRAVO, JANUARY 1, 2015</em>"
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
          "title-ethic-code": "Código de ética y conducta",
          "content-ethic-code": "<p>El presente C&oacute;digo de &Eacute;tica y de Conducta, ha sido adoptado por el FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C.; en &eacute;l, se describen los valores, principios y pr&aacute;cticas que gu&iacute;an la conducta de la Asociaci&oacute;n.<br /><br />Este C&oacute;digo, refleja el objetivo de la direcci&oacute;n de reforzar los est&aacute;ndares &eacute;ticos de aplicaci&oacute;n en todas las acciones que emprenda la Asociaci&oacute;n, as&iacute; como de fomentar un entorno de trabajo en el que se promueva la integridad, el respeto y la equidad.<br /><br />El presente C&oacute;digo, es aplicable a los colaboradores que conforma la estructura de la Asociaci&oacute;n.<br /><br /><strong>1. Cumplimiento de Leyes, Normas y Reglamentos.</strong><br />El FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C. se esfuerza por realizar sus actividades observando las leyes, normas y reglamentos aplicables y de acuerdo con principios &eacute;ticos elevados.<br /><br /><strong>2. Lucha Anticorrupci&oacute;n.</strong><br />El FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C., se opone a la corrupci&oacute;n y al soborno, y no tolera pr&aacute;cticas cuyo fin sea hacer negocios a trav&eacute;s de medios indebidos. No se permite a ning&uacute;n miembro y/o colaborador del Festival ofrecer o recibir alg&uacute;n tipo de beneficio que pueda poner en peligro o parezca poner en peligro, la capacidad para adoptar decisiones objetivas y equitativas.<br /><br /><strong>3. Utilizaci&oacute;n de Informaci&oacute;n Privilegiada.</strong><br />El Festival exige a sus colaboradores y a sus proveedores que se abstengan de utilizar informaci&oacute;n privilegiada; tal informaci&oacute;n privilegiada, puede referirse por ejemplo a Datos Confidenciales de Donantes &oacute; de Proveedores del FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A. C<br /><br /><strong>4. Condiciones de Trabajo Equitativas.</strong><br />En el Festival se contribuye a la creaci&oacute;n de valor, proporcionando un ambiente de trabajo en el que cada individuo tenga la oportunidad de crecer profesional y personalmente. Se respeta a las personas y promueve el intercambio abierto de opiniones, cr&iacute;ticas e ideas; se tiene el compromiso de ofrecer igualdad de oportunidades en el empleo a todas las personas y no tolera las formas ilegales de discriminaci&oacute;n ni el acoso de ning&uacute;n tipo.<br />Las amenazas o los actos de violencia e intimidaci&oacute;n f&iacute;sica est&aacute;n prohibidos; as&iacute; como, la utilizaci&oacute;n de drogas en el lugar de trabajo no es tolerada.<br /><br /><strong>5. Conflicto de Intereses.</strong><br />Los colaboradores y miembros del FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A.C. no deben recibir beneficios personales indebidos como resultados de sus posiciones en la Asociaci&oacute;n, ni enriquecerse de otro modo mediante su acceso a informaci&oacute;n confidencial; los colaboradores tienen el deber de servir a los intereses leg&iacute;timos de la Asociaci&oacute;n cuando se les plantee la oportunidad de hacerlo, no deber&aacute;n aprovecharse de oportunidades, ni hacer uso de propiedad o informaci&oacute;n ni aprovecharse de su puesto en beneficio propio.<br />Todo conflicto de intereses real o potencial, deber&aacute; ser comunicado al Patronato.<br /><br /><strong>6. Registros e Informes.</strong><br />El FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO, A.C.., aplica los m&aacute;s altos est&aacute;ndares en lo que se refiere al registro de informaci&oacute;n. Todos los estados financieros, libros, registros y cuentas de la Asociaci&oacute;n ya sean en formato electr&oacute;nico o impreso, deber&aacute;n reflejar las operaciones y acontecimientos con precisi&oacute;n y con base a las Normas de Informaci&oacute;n Financieras Mexicanas, y cumplir tanto los requisitos legales como los principios contables y tambi&eacute;n con el sistema de contabilidad. La expedici&oacute;n de informes falsos, est&aacute; estrictamente prohibida.<br />La Asociaci&oacute;n, se compromete a entregar informaci&oacute;n completa, fiel, precisa, en plazo y comprensible en todos los informes y documentos que deba presentar con arreglo a lo solicitado por las instituciones de hacienda y control y por los propios Asociados de la Asociaci&oacute;n.<br /><br /><strong>7. Protecci&oacute;n y Utilizaci&oacute;n Apropiada de Activos.</strong><br />Los colaboradores tienen colectivamente la responsabilidad de salvaguardar los bienes de la Asociaci&oacute;n y de darles un uso apropiado y eficiente. Adem&aacute;s, se tiene la obligaci&oacute;n de proteger las instalaciones de p&eacute;rdidas, da&ntilde;os, mal uso, robos, malversaci&oacute;n o destrucci&oacute;n. Cualquier situaci&oacute;n o incidente que pueda dar lugar a tal resultado, deber&aacute; ser comunicado de inmediato al Patronato.<br /><br /><strong>8. Toma de Responsabilidades</strong><br />La totalidad de los colaboradores, as&iacute; como los Asociados y miembros del Consejo Directivos, est&aacute;n obligados a cumplir las normas establecidas en el presente C&oacute;digo.<br /><br /><em>MAR&iacute;A TERESA LETICIA HERN&Aacute;NDEZ RAM&Iacute;REZ, PRESIDENTA DEL FESTIVAL INTERNACIONAL DE M&Uacute;SICA PRO VALLE DE BRAVO A.C.<br />VALLE DE BRAVO, 1&deg; DE ENERO DEL 2015</em></p>"
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
  document.getElementById('title-ethic-code').innerHTML = i18next.t('title-ethic-code');
  document.getElementById('content-ethic-code').innerHTML = i18next.t('content-ethic-code');
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