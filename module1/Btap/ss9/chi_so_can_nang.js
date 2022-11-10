function kiem_tra() {
    let canNang = document.getElementById("canNang").value;
    let chieuCao = document.getElementById("chieuCao").value;
    let bmi = canNang / (chieuCao * chieuCao);
    let result = "";

    if (bmi < 18.5)
        result = "Quá gầy. Nên ăn nhiều vào!"
    else if (bmi < 25)
        result = "Hơi gầy. Nên xem lại chế độ ăn"
    else if (bim < 30)
        result = "Cơ thể cân đối"
    else result = "Có hiện tượng béo phì"
    document.getElementById("result").innerHTML = "Chỉ số BMI :" + bmi + "Bạn" + result;
}