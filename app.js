// $(".buton").click(function () {

// $.ajax({
//         url: 'http://192.168.1.12:8000/public/secret.json',
//         type: 'GET',
//         datatype: 'json'

//     }).done(function(arg){
//         console.log(arg.secret);
//     });
// })


$(".envoi").click(function () {

    $("#toto").addClass("loader");
    $.ajax({
        url: 'http://192.168.1.12:8000/users',
        type: 'POST',
        data: {
            name: "van-eersel", prenom: "valentin", content: "Pistolet taser!!"
        }
    }).done(function () {
        $("#ici").html("Ok");
        $.ajax({
            url: 'http://192.168.1.12:8000/users',
            type: "GET",
            data: { name: "pol" }

        }).done(function (data) {
            $("#toto").removeClass("loader");
            $("#ici").html(data.content);
        }).fail(function () {
            $("#ici").html("Pouette Error");
        })
    })
        .fail(function (arg2) {
            $("#ici").html("Error");
        })
})