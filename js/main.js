// remove list items for clean slate
$('li').remove();
 
//varibles 
 var $addList = $('#skills');
var $rmv = ('#rmv');
var $li = $('li');

// functions-- to add to list 
$('.addSkill').on('click', function() {
    $addList.addClass('devList');
    $('ul').append(`<li class='list'>
                <button id='rmv'>${'X'}</button>${$addList.val()}</li>`)
});
//function to remove from lists
$(document).on('click', '#devSkills', function(event){
    $(event.target).closest('li').remove();
  
 });

// myNewElement.insertAfter( "ul:last" ); // This will remove the p from #content!
 
// $( "ul" ).last().after( myNewElement.clone() ); // Clone the p so now we have two.