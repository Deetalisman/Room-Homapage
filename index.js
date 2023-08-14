const next = document.querySelector(".next");
const back = document.querySelector(".back");
const head = document.querySelector(".head1");
const headH1 = document.querySelector(".head2 h1");
const headPar = document.querySelector(".sub-head2-p");
next.addEventListener("click", () => {
  if (headH1.innerHTML.indexOf("globe") === -1) {
    head.classList.add("head11");
    headH1.innerHTML = "We are available all across the globe";
    headPar.innerHTML =
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love";
  } else {
    head.classList.add("head12");
    headH1.innerHTML = " Manufactured with the best materials";
    headPar.innerHTML =
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.";
  }
});

back.addEventListener("click", () => {
  if (headH1.innerHTML.indexOf("material") === -1) {
    head.classList.add("head1");
    head.classList.remove("head11");
    head.classList.remove("head12");
    headH1.innerHTML = "Discover innovative ways to decorate";
    headPar.innerHTML =
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
  } else {
    head.classList.add("head11");
    head.classList.remove("head12");
    headH1.innerHTML = "We are available all across the globe";
    headPar.innerHTML =
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love";
  }
});

const ham = document.querySelector("#ham");
const close = document.querySelector("#close");
const list = document.querySelector("ul");
ham.addEventListener("click", () => {
  list.classList.add("show");
});
close.addEventListener("click", () => {
  list.classList.remove("show");
});
