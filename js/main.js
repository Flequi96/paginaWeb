$(document).ready(function(){


	//Slider
	if(window.location.href.indexOf('index') > -1){
		$('.bxslider').bxSlider({
    		mode: 'fade',
    		captions: true,
    		slideWidth: 1200,
    		responsive: true,
    		auto: true
  		});
	}	

  	//Post
  	if(window.location.href.indexOf('index') > -1){
	  	var posts =[
	  		{
	  			title: 'Prueba de titulo 1',
	  			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur justo sed est vehicula sodales. Maecenas id aliquam turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla semper tempor purus, lacinia porta nisi placerat non. Maecenas malesuada magna ut bibendum vestibulum. Mauris lacinia nunc pretium hendrerit malesuada. Pellentesque eros sapien, venenatis et leo at, rutrum rutrum turpis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 2',
	  			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur justo sed est vehicula sodales. Maecenas id aliquam turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla semper tempor purus, lacinia porta nisi placerat non. Maecenas malesuada magna ut bibendum vestibulum. Mauris lacinia nunc pretium hendrerit malesuada. Pellentesque eros sapien, venenatis et leo at, rutrum rutrum turpis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 3',
	  			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur justo sed est vehicula sodales. Maecenas id aliquam turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla semper tempor purus, lacinia porta nisi placerat non. Maecenas malesuada magna ut bibendum vestibulum. Mauris lacinia nunc pretium hendrerit malesuada. Pellentesque eros sapien, venenatis et leo at, rutrum rutrum turpis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 4',
	  			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur justo sed est vehicula sodales. Maecenas id aliquam turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla semper tempor purus, lacinia porta nisi placerat non. Maecenas malesuada magna ut bibendum vestibulum. Mauris lacinia nunc pretium hendrerit malesuada. Pellentesque eros sapien, venenatis et leo at, rutrum rutrum turpis.'
	  		},
	  		{
	  			title: 'Prueba de titulo 5',
	  			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur justo sed est vehicula sodales. Maecenas id aliquam turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla semper tempor purus, lacinia porta nisi placerat non. Maecenas malesuada magna ut bibendum vestibulum. Mauris lacinia nunc pretium hendrerit malesuada. Pellentesque eros sapien, venenatis et leo at, rutrum rutrum turpis.'
	  		},
	  	];

	  	posts.forEach((item, index) =>{
	  		var post = `
	  			<article class="post">
							<h2>${item.title}</h2>
							<span class="date">${item.date}</span>
							<p>
								${item.content}
							</p>
							<a href="#" class="button-more">Leer más</a>
						</article>
	  		`;

	  		$("#posts").append(post);
	  	});
  	}

  	//Selector de temas

  	var theme = $("#theme");
  	$("#to-green").click(function(){
  		toGreen();
  		localStorage.setItem('color', 'green');
  	});

  	$("#to-blue").click(function(){
  		toBlue();
  		localStorage.setItem('color', 'blue');
  	});

  	$("#to-red").click(function(){
  		toRed();
  		localStorage.setItem('color', 'red');
  	});

  	//LocalStorage theme refresh
  	var color_pick = localStorage.getItem("color");
  	if(color_pick == "blue"){
  		toBlue();
  	}else if(color_pick == "red"){
  		toRed();
  	}

  	//Funciones temas CSS

  	function toGreen(){
  		theme.attr("href", "css/green.css");
  	}

  	function toBlue(){
  		theme.attr("href", "css/blue.css");
  	}

  	function toRed(){
  		theme.attr("href", "css/red.css");
  	}

  	//Scroll arriba de la web
  	$(".subir").click(function(e){
  		e.preventDefault();

  		$('html, body').animate({
  			scrollTop: 0
  		}, 500);

  		return false;
  	});

  	//Login falso
  	$("#login form").submit(function(){
  		var form_name = $("#form_name").val();

  		localStorage.setItem("form_name", form_name);
  	});

  	var form_name = localStorage.getItem("form_name");

  	if(form_name != null && form_name != "undefined"){
  		var about_parrafo = $("#about p");

  		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
  		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

  		$("#login").hide();

  		$('#logout').click(function(){
  			localStorage.clear();
  			location.reload();
  		});
  	}

  	//Acordeón
  	if(window.location.href.indexOf('about') > -1){
  		$("#acordeon").accordion();
  	}

  	//Reloj
  	if(window.location.href.indexOf('reloj') > -1){

  		setInterval(function(){
  			var reloj = moment().format("hh:mm:ss");

  			$('#reloj').html(reloj);
  		}, 1000);
  	}

  	//Validación

  	if(window.location.href.indexOf('contact') > -1){

  		$("form input[name='date']").datepicker({
  			dateFormat: 'dd-mm-yy'
  		});

  		$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrolltoTopOnError: true
  		});
  	}


});