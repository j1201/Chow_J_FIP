(() => {
  const navIcon = document.querySelector(".nav-icon"),
        navIconImg = document.querySelector(".nav-icon-img"),
        navClose = document.querySelector(".close"),
        // Back to top button
        topBtn = document.querySelector(".back-to-top"),
        pageElem = document.documentElement;

        // Index page - pop-up window
  const popUpBtn = document.querySelectorAll(".info-btn button"),
        popUpBox = document.querySelector("#popup"),
        popUpTitle = [`BITTERNESS ESCAPE®`, `TriShield Scent Lock`, `Snuggle Bear`],
        popUpText = [`Not everyone enjoy the bitterness in beer. Through the use of advanced distillation methods, we create beer that gives you the hoppy aroma with un-bitter taste.`,`Beer foam captures the true aroma. The TriShield technology is used to lock the snuggly scent and full range of flavors inside the foam.`,`The most snuggly beer lover - snuggle bear is the mascot of Beck's. He is the best friend who is always be there for you with the Beck's beer!`],
        infoClose = document.querySelectorAll(".info-close");

        // Product page - pop-up product info
  const viewBtn = document.querySelectorAll(".view-btn"),
        viewBox = document.querySelector(".view-box"),
        beerHead = document.querySelectorAll(".info-head"),
        beerTextBox = document.querySelector(".infoSec-text"),
        beerText = [`Beck's signature classic beer is fermented with organic ingredients. It gives you a clean, crispy and snuggely refreshing taste that you could not find elsewhere. To best enjoy the taste of beer, we recommend you to drink it at around 33-45 °F, pour it in the beer glass, and ENJOY!`,`Water, Wheat, Malt, Yeast, Hops`, `89 Calories, 5g carbs, 0g sugar`],
        beerImg = document.getElementsByClassName("boxBeer-img"),
        imgSrc = [`images/beer_original.jpg`, `images/beer_gold.jpg`, `images/beer_light.jpg`, `images/beer_pack_crop.jpg`],
        flavours = [`Original \r\n`, `Gold`, `Light`, `Variety Pack`],
        price = [`$5`, `$5`, `$5`, `$28`],
        heading = document.querySelector(".beer-flavour"),
        viewClose = document.querySelectorAll(".popup-close");

  let click = document.getElementsByClassName("info-head");

   let navList = document.getElementById("nav-list");

   // open nav menu when clicking the hamburger icon
   function openNav() {
     if (navList.style.display === "block")
      {
        navIconImg.style.transform = "rotateZ(0deg)";
        navList.style.display = "none";
      }
      else {
        navList.style.display = "block";
        navList.classList.add("stack-top");
      }
    }

    function closeNav() {
      navList.style.display = "none";
    }

    // Back to top function
    function backToTop() {
      pageElem.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    // Open ingredient text box when clicking the button
    function textBox() {
      let index = this.dataset.index,
          h2 = document.createElement("h2"),
          p = document.createElement("p");

      while ( popUpBox.firstChild ) {
        console.log(popUpBox.firstChild);
        popUpBox.removeChild(popUpBox.firstChild);
      }

      popUpBox.appendChild(h2);
      h2.textContent = popUpTitle[index];

      popUpBox.appendChild(p);
      p.textContent = popUpText[index];

      popUpBox.style.display = "block";
      infoClose[0].style.display = "block";

    }

    function closeInfo() {
      infoClose[0].style.display = "none";

      popUpBox.style.display = "none";
    }

    // Open the beer info box when clicking the view details button
    function beerBox() {

      // get view button index
      let index = this.dataset.index,
          h3 = document.createElement("h3");

      // change beer image
      beerImg[0].src = imgSrc[index];

      while ( heading.firstChild ) {
        console.log(heading.firstChild);
        heading.removeChild(heading.firstChild);
      }

      // change beer flavour
      heading.appendChild(h3);
      h3.innerHTML += `${flavours[index]} <br /> ${price[index]}`;

      viewBox.style.display = "block";
    }

    // Change text content when clicking different heading
    function beerDetails() {

      let index = this.dataset.index,
          p = document.createElement("p");

      while ( beerTextBox.firstChild ) {
        console.log(beerTextBox.firstChild);
        beerTextBox.removeChild(beerTextBox.firstChild);
      }

      beerTextBox.appendChild(p);
      p.textContent = beerText[index];
    }

    function closeView() {
      viewBox.style.display = "none";
    }

    // nav menu
    navIcon.addEventListener("click", openNav);
    navClose.addEventListener("click", closeNav);

    // back to top button
    topBtn.addEventListener("click", backToTop);

    // index page - popup ingredients
    popUpBtn.forEach(button => button.addEventListener("click", textBox));
    infoClose.forEach(info => info.addEventListener("click", closeInfo));

    // product page - popup beer info
    viewBtn.forEach(button => button.addEventListener("click", beerBox));
    beerHead.forEach(heading => heading.addEventListener("click", beerDetails));
    viewClose.forEach(button => button.addEventListener("click", closeView));

})();
