//13. Write a JavaScript functionality to add a new link into the navbar

const navBar = document.querySelector(
  "nav.nav.d-flex.justify-content-between.mb-2"
);

const newLink = document.createElement("span");
newLink.innerText = "New link added";

navBar.appendChild(newLink);

//14. Write a JavaScript functionality to change the color of the main heading title

const heading = document.querySelector(
  "main.container div.row div.col-md-8.blog-main h2:nth-of-type(2)"
);

heading.style.color = "red";

//15. Write a JavaScript functionality to change the background of the jumbotron

const jumbotron = document.querySelector("div.container div.jumbotron");

jumbotron.style.backgroundColor = "yellowgreen";

//16. Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere”
//    section in the aside element. It should happen when the page loads, automatically

const linkToRemove = document.querySelector(
  "aside.col-md-4.blog-sidebar div.p-4:nth-of-type(3) ol.list-unstyled li:nth-child(2) a"
);

window.onload = () => {
  linkToRemove.remove();
};

//17. Write a JavaScript functionality to remove the first 50 characters in the first paragraph for every blog post

const blogPostList = document.querySelectorAll(
  "div.blog-post p:nth-of-type(2)"
);

for (let i = 0; i < blogPostList.length; i++) {
  // console.log(blogPostList[i]);
  const str = blogPostList[i].innerText;
  console.log(str);
  const firstFiftyCharacters = str.substring(50);
  console.log(firstFiftyCharacters);
}

//18. Write a JavaScript functionality to add a new Blog Post (div with title and text)

const parent = document.querySelector(
  "main.container div.row div.col-md-8.blog-main div.blog-post:nth-of-type(3)"
);

parent.style.backgroundColor = "cyan";
const newBlogPost = document.createElement("div");
// newBlogPost.classList.add("blog-post");
newBlogPost.style.backgroundColor = "lavender";

const newTitle = document.createElement("h2");
newTitle.classList.add("blog-post-title");
newTitle.innerText = "My new Blog post";

const newText = document.createElement("div");
newText.innerText =
  "Some text for my new blog post. I have just created it using javascript. I think it looks very nice.";

newBlogPost.appendChild(newTitle);
newBlogPost.appendChild(newText);

parent.after(newBlogPost);

//19. Write a JavaScript functionality to remove the last Blog Post when the user clicks on the “Older” button

const olderButton = document.querySelector(
  "main.container nav.blog-pagination a.btn.btn-outline-primary"
);

const lastBlogPost = document.querySelector(
  "main.container div.row div.col-md-8.blog-main div.blog-post:nth-of-type(3)"
);

olderButton.addEventListener("click", () => {
  lastBlogPost.remove();
});

//20. Write a JavaScript functionality that will create an alert with the name of the author every time the user
//    hovers the mouse on an author’s name

const authorsList = document.querySelectorAll(
  "div.blog-post p.blog-post-meta a"
);

// console.log(authorsList);

for (let i = 0; i < authorsList.length; i++) {
  authorsList[i].addEventListener("mouseover", () => {
    alert("author hovered");
  });
}

//21. EXTRA Write a JavaScript functionality that will remove the corresponding parent card from the DOM, upon
//    clicking on their “Continue reading” link

// const aTagList = document.querySelectorAll("a");

// console.log(aTagList);

for (const a of document.querySelectorAll("a")) {
  if (a.textContent.includes("Continue reading")) {
    a.addEventListener("click", () => {
      const cardToRemove = a.parentElement;
      cardToRemove.remove();
    });
  }
}
