const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    accordionHeader.classList.toggle("active");
    const accordionContent = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  });
});
