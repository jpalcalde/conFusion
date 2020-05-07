$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#mycarousel').carousel({ interval: 2000 });
    $('#carousel-pause').click( function () {
        $('#mycarousel').carousel('pause');
    });
    $('#carousel-play').click( function () {
        $('#mycarousel').carousel('cycle');
    });

    $('#loginBtn').click( function () {
        $('#loginModal').modal('show');
    })
    $('#reserveBtn').click( function () {
        $('#reserveModal').modal('show');
    })
    $('#closeLoginHeader, #closeLoginBody').click( function () {
        $('#loginModal').modal('hide');
    })
    $('#closeReserveHeader, #closeReserveBody').click( function () {
        $('#reserveModal').modal('hide');
    })
});

