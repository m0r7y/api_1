$(document).ready(function () {
    $('#main-table').on('click', '#addline', function () {
        var $newLine = $('.one2many').last().clone();
        $(this).closest('tr').before($newLine);
    });

    $('#main-table').on('click', '.removeline', function () {
        if ($('.one2many').length > 1) {
            $(this).closest('tr').remove();
        }
    });
});
