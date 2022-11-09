function kiem_tra(){
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = can_nang / (chieu_cao * chieu_cao);
    let result = "";

    if (bmi < 18.5)
        result = "Quá gầy. Nên ăn nhiều vào!"
    else if (bmi < 25)
        result = "Hơi gầy. Nên xem lại chế độ ăn"    
    else if(bim < 30)
        result = "Cơ thể cân đối"
    else result = "Có hiện tượng béo phì"
    document.getElementById("result").innerHTML = "Chỉ số BMI :" + bmi + "Bạn" + result;
}