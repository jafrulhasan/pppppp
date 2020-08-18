$(document).ready(function() {
  $("#basic-form").validate({
    rules: {
      fname : {
        required: true,
        minlength: 3
      },
      uname: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      },
      age: {
        required: {
          depends: function(elem) {
            return $("#age").val() > 50
          }
        },
        number: true,
        min: 0
      }
    },
    messages : {
      fname: {
        minlength: "Name should be at least 3 characters"
      },
      uname: {
        required: "Please enter your age",
        number: "Please enter your age as a numerical value",
        min: "You must be at least 18 years old"
      },
      email: {
        email: "The email should be in the format: abc@domain.tld"
      },
      age: {
        required: "People with age over 50 have to enter their weight",
        number: "Please enter your weight as a numerical value"
      }
    }
  });
});