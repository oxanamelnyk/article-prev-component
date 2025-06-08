const shareButton = document.querySelector("#share-btn");
const shareContent = document.querySelector("#share-content");
const shareLinks = shareContent.querySelectorAll("a");

const handleShareBtn = () => {
  const expanded = shareButton.getAttribute("aria-expanded") === "true";
  const isHidden = expanded;

  // Update aria attributes
  shareButton.setAttribute("aria-expanded", String(!expanded));
  shareContent.setAttribute("aria-hidden", String(isHidden));

  // Update focusability
  shareLinks.forEach((link) => {
    link.setAttribute("tabindex", isHidden ? "-1" : "0");
  });

  // Toggle classes
  document.querySelector(".card-bottom").classList.toggle("card-bottom--click");
  document.querySelector(".card-person").classList.toggle("card-person--click");
  shareButton.classList.toggle("icon--click");
  shareContent.classList.toggle("share-item--click");
};

shareButton.addEventListener("click", handleShareBtn);
