
$(document).ready(function () {
    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $imgColor = $('img').data('color');
    console.log($imgColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $listObjects = $('li');
    $listObjects[2].className = 'highlight';

    const $pObjects = $('p');
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $newa = $('<a>');
    $newa.text('Buy Now!');
    $newa.attr('id', 'cta');
    $($pObjects[$pObjects.length - 1]).parent().append($newa);

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $pObjects[$pObjects.length - 1].remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('#cta').on('click', function (e) {
        e.preventDefault();
        // get the parent and delete the link object
        $aObject = $('#cta');
        $aObjectParent = $aObject.parent();
        $aObject.remove();

        // create a new p object and append to saved parent
        const $newText = $('<p>');
        $newText.text('Added to cart');
        $aObjectParent.append($newText);
    });

});