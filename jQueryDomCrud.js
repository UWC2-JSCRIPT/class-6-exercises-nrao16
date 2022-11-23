// $(document).ready( function () {
//   const $listItems = $('li');
//   $listItems[2].className = 'highlight';

//   const $img =$('img');
//   const $imgColor = $img.data('color');
//   console.log($imgColor);

//   const $h1 = $('h1');
//   console.log($h1.text('Something else'));
//   console.log($h1.html());

//   //create
//   const $h2 = $("<h2>");
//   $h2.text(`Here's that H2`);
//   //get a reference
//   const $h2ref = $("h2");

//   const $main = $("main");
//   $main.prepend($h2);

//   //or
//   //$('main').prepend($h2);

//   //remove the element
//   $img.remove();


// });
// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

const $a = $('<a>');
$a.text('Buy Now!');
$a.attr('id', 'cta');
const $p = $('p');
$($p[$p.length-1]).parent().append($a);

// Access (read) the data-color attribute of the <img>,
// log to the console
const $imgColor = $('img').data('color');
console.log($imgColor);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
