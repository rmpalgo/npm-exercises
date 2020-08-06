const reviewData = {
    "restaurant_id": 1,
    "name": "Fernando",
    "rating": 3,
    "comments": "It was fine."
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
};

const API = {
    createReview: options => {
        fetch("https://frest.glitch.me/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then( response => response.json() )
            .then( data => console.log(data) )
            .catch( error => console.log(error) );
    }
};

module.exports = API;