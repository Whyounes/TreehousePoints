$(function(){
    new th({ th_id: 'nickpettit', wrapper: "wrap", circle: { width: 40, radius:80 } });

    $("#generate").submit(function(e){
        e.preventDefault();
        var text = $("#uid").val();
        if( text == "" ) return;
        
        $("#wrap").html("");
        new th({ th_id: text, wrapper: "wrap", circle: { width: 40, radius:80 } });
    });
});
