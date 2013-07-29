$(document).ready(function() {
    var XTurn = true;
    $('.square').click(function(){
        if(XTurn){$(this).text("X");}
        else {$(this).text("O");}
        XTurn = !XTurn;
    });
});