$(function() {
    $(".arrival").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        drops: "up",
        maxYear: parseInt(moment().format('YYYY'), 10)
    }, function(start) {
        $(".datein").text(start.format('DD.MM.YYYY'));
    });
});

$(function() {
    $(".departure").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        drops: "up",
        maxYear: parseInt(moment().format('YYYY'), 10)
    }, function(start) {
        $(".dateout").text(start.format('DD.MM.YYYY'));
    });
});