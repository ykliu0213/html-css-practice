
let final_code = Math.floor(Math.random()*101);
let t = 100; // t for top
let b = 0; // b for bottom

document.getElementById('guess_btn').onclick = function(){
    let ans = document.getElementById('answer').value;
    if( ans > t || ans < b ){
        alert("Your answer is out of range !");
    }else if( ans == final_code ){
        alert("Congratulations ! You got the final code !")
    }else if( ans < final_code){
        b = ans;
    }else{
        t = ans;
    }

    document.getElementById('prompt').innerHTML = "請猜一個" + b + "到" + t + "之間的數";
}