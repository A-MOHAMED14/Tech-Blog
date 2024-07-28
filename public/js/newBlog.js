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
