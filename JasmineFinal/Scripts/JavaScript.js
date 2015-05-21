window.onload = function () {
    //get url

    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    var navLIs = document.getSelection("nav ul li");
    for (var i = 0; i < navLIs.length; i++) {
        navLIs[i].setAttribute("class", "");

    }

    if (filename == "Index.cshtml")
        document.getElementById("main").setAttribute("class", "active");
    else if (filename == "Register.cshtml")
        document.getElementById("reg").setAttribute("class", "active");
    else if (filename == "Login.cshtml")
        document.getElementById("log").setAttribute("class", "active");
   

    else document.getElementById("main").setAttribute("class", "active");

};


var a = [
"animated_", "blushing_", "fuzzy_", "barking_", "cloudy_", "dopey_", "enormous_", "flawless_", "flickering_",
"helpful_", "infamous_", "nervous_", "optimistic_", "powerful_", "pushy_", "smoggy_", "scholarly_",
"tremendous_", "uncommon_", "waterlogged_", "smelly_", "red_", "yellow_", "blue_", "green_", "orange_", "funny_", "smart_",
"slimy_", "angry_", "upsetting_","hopeless_", "honest_", "computing_","funny_","cute_","awesome_","colorful_","sleepy_","abandoned",
"able_", "absolute_", "adorable_", "adventurous_", "academic_", "acceptable_", "acclaimed_", "accomplished_", "accurate_",
"aching_", "acidic_", "acrobatic_", "active_", "actual_", "adept_", "adolescent_", "amused_", "anxious_", "arctic_", "blank_", "baggy_", "beneficial_"];

var b = ["ear","earthquake","oatmeal","ocean","officer","orange","owl","oven","plantation","pollution","pocket","popcorn", "egg","engine","error","example","expert","eyes","aftermath","addition","box","bridge","brush","bucket","doll","jar","bean", "chicken", "bear", "pear", "bubble", "pet", "kitten", "frog", "apple", "knight",
"basket", "cat", "dog", "mouse", "snail", "tiger", "lion", "cheese", "potato", "buffalo", "car", "gym", "face",
"closet", "room", "internet", "pool", "computer", "liger", "panda", "kite", "spaceship", "television", "phone", "ticket",
"pie","pen","water","fish","duck","tablet","shoe","monster","paper","math","english","science","book","glasses"];

var c = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


function nameGen() {
    var rA = Math.floor(Math.random() * a.length);
    var rB = Math.floor(Math.random() * b.length);
    var rC = Math.floor(Math.random() * c.length);
    var name = a[rA] + b[rB] + c[rC];
    document.getElementById("userNameDisplay").innerHTML = name;
    document.getElementById("uName").value = name;

}
