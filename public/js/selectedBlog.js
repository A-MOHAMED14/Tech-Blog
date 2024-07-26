const handleBlogClick = async (event) => {
  const blogContainer = event.target.closest(".blog-container");

  if (blogContainer) {
    const blogId = blogContainer.getAttribute("data-id");

    const response = await fetch(`/blog/${blogId}`);

    if (response.ok) {
      const blogData = await response.json();
      window.location.href = `/comments?blog_id=${blogId}`;
    } else {
      alert("Failed to fetch blog data");
    }
  }
};

document.querySelectorAll(".blog-container").forEach((container) => {
  container.addEventListener("click", handleBlogClick);
});
