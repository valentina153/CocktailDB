function randomCocktail() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6c232f6427mshf7994d4b547142bp12cf9ejsn08051e87224b",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        $(".preview").empty();
        var cocktails = response.drinks;
        var card = '<div class="col"><div class="card text-white bg-dark mb-3" style="width: 18rem;"><img src="';
        card += cocktails[0].strDrinkThumb;
        card += '" class="card-img-top"><div class="card-body"><h5 class="card-title">';
        card += cocktails[0].strDrink;
        card += '</h5><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="details('
        card += cocktails[0].idDrink
        card += ')" style="float:right">See details</button></div></div></div>';
        $(".preview").append(card);
    });
}

function details(id) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + id,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6c232f6427mshf7994d4b547142bp12cf9ejsn08051e87224b",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        var cocktails = response.drinks;
        $(".modal-title").text(cocktails[0].strDrink);
        $("#thumb").attr("src", cocktails[0].strDrinkThumb);
        $("#alcoholic").text(cocktails[0].strAlcoholic);
        $("#instructions").text(cocktails[0].strInstructions);
        if (cocktails[0].strInstructionsDE != null) {
            $("#instructionsDE").text(cocktails[0].strInstructionsDE);
        } else {
            $("#instructionsDE").text("Für diesen Cocktail ist keine deutsche Übersetzung verfügbar.");
        }
        if (cocktails[0].strIngredient1 != null) {
            $(".list-group").empty();
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient1;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure1;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient2 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient2;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure2;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient3 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient3;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure3;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient4 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient4;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure4;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient5 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient5;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure5;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient6 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient6;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure6;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient7 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient7;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure7;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient8 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient8;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure8;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient9 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient9;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure9;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient10 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient10;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure10;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient11 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient11;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure11;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient12 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient12;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure12;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient13 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient13;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure13;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient14 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient14;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure14;
            li += '</span></li>';
            $(".list-group").append(li);
        }
        if (cocktails[0].strIngredient15 != null) {
            var li = '<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">';
            li += cocktails[0].strIngredient15;
            li += '<span class="badge bg-secondary rounded-pill">';
            li += cocktails[0].strMeasure15;
            li += '</span></li>';
            $(".list-group").append(li);
        }
    });
}

function showENG() {
    $("#instructions").css("display", "block");
    $("#instructionsDE").css("display", "none");
}

function showDE() {
    $("#instructions").css("display", "none");
    $("#instructionsDE").css("display", "block");
}

function getCocktail() {
    if (event.keyCode == 13) {
        var search = $("#search").val();
        var searchBy = $("#searchBy").val();

        if (searchBy == 1 || searchBy == 2) {

            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://the-cocktail-db.p.rapidapi.com/search.php?s=" + search,
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "6c232f6427mshf7994d4b547142bp12cf9ejsn08051e87224b",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
                }
            };

            $.ajax(settings).done(function(response) {
                console.log(response);
                var cocktails = response.drinks;
                var i;
                $(".preview").empty();
                if (cocktails != null && cocktails != "None Found") {
                    for (i = 0; i < cocktails.length; i++) {
                        var card = '<div class="col"><div class="card text-white bg-dark mb-3" style="width: 18rem;"><img src="';
                        card += cocktails[i].strDrinkThumb;
                        card += '" class="card-img-top"><div class="card-body"><h5 class="card-title">';
                        card += cocktails[i].strDrink;
                        card += '</h5><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="details('
                        card += cocktails[i].idDrink
                        card += ')" style="float:right">See details</button></div></div></div>';
                        $(".preview").append(card);
                    }
                } else {
                    var card = '<div class="col"><div class="card text-white bg-dark mb-3" style="width: 18rem;"><img src="';
                    card += 'img/search_error.png';
                    card += '" class="card-img-top"><div class="card-body"><h5 class="card-title">';
                    card += 'No cocktails found';
                    card += '</h5></div></div></div>';
                    $(".preview").append(card);
                }
            });
        } else {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + search,
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "6c232f6427mshf7994d4b547142bp12cf9ejsn08051e87224b",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
                }
            };

            $.ajax(settings).done(function(response) {
                console.log(response);
                var cocktails = response.drinks;
                var i;
                $(".preview").empty();
                if (cocktails != null && cocktails != "None Found") {
                    for (i = 0; i < cocktails.length; i++) {
                        var card = '<div class="col"><div class="card text-white bg-dark mb-3" style="width: 18rem;"><img src="';
                        card += cocktails[i].strDrinkThumb;
                        card += '" class="card-img-top"><div class="card-body"><h5 class="card-title">';
                        card += cocktails[i].strDrink;
                        card += '</h5><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="details('
                        card += cocktails[i].idDrink
                        card += ')" style="float:right">See details</button></div></div></div>';
                        $(".preview").append(card);
                    }
                } else {
                    var card = '<div class="col"><div class="card text-white bg-dark mb-3" style="width: 18rem;"><img src="';
                    card += 'img/search_error.png';
                    card += '" class="card-img-top"><div class="card-body"><h5 class="card-title">';
                    card += 'No cocktails found';
                    card += '</h5></div></div></div>';
                    $(".preview").append(card);
                }
            });
        }
    }
}

function popularCocktails() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/popular.php",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6c232f6427mshf7994d4b547142bp12cf9ejsn08051e87224b",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        var cocktails = response.drinks;
        var i;
        $(".preview").empty();
        for (i = 0; i < cocktails.length; i++) {
            var card = '<div class="col"><div class="card text-white bg-dark mb-3" style="width: 18rem;"><img src="';
            card += cocktails[i].strDrinkThumb;
            card += '" class="card-img-top"><div class="card-body"><h5 class="card-title">';
            card += cocktails[i].strDrink;
            card += '</h5><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="details('
            card += cocktails[i].idDrink
            card += ')" style="float:right">See details</button></div></div></div>';
            $(".preview").append(card);
        }
    });
}