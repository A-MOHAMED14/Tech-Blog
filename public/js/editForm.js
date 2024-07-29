const displayEditForm = async (event) => {
  const selectedBlog = event.target.closest(".posted-blogs-div");
  if (selectedBlog) {
    const blogId = selectedBlog.getAttribute("data-id");

    if (blogId) {
      return (window.location.href = `/dashboard/edit?blog_id=${blogId}`);
    }
  }
};

document
  .querySelector("#posted-blogs-container")
  .addEventListener("click", displayEditForm);
