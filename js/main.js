$('.spoiler').on('click', 'button' ,function(event){
    console.log(event);
    $(this).prev().show();
    $(this).hide();
});


const $button = $('<button>Spoiler Reveal</button>');
$('.spoiler').append($button);

$('.spoiler span').hide();
