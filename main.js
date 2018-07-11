post = {
  officeImg: "images/" + "office.jpg",
  paperstacksImg: "images/" + "paperstacks.jpg",
  salesTeamImg: "images/" + "sales-team.jpg",
  warehouseImg: "images/" + "warehouse.jpg",
  warehouseText: "Here at Thunder Whiffin' we pride ourselves in being the #1 paper distributer in all of Idaho.",
  paperstacksText1: "Our paper is all made from recyclable material.",
  paperstacksText2: "All Thunder Whiffin' Paper is fireproof, water resistent and smells like cherries.",
  paperstacksText3: "Other scents avaiable for those allergic to cherry.",
  officeText: "Our sales team is here to assist you at every step of our sales process.",
}

var a = document.getElementById("officeImg");
a.src = post.officeImg;

var b = document.getElementById("paperstacksImg");
b.src = post.paperstacksImg;

var c = document.getElementById("salesteamImg");
c.src = post.salesTeamImg;

var d = document.getElementById("clintonText");
d.innerHTML = post.clintonText;

var e = document.getElementById("nixonText");
e.innerHTML = post.nixonText;

var f = document.getElementById("reaganText");
f.innerHTML = post.reaganText;

var g = document.getElementById("famousQuote");
g.innerHTML = post.famousQuote;

var h = document.getElementById("warehouseImg");
h.src = post.warehouseImg;

var scrollPos = 0;
window.addEventListener("scroll", function() {
  scrollPos = window.scrollY;
  if (scrollPos > 80) {
    section1 = document.getElementById("sectionone");
    section1.classList.add("revealed");
    section1.classList.remove("hidden");
    // section2 = document.getElementById("sectiontwo");
    // section2.classList.add("hidden");
    // section2.classList.remove("revealed");
  }
  if (scrollPos > 880) {
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
  if (scrollPos > 1680) {
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
