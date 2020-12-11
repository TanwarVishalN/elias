jQuery(document).ready(function(){
    jQuery('.grid-rooms .grid__item').each(function(i, item){
        jQuery(item).on('mouseover', function(){
            jQuery(item).addClass('active').siblings().removeClass('active');
            var roomId = jQuery(item).data('room-id');
            jQuery('.rooms__overlay--room').removeClass('active');
            jQuery('.rooms__overlay--room[data-room-overlay-id="' + roomId +'"]').addClass('active');
        });
    });
});

jQuery(window).load(function(){
    jQuery('article.grid__item').eq(0).addClass('active');
    jQuery('.rooms__overlay--room').eq(0).addClass('active');
});
