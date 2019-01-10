$(function() {

    // When a user scrolls into a section, run the event code associated with that scene.
    var controller = new ScrollMagic.Controller();

    // establish skills scene
    var skillsScene = new ScrollMagic.Scene({
        duration: 100,
        offset: 50,
        triggerElement: 'skills-scene'

    })
    .addTo(controller); // assign the scene to the controller

    
    $('.skill-tile').each(function(){
        var tile = this;

        var scene = new ScrollMagic.Scene({
            triggerElement: tile, 
            triggerHook: 1
        })
        .setClassToggle(tile, 'active')
        .addTo(controller);
    });

    $('.work-tile').each(function(){
        var tile = this;

        var scene = new ScrollMagic.Scene({
            triggerElement: tile, 
            triggerHook: 1
        })
        .setClassToggle(tile, 'active')
        .addTo(controller);
    })


    $(window).on('scroll', setCurrentPanel);
    $(window).on('load', setCurrentPanel);

    function setCurrentPanel() {
        // if progress > 0 animation should begin
        // if progress == 1 the animation is completed, scene has transitioned
        var skillsProgress = skillsScene.progress();
        var $main = $('.container');

        if( skillsProgress === 0 ) {
            $main.addClass('firstPanel').removeClass('secondPanel');         
        } else if( skillsProgress === 1) {
            $main.addClass('secondPanel').removeClass('firstPanel');
        }



        // TODO: add additional sections similar to the first completed section
        // var contactProgress = contactScene.progress();
        // console.log('Progress for Contact Scene: ' + contactProgress);


    }
});


