$(document).ready(function () {
    // create unordered list, append to body
    $('<ul></ul>').appendTo('body');
    // select input by id, button alert
    $('#btnSubmit').click(function (event) {
        event.preventDefault();
        let text = $('input').val();
        alert(text);
        // create div, append to body
        // let div = $('<div></div>');
        // div.appendTo('body');
        // $('<h2>' + text + '</h2>').appendTo(div);

        // create list item when button is clicked, append to unordered list
        let newLi = $('<li></li>');
        newLi.append(text);
        $(newLi).appendTo('ul');


        // random color assign when list is clicked
        $(newLi).click(function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            };
            $(newLi).css('color', color);
        });

        //remove list item when double clicked
        $(newLi).dblclick(function () {
            $(newLi).remove();
        });

        // h2 mouseover event
        $('h2').mouseover(function () {
            $('h2').css({
                'background-color': 'teal',
                'border-radius': '2em'
            });
        });
    });



    // disable button if field is empty
    $('.field').keyup(function () {
        let empty = false;
        if ($('.field').val().length === 0) {

            empty = true;
        };
        if (empty) {
            $('#btnSubmit').attr('disabled', 'disabled')
        } else {
            $('#btnSubmit').removeAttr('disabled');
        };
    });



    // end of body
})