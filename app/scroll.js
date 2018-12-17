$(document).ready(function(){
	// when the user scrolls
	var initialScrollPos = 0;

	// height() gives up height in pixels
	var heightOfViewport = $('body').height()/5;

	// array of colors!
	var colors = ["#f4f4f4", "#eee9e9", "#f4f4f4", "#eee9e9", "#f4f4f4"];
	var bannerText = ["Never", "Tree", "Doom", "Eye", "Rose"];
	var sectionIndex = 0;


	$(window).on('scroll', function() {
		var currentScrollPos = $(this).scrollTop();
		// console.log(currentScrollPos);

		// initialScrollPos - how far up/down had you scrolled?
		// currentScrollPos - how far up/down are you currently scrolled?

		// numbers are going up - i'm scrolling down
		if(currentScrollPos > initialScrollPos) {
			
			// if i enter this if statment, user is entering a new section
			if($(window).scrollTop() > heightOfViewport*(sectionIndex+1)) {
				sectionIndex += 1;
				$(".banner").html(bannerText[sectionIndex]);
				$("body").css("background", colors[sectionIndex]);
					if (sectionIndex==1){
					$(".banner").css({"background-color":"#eee9e9"});
					}
					else if (sectionIndex==2){
					$(".banner").css({"background-color":"#f4f4f4"});

					}

					else if (sectionIndex==3){
					$(".banner").css({"background-color":"#eee9e9"});
					}

					else if (sectionIndex==4){
					$(".banner").css({"background-color":"#f4f4f4"});
					}

					else if (sectionIndex==5){
					$(".banner").css({"background-color":"#eee9e9"});
					}
				
			} 
		// else statment tells us user is scrolling up
		} else {
			// if i enter this is statment the user is going back a section
			if($(window).scrollTop() <= heightOfViewport*(sectionIndex)) {
				sectionIndex -= 1;
				$(".banner").html(bannerText[sectionIndex]);
				$("body").css("background", colors[sectionIndex]);

				if (sectionIndex==0){
					$(".banner").css({"background-color":"#f4f4f4"});
					}

				if (sectionIndex==1){
					$(".banner").css({"background-color":"#eee9e9"});
					}
					else if (sectionIndex==2){
					$(".banner").css({"background-color":"#f4f4f4"});

					}

					else if (sectionIndex==3){
					$(".banner").css({"background-color":"#eee9e9"});
					}

					else if (sectionIndex==4){
					$(".banner").css({"background-color":"#f4f4f4"});
					}

					else if (sectionIndex==5){
					$(".banner").css({"background-color":"#eee9e9"});
					}
			}
		}
		initialScrollPos = currentScrollPos;
	})
})