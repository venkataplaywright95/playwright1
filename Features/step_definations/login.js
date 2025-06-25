const{Given,Then,When} =require("@cucumber/cucumber")


Given('user should be open browser', function () {

  console.log("THis is Given")
});

When('search flights', function () {
  console.log("THis is When")
});


Then('validate search flights', function () {
  console.log("THis is Then")
});
