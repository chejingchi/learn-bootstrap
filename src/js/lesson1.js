var man = "小伙子事大傻逼";
var woman = "不服来辩";

var manIndex = 1;
var womanIndex = 1;
var text = "";
var out = function () {
    if (manIndex <= man.length) {
        text = man.substring(0, manIndex);
        document.getElementById("test").innerHTML = text;
        manIndex ++;
    } else {
        text = woman.substring(0, womanIndex);
        document.getElementById("test").innerHTML = text;
        womanIndex ++;
    }
}
var start = function() {
    out();
    setTimeout("start()", 500);
};

setTimeout("start()", 50);
//start();

