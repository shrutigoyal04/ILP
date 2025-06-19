const blogForm = document.getElementById('blogForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const blogsContainer = document.getElementById('blogsContainer');

let editIndex = null; 

// Load blogs from localStorage on page load
document.addEventListener('DOMContentLoaded', loadBlogs);

// Form Submit
blogForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  const blog = { title, content };

  // Get existing blogs
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  // Edit
  if (editIndex !== null) {
    blogs[editIndex] = blog;
    editIndex = null;
  } else {
  // Add 
    blogs.push(blog);
  }

  localStorage.setItem('blogs', JSON.stringify(blogs));
  blogForm.reset();
  loadBlogs();
});

// Load blogs from localStorage
function loadBlogs() {
  blogsContainer.innerHTML = '';
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  blogs.forEach((blog, index) => {
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blog');
    blogDiv.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <button class="edit-btn" onclick="editBlog(${index})">Edit</button>
      <button class="delete-btn" onclick="deleteBlog(${index})">Delete</button>
    `;
    blogsContainer.appendChild(blogDiv);
  });
}

// Edit blog
function editBlog(index) {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs[index];

  titleInput.value = blog.title;
  contentInput.value = blog.content;
  editIndex = index;

  // Scroll to form
  document.getElementById('create').scrollIntoView({ behavior: 'smooth' });
}

// Delete blog
function deleteBlog(index) {
  const confirmation = confirm("Are you sure you want to delete this blog?");
  if (!confirmation) return;

  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  blogs.splice(index, 1);
  localStorage.setItem('blogs', JSON.stringify(blogs));
  loadBlogs();
}
