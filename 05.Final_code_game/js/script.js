
let final_code = Math.floor(Math.random()*101);
let t = 100; // t for top
let b = 0; // b for bottom

document.getElementById('guess_btn').onclick = function(){
    let ans = document.getElementById('answer').value;
    if( parseInt(ans) > t || parseInt(ans) < b ){
        alert("Your answer is out of range !");
    }else if( parseInt(ans) == final_code ){
        alert("Congratulations ! You got the final code !")
    }else if( parseInt(ans) < final_code){
        b = ans;
    }else{
        t = ans;
    }
    document.getElementById('answer').value = "";
    document.getElementById('prompt').innerHTML = "請猜一個" + b + "到" + t + "之間的數";
}

document.getElementById('answer').addEventListener("keyup",function(event) {
    event.preventDefault();
    if(event.keyCode == 13){
        document.getElementById('guess_btn').click();
    }
});