$(document).ready(function() {

    function loadJSON(type, url, data, success, error) {
        $.ajax({
            type: type,
            url: url,
            contentType: "application/json",
            dataType: "json",
            beforeSend: function(xhr) {
                var token = sessionStorage.getItem('myToken');
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: success,
            error: error
        });
    };

    loadJSON("GET", "https://mkazemiraz-task-manager-api.herokuapp.com/users/me", null, function(res) {
        console.log(res);
    }, function() {
        alert('Access Denied!');
        window.location.href = "./index.html";
    });

    
});