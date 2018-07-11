post = {
  officeImg: "images/" + "office.jpg",
  paperstacksImg: "images/" + "paperstacks.jpg",
  paperstacks2Img: "images/" + "paperstacks2.jpg",
  paperstacks3Img: "images/" + "paperstacks.jpg",
  paperstacks4Img: "images/" + "paperstacks2.jpg",
  salesTeamImg: "images/" + "salesTeam.jpg",
  warehouseImg: "images/" + "warehouse.jpg",
  warehouseText: "Here at Thunder Whiffin' we pride ourselves in being the #1 paper distributer in all of Idaho. We employee over 40,000 people.  We are the byproduct of great capitalism. Here at Thunder Whiffin' we pride ourselves in being the #1 paper distributer in all of Idaho. We employee over 40,000 people.  We are the byproduct of great capitalism.",
  paperstacksText: "Our paper is all made from recyclable material.",
  paperstacks2Text: "All Thunder Whiffin' Paper is fireproof, water resistent and smells like cherries.",
  paperstacks3Text: "Other scents avaiable for those allergic to cherry.",
  officeText: "Our sales team is here to assist you at every step of our sales process.",
}

var a = document.getElementById("officeImg");
a.src = post.officeImg;

var b = document.getElementById("paperstacksImg");
b.src = post.paperstacksImg;

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

var h = document.getElementById("paperstacks2Img");
h.src = post.paperstacks2Img;

var k = document.getElementById("paperstacks3Img");
k.src = post.paperstacks3Img;

var l = document.getElementById("paperstacks4Img");
l.src = post.paperstacks4Img;

var i = document.getElementById("paperstacks2Text");
i.innerHTML = post.paperstacks2Text;

var j = document.getElementById("paperstacks3Text");
j.innerHTML = post.paperstacks3Text;

function showText() {
  showText = document.getElementById("paperstacksImg");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("paperstacks2Img");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("paperstacks3Img");
  showText.classList.add("revealed");
  showText.classList.remove("extraHidden");
  showText = document.getElementById("paperstacks4Img");
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
  if (scrollPos > 950) {
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
