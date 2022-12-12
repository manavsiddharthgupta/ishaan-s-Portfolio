const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ---------------------------------------------------------------------------------------------
const musicVideo = [
  {
    img: "./src/images/sample_img2.png",
    title: "Prime Hydration Adv.",
    desc: "Global Hackathon",
    categories: "Music Video",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Prime Hydration Adv.",
    desc: "Global Hackathon",
    categories: "Music Video",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Prime Hydration Adv.",
    desc: "Global Hackathon",
    categories: "Music Video",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Prime Hydration Adv.",
    desc: "Global Hackathon",
    categories: "Music Video",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Prime Hydration Adv.",
    desc: "Global Hackathon",
    categories: "Music Video",
  },
];
const commercial = [
  {
    img: "./src/images/sample_img2.png",
    title: "Ninja Turtle",
    desc: "Global HackDay Hackey",
    categories: "3D-Commercials",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Ninja Turtle",
    desc: "Global HackDay Hackey",
    categories: "3D-Commercials",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Ninja Turtle",
    desc: "Global HackDay Hackey",
    categories: "3D-Commercials",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Ninja Turtle",
    desc: "Global HackDay Hackey",
    categories: "3D-Commercials",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Ninja Turtle",
    desc: "Global HackDay Hackey",
    categories: "3D-Commercials",
  },
];

const avr = [
  {
    img: "./src/images/sample_img2.png",
    title: "Attack on Titans",
    desc: "Global Hackathon",
    categories: "AVR",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Attack on Titans",
    desc: "Global Hackathon",
    categories: "AVR",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Attack on Titans",
    desc: "Global Hackathon",
    categories: "AVR",
  },
];

const videoedit = [
  {
    img: "./src/images/sample_img2.png",
    title: "Sidemen Sun",
    desc: "Global Hackathon",
    categories: "Video Editing",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Sidemen Sun",
    desc: "Global Hackathon",
    categories: "Video Editing",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Sidemen Sun",
    desc: "Global Hackathon",
    categories: "Video Editing",
  },
  {
    img: "./src/images/sample_img2.png",
    title: "Sidemen Sun",
    desc: "Global Hackathon",
    categories: "Video Editing",
  },
];
const cards = document.querySelector("div.cards");
console.log(cards);

const allButton = document.querySelectorAll("button.btns");
function removeActiveClass() {
  allButton.forEach((item, index) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}
// console.log(allButton);
allButton.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeActiveClass();
    item.classList.add("active");
    if (item.innerHTML === "Music Video") {
      let insideHtml = musicVideo.map((each) => {
        return `<a class="card swiper-slide" href="">
        <img src="${each.img}" alt="img" />
        <div class="info-styles">
            <h2>${each.title}</h2>
            <h3>${each.desc}</h3>
            <p>${each.categories}</p>
        </div>
    </a>`;
      });
      // console.log(insideHtml);
      let renewInsideElement = "";
      insideHtml.forEach((each, index) => {
        renewInsideElement += each;
      });
      console.log(renewInsideElement);
      cards.innerHTML = renewInsideElement;
    }
    if (item.innerHTML === "AVR") {
      let insideHtml = avr.map((each) => {
        return `<a class="card swiper-slide" href="">
        <img src="${each.img}" alt="img" />
        <div class="info-styles">
            <h2>${each.title}</h2>
            <h3>${each.desc}</h3>
            <p>${each.categories}</p>
        </div>
    </a>`;
      });
      // console.log(insideHtml);
      let renewInsideElement = "";
      insideHtml.forEach((each, index) => {
        renewInsideElement += each;
      });
      console.log(renewInsideElement);
      cards.innerHTML = renewInsideElement;
    }
    if (item.innerHTML === "Video Editing") {
      let insideHtml = videoedit.map((each) => {
        return `<a class="card swiper-slide" href="">
        <img src="${each.img}" alt="img" />
        <div class="info-styles">
            <h2>${each.title}</h2>
            <h3>${each.desc}</h3>
            <p>${each.categories}</p>
        </div>
    </a>`;
      });
      // console.log(insideHtml);
      let renewInsideElement = "";
      insideHtml.forEach((each, index) => {
        renewInsideElement += each;
      });
      console.log(renewInsideElement);
      cards.innerHTML = renewInsideElement;
    }
    if (item.innerHTML === "3D-Commercial") {
      let insideHtml = commercial.map((each) => {
        return `<a class="card swiper-slide" href="">
        <img src="${each.img}" alt="img" />
        <div class="info-styles">
            <h2>${each.title}</h2>
            <h3>${each.desc}</h3>
            <p>${each.categories}</p>
        </div>
    </a>`;
      });
      // console.log(insideHtml);
      let renewInsideElement = "";
      insideHtml.forEach((each, index) => {
        renewInsideElement += each;
      });
      console.log(renewInsideElement);
      cards.innerHTML = renewInsideElement;
    }
  });
});
