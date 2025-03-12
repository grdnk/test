const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
const activePanel = e.target.closest(".faq-item");
if (!activePanel) return;
toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
const activeButton = panelToActivate.querySelector("button");
const activePanel = panelToActivate.querySelector(".faq-answer");
const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

if (activePanelIsOpened === "true") {
    panelToActivate
    .querySelector("button")
    .setAttribute("aria-expanded", false);

    panelToActivate
    .querySelector(".faq-answer")
    .setAttribute("aria-hidden", true);
} else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
    .querySelector(".faq-answer")
    .setAttribute("aria-hidden", false);
}
}