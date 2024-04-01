
let allNums = '';
let firstVal = null;
let secVal = null;
let op = null;
$(document).on('click', '.num', function (e) {
    let currentBtn = $(this).text();
    allNums = allNums + currentBtn;
    $('#result').val(allNums);
})

$(document).on('click', '.op', function (e) {

    if ($('#result').val()) {
        firstVal = $('#result').val();
        allNums = '';
    }
    op = $(this).text();
    $('#result').val('')
    $('.op').css('box-shadow', '');
    $(this).css('box-shadow', '3px 1px 5px white');
    console.log(firstVal, op)
})
$(document).on('click', '.equal', function (e) {
    secVal = $('#result').val();
    $('.op').css('box-shadow', '');
    console.log(firstVal, secVal, op);

    switch (op) {
        case '+':
            $('#result').val(parseFloat(firstVal) + parseFloat(secVal));
            break;
        case '-':
            $('#result').val(parseFloat(firstVal) - parseFloat(secVal));
            break;
        case '*':
            $('#result').val(parseFloat(firstVal) * parseFloat(secVal));
            break;
        case '/':
            $('#result').val(parseFloat(firstVal) / parseFloat(secVal));
            break;
    }

});

