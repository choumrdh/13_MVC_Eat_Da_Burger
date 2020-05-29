$( document ).ready(function() {
 $(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newdevour = $(this).data("newdevour");
      console.log(newdevour)
      var newDevourState = {
        devoured: newdevour ? 1 : 0
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newdevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bg").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger");
          location.reload();
        }
      );
    });


  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
  });
});
