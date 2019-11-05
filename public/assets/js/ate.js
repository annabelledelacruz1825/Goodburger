$(function() {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
    location.reload();

    // Send the PUT request.
    $.ajax("/api/goodburger/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
    });
  });
});
