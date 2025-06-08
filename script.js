const shareButton = document.querySelector("#share-btn");
const shareContent = document.querySelector("#share-content");

const handleShareBtn = () => {
  const expanded = shareButton.getAttribute("aria-expanded") === "true";

  // Update aria attributes
  shareButton.setAttribute("aria-expanded", !expanded);
  shareContent.setAttribute("aria-hidden", expanded);

  //Toggle classes
  document.querySelector(".card-bottom").classList.toggle("card-bottom--click");
  document.querySelector(".card-person").classList.toggle("card-person--click");
  document.querySelector(".icon").classList.toggle("icon--click");
  document.querySelector(".share-item").classList.toggle("share-item--click");
};

shareButton.addEventListener("click", handleShareBtn);
