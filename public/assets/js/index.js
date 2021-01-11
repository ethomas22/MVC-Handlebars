$( document ).ready(function() {
    $( ".devour-burger" ).click(function(event) {
        console.log($(event.target).data("id"));
        $.ajax({
            url: "/api/burger/" + $(event.target).data("id"),
            method: "put"
        })
            .then(function() {
                location.reload()
            });
    });
    $( ".create-form" ).submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/api/burger",
            method: "post",
            data: { burger_name: $("#bn").val()}
        })
        .then(function() {
            location.reload()
        });
      });
});