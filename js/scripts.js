function Activities(first, second, third, fourth) {
    this.inputOne = first;
    this.inputTwo = second;
    this.inputThree = third;
    this.inputFour = fourth;
}
Activities.prototype.allActivities = function() {
    return this.inputOne + " " + this.inputTwo + " " + this.inputThree + " " + this.inputFour;
}



//user-interface logic
$(document).ready(function() {
    $("form#blanks").submit(function(event) {
        event.preventDefault();
        var input2 = $("input#input1").val();
        var input2 = $("input#input2").val();
        var input3 = $("input#input3").val();
        var input4 = $("input#input4").val();
        var newActivities = new Activities(input1, input2, input3, input4);

        $("button#send").click(function() {
            $("form#blanks").hide();
            $("ul#showDetails").append("<li><span class='output'>" + newActivities.allActivities + "</span></li>");
            $("#showDetails").show();
            $(".input1").text(newActivities.inputOne);
            $(".input2").text(newActivities.inputTwo);
            $(".input3").text(newActivities.inputThree);
            $(".input4").text(newActivities.inputFour);
            $(".output").last().click(function(){

            });
            $("input#input1").val("");
            $("input#input2").val("");
            $("input#input3").val("");
            $("input#input4").val("");
        })

    })
});
