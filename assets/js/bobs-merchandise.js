window.onload = showResults;

function showResults() {
    var clothesImage = document.getElementById("productTwo");
    var productImage = document.getElementById("productThree");
    var mentorItemImage = document.getElementById("productFour");
    var fanTopic = localStorage.fanTopic;
    document.getElementById("topic").innerHTML = fanTopic;
    if (localStorage.applicantExpertise == "pranks") {
        productImage.innerHTML = "<img src='./assets/images/lockpick.jpg'><div class='productName'>15 Piece Slim Line Euro Lock Pick Set</div><div class='productInfo'><span id='price'>$37.95</span> from LockPickShop.com </div>";
        clothesImage.innerHTML = "<img src='./assets/images/bunny-ears.jpg'><div class='productName'>Pink Fleece Bunny Ear Hat</div><div class='productInfo'><span id='price'>$21.79</span> from Etsy</div>";
    }
    else if (localStorage.applicantExpertise == "fanFiction") {
        productImage.innerHTML = "<img src='./assets/images/touch-butt-poster.png'><div class='productName'>Have the Courage To Touch The Butt Vinyl Canvas</div><div class='productInfo'><span id='price'>$12.79</span> from Etsy - Vizionaire </div>";
        clothesImage.innerHTML = "<img src='./assets/images/glasses.jpg'><div class='productName'>Casual Bold Thick Square Frame Clear Lens Horn Rimmed Glasses</div><div class='productInfo'><span id='price'>$9.99</span> from Amazon - zeroUV</div>";
    }
    else if (localStorage.applicantExpertise == "farts") {
        productImage.innerHTML = "<img src='./assets/images/keyboard.jpeg'><div class='productName'>CME Xkey - Mobile MIDI Keyboard (Neon Blue)</div><div class='productInfo'><span id='price'>$99.00</span> from B&H Photo-Video-Audio </div>";
        clothesImage.innerHTML = "<img src='./assets/images/underwear.jpeg'><div class='productName'>Hanes Boys&rsquo; White Briefs 6-Pack</div><div class='productInfo'><span id='price'>$11.00</span> from Hanes</div>";
    }
    if (localStorage.applicantMentor == "bob") {
        mentorItemImage.innerHTML = "<img src='./assets/images/spatula.jpeg'><div class='productName'>OXO SteeL Turner</div><div class='productInfo'><span id='price'>$10.99</span> from Bed Bath & Beyond</div>";
    }
    else if (localStorage.applicantMentor == "linda") {
        mentorItemImage.innerHTML = "<img src='./assets/images/wine.jpg'><div class='productName'>Variety Set of 3 Red Wines</div><div class='productInfo'><span id='price'>$74.89</span> from Spec's</div>";
    }
}
