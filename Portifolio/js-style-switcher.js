/*================= toggle style switcher ================*/
const styleswitchertoggler = document.querySelector(".style-switcher-toggler");
styleSwitchertoggler.addEventListener("click", () => {
	document.querySelector(".style-switcher.css").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
	if(document.querySelector(".style-switcher").classList.contains("open");)
	{
		document.querySelector(".style-switcher").classList.remove("open");
	}
})


