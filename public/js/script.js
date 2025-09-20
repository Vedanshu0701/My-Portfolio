// Blogs fetch karo backend se
async function loadBlogs() {
  try {
    const res = await fetch("/blog"); // backend API call
    const blogs = await res.json();

    const blogsDiv = document.getElementById("blogs");
    blogsDiv.innerHTML = ""; // clear first

    blogs.forEach(blog => {
      const blogCard = `
        <div class="blog-card">
          <h2>${blog.title}</h2>
          <p>${blog.content}</p>
        </div>
      `;
      blogsDiv.innerHTML += blogCard;
    });
  } catch (err) {
    console.error("❌ Failed to load blogs:", err);
  }
}

loadBlogs(); // jab page load ho
