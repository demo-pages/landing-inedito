$(document).ready(function(){
	
	// Carrusel promociones
	$('.carousel').slick({
		prevArrow: '<img class="slick-arrow prev" src="assets/img/icon-prev.png" alt="&lt;">',
		nextArrow: '<img class="slick-arrow next" src="assets/img/icon-next.png" alt="&gt;">',
		responsive: [
		    {
		      breakpoint: 720,
		      settings: {
		        slidesToShow: 2
		      }
		    }
    	]
	});

	// Desplazamiento suave para anclajes con nombre
	$('a[href^="#"]').click(function() {
	    var destino = $(this.hash);
	    if (destino.length == 0) {
	      destino = $('a[name="' + this.hash.substr(1) + '"]');
	    }
	    if (destino.length == 0) {
	      destino = $('html');
	    }
	    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
	    return false;
	 });
});