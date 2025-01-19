const monthlyBtn = document.getElementById("monthly-btn");
const annuallyBtn = document.getElementById("annually-btn");
const pricingGroup = document.querySelector(".pricing-group__btn");
const beginnerPrice = document.getElementById("beginner-price");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const periodicElements = document.getElementsByClassName("periodic");

const prices = {
    monthly: {
        beginner: "$25",
        starter: "$89",
        pro: "$199",
        periodic: "month",
    },
    annually: {
        beginner: "$240",
        starter: "$960",
        pro: "$1800",
        periodic: "year",
    },
};

function updatePlansToggle(activeBtn, inactiveBtn, planType) {
    beginnerPrice.textContent = prices[planType].beginner;
    starterPrice.textContent = prices[planType].starter;
    proPrice.textContent = prices[planType].pro;
    activeBtn.classList.add("text-white");
    activeBtn.classList.remove("text-black");
    inactiveBtn.classList.add("text-black");
    inactiveBtn.classList.remove("text-white");

    Array.from(periodicElements).forEach((element) => {
        element.textContent = prices[planType].periodic;
    });
}

monthlyBtn.addEventListener("click", () => {
    pricingGroup.style.setProperty("--before-left", "0%");
    updatePlansToggle(monthlyBtn, annuallyBtn, "monthly");
});

annuallyBtn.addEventListener("click", () => {
    pricingGroup.style.setProperty("--before-left", "50%");
    updatePlansToggle(annuallyBtn, monthlyBtn, "annually");
});

const liTags = document.querySelectorAll(".accordion-item");

liTags.forEach((liTag) => {
    liTag.addEventListener("click", () => {
        liTags.forEach((liTag) => {
            liTag.classList.remove("active");
        });
        liTag.classList.add("active");
    });
});
