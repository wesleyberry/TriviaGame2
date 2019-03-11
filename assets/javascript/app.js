$(document).ready(function() {

    $(".secondPage").hide();
    $(".thirdPage").hide();
    $(".fourthPage").hide();
    $(".fifthPage").hide();

    function hideFirst() {

        $(".firstButton").hide();
        $(".forHeader").hide();
    } 
    function showFirst() {
        $(".submitButton").show();
        $("div.firstPage").addClass(".secondPage");
        $("div.firstPage").removeClass(".firstPage");
        $(".secondPage").show();
    }

    $(".firstButton").on("click", function() {
        hideFirst();
        showFirst()
        // setInterval(everySecond, SIZE);
        // setTimeout(atEnd, SIZE * 60);
    });

});