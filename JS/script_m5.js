// Function to fetch and display feed data
function loadFeed(feedUrl) {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedUrl))
      .then(response => response.json())
      .then(data => {
        // Update the content div with the fetched articles
        displayArticles(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('content').innerHTML = '<p>Unable to load the feed. Please try again later.</p>';
      });
  }
  
  // Function to display articles with title and summary
  function displayArticles(articles) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
  
    if (!articles || articles.length === 0) {
      contentDiv.innerHTML = '<p>No articles found.</p>';
      return;
    }
  
    // Loop through articles and create a formatted block for each
    articles.forEach(article => {
      // Create an article element
      const articleEl = document.createElement('article');
      // Insert title and summary (or description)
      articleEl.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
      `;
      contentDiv.appendChild(articleEl);
    });
  }
  
  // Event listener for feed selector
  document.getElementById('feed-selector').addEventListener('change', function() {
    loadFeed(this.value);
  });
  
  // Initial load: fetch the default selected feed
  loadFeed(document.getElementById('feed-selector').value);