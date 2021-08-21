const calculateBtn = document.querySelector('ion-button')
const resetBtn = document.getElementById('reset-btn')
const heightInput = document.getElementById('height-input')
const weightInput = document.getElementById('weight-input')

const resultBMI = document.getElementById('result-bmi')
const resultKriteriaBMI = document.getElementById('kriteria-bmi')

const calculateBMI = () => {
	const enteredHeight = +heightInput.value / 100 // Tinggi dalam meter
	const enteredWeight = +weightInput.value // berat dalam Kg

	const bmi = enteredWeight / (enteredHeight * enteredHeight)
	const bmiResult = bmi.toFixed(1)

	console.log(bmiResult)

	// Print result BMI
	resultBMI.innerHTML = bmiResult

	// Print kriteria BMI
	if (bmiResult < 18.5) {
		resultKriteriaBMI.innerHTML = "Kurus";
	} else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
		resultKriteriaBMI.innerHTML = "Normal";
	} else if (bmiResult >= 25 && bmiResult <= 29.9) {
		resultKriteriaBMI.innerHTML = "Gemuk";
	} else if (bmiResult >= 30) {
		resultKriteriaBMI.innerHTML = "Obesitas";
	} else {
		resultKriteriaBMI.innerHTML = "Undefined";
	}
}

calculateBtn.addEventListener('click', calculateBMI)

// Reset button function
resetBtn.addEventListener('click', () => {
	heightInput.value = ''
	weightInput.value = ''
	resultBMI.innerHTML = ''
	resultKriteriaBMI.innerHTML = 'Please fill in the input above'
})
