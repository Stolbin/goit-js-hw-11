export function clickOnButton() {
  document.addEventListener("click", function (e) {
    const targetItem = e.target;
    if (targetItem.closest("[data-ripple]")) {
      const button = targetItem.closest("[data-ripple]");
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      button.dataset.ripple === "once" && button.querySelector(".ripple")
        ? button.querySelector(".ripple").remove()
        : null;

      button.appendChild(ripple);

      const timeOut = getAnimationDuration(ripple);

      setTimeout(() => {
        ripple ? ripple.remove() : null;
      }, timeOut);

      function getAnimationDuration() {
        const aDuration = window.getComputedStyle(ripple).animationDuration;
        return aDuration.includes("ms")
          ? aDuration.replace("ms", "")
          : aDuration.replace("s", "") * 1000;
      }
    }
  });
}
