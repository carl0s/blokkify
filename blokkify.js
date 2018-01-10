// var fromRep = document.querySelectorAll('.from-rep');
// var index = 0, length = fromRep.length;
// for ( ; index < length; index++) {
//     fromRep[index].style.display = "none";
// }
//
// var fromRepLinks = document.querySelectorAll('.rep-small');
// var index = 0, length = fromRepLinks.length;
// for ( ; index < length; index++) {
//     fromRepLinks[index].style.display = "none";
// }

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
  all[i].style.fontFamily = "BLOKK";
}
