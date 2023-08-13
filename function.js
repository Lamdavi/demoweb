
function timxe(){
    var bienso = document.getElementById('bsxe').value;
    var tablebs=['a','92a01707','92A11',];
    for (var x in tablebs) {
        if (bienso == tablebs[x]){
            console.log(x);
            document.getElementById("textalert").innerHTML = "Xe có đăng ký ưu tiên";
            break;
        }
        document.getElementById("textalert").innerHTML = "không có đăng ký ưu tiên";
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    let arr = this.responseText;
    arr = arr.split("\r\n");
    console.log(arr);
    }
    xhttp.open("GET", "data.csv");
    xhttp.send();
}