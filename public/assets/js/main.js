"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
/*--------------*/
/*navicon*/

   $(document).ready(function(){
		 var blurVal='blur(5px)';
    $("#collapser").on('click', function(){
		
        $(this).toggleClass("open");
		$(".sections").css('filter',blurVal);
		if(blurVal!='blur(0px)'){blurVal='blur(0px)';}
		else{blurVal='blur(5px)';}
        });
        });
	
	
	
	
	/*---------------------------------------------*
     * Menu Background Change
     ---------------------------------------------*/
	
	var windowWidth = $(window).width();
    if (windowWidth > 757) {
        $(window).scroll( {
        previousTop: 0
               }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".navbar").fadeIn(2);
    }
		    else {
			    $(".navbar").fadeOut(500);
		     }
    this.previousTop = currentTop;
		    
		    
		    
		    
		    
		    
		    /*function () {
                if ($(this).scrollTop() > 400) {
                    $('.navbar').fadeIn(400);
                    $('.navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }*/
            });
        
    }
	$('#bs-example-navbar-collapse-1').localScroll();


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

		$.localScroll();



   
});


//Hamare JS from here

function hover(element) {
    element.setAttribute('src', 'assets/images/speakers/speakerred.jpg');
}
function unhover(element) {
    element.setAttribute('src', 'assets/images/speakers/speaker.jpg');
}
$(".at").click(function () {
            if ($("#collapser").css('display')!='none')
            $("#collapser").click();
        });






















//FIREBASE//


 var config = {
    apiKey: "AIzaSyDoxwgAzSpGoweNYZENf-hqJSu67BX6jTA",
    authDomain: "tedxcet-44d2f.firebaseapp.com",
    databaseURL: "https://tedxcet-44d2f.firebaseio.com",
    projectId: "tedxcet-44d2f",
    storageBucket: "tedxcet-44d2f.appspot.com",
    messagingSenderId: "205375673772"
  };
  firebase.initializeApp(config);



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');


  // Save message
  saveMessage(name, company, email, phone);



  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,

  });
}






