let url = 'https://icanhazdadjoke.com/';

async function getJoke(url) {
    try {
        let res = await axios.get(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        console.log(res.data.joke);
    } catch (e) {
        console.log(e);
    }
}

getJoke(url);


// Benefits of Using Headers:
// Content Negotiation: The Accept: 'application/json' header tells the server to return JSON instead of HTML or plain text

// Authentication: Headers like Authorization can carry tokens or credentials

// API Control: Many APIs require specific headers to work properly

// Response Format: Without the Accept header, this specific API would return HTML that would be harder to parse

// Caching Controls: Headers can specify how responses should be cached