const posts = [
  {
    title: "Top IT Skills in 2025",
    url: "top-it-skills-2025.html",
    summary: "Discover the most in-demand tech skills to boost your career in 2025.",
    tags: ["IT", "Skills", "Career"]
  },
  {
    title: "Example Blog Post",
    url: "first-blog-post.html",
    summary: "This is a demo blog post for testing layout and content.",
    tags: ["Demo", "Layout"]
  }
  // Add more blog posts here manually
];

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  resultsContainer.innerHTML = "";

  const results = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.summary.toLowerCase().includes(query) ||
    post.tags.some(tag => tag.toLowerCase().includes(query))
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p class='text-muted'>No results found.</p>";
    return;
  }

  results.forEach(post => {
    const item = document.createElement("a");
    item.className = "list-group-item list-group-item-action";
    item.href = post.url;
    item.innerHTML = `<strong>${post.title}</strong><br><small>${post.summary}</small>`;
    resultsContainer.appendChild(item);
  });
});
