"use strict";

window.contactList = {
	init: function () {

	var list = []	
	console.log("rer")
	


	function saveContact (e) {

		event.preventDefault();

		var contact = {

			firstName: $("#firstName").val(),
			lastName: $("#lastName").val(),
			phone: $("#phone").val(),
			email: $("#email").val(),
			address: $("#address").val(),
			photo: "no photo!"

		}

		var contentString = '<div id="contact-container"><div id="contact-grid-div"><div class="row"><div class="col-xs-6">' + contact.firstName + '</div><div class="col-xs-6">' + contact.lastName + '</div></div><div class="row"><div class="col-xs-12">' + contact.phone + '</div></div><div class="row"><div class="col-xs-12">' + contact.email + '</div></div><div class="row"><div class="col-xs-12">' + contact.address + '</div></div></div><div id="pic-div"><img src="http://static.comicvine.com/uploads/original/11111/111112371/3562186-perry.png" width="100%"></div></div>';

	    $("#list-container").append(contentString);

	    console.log(contentString)
	}
		
	$("#saveContact").click(saveContact);
		console.log("here:", $("#saveContact"))
	}
}


window.contactList.init();
// window.contactList.init();

