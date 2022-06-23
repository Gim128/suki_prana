/**
 * @author GImhan Pabasara <gimhanpabasara4@gmail.com> (www.gimhanpabasara.tk)
 * @since 5/23/2022
 */
// Grab all blocks
testimonials = document.getElementsByClassName('testimonials__block');

// Dynamically add class "active" to central testimonial on desktop
var mq = window.matchMedia("(min-width: 48em)");
if (mq.matches) {
    testimonials[1].classList.add('testimonials__block--active');
} else {
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.add('testimonials__block--active');
    };
}

var toogleBlock = function() {
    var active = document.getElementsByClassName('testimonials__block--active');
    active[0].classList.remove('testimonials__block--active');
    this.classList.add('testimonials__block--active');
}

// Bind event listeners
for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].addEventListener('click', toogleBlock, false);
}