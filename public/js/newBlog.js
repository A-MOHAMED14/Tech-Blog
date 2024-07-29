const handleNewPostClick = async () => {
  const response = await fetch("/dashboard/newblog");

  if (response.ok) {
    document.location.assign("/dashboard/newblog");
  } else {
    alert(response.statusText);
  }
};

const newPostBtn = document.querySelector("#new-post-btn");
newPostBtn.addEventListener("click", handleNewPostClick);

const handleNewBlogPost = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#new-blog-title").value;
  const blogContent = document.querySelector("#new-blog-content").value;

  if (blogTitle && blogContent) {
    const response = await fetch("/api/users/newblog", {
      method: "POST",
      body: JSON.stringify({
        blog_title: blogTitle,
        content: blogContent,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.assign("/dashboard/yourblogs");
    } else {
      alert(response.statusText);
    }
  }
};

const createPostBtn = document.querySelector(".new-post-form");
createPostBtn.addEventListener("submit", handleNewBlogPost);
