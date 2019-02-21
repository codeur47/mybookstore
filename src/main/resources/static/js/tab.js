/*
 * None of the JS has any affect on the actual tabs/content/animation. It's all just fixing some funky iOS stuff that I can't stand.
 */

/*
 * Fun little extra JS for iOS. Prevents Rubberband on body, but allows it on scrollable divs!
 */
$('.card').on('touchstart', function(){
    var $this = $(this);
    if($this.scrollTop() === 0){
        $this.scrollTop(1);
    }else if($this.scrollTop() === $this[0].scrollHeight-$this.outerHeight()){
        $this.scrollTop( $this.scrollTop()-1 );
    }
});
$('body').on('touchmove', function(e){
    var target = e.originalEvent.srcElement || e.originalEvent.originalTarget,
        card = $(target).closest('.card');
    if(!card.length || card[0].scrollHeight <= $(card).outerHeight()){
        e.preventDefault();
    }
});

/*
 * FIxes iOS orientation change bug where content is scrolled up waaaaay too far.
 */
$(window).on('orientationchange', function(){
    $('body').scrollTop(0);
});

/*
 * Adds responsiveness
 */
FastClick.attach(document.body);