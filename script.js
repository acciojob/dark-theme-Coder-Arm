//your code here
const swap_theme = () => {
	const para = document.getElementById("ptag");
	para.innerHTML = "I am an AccioJob student, ready to become an awesome full stack developer.";
	const app_change = document.getElementById("app");
	app_change.classList.toggle("night");
	const btn_change = document.getElementById("swap");
	btn_change.classList.toggle("button_night");
	
}
