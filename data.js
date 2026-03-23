const apiData = [
    {
        id: 1,
        slug: "ipstack",
        name: "Ipstack",
        category: "Geolocation",
        short_description: "Uncover the Geographic Profile of Your Visitors through IP Address.",
        full_description: "Ipstack provides top-tier global IP database services, delivering exceptional accuracy and coverage of over 200,000 cities worldwide, with 2 million distinct locations.",
        status: "Free",
        rating: 4.8,
        icon: "🌍",
        pricing: {
            type: "Free Tier",
            price: "$0 / Month"
        },
        endpoints: [
            {
                method: "GET",
                url: "https://api.ipstack.com/{ip}",
                description: "Retrieves location data for a specific IP address."
            }
        ],
        params: [
            { name: "access_key", type: "string", required: "Yes", description: "Your API Access Key." },
            { name: "ip", type: "string", required: "Yes", description: "The IP address to lookup." }
        ],
        example_request: "https://api.ipstack.com/162.158.122.84?access_key=YOUR_KEY",
        example_response: {
            "ip": "162.158.122.84",
            "type": "ipv4",
            "continent_code": "SA",
            "continent_name": "South America",
            "country_name": "Argentina",
            "city": "Buenos Aires",
            "latitude": -34.603722,
            "longitude": -58.381592
        }
    },
    {
        id: 2,
        slug: "fixer",
        name: "Fixer",
        category: "Finance",
        short_description: "Foreign exchange rates and currency conversion API.",
        full_description: "Fixer is a simple and lightweight API for current and historical foreign exchange (forex) rates.",
        status: "Paid",
        rating: 4.5,
        icon: "💱",
        pricing: {
            type: "Subscription",
            price: "$10 / Month"
        },
        endpoints: [
            {
                method: "GET",
                url: "https://data.fixer.io/api/latest",
                description: "Get the latest foreign exchange rates."
            }
        ],
        params: [
            { name: "access_key", type: "string", required: "Yes", description: "Your API Access Key." },
            { name: "base", type: "string", required: "No", description: "The base currency (default: EUR)." }
        ],
        example_request: "https://data.fixer.io/api/latest?access_key=YOUR_KEY",
        example_response: {
            "success": true,
            "timestamp": 1678284800,
            "base": "EUR",
            "rates": { "USD": 1.07, "GBP": 0.89 }
        }
    },
    {
        id: 3,
        slug: "weatherstack",
        name: "Weatherstack",
        category: "Weather",
        short_description: "Real-time, historical and future weather data API.",
        full_description: "Weatherstack provides accurate and reliable global weather data for any location in the world.",
        status: "Free",
        rating: 4.7,
        icon: "☁️",
        pricing: {
            type: "Free Tier",
            price: "$0 / Month"
        },
        endpoints: [
            {
                method: "GET",
                url: "https://api.weatherstack.com/current",
                description: "Get real-time weather data."
            }
        ],
        params: [
            { name: "access_key", type: "string", required: "Yes", description: "Your API Access Key." },
            { name: "query", type: "string", required: "Yes", description: "The location (e.g., 'New York')." }
        ],
        example_request: "https://api.weatherstack.com/current?access_key=YOUR_KEY&query=London",
        example_response: {
            "request": { "type": "City", "query": "London" },
            "current": { "temperature": 12, "weather_descriptions": ["Sunny"] }
        }
    },
    {
        id: 4,
        slug: "mediastack",
        name: "Mediastack",
        category: "News",
        short_description: "Live News API, offering worldwide news in JSON format.",
        full_description: "Mediastack is a free, simple and RESTful API for live and historical news articles and blog posts around the world.",
        status: "Free",
        rating: 4.3,
        icon: "📰",
        pricing: {
            type: "Free Tier",
            price: "$0 / Month"
        },
        endpoints: [
            {
                method: "GET",
                url: "https://api.mediastack.com/v1/news",
                description: "Get worldwide news articles."
            }
        ],
        params: [
            { name: "access_key", type: "string", required: "Yes", description: "Your API Access Key." },
            { name: "languages", type: "string", required: "No", description: "Languages (e.g., 'en,de')." }
        ],
        example_request: "https://api.mediastack.com/v1/news?access_key=YOUR_KEY",
        example_response: {
            "pagination": { "limit": 100, "offset": 0, "count": 100, "total": 10000 },
            "data": [ { "author": "John Doe", "title": "Breaking News", "description": "Details..." } ]
        }
    },
    {
        id: 5,
        slug: "serpstack",
        name: "Serpstack",
        category: "Tools",
        short_description: "Real-Time Google Search Results API.",
        full_description: "Serpstack allows you to scrape real-time search engine results (SERP) from Google with ease and high speed.",
        status: "Paid",
        rating: 4.9,
        icon: "🔍",
        pricing: {
            type: "Subscription",
            price: "$29 / Month"
        },
        endpoints: [
            {
                method: "GET",
                url: "https://api.serpstack.com/search",
                description: "Scrape Google Search results."
            }
        ],
        params: [
            { name: "access_key", type: "string", required: "Yes", description: "Your API Access Key." },
            { name: "query", type: "string", required: "Yes", description: "The search query." }
        ],
        example_request: "https://api.serpstack.com/search?access_key=YOUR_KEY&query=apilayer",
        example_response: {
            "request": { "success": true, "type": "search" },
            "search_metadata": { "created_at": "2023-01-01", "total_results": 500000 },
            "organic_results": [ { "position": 1, "title": "APILayer Hub", "url": "https://apilayer.com" } ]
        }
    }
];

const categories = ["All", "AI / ML", "Finance", "Weather", "Security", "Tools", "Geolocation", "News"];
const statusFilters = ["All", "Free", "Paid"];
const sortOptions = ["Popular", "Newest"];
