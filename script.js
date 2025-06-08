const shareButton = document.querySelector("#share-btn");
const shareContent = document.querySelector("#share-content");
const shareLinks = shareContent.querySelectorAll("a");

const handleShareBtn = () => {
  const isExpanded = shareButton.getAttribute("aria-expanded") === "true";
  const newState = !isExpanded;

  // Update aria attributes
  shareButton.setAttribute("aria-expanded", String(newState));

  if (newState) {
    shareContent.removeAttribute("aria-hidden");
  } else {
    shareContent.setAttribute("aria-hidden", "true");
  }

  // Update focusability
  shareLinks.forEach((link) => {
    link.setAttribute("tabindex", newState ? "0" : "-1");
  });

  // Toggle classes
  document.querySelector(".card-bottom").classList.toggle("card-bottom--click");
  document.querySelector(".card-person").classList.toggle("card-person--click");
  shareButton.classList.toggle("icon--click");
  shareContent.classList.toggle("share-item--click");
};

shareButton.addEventListener("click", handleShareBtn);
