// function sayHi() {
//   if (true) {
//     let phrase = "Hello";
//   }

//   alert(phrase); // works
// }

// sayHi();
// alert(phrase);
function generatePDF() {
  const element = document.getElementById("invoice");
  html2pdf().from(element).save();
}
