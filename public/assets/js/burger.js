// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var state = { isDevoured: true };
    console.log(state);
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: JSON.stringify(state),
      contentType: "application/json; charset=UTF-8",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      isDevoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");

      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
