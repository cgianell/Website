/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
	
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


$(document).ready(function(){
        $(".slide-toggle").click(function(){
            $(".box").animate({
                width: "toggle"
            });
        });
    });

function confirmationBox()
{
	var subject;
	var body;
	var email;
	
	if (confirm("Are you sure you want to send this message?"))
	{
		subject = document.getElementById("subject").value;
		body = document.getElementById("message").value;
		email = document.getElementById("email").value;
		
		if(!email.includes("@"))
			throw "1";
		
		try
		{
			window.location.href = "mailto:cgianell@bu.edu?subject=" + subject + "&body=" + body;
			alert("Message Sent!");
		}
		catch (e)
		{
			alert("Sorry, an error ocurred while trying to send your message.");
		}
		
	}
	else
	{
		alert("Message Cancelled!");
	}
}

(function($)
{
	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});
	// Nav.

	// Bar.
		$(
			'<div id="titleBar">' +
				'<a href="#navPanel" class="toggle"></a>' +
				'<span class="title">' + $('#logo').html() + '</span>' +
			'</div>'
		)
			.appendTo($body);
		
		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
})(jQuery);