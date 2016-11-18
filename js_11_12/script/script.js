$(function () {

    $(".carousele").carousele();

    var template = $("#profile").html();
    var user = {
        name: "ARTEM MANZHOS",
        picture: "img/me.png",
        job: "Творческий человек",
        study1: "IT - это создание чего-то нового",
        study2: "Сделать мир лучше",
        study3: "Сделать сложные вещи простыми для понимания",
        mail: "itsgood7887@gmail.com",
        vk: "https://vk.com/art_sokolov",
        feedback: "Пишу музыку"
    };
    var userContent = tmpl(template, user);

    $(".wrapper").append(userContent);

});
