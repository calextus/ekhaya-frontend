import React, { useEffect, useState } from 'react';
import './landingpage.css';

function Landingpage() {
  const [trendingBusinesses, setTrendingBusinesses] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    // Fetch trending businesses from API or database
    fetch('/api/trending-businesses') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setTrendingBusinesses(data))
      .catch((error) => console.error('Error fetching trending businesses:', error));

    // Fetch latest blogs from API or database
    fetch('/api/latest-blogs') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setLatestBlogs(data))
      .catch((error) => console.error('Error fetching latest blogs:', error));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome To Ekhaya</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search blogs, News Letter and more" />
          <button type="button">🔍</button>
        </div>
      </header>

      <section className="trending-businesses">
        <h2>Trending Businesses</h2>
        <div className="business-list">
          {trendingBusinesses.map((business, index) => (
            <div key={index} className="business-item">
              <img src={business.image} alt={business.name} />
              <p>{business.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="blogs">
        <h2>Our Blogs and News Letter</h2>
        <div className="blog-list">
          {latestBlogs.map((blog, index) => (
            <div key={index} className="blog-item">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
                <span>{blog.views} Views</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community">
        <h2>Communities</h2>
        <div className="community-tabs">
          <div className="tab">Trending discussions</div>
          <div className="tab">Community blog</div>
          <div className="tab">Invest</div>
        </div>
        <div className="tab-content">
          <div className="trending-discussions">
            <p>How will web3 change our lives</p>
            <p>Using crypto to secure your future</p>
            <p>Fast crypto insurance</p>
          </div>
          {/* Add other tabs content here */}
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
