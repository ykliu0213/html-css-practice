

// display number
document.getElementById("zero").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 0;
}

document.getElementById("one").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 1;
}

document.getElementById("two").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 2;
}

document.getElementById("three").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 3;
}

document.getElementById("four").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 4;
}

document.getElementById("five").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 5;
}

document.getElementById("six").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 6;
}

document.getElementById("seven").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 7;
}

document.getElementById("eight").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 8;
}

document.getElementById("nine").onclick = function() {
    if(document.getElementById("display_num").innerHTML.length<=10)
        document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML*10 + 9;
}

// document.getElementById("point").onclick = function() {
//     if(document.getElementById("display_num").innerHTML.length<=10)
//         document.getElementById("display_num").innerHTML = document.getElementById("display_num").innerHTML + '.';
// }


// clean
document.getElementById("clean_CE").onclick = function() {
        
}

document.getElementById("clean").onclick = function() {
    document.getElementById("display_num").innerHTML = 0;
}

document.getElementById("back").onclick = function() {
    document.getElementById("display_num").innerHTML = Math.floor(document.getElementById("display_num").innerHTML/10);
}



// operator
document.getElementById("equal").onclick = function() {
        
}

