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
