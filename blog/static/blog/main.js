/*GLOBAL VARIABLES */
const blogForm = document.querySelector('#blog-form')
const blogs = document.querySelector('.blogs')

/*
====
HOME
==== */
function handleBlog(response){
    const new_blog = `
        <div class='blog' id='blog-${response.id}'>
            <p>ID:${response.id}</p>
            <h3>${response.title}</h3>
            <p>${response.content}</p>
        </div>`
    blogs.innerHTML = new_blog + blogs.innerHTML 
}

blogForm.addEventListener('submit', function(event){
    event.preventDefault()

    const form = event.target
    const xhrFormData = new FormData(form)
    const method = form.getAttribute('method')
    const url = form.getAttribute('action')

    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json' 
    xhr.open(method, url)
    xhr.onload = function(){
        const response = xhr.response
        handleBlog(response)
        blogForm.reset()
    }
    xhr.send(xhrFormData)
})

function loadBlogs() {
    const xhr = new XMLHttpRequest()
    const method = 'GET'
    const url = '/blogs'
    const responseType = 'json'

    xhr.responseType = responseType
    xhr.open(method, url)
    xhr.onload = function(){
        const blogs = [...xhr.response.blog_list]
        blogs.forEach(function(blog){
            handleBlog(blog)
        })

    }
    xhr.send()
}
loadBlogs()