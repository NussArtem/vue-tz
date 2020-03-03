//inline-редактирование полей, т.к. таблица pjax, то вешаем обработчик на ещё "невидимые" элементы
$(document).on('change', '.grid-editable', function() {
    let cur_input = $(this),
        cur_form = $(this).closest('form'),
        formData = cur_form.find('input, select'),
        action = cur_form.attr('action');
    $.ajax({
        url: action + '&inplace_edit=1',
        data: formData,
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            if (data === '1')
                cur_input.addClass('updated');
            else
                cur_input.addClass('error');
        },
        error:function () {
            cur_input.addClass('error');
        }
    });
});

