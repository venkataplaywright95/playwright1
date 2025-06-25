const {Before,After, BeforeStep, AfterStep, BeforeAll, AfterAll}=require("@cucumber/cucumber")



BeforeAll(function() {

    console.log("this is Beofe hook");

})


AfterAll(function() {
    console.log("this is after Hook")
})