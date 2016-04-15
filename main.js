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
			photoUrl: $("#photo").val()

		}

		var contentString = '<div class="col-xs-6 info-style card"><div class="col-xs-8 info-style"><div class="col-xs-6 info-style">' + contact.firstName + '</div><div class="col-xs-6 info-style">'+contact.lastName + '</div><div class="col-xs-12 info-style">' + contact.phone + '</div><div class="col-xs-12 info-style">' + contact.email + '</div><div class="col-xs-12 info-style">' + contact.address + '</div></div><div class="col-xs-4" class="photo"><img src="' + contact.photoUrl + '" width="100%" align="middle"></div></div></div>';

	    $("#card-container").append(contentString);

	    console.log(contentString)
	}
		
	$("#saveContact").click(saveContact);
		console.log("here:", $("#saveContact"))
	}
}


window.contactList.init();
// window.contactList.init();

