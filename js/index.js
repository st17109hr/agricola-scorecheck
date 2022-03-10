var bgm;
bgm = new Audio();
bgm.src = "./music/bgm.mp3"
var bgm_katou;
bgm_katou = new Audio();
bgm_katou.src = "./music/っざけんなよおおおお！！！.wav"


function ButtonClick(){
    var tokuten = 0;

    var Komugi = document.getElementById("komugi");
    var Hituji = document.getElementById("hituji");
    var Inosisi = document.getElementById("inosisi");
    var Usi = document.getElementById("usi");
    var Hatake = document.getElementById("hatake");
    var Bokujou = document.getElementById("bokujou");
    var Yasai = document.getElementById("yasai");
    var Misiyou = document.getElementById("misiyou");
    var Umaya = document.getElementById("umaya");
    var Renga = document.getElementById("renga");
    var Isi = document.getElementById("isi");
    var Kazoku = document.getElementById("kazoku");
    var Monogoi = document.getElementById("monogoi");
    var Sonota = document.getElementById("sonota");

    var komugi_value = Komugi.value;
    var hituji_value = Hituji.value;
    var inosisi_value = Inosisi.value;
    var usi_value = Usi.value;
    var hatake_value = Hatake.value;
    var bokujou_value = Bokujou.value;
    var yasai_value = Yasai.value;
    var misiyou_value = Misiyou.value;
    var umaya_value = Umaya.value;
    var renga_value = Renga.value;
    var isi_value = Isi.value;
    var kazoku_value = Kazoku.value;
    var monogoi_value = Monogoi.value;
    var sonota_value = Sonota.value;
    
    if(komugi_value <= 0){
        tokuten += -1;
    }else if(komugi_value <= 3){
        tokuten += 1;
    }else if(komugi_value <= 5){
        tokuten += 2;
    }else if(komugi_value <= 7){
        tokuten += 3;
    }else{
        tokuten += 4;
    }
    
    if(hituji_value <= 0){
        tokuten += -1;
    }else if(hituji_value <= 3){
        tokuten += 1;
    }else if(hituji_value <= 5){
        tokuten += 2;
    }else if(hituji_value <= 7){
        tokuten += 3;
    }else{
        tokuten += 4;
    }

    if(inosisi_value <= 0){
        tokuten += -1;
    }else if(inosisi_value <= 2){
        tokuten += 1;
    }else if(inosisi_value <= 4){
        tokuten += 2;
    }else if(inosisi_value <= 6){
        tokuten += 3;
    }else{
        tokuten += 4;
    }

    if(usi_value <= 0){
        tokuten += -1;
    }else if(usi_value <= 1){
        tokuten += 1;
    }else if(usi_value <= 3){
        tokuten += 2;
    }else if(usi_value <= 5){
        tokuten += 3;
    }else{
        tokuten += 4;
    }

    if(hatake_value <= 1){
        tokuten += -1;
    }else if(hatake_value <= 2){
        tokuten += 1;
    }else if(hatake_value <= 3){
        tokuten += 2;
    }else if(hatake_value <= 4){
        tokuten += 3;
    }else{
        tokuten += 4;
    }

    if(bokujou_value <= 0){
        tokuten += -1;
    }else if(bokujou_value <= 1){
        tokuten += 1;
    }else if(bokujou_value <= 2){
        tokuten += 2;
    }else if(bokujou_value <= 3){
        tokuten += 3;
    }else{
        tokuten += 4;
    }

    if(yasai_value <= 0){
        tokuten += -1;
    }else if(yasai_value <= 1){
        tokuten += 1;
    }else if(yasai_value <= 2){
        tokuten += 2;
    }else if(yasai_value <= 3){
        tokuten += 3;
    }else{
        tokuten += 4;
    }

    for(var i=misiyou_value; i>0; i--){
        tokuten -= 1;
    }
    
    for(var i=umaya_value; i>0; i--){
        tokuten += 1;
    }

    for(var i=renga_value; i>0; i--){
        tokuten += 1;
    }

    for(var i=isi_value; i>0; i--){
        tokuten += 2;
    }

    for(var i=kazoku_value; i>0; i--){
        tokuten += 3;
    }

    for(var i=monogoi_value; i>0; i--){
        tokuten -= 3;
    }

    for(var i=sonota_value; i>0; i--){
        tokuten += 1;
    }

    if(tokuten <= 24){
        bgm_katou.play();
    }else{
        bgm.play();
    }
    alert("あなたの得点は ["+tokuten+"] 点です");
}