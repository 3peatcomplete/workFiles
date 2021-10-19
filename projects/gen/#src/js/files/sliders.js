


var swiper = new Swiper(".fs-bg__slider", {
	// loop: true ,

});
var swiper2 = new Swiper(".fs-content ", {
	effect: 'fade',
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	// loop: true,
	autoHeight: true,

	navigation: {
		nextEl: ".fs-next",
		prevEl: ".fs-prev",
	},
	// thumbs: {
	// 	swiper: swiper,
	// },
	breakpoints: {
		320: {
		},
		768: {
		},
		992: {
		},
		1268: {

		},
	},
});

swiper2.controller.control = swiper;
swiper.controller.control = swiper2;


var swiperPartners = new Swiper(".partners-slider", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.partners-pagination',
		type: 'bullets',
	  },
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween:20,
	// loop: true,
	navigation: {
		nextEl: ".partners-next",
		prevEl: ".partners-prev",
	},
	// thumbs: {
	// 	swiper: swiper,
	// },
	speed: 800, 
	breakpoints: {
		320: {
		},
		768: {

		},
		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		
		},
		1268: {
			autoHeight: true,
			slidesPerView: 5,
			slidesPerGroup: 5,
		
		},
	},
});

var aboutSlider = new Swiper(".about-slider__item", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween:20,
	// loop: true,
	navigation: {
		nextEl: ".about-next",
		prevEl: ".about-prev",
	},
	autoHeight: true,

	// thumbs: {
	// 	swiper: swiper,
	// },
	speed: 800, 
	breakpoints: {
		320: {
		},
		768: {

		},
		992: {
		
		
		},
		1268: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
});
