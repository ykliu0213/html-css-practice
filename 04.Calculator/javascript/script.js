
// numbers btn
function getNum(num) {
    $("#display_num").val(function(i,val){
       return val + num;
    });
}

// clear btn
function clearRes() {
    $("#display_num").val("");
}

// equal btn
function equal() {
    var boxRes = $("#display_num").val();
    var lastSym = boxRes.substr(boxRes.length - 1); // get the last value of the string
    
    // if the last value of a maths formula is an operator , delete it
    if(lastSym == "+" || lastSym == "-" || lastSym == "*" || lastSym == "/"|| lastSym == "."){
        del();
        $("#display_num").val(eval($("#display_num").val()));
    }else{
        $("#display_num").val(eval($("#display_num").val()));
    }
}

// operator btn
function cal(calSymbol) {
    var boxRes = $("#display_num").val();
    var lastSym = boxRes.substr(boxRes.length - 1); // get the last value of the string
    
    // need to press a number first before pressing operator
    if($("#display_num").val()==""){
        $("#display_num").val("");
    // avoid duplicating the symbol operator together    
    }else if(lastSym == "+" || lastSym == "-" || lastSym == "*" || lastSym == "/" || lastSym == "."){
        $("#display_num").val();
    }else{
        $("#display_num").val(function(i,val){
            return val + calSymbol;
        });
    }
}

// - btn  can use in a substraction function or put before a number to make it as a negative number, so separate it from cal()
function minus(minuss) {
    var boxRes = $("#display_num").val();
    var lastSym = boxRes.substr(boxRes.length - 1); // get the last value of the string
    // avoid duplicating the symbol +-*/. together 
    if(lastSym == "+" || lastSym == "-" || lastSym == "*" || lastSym == "/" || lastSym == "."){
        $("#display_num").val();
    }else{
        $("#display_num").val(function(i,val){
            return val + minuss;
        });
    }
}

// del btn
function del(){
    $("#display_num").val(function(i, val){
        return val.substr(0, val.length - 1); // get the first to the second last value of the string
    });
}
