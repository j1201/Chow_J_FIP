(() => {
  const navIcon = document.querySelector(".nav-icon"),
        navIconImg = document.querySelector(".nav-icon-img"),
        navClose = document.querySelector(".close"),
        // Back to button
        topBtn = document.querySelector(".back-to-top"),
        pageElem = document.documentElement;

        // Pop-up button
  const popUpBtn = document.querySelectorAll(".info-btn button"),
        popUpBox = document.querySelector("#popup"),
        popUpTitle = [`BITTERNESS ESCAPE®`, `TriShield Scent Lock`, `Snuggle Bear`],
        popUpText = [`Not everyone enjoy the bitterness in beer. Through the use of advanced distillation methods, we create beer that gives you the hoppy aroma with un-bitter taste.`,`Beer foam captures the true aroma. The TriShield technology is used to lock the snuggly scent and full range of flavors inside the foam.`,`The most snuggly beer lover - snuggle bear is the mascot of Beck's. He is the best friend who is always be there for you with the Beck's beer!`],
        infoClose = document.querySelector(".info-close");

   let navList = document.getElementById("nav-list");

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
      })
    }

    // Open text box function
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
      infoClose.style.display = "block";

    }

    function closeInfo() {
      infoClose.style.display = "none";

      popUpBox.style.display = "none";
    }



    navIcon.addEventListener("click", openNav);
    navClose.addEventListener("click", closeNav);
    topBtn.addEventListener("click", backToTop);
    popUpBtn.forEach(button => button.addEventListener("click", textBox));
    infoClose.addEventListener("click", closeInfo);
})();
