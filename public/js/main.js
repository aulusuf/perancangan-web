// $("#toggle_modal").click(function(){
//     $("#modal").removeClass('hidden');
// })

// $("#modal_overlay").click(function () { 
//     $("#modal").addClass('hidden');    
// });

// $("#modal_cancel").click(function (event) { 
//     $("#modal").removeClass('hidden');
// });




$("#toggle_modal").click(function(){
    $("#modal").show();
})

$("#modal_overlay").click(function () { 
    $("#modal").hide();    
});

$("#modal_cancel").click(function () { 
    $("#modal").hide();
});