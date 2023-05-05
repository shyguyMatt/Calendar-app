
// Hooks into DOM
var btn = $('.saveBtn')
var timeblocks = $('.time-block')
var date = $('#currentDay')

// Click event for save buttons
$(function () {
  btn.on('click', function(event) {
    temp = $(this).parent()
    if (temp.children('textarea').val() != "") {
      console.log('saved!')

      localStorage.setItem(temp.attr('id'), temp.children('textarea').val())
    } else console.log("not saved")
  })

  // loops through time block divs anc changes the classes based on time
  for(var i=0;i<timeblocks.length;i++) {
    if(timeblocks[i].attributes[2].nodeValue < dayjs().format("H")-6){
      timeblocks[i].classList.remove("past", "present", "future")
      timeblocks[i].classList.add('past')
    } else if(timeblocks[i].attributes[2].nodeValue == dayjs().format("H")-6) {
      timeblocks[i].classList.remove("past", "present", "future")
      timeblocks[i].classList.add('present')
    } else {
      timeblocks[i].classList.remove("past", "present", "future")
      timeblocks[i].classList.add('future')
    }
    var temp = $(timeblocks[i])
    temp.children('textarea').val(localStorage.getItem(temp.attr('id')))
  }

  // sets and displays the current date
  date.text(dayjs().format('dddd, MMMM D'))
});
