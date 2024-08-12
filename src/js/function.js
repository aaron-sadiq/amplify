jQuery(function ($) {
	"use strict";

	/* Back to top
    ============================================== */
	$(window).on('scroll', function () {
		if ($(document).scrollTop() > 0) {
			$('#main_header').addClass("nav-fixed");
		} else {
			$('#main_header').removeAttr('class');
		}
	});
	/* Back to top
    ============================================== */
    var amountScrolled = 700;
    var backBtn = $("a.back-to");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > amountScrolled) {
            backBtn.fadeIn("slow");
        } else {
            backBtn.fadeOut("slow");
        }
    });
    backBtn.on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});
function playVideo() {
	const video = document.getElementById("video");
	const thumbnail = document.querySelector(".thumbnail");
	const playBtn = document.querySelector(".play-btn");

	thumbnail.style.display = 'none'; // Hide thumbnail
	playBtn.style.display = 'none'; // Hide play button
	video.style.display = 'block'; // Show video
	video.controls = true; // Hide all controls except play button
	video.play(); // Start video playback

	video.addEventListener('click', function() {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
}
document.getElementById('fileInput').addEventListener('change', function() {
	var fileName = document.getElementById('fileName');
	fileName.textContent = this.files[0] ? this.files[0].name : 'No file chosen';
});
