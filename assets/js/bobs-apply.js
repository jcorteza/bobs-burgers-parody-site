//on windo load function init starts
window.onload = init;

//this is function init
function init() {
    //here it makes the thank you message invisible
    document.getElementById("finalMessage").style.visibility = "hidden";
    var submitButton = document.getElementById("apply");
    //here it calls the function processForm when the submitbutton is clicked
    submitButton.onclick = processForm;
}

function processForm() {
    //this stores the applicants name into local storage
    var nameFirst = document.getElementById("first").value;
    var nameLast = document.getElementById("last").value;
    var applicant = nameFirst + " " +nameLast;
    localStorage.applicant = applicant;
    //this stores the applicants birthday into local storage
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var year = document.getElementById("year").value;
    localStorage.birthday = month + "/" + day + "/" + year;
    //this stores the applicants address into local storage
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    localStorage.addressFirstLine = street;
    localStorage.addressSecondLine = city + ", " + state + " " + zip;
    //this stores the topic of interest, entered into the form, into local storage
    var topic = document.getElementById("browserTopic").value;
    localStorage.fanTopic = topic;
    //this determines which expertise radio button was selected and which expertise will be stored into local storage
    var expertisePranks = document.getElementById("pranks");
    var expertiseFanFiction = document.getElementById("fanFiction");
    var expertiseFarts = document.getElementById("farts");
    if (expertisePranks.checked) {
        localStorage.applicantExpertise = "pranks";
    }
    else if (expertiseFanFiction.checked) {
        localStorage.applicantExpertise = "fanFiction";
    }
    else if (expertiseFarts.checked) {
        localStorage.applicantExpertise = "farts";
    }
    var mentorBob = document.getElementById("bob");
    var mentorLinda = document.getElementById("linda");
    if (mentorBob.checked) {
        localStorage.applicantMentor = "bob";
    }
    else if (mentorLinda.checked) {
        localStorage.applicantMentor = "linda";
    }
    //this displays the thank you message
    var message = document.getElementById("finalMessage");
    message.innerHTML = "Thanks for applying " + localStorage.applicant + ". You're hired! Check out Bob's Burgers <a href='bobs-merchandise.html'>Merchandise</a>, before you go.";
    message.style.visibility = "visible";
}