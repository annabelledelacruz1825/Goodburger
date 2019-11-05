$(function() {
  $(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    location.reload();

    // Send the PUT request.
    $.ajax("/api/goodburger/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("no burger");
    });
  });
});
