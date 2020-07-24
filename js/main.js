
//Preload de la página
  window.onload = function () {
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0.5'; 
  };
//Script para navegación transparente
$(window).scroll(function() {
    if ($("#menu").offset().top > 300) {
      $("#menu").removeClass("principal-header");
          $("#menu").addClass("principal-scroll");  
    } else {  
        $("#menu").addClass("principal-header");
            $("#menu").removeClass("principal-scroll");  
    }
  });
  // Script Menu Navbar 
// Functions

function openMenu() {
  $('.js-menu-container').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
}
function closeMenu() {
  $('.js-menu-container').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}
// Document Ready
jQuery(document).ready(function($){ // When everything has finished loading

  $('.js-menu-button').click(function(){ // When the element with the class 'js-menu-button' is clicked
    openMenu(); // Run the openMenu function
  });

  $('.js-menu-close').click(function(){ // When the element with the class 'js-menu-close' is clicked
    closeMenu(); // Run the closeMenu function
  });

});
// SWEET ALERT
$("#btn-diseno").click(function(){ 
  Swal.fire({
    title: 'DISEÑO WEB',
    html:
    'Diseño de paginas web de gran impacto visual, optimizados para dispositivos móviles y personalizados de acuerdo a tu marca.</br> </br>' +
    '1. Reunir contenido disponible para el sitio web.</br></br>' +
    '2. Crear un prototipo de sitio web, boceto o borrador.</br></br>' +
    '3. Maquetación del sitio web.</br></br>' +
    '4. Pruebas de funcionamiento del sitio web.',  
    imageUrl: '../img/servicios/diseno.png',
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Diseño Web',
  })
})
$("#btn-desarrollo").click(function(){
  Swal.fire({
    title: 'DESARROLO WEB',    
    html:
    '<div>Dirigido a empresas que buscan tener presencia en internet, mostrando información constantemente actualizada.</br></br>' +
    '1. Evaluación y requerimientos del proyecto.</br></br>' +
    '2. Propuesta comercial elaborada.</br></br>' +
    '3. Desarrollo e implementación, planificación.</br></br>' +
    '4. Soporte y mantención de los servicios.</div>',
    imageUrl: '../img/servicios/desarrollo.png',
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Desarrollo Web',
  })
})
$("#btn-social").click(function(){
  Swal.fire({
    title: 'SOCIAL MEDIA',    
    html:
    '<div>El concepto de identidad corporativa se refiere a las características específicas que diferencian a una empresa de otra; esto puede verse en logotipos, tarjetas de presentación, membretes, folletos, etc.</br></br>' +
    '1. Planificar y preparar la estrategia de social media.</br></br>' +
    '2. Definir los objetivos que la empresa pretende lograr.</br></br>' +
    '3. Analizar la evolución de los principales competidores.</br></br>' +
    '4. Conocer la situación dentro del mercado y las necesidades de los clientes.</div>',
    imageUrl: '../img/servicios/social.png',
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Social Media',
  })
})
$("#btn-mision").click(function(){
  Swal.fire({
    title: 'MISIÓN',    
    html:
    '<div>Proveer soluciones web de calidad para las empresas, que les ayude a aumentar las ventas y que su marca tenga presencia OnLine.</div>',
    imageUrl: '../img/mision.png',
    imageWidth: 80,
    imageHeight: 80,
    imageAlt: 'MISIÓN',
  })
})
$("#btn-vision").click(function(){
  Swal.fire({
    title: 'VISIÓN',    
    html:
    '<div>Consolidarnos como una empresa lider en Tecnología Web, manteniendo un nivel de calidad con procesos de mejora continua, basados en la innovación, calidad y servicio al cliente.</div>',
    imageUrl: '../img/vision.png',
    imageWidth: 80,
    imageHeight: 80,
    imageAlt: 'VISIÓN',
  })
})
// SCROLL SUAVE
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 800);
    return false;
  });
});
// LETRAS TÍTULO
const spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 900 * (idx+1))
});
//EMAIL JS ENVIAR CORREOS
(function(){
  emailjs.init("user_1ZSJmz6z3I6TyRjEEHusE"); 
})();
var myform = $("form#myform");
 myform.submit(function(event){
   event.preventDefault();
   var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
   }, {});
   // Change to your service ID, or keep using the default service
   var service_id = "default_service";
   var template_id = "template_HgDKQ1Tt";
   myform.find("button").text("Enviando...");
   emailjs.send(service_id, template_id, params)
     .then(function(){ 
       alert("Mensaje enviado, pronto estaremos en contacto con usted");
       myform.find("button").text("OK");
     }, function(err) {
       alert("Error! Intentelo más tarde. Error: " + JSON.stringify(err));
       myform.find("button").text("OK");
     });
   return false;});