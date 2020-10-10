$(document).ready(function () {
    function editFalse() {
        $('form').find(':input').each(function () {
            $(this).attr('readonly', true);
        })
        // find proper way to do that
        $('#addline').addClass('d-none');
        $('.removeline').addClass('d-none');
    }

    function editTrue() {
        $('form').find(':input').each(function () {
            $(this).attr('readonly', false);
        })
        // find proper way to do that
        $('#addline').removeClass('d-none');
        $('.removeline').removeClass('d-none');
    }

    // make form not editable on load
    editFalse();

    $('#main-table').on('click', '#addline', function () {
        var $newLine = $('.one2many').last().clone();
        $(this).closest('tr').before($newLine);
    });

    $('#main-table').on('click', '.removeline', function () {
        if ($('.one2many').length > 1) {
            $(this).closest('tr').remove();
        }
    });

    $('#modify').on('click', function name() {
        editTrue();
    })

    $('#cancel').on('click', function name() {
        editFalse();
    })
});
