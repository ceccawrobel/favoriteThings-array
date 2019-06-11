
$(document).ready(function() {
$("#thingsForm").submit(function(event) {
var t1 = $("input#thing1").val();
var t2 = $("input#thing2").val();
var t3 = $("input#thing3").val();

console.log("thing 1 is " + t1);
console.log("thing 2 is " + t2);
console.log("thing 3 is " + t3);

var thingArray = [t1, t2, t3]
console.log(thingArray);

// if (s1 === s2 && s2 === s3 && s3 === s1) {
//   $("#equilateral").show();
// } else if (s1 === s2 || s3 === s2 || s1 === s3) {
//   $("#isosceles").show();
// } else if (s1 !== s2 && s3 !== s2 && s1 !== s3) {
//   $("#scalene").show();
// } else if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
//   $("#not").toggle();
// }
event.preventDefault();
});
});
