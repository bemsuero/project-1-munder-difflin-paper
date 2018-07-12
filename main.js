post = {
  officeImg: "images/" + "office.jpg",
  deathnoteImg: "images/" + "deathnote.jpg",
  deathnote2Img: "images/" + "deathnote.jpg",
  deathnote3Img: "images/" + "deathnote.jpg",
  deathnote4Img: "images/" + "deathnote.jpg",
  salesTeamImg: "images/" + "salesTeam.jpg",
  warehouseImg: "images/" + "warehouse.jpg",
  warehouseText: "Here at Thunder Whiffin' we pride ourselves in being the #1 paper distributer in all of Iowa. We employee over 40,000 people.  We are the byproduct of great capitalism. We sell paper for death metal albums to be printed on. Trees DIE FOR OUR PAPER. But we recycle so that's ok. From the great state that brought us Slipknot, we bring you THUNDER WHIFFIN' PAPER.",
  paperstacksText: "Our paper is all made from recyclable material.",
  paperstacks2Text: "All Thunder Whiffin' Paper is fireproof, water resistent and smells like cherries.",
  paperstacks3Text: "Other scents avaiable for those allergic to cherry.",
  officeText: "Our sales team is here to assist you at every step of our sales process. Order now. YELL YOUR ORDER FOR 15% OFF!",
}

var a = document.getElementById("officeImg");
a.src = post.officeImg;

var b = document.getElementById("deathnoteImg");
b.src = post.deathnoteImg;

var c = document.getElementById("salesTeamImg");
c.src = post.salesTeamImg;

var d = document.getElementById("officeText");
d.innerHTML = post.officeText;

var e = document.getElementById("paperstacksText");
e.innerHTML = post.paperstacksText;

var f = document.getElementById("warehouseText");
f.innerHTML = post.warehouseText;

var g = document.getElementById("warehouseImg");
g.src = post.warehouseImg;

var h = document.getElementById("deathnote2Img");
h.src = post.deathnote2Img;

var k = document.getElementById("deathnote3Img");
k.src = post.deathnote3Img;

var l = document.getElementById("deathnote4Img");
l.src = post.deathnote4Img;

var i = document.getElementById("paperstacks2Text");
i.innerHTML = post.paperstacks2Text;

var j = document.getElementById("paperstacks3Text");
j.innerHTML = post.paperstacks3Text;

function showText() {
  showText = document.getElementById("deathnoteImg");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("deathnote2Img");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("deathnote3Img");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("deathnote4Img");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("paperstacksText");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("paperstacks2Text");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("paperstacks3Text");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
};


var scrollPos = 0;
window.addEventListener("scroll", function() {
  scrollPos = window.scrollY;
  if (scrollPos > 150) {
    section1 = document.getElementById("sectionone");
    section1.classList.add("revealed");
    section1.classList.remove("hidden");
    // section2 = document.getElementById("sectiontwo");
    // section2.classList.add("hidden");
    // section2.classList.remove("revealed");
  }
  if (scrollPos > 900) {
    section2 = document.getElementById("sectiontwo");
    section2.classList.add("revealed");
    section2.classList.remove("hidden");
    // section1 = document.getElementById("sectionone");
    // section1.classList.add("hidden");
    // section1.classList.remove("revealed");
    // section3 = document.getElementById("sectionthree");
    // section3.classList.add("hidden");
    // section3.classList.remove("revealed");
  }
  if (scrollPos > 1550) {
    section3 = document.getElementById("sectionthree");
    section3.classList.add("revealed");
    section3.classList.remove("hidden");
    // section2 = document.getElementById("sectiontwo");
    // section2.classList.add("hidden");
    // section2.classList.remove("revealed");
    // section4 = document.getElementById("sectionfour");
    // section4.classList.add("hidden");
    // section4.classList.remove("revealed");
  }
});

function smoothRide() {
  window.scrollBy({
  top: 200, // could be negative value
  left: 0,
  behavior: 'smooth'
});
}

function smoothRide2() {
  window.scrollBy({
  top: 900, // could be negative value
  left: 0,
  behavior: 'smooth'
});
}

function smoothRide3() {
  window.scrollBy({
  top: 1600, // could be negative value
  left: 0,
  behavior: 'smooth'
});
}
