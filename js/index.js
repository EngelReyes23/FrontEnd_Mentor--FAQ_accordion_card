// Wait for the Dom this loaded
document.addEventListener("DOMContentLoaded", function () {
	// Walk the list of questions
	document.querySelectorAll(".question").forEach((question) => {
		// Add the event Click on each question title
		question.firstElementChild.addEventListener("click", function () {
			// Bold Title
			this.classList.toggle("question__title--active");

			// Rotate arrow icon
			this.firstElementChild.classList.toggle("question__icon--rotate");

			// Shows the content of the question
			question.children[1].classList.toggle("question__answer--hidden");

			// Hidden other questions
			document.querySelectorAll(".question__answer").forEach((answer) => {
        if (answer !== question.children[1]) {
          answer.parentNode.firstElementChild.classList.remove("question__title--active");
					this.classList.toggle("question__title--active");
					answer.classList.add("question__answer--hidden");
					this.firstElementChild.classList.toggle("question__icon--rotate");
				}
			});
		});
	});
});