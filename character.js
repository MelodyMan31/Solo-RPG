const rankDice = {
    E: "d4",
    D: "d6",
    C: "d8",
    B: "d10",
    A: "d12",
    S: "2d8"
};

const equipmentCards = document.querySelectorAll(".equipment-card");

equipmentCards.forEach(card => {
    const rankSelect = card.querySelector(".rank-select");
    const dieInput = card.querySelector(".rank-die");

    rankSelect.addEventListener("change", () => {
        dieInput.value = rankDice[rankSelect.value];
    });
});