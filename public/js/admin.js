// Declare All Variable


// Modal




$.fn.add_destination = function(){
    var open_modal = document.getElementById('open_modal');
    var modal = document.getElementById('modal');
    var close = document.getElementById('close_modal');

    open_modal.click(function(e){
        e.preventDefault();
        modal.show();  
    });
}