var haslo = "it camp jest fajny";
haslo = haslo.toUpperCase();

var ukryte_haslo = "";

var skuchy = 0;

for(var i = 0; i < haslo.length; i++) {
    if(haslo.charAt(i) == " ") {
        ukryte_haslo = ukryte_haslo + " ";
    } else {
        ukryte_haslo = ukryte_haslo + "-";
    }
}

var litery = new Array(32);

litery[0] = 'A';
litery[1] = 'Ą';
litery[2] = 'B';
litery[3] = 'C';
litery[4] = 'Ć';
litery[5] = 'D';
litery[6] = 'E';
litery[7] = 'Ę';
litery[8] = 'F';
litery[9] = 'G';
litery[10] = 'H';
litery[11] = 'I';
litery[12] = 'J';
litery[13] = 'K';
litery[14] = 'L';
litery[15] = 'Ł';
litery[16] = 'M';
litery[17] = 'N';
litery[18] = 'Ń';
litery[19] = 'O';
litery[20] = 'Ó';
litery[21] = 'P';
litery[22] = 'R';
litery[23] = 'S';
litery[24] = 'Ś';
litery[25] = 'T';
litery[26] = 'U';
litery[27] = 'W';
litery[28] = 'Y';
litery[29] = 'Z';
litery[30] = 'Ź';
litery[31] = 'Ż';

window.onload = start;

function start() {
    generate_letter();
    set_password();
}

function generate_letter() {
    var html = '';

    for(var i = 0; i < 32; i++) {
        var temp = '<div onClick="check(' + i + ');" id="L' + i + '">' + litery[i] + '</div>';
        html = html + temp;
        if((i + 1) % 8 == 0) {
            html = html + '<br>';
        }
    }
    document.getElementById("litery").innerHTML = html;
}

function set_password() {
    document.getElementById("haslo").innerHTML = ukryte_haslo;
}

function check(letterNo) {
    var trafienie = false;
    for(var i = 0; i < haslo.length; i++) {
        if(haslo.charAt(i) == litery[letterNo]) {
            ukryte_haslo =
            ukryte_haslo.substring(0, i) + litery[letterNo] + ukryte_haslo.substring(i+1);
            trafienie = true;
        }
    }

    var letterId = "L" + letterNo;

    if(!trafienie && skuchy < 9) {
        skuchy++;
        var obrazek = '<img src="img/s' + skuchy + '.jpg">';
        document.getElementById("szubienica").innerHTML = obrazek;
        document.getElementById(letterId).style.background = "#550000";
        document.getElementById(letterId).style.color = "#FF0000";
        document.getElementById(letterId).style.border = "2px solid #FF0000";
    } else {
        document.getElementById(letterId).style.background = "#005500";
        document.getElementById(letterId).style.color = "#00FF00";
        document.getElementById(letterId).style.border = "2px solid #00FF00";
    }

    document.getElementById(letterId).setAttribute("onClick", ";");

    if(skuchy >= 9) {
        document.getElementById("litery").innerHTML = "Przegrana !!"
    }

    if(haslo == ukryte_haslo) {
        document.getElementById("litery").innerHTML = "Wygrana !!"
    }

    set_password();
}