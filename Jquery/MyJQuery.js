$(document).ready(function () {
    console.log('I Am In A New File Now');


    //Your JQuery Code Here
    console.log("We Are Using JQuery");

    // jQuery Syntax looks like this
    // $('selector').action() 

    //Clicks On All The p Elements 

    $('p').click();

    // Do This When We Click On p 
    $('p').click(function () {
        console.log('You Clicked On p', this);
        // $('.Body1').hide(); 
        // $('#Body2').hide();  

    });




    $('p').dblclick(function () {
        console.log('You Double Clicked On p', this);
        //  $('#id').hide();
        //  $('.class').hide();
    });

    $('p').hover(function () {
        console.log('you Hoverd On: ', this);
        //  $('#id').hide();
        //  $('.class').hide();
    },
        function () {

            console.log('Thanks For Coming')
        });




    // THERE ARE THREE MAIN TYPES OF SELECTORS IN JQUERY  
    // 1. ELEMENT SELECTOR 
    // 2. ID SELECTOR 
    // 3. CLASS SELECTOR 

    // 1. ELEMENT SELECTOR -  THIS IS AN EXAMPLE OF ELEMENT SELECTOR WHICH CLICKS ON ALL P
    $('p').click();

    // 2. ID SELECTOR - THIS IS AN EXAMPLE OF ID SELECTOR 
    $('#Body2').click();

    // 3. CLASS SELECTOR - THIS IS AN EXAMPLE OF ID SELECTOR
    $('.Body1').click();



    // OTHER SELECTORS 
    $('*').click() // CLICKS ON ALL THE ELEMENTS  
    $('p.Body3').click() // CLICKS ON ALL THE ELEMENTS  
    $('p:first').click() // CLICKS ON ALL THE ELEMENTS 



    // Events In jQuery
    // MOUSE EVENTS = CLICK, DBLCLICK, MOUSEENTER, MOUSELEAVE
    // KEYBOARD EVENT = KEYPRESS, KEYDOWN, MEDIAKEYSTATUSMAP
    // FORM EVENTS = SUBMIT, CHANGE, FOCUS, BLUR
    // DOCUMENT/WINDOW EVENTS = LOAD, RESIZE, SCROLL, UNLOAD



    // ON METHOD  (THE JQUERY ON() METHOD IS USED TO ATTACH ONE OR MORE EVENT HANDLERS FOR SPECIFIED EVENTS TO SELECTED ELEMENTS IN THE DOM)
    $('p').on(
        {
            click: function () {
                console.log('Thanks For Clicking', this);
            },
            mouseleave: function () {
                console.log("Mouseleave");

            }



        })


    $('#Wiki').hide(1000, function () {
        console.log("Hidden");
    })
    $('#Wiki').show(1000, function () {
        console.log("Show");
    })





    $('#Button').click(function () {
        $('#Wiki').fadeOut(5000);
    })

    // fadeIn() 
    // fadeOut() 
    // fadeToggle() 
    // fadeTo() 



    // SLIDE METHODS - SPEED AND CALLBACK PARAMETERS ARE OPTIONAL 
    $('#Wikii').slideUp(1000, function () {
        console.log('Done');
    })

    $('#Wikii').slideDown(1000)
    $('#Wikii').slideToggle(1000)


    // ANIMATE FUNCTION IN JQUERY 
    $('#Wikiii').animate({
        opacity: 0.3,
        height: 'Auto',
        width: 'Auto'

    }, "fast")



    // $('#Wikiii').animate({ opacity: 0.3 }, 4000);
    // $('#Wikiii').animate({ opacity: 0.9 }, 1000);
    // $('#Wikiii').animate({ width: '350px' }, 12000);


    $('#TextArea').val('Setting It To Harry');
    $('#TextArea').html('Setting It To Harry Okay');


    $('#Input').html('Setting It To Harry');
    $('#Input').val('Setting It To Harry');
    $('#Input').empty();
    // EMPTY(): THIS METHOD IS USED TO REMOVE ALL CHILD NODES AND CONTENT FROM THE SELECTED ELEMENT



    $('#Wiki').empty();
    $('#Wiki').text('You Are Good');
    $('#Wiki').remove();



    $('#Wikiii').addClass('MyClass')
    $('#Wikiii').addClass('MyClassX')
    $('#Wikiii').removeClass('MyClassX')
    $('#Wikiii').css('background-color', 'red')
    $('#Wikiii').css('background-color')




    // AJAX Using jQuery
    $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'Harry', Channel: 'Code With Harry' },
    //     function (data, status) { alert(status) });

});


