$(function() {
    // $('#top').click(function(){
    //     $('.profile, .portfolio').fadeOut();
    //     $('.top').fadeIn();
    // });
    // $('#profile').click(function(){
    //     $('.top, .portfolio').hide();
    //     $('.profile').show();
    // });
    // $('#portfolio').click(function(){
    //     $('.top, .profile').hide();
    //     $('.portfolio').show();
    // });
        $('.bb').fadeIn();
		$('.a').click(function() {
            $('.active').hide();
			$('.active').removeClass('active');
			if ($(this).hasClass('b')) {
				$('.bb').addClass('active');
                $('.active').fadeIn(1500);
			} else if ($(this).hasClass('c')) {
				$('.cc').addClass('active');
                $('.active').fadeIn(1500);
			} else {
				$('.dd').addClass('active');
                $('.active').fadeIn(1500);
			}
		})

});