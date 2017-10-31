//Business logic

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  //add array of address objects and set it blank
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

//creates a new Contact object by calling the Contact constructor and passing it the inputted data
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//show the contact information when it is clicked. By adding last(), we only bind the event to most recently-inserted contact.
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
