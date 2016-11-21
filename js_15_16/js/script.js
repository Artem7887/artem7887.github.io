$(function () {
    // поиск по нажатию на enter
    $("#query").keyup(function(e) {
        if (e.keyCode == 13) {
            $(".search_button").click();
        }
});
    // запуск по нажатию на кнопку search
    $(".search_button").click( function() {

    var q = $("#query").val();
    // API
    $.getJSON("https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag="+q+"&limit=3",
    function(data) {
        var imgContainer = document.createElement("div");
        imgContainer.setAttribute("class", "images_container");
        $.each(data.results, function(i, val){
                var pic = document.createElement("img");
                pic.setAttribute("src", val.url);
                imgContainer.append(pic);
        });
        $(".images_container").remove();
        $("body").append(imgContainer);
    });

} );

    function Human(name) {
        this.name = name;
        this.age = 23;
        this.gender = "male";
        this.height = 184;
        this.weight = 65;
    }

    function Worker(j, s) {
        this.job = j;
        this.salary = s;
        this.work = function(){
        console.log("I'm working!");
        };
    }

    function Student(sc) {
        this.university = "MIT";
        this.scholarship = sc;
        this.watchMovie = function() {
        console.log("I'm watching movie");
        };
    }

    Worker.prototype = new Human();
    Student.prototype = new Human();

    var worker1 = new Worker("teacher", 500);
    var worker2 = new Worker("policeman", 400);
    var student1 = new Student(true);
    var student2 = new Student(false);

    console.log("worker1-age", worker1.age, "worker2-gender", worker2.gender);
    console.log("student1-weight", student1.weight, "student2-height", student2.height);

    student1.watchMovie();
    worker2.work();

});
