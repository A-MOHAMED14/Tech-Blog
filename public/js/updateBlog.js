const handleBlogPostUpdate = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#edit-blog-title").value;
  const blogContent = document.querySelector("#edit-blog-content").value;
  const blogId = new URLSearchParams(window.location.search).get("blog_id");

  if (blogTitle && blogContent && blogId) {
    const response = await fetch(`/api/users/update/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({
        blog_title: blogTitle,
        content: blogContent,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.assign("/dashboard/yourblogs");
    }
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", handleBlogPostUpdate);

const handleBlogPostDelete = async () => {
  if (confirm("Are you sure you want to delete this blog post?")) {
    const blogId = new URLSearchParams(window.location.search).get("blog_id");
    if (blogId) {
      const response = await fetch(`/api/users/delete/${blogId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        document.location.assign("/dashboard/yourblogs");
      }
    }
  } else {
    return;
  }
};

document
  .querySelector("#delete-blog-btn")
  .addEventListener("click", handleBlogPostDelete);
