$(function(){
    $(".form-group").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("new hamburger added");
            //reload the page so the new burger is diplayed on the page
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("You ate this hamburger");
            //reload the page so the new burger is diplayed on the page
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        //delete the burger
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function(){
            console.log("you deleted the hamburger")
            location.reload();
        });
    });

});