// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const mapped_array = movies.map(function(directors) {
        return directors.director;
    });

    return mapped_array;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const filtered_array = movies.filter(function(movie) {
        if (movie.director == "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }

        else {
            return false;
        }
    });

    let num = filtered_array.length;

    return num;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    //let sum = 0;
    //let i = 0;

    const sum = movies.reduce(function(accumulator, movies) {

        if (movies.rate == "" || !("rate" in movies)) {
            return accumulator
        }

        if () {
            return 0
        }

        else {
            return (accumulator + movies.rate)
        }
        //sum += rates.rate;
        //return sum;
    },0);

    let avg = (sum/movies.length).toFixed(2);

    return Number(avg);
}



// Iteration 4: Drama movies - Get the average of Drama Movies
/*
function dramaMoviesRate(movies) {
    let sum = 0;

    const mapped_array = movies.map(function(genres, rates) {
        if (genres.genre == "Drama") {
            sum += rates.rate;
        }

        return sum;
    });

    let avg = sum/mapped_array.length;

    return avg;
}
*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear() {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function orderAlphabetically() {

}
