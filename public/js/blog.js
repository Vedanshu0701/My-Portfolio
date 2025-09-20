// Add a Blog
document.getElementById("blogForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const res = await fetch("/blogs", {   // 🔥 yahan sahi karo (blog ❌ -> blogs ✅)
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  if (res.ok) {
    alert("Blog Added successfully!");
    loadBlogs(); // refresh blog list
  } else {
    alert("Failed to add blog!");
  }
});

// Load Blogs
async function loadBlogs() {
  const res = await fetch("/blogs");   // 🔥 yahan bhi "blogs"
  const blogs = await res.json();

  const list = document.getElementById("blogList");
  list.innerHTML = ""; // clear old

  blogs.forEach((b) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${b.title}</strong>: ${b.content}
      <button onclick="deleteBlog('${b._id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}

// Deleting Blog
async function deleteBlog(id) {
  if (confirm("Are you sure you want to delete this blog?")) {
    const res = await fetch(`/blogs/${id}`, { method: "DELETE" });  // 🔥 blogs

    if (res.ok) {
      alert("Blog Deleted successfully!");
      loadBlogs();
    } else {
      alert("Failed to delete blog");
    }
  }
}
// Call on page load
loadBlogs();
