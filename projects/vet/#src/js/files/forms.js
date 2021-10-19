
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
	let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
	const message = form.getAttribute('data-message');
	const ajax = form.getAttribute('data-ajax');

	//SendForm
	if (ajax) {
		e.preventDefault();
		let formData = new FormData(form);
		form.classList.add('_sending');
		let response = await fetch(formAction, {
			method: formMethod,
			body: formData
		});
		form.classList.remove('_sending');
		popup_open(message + '-message');
		form.reset()
	}
	e.preventDefault();
}




// mask

const inputMaskItems = document.querySelectorAll("input[data-mask]");

inputMaskItems.forEach(inputMask => {
	let inputMaskValue = inputMask.dataset.mask;
	let im = new Inputmask(inputMaskValue);
	im.mask(inputMask);
});

let datepickerItems = document.querySelectorAll('input._date');
datepickerItems.forEach(datepickerItem => {
	const datepicker = new Datepicker(datepickerItem, {
		language: "uk",
	});
});



let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

// ranges

let ranges = document.querySelectorAll('.range');

if (ranges.length > 0) {
	for (let rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {

		const range = ranges[rangeIndex];
		const rangeMin = +range.getAttribute('data-min')
		const rangeMax = +range.getAttribute('data-max')
		const rangeFirst = range.querySelector('.range-first');
		const rangeSecond = range.querySelector('.range-second');
		const rangeItem = range.querySelector('.range__item');

		noUiSlider.create(rangeItem, {
			start: [0, 0],
			connect: true,
			range: {
				'min': rangeMin,
				'max': rangeMax
			}
		});
		let rangeInputs = [rangeFirst, rangeSecond];
		for (let inputIndex = 0; inputIndex < rangeInputs.length; inputIndex++) {
			const input = rangeInputs[inputIndex];
			input.min = String(rangeMin);
			input.max = String(rangeMax);

			input.addEventListener('input', function (event) {
				if (((+this.value) > rangeMin) && ((+this.value) < rangeMax)) {
					setPriceValues(this)
				}
			});
			input.addEventListener('keydown', function (event) {
				if (event.keyCode == 189) {
					event.preventDefault()
				}
			})
		}

		function setPriceValues(item) {
			rangeItem.noUiSlider.set([+rangeFirst.value, +rangeSecond.value])

		}

		setPriceValues()
		rangeItem.noUiSlider.on('update', function () {
			let rangeCurrentValues = rangeItem.noUiSlider.get();
			let currentFirstValue = Math.round(+rangeCurrentValues[0])
			let currentMaxValue = Math.round(+rangeCurrentValues[1])
			rangeFirst.value = String(currentFirstValue)
			rangeSecond.value = String(currentMaxValue)
		});
	}
}



