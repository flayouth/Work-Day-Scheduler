$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $('.saveBtn').on('click', function(){
      
       
        var time = $(this).parent().attr('id');
        var input = $(this).siblings('.description').val()
     
        localStorage.setItem(input, time);
    });
   
    function timeStop()   {
      
        var realTime = moment().hours()
        $('.time-block').each( function(){
           var blockHour = parseInt($(this).attr('id').split('hour-')[1])

        if (blockHour < realTime) {
            $(this).children('textarea').addClass('past');
        }
        else if (blockHour === realTime) {
            $(this).children('textarea').removeClass('past');
            $(this).children('textarea').addClass('present');
        }
        else {
            $(this).children('textarea').removeClass('past');
            $(this).children('textarea').removeClass('present');
            $(this).children('textarea').addClass('future');
        }
        }) 
    }
    setInterval(timeStop,1000);
    timeStop();
   
});