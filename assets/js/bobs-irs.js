//this calls the function init upon window load
window.onload = init;

var irsLocation = {
    latitude: 30.357493,
    longitude: -97.687749
};
//a glbal variable for google maps api
var map;

//this is function init
function init() {
    //beginning of geolocation code checks to see if geolocation is available, if so, calls displayLocation function
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
        
    }
    else {
        alert("There is no geolocation support.");
    }
    //this section changes the innerHTML of the name to the name in local storage but only if there was something entered in name form in the apply page
    var name = document.getElementById("name");
    if (localStorage.applicant.length > 1) {
        name.innerHTML = localStorage.applicant;
    }
    //this section changes the innerHTML of the date of birth to the dob in local storage but only if something was entered
    var dob = document.getElementById("dob");
    if (localStorage.birthday.length > 2) {
        dob.innerHTML = localStorage.birthday;
    }
    //this changes the innerHTML of the address section to the address in local storage only if there was something entered
    var lineOne = document.getElementById("lineOne");
    var lineTwo = document.getElementById("lineTwo");
    if (localStorage.addressFirstLine.length > 1) {
        lineOne.innerHTML = localStorage.addressFirstLine;
        lineTwo.innerHTML = localStorage.addressSecondLine;
    }
    //this section changes the innerHTML to the expertise stored in local storage based on the radio button selction on the apply page
    var expertise = document.getElementById("expertise");
    if (localStorage.applicantExpertise == "pranks") {
        expertise.innerHTML = "pranking people.";
    }
    else if (localStorage.applicantExpertise == "fanFiction") {
        expertise.innerHTML = "writing fanfiction.";
    }
    else if (localStorage.applicantExpertise == "farts") {
        expertise.innerHTML = "making fart sounds.";
    }
    //this changes the mentor part of the innerHTML based on what was selected on the apply page
    var mentor = document.getElementById("mentor");
    if (localStorage.applicantMentor == "bob") {
        mentor.innerHTML = "Bob Belcher";
    }
    else if (localStorage.applicantMentor == "linda") {
        mentor.innerHTML = "Linda Belcher";
    }
    //this changes the innerHTML of the interest based on what is in local storage but only if there was something entered
    var interest = document.getElementById("interest");
    if (localStorage.fanTopic.length > 1) {
        interest.innerHTML = localStorage.fanTopic;
    }

}
function displayLocation(position) {
    //gets the latitude and longitude based browser api
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var browserLatitude = document.getElementById("latitude");
    var browserLongitude = document.getElementById("longitude");
    //displays the latitude and longitude
    browserLatitude.innerHTML = latitude;
    browserLongitude.innerHTML = longitude;
    //calls the function for compute distance which calculate distance from current location to irs
    var km = computeDistance(position.coords, irsLocation);
    var distance = document.getElementById("distance");
    distance.innerHTML = km + " km";
    //calls code for google mpas api
    showMap(position.coords);
}

//beginning of distance to function, gets starting latitude and longitude and destination latitude and longitude
function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    //then it calculates difference in kilometers
    var radius = 6371; //radius from earth in km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * radius;
    
    return distance;
}

//honestly not sure what this part does
function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI)/180;
    return radians;
}

//google maps api code
function showMap(coords) {
    var googleLatLong = new google.maps.LatLng(coords.latitude, coords.longitude);
    var mapOptions = {
        zoom: 15,
        center: googleLatLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);
    
    var title = "Your Location";
    var content = "You are here: " + coords.latitude + ", " + coords.longitude;
    //calls the addMarker function, which adds a marker
    addMarker(map, googleLatLong, title, content);
}

//function that adds pinpoint to map
function addMarker(map, latlong, title, content) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);
    var infoWindowOptions = {
        content: content,
        position: latlong
    };
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
}