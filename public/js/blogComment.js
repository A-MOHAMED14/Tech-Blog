const handleCommentPost = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#user-comment").value;
  const blogId = new URLSearchParams(window.location.search).get("blog_id");

  if (comment && blogId) {
    const response = await fetch("/api/users/comments", {
      method: "POST",
      body: JSON.stringify({ comment, blog_id: blogId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/comments?blog_id=${blogId}`);
    } else {
      alert(response.statusText);
    }
  }
};

const commentForm = document.querySelector(".user-comment-form");

commentForm.addEventListener("submit", handleCommentPost);
