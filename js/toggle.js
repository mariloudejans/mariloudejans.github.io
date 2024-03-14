const mediaQuery = '(min-width: 800px)'
const mediaQueryMatch = window.matchMedia(mediaQuery)

// desktop
if (mediaQueryMatch.matches) {
  $('#button2').addClass('clicked')
  $('.about').show()
  $('.button').click(function () {
    // Remove 'clicked' class from all buttons
    $('.button').removeClass('clicked')

    // Add 'clicked' class to the clicked button
    $(this).addClass('clicked')

    // Your existing logic for toggling div visibility can go here
    var divID = $(this).attr('id').replace('button', 'toggle')
    $('.info').hide()
    $('#' + divID).show()
  })
}
// mobiel
else {
  // Click event for buttons
  $('.button').click(function () {
    // Remove 'clicked' class from all buttons
    $('.button').removeClass('clicked')

    // Add 'clicked' class to the clicked button
    $(this).addClass('clicked')

    // Your existing logic for toggling div visibility can go here
    var divID = $(this).attr('id').replace('button', 'toggle')
    $('.hidden').hide()
    $('#' + divID).show()
  })
}
