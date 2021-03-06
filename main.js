console.log("Everything is in control.")

post = {
  officeImg: "images/" + "office.jpg",
  paperstacksImg: "images/" + "paperstacks.jpg",
  paperstacks2Img: "images/" + "paperstacks2.jpg",
  paperstacks3Img: "images/" + "paperstacks.jpg",
  paperstacks4Img: "images/" + "paperstacks2.jpg",
  salesTeamImg: "images/" + "salesTeam.jpg",
  warehouseImg: "images/" + "warehouse.jpg",
  warehouseText: "Here at Thunder Whiffin' we pride ourselves in being the #1 paper distributer in all of Iowa. We keep multiple warehouses in the greater Iowa area to ensure you get your paper in a timely manner. We do so with that tender Iowa care. We will soon be distrupting to adjacent states.",
  paperstacksText: "Our paper is all made from recyclable material.",
  paperstacks2Text: "All Thunder Whiffin' Paper is fireproof, water resistent and smells like cherries.",
  paperstacks3Text: "Other scents avaiable for those allergic to cherry.",
  officeText: "Take a look at out headquarters! Our sales team is here to assist you at every step of our sales process, from first contact to purchase. You have no worries now as you are in the caring hands of Thunder Whiffin' Now what are you waiting for? Sign up, sign in, and order some paper!",
  newWarehouseText: "Offices at: Dingo, IA. Fastport, IA. Freelance, IA. Fairview, IA. Cornwall, IA. Coming soon to other locations."
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



function changeText() {
  var m = document.getElementById("warehouseText");
  m.innerHTML = post.newWarehouseText;
}

function demo() {
  alert("This is where your cart would pop up for mass purchase.")
}


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

// function switchTheme() {
//   html.background-color = "red"
// }
