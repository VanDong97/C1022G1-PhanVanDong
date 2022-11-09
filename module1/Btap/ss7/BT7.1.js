function doiduoctien() {
    let Amount = document.getElementById("amount").value;
    let FromC = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let Result;

    if (FromC == "USD" && To == "VND"){
        Result = "Result: " + (Amount * 23000) + "Đ";
    }
    else if (FromC == "VND" && To == "USD"){
        Result = "Result: " + (Amount / 23000) + "$";
    }
    else if (FromC = "VND"){
        Result = "Result: " + Amount + "Đ";
    }
    else if (FromC == "USD"){
        Result = "Result: " + Amount + "$";
    }
    document.getElementById("Result").innerHTML = Result;
}