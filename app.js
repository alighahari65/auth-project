$(document).ready(function() {
    $('form').submit(function () {
        event.preventDefault();

        var valid = true;
        $(this).find('input').removeClass('error');
        $(this).find('input').each(function(i, el) {
            if($(el).val() == '') {
                valid = false;
                $(el).addClass('error');
            }
        })

        if(valid) {
            var data = {
                email: $(this).find('input[type="email"]').val(),
                password : $(this).find('input[type="password"]').val()
            };
            loadJson('POST', 'https://mkazemiraz-task-manager-api.herokuapp.com/users/login', data, function(res) {
            sessionStorage.setItem("myToken", res.token);    
            window.location.href = "./profile.html";
            }, function(xhr, error) {
               $('#auth-error').html('username or password is incorrect');
            })
        }
    });
});

function loadJson(type, url, data, success, error) {
    $.ajax({
        type: type,
        url: url,
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'json',
        success: success,
        error: error
    });
}