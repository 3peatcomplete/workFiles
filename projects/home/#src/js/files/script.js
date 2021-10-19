let headerContactsAdaptive = document.querySelector('.header-contacts_adaptive');

let headerContacts = document.querySelector('.header-contacts');

if (document.querySelector('html').classList.contains('_touch')) {
    headerContactsAdaptive.append(headerContacts)
}

let Diff;
$(function () {

    $('input[name="daterange"]').daterangepicker({
        // timePicker: true,
        // timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY'
        },
    }).on('apply.daterangepicker', function (ev, picker) {
        // debugger
        var start = moment(picker.startDate.format('YYYY-MM-DD'));
        var end = moment(picker.endDate.format('YYYY-MM-DD'));
        var diff = start.diff(end, 'days'); // returns correct number
        console.log(-diff);
        Diff = -diff;

        summCalc()

    });

});
function summCalc() {

    let summOut = document.querySelector('.input[name="summ"]');
    let currentPrice = document.querySelector('.side').getAttribute('data-dayCost');
    if (summOut) {
        console.log(currentPrice);
        if(Diff){
            summOut.value = currentPrice * Diff;
            
        }
        else{
            summOut.value = currentPrice ;
        }
    }

}

summCalc();

// $('input[name="summ"]').value

