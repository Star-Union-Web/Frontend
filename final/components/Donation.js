import React, { useEffect, useState } from "react";
import img from "../assets/news.jpg";

function Donation() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/donationNews.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Data:", data); // Debugging: Ensure data is being fetched
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Latest Donation News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-lg font-semibold mt-3">{article.title}</h2>
                        <p className="text-gray-600 text-sm">{article.description}</p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-blue-600 hover:underline font-medium"
                        >
                            Read more →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Donation;
