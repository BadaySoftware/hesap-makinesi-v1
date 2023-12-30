function test(){
    alert("hey")
}

let giris = 0
let previous = 0
let yeniGiris = false
let _pendingIslem = "null"
let sonuc = 0
function num(number){
    
    if(yeniGiris){
        document.getElementById("ekran").value = ""
        yeniGiris = false
    }
    document.getElementById("ekran").value += number
    giris = document.getElementById("ekran").value
}

function islem(_islem){

    switch (_islem){
        case "del":  
        document.getElementById("ekran").value = ""
        sonuc = 0
        giris = 0 
        previous = 0
        yeniGiris = false
        break;

        case "%": 
        yeniGiris = true
        previous = giris
        _pendingIslem = "%"
        break;

        case "/": 
        yeniGiris = true
        previous = giris
        _pendingIslem = "/"
        break;

        case "x": 
        yeniGiris = true
        previous = giris
        _pendingIslem = "x"
        break;

        case "-": 
        yeniGiris = true
        previous = giris
        _pendingIslem = "-"
        break;

        case "+": 
        yeniGiris = true
        previous = giris
        _pendingIslem = "+"
        break;

        case "=": 
        yeniGiris = true
        previous = giris
        _pendingIslem = "+"
        break;

        default: 
    }
    
}

function hesapla(){
    switch (_pendingIslem){
        case "%": 
        sonuc = (previous*giris)/100
        break;
        case "/": 
        sonuc = previous / giris
        break;

        case "x": 
        sonuc = previous * giris
        break;

        case "-": 
        sonuc = previous - giris
        break;

        case "+": 
        sonuc = parseInt(previous) + parseInt(giris)
       
        break;

        default: 
    }
    yeniGiris = true
    document.getElementById("ekran").value = sonuc
    console.log("islem: "+_pendingIslem)
    console.log("sayi1: "+previous)
    console.log("sayi2: "+giris)
    console.log("sonuc: "+sonuc)
  
}

function sil(){
    let value = document.getElementById("ekran").value
    document.getElementById("ekran").value =  value.substring(0,value.length-1)
    giris = document.getElementById("ekran").value 
}
