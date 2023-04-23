const submitBtn = document.getElementById('submit-btn');
const textInput = document.getElementById('text-input');

submitBtn.addEventListener('click', function() {
	const text = textInput.value.trim();
	if (text === '') {
		alert('Будь ласка, введіть текст!');
	} else if (text.includes('hello')) {
		document.body.style.backgroundColor = '#F9E2AF';
	} else if (text.includes('world')) {
		document.body.style.backgroundColor = '#009FBD';
	} else {
		document.body.style.backgroundColor = '#210062';
	}
});
