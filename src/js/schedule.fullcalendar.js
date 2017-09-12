
		$(document).ready(function() {

		  $('#calendar').fullCalendar({

		    buttonsIcons: {
		      prev: 'left-single-arrow',
		      next: 'right-single-arrow',
		    },
		    header: {
		      left: 'prev',
		      center: 'title',
		      right: 'next'
		    },
		    weekNumbers: false,
		    navLinks: false, // can click day/week names to navigate views
		    editable: false,
		    eventLimit: true, // allow "more" link when too many events
		    events: [{
		        title: '1 Evento',
						start: '2017-09-11',
		        header: 'Evento del día Lunes 11 de Septiembre',
						cardtitle: 'Los Tramontanos',
						cardtext: 'Tributo a la canción Roja con los artistas Brenda Luna y Cesar Flores',
						cardhour: 'Lunes a partir de las 22:00HRS',
						image: 'img/events/11-09-2017.jpg',
						urlimg: 'img/events/11-09-2017.jpg',

		      },
		      {
		        title: '1 Evento',
						header: 'Evento del día Martes 12 de Septiembre',
		        start: '2017-09-12',
						cardtitle: 'Duo Refalado',
						cardtext: 'Gabriela Sosa y Hernan Gil nos traen desde Argentina Bossa Nova',
						cardhour: 'Martes a partir de las 22:00HRS',
						image: 'img/events/12-09-2017.jpg',
						urlimg: 'img/events/12-09-2017.jpg',
		      },
					{
						title: '1 Evento',
						header: 'Evento del día Miércoles 13 de Septiembre',
						start: '2017-09-13',
						cardtitle: 'Con Todo Respeto',
						cardtext: 'Noche de Boleros se apodera el Café, disfruta de este show al máximo',
						cardhour: 'Miércoles a partir de las 22:00HRS',
						image: 'img/events/13-09-2017.jpg',
						urlimg: 'img/events/13-09-2017.jpg',
					},
		    ],
		    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
		    firstDay: 1,
		    eventClick: function(event, jsEvent, view) {
		      $('#modalTitle').html(event.header);
					$('#cardTitle').html(event.cardtitle);
					$('#cardText').html(event.cardtext);
					$('#cardHour').html(event.cardhour);
		      $('#eventUrl').attr('href', event.url);
					$('#urlImg').attr('href', event.urlimg);
		      $('#calendarModal').modal();
					$('#eventImg').attr('src', event.image);




		    }


		  });

		});


		$("#myModal").modal();
