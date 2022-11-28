
// ensure dom fully loaded
$(document).ready(function () {

  /**
   * Toggles "done" class on <li> element
   */
  const toggleDone = (eventTarget) => {
    $targetElement = $(eventTarget);
    $liElement = $targetElement.closest('li');
    $liElement.toggleClass('done');
  }
  /**
   * Delete element when delete link clicked
   * added fading
   */
  const deleteWithFadeOut = (eventTarget, fadeTime) => {
    $targetElement = $(eventTarget);

    if ($targetElement.hasClass('delete')) {
      $targetElement.parent().fadeOut(fadeTime, function () {
        $(this).remove();
      });
      return true;
    }
    return false;
  }

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const text = $('input').val();

    // nothing to add if all blank
    if(!text.trim()) return;

    // rest here...
    const $newLi = $('<li>');
    const $newSpan = $('<span>').text(text);
    const $newLink = $('<a>').addClass('delete').text('Delete');
    $newLi.append($newSpan).append($newLink);
    $('.today-list').append($newLi);

  };

  const listItemEventHandler = function (e) {
    e.preventDefault();
    // try delete first and if not successful try toggle
    !deleteWithFadeOut(e.target, 1000) && toggleDone(e.target);
  }

  // add listener for add
  $('.add-item').on('click', addListItem);

  // add listener for any click on a ul element and selector on li to filter only li triggered events
  $('ul').on('click', 'li', listItemEventHandler);

});
