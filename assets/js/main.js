jQuery(function($) {

    const btn = $('.social-btn')
    const popup = $('.social-popup')

    btn.on('click', () => {
        popup.toggle()
    });
})

// jQuery(function($) {
//     $('.header__nav--burger').on('click', function() {
//         $('.nav--responsive').toggle()
//         $('.overlay').toggle()
//         $('body').addClass('overflow')
//     });
//     $('.overlay').on('click', function() {
//         $('.nav--responsive').toggle()
//         $('.overlay').toggle()
//         $('body').removeClass('overflow')
//     });
// })