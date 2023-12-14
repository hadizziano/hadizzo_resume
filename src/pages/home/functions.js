export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
export function bgmove() {
  const div = document.getElementById("maincontainer");

  div.addEventListener("mousemove", (e) => {
    const xOffset = (e.offsetX / (div.offsetWidth * 0.5)) * 5; // Adjust the multiplier for sensitivity
    const yOffset = (e.offsetY / (div.offsetHeight * 0.5)) * 5; // Adjust the multiplier for sensitivity

    div.style.backgroundPosition = `${xOffset}% ${yOffset}%`;
  });

  div.addEventListener("mouseleave", (e) => {
    // Reset the background position or perform other actions as needed.
    div.style.backgroundPosition = "center"; // Reset to the center, for example.
  });
}
