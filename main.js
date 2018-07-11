post = {
  clintonImg: "images/" + "clinton.jpg",
  nixonImg: "images/" + "nixon.jpg",
  reaganImg: "images/" + "reagan.jpg",
  clintonText: "This is text about history. Some of of is accurate, and some of it is made up. I'm really not sure which one is which. But I need enough words that it all looks legit. Clinton was definitely a president of some kind. The rest of the picture may not be that accurate though. Has he shot guns? Maybe. Is it Nixon? Maybe. Reagan on a dinosaur? Maybe again.",
  nixonText: "This is text about history. Some of of is accurate, and some of it is made up. ",
  reaganText: "This is text about history. Some of of is accurate, and some of it is made up. I'm really not sure which one is which. But I need enough words that it all looks legit. Clinton was definitely a president of some kind. The rest of the picture may not be that accurate though. Has he shot guns? Maybe. Is it Nixon? Maybe. Reagan on a dinosaur? Maybe again.",
  famousQuote: "Clinton was definitely a president of some kind. - Some Guy Somewhere."
}

var a = document.getElementById("clintonImg");
a.src = post.clintonImg;

var b = document.getElementById("nixonImg");
b.src = post.nixonImg;

var c = document.getElementById("reaganImg");
c.src = post.reaganImg;

var d = document.getElementById("clintonText");
d.innerHTML = post.clintonText;

var e = document.getElementById("nixonText");
e.innerHTML = post.nixonText;

var f = document.getElementById("reaganText");
f.innerHTML = post.reaganText;

var g = document.getElementById("famousQuote");
g.innerHTML = post.famousQuote;

var scrollPos = 0;
window.addEventListener("scroll", function(){
scrollPos = window.scrollY;
if (scrollPos > 80) {
  section1 = document.getElementById("sectionone");
  section1.classList.add("revealed");
  section1.classList.remove("hidden");
  // section2 = document.getElementById("sectiontwo");
  // section2.classList.add("hidden");
  // section2.classList.remove("revealed");
} if (scrollPos > 880) {
  section2 = document.getElementById("sectiontwo");
  section2.classList.add("revealed");
  section2.classList.remove("hidden");
  // section1 = document.getElementById("sectionone");
  // section1.classList.add("hidden");
  // section1.classList.remove("revealed");
  // section3 = document.getElementById("sectionthree");
  // section3.classList.add("hidden");
  // section3.classList.remove("revealed");
} if (scrollPos > 1680) {
  section3 = document.getElementById("sectionthree");
  section3.classList.add("revealed");
  section3.classList.remove("hidden");
  // section2 = document.getElementById("sectiontwo");
  // section2.classList.add("hidden");
  // section2.classList.remove("revealed");
  // section4 = document.getElementById("sectionfour");
  // section4.classList.add("hidden");
  // section4.classList.remove("revealed");
} if (scrollPos > 2480) {
  section4 = document.getElementById("sectionfour");
  section4.classList.add("revealed");
  section4.classList.remove("hidden");
  // section3 = document.getElementById("sectionthree");
  // section3.classList.add("hidden");
  // section3.classList.remove("revealed");
//blocked out code to get the stuff to disappear again but it is choppy and doesn't look good.
}
});
