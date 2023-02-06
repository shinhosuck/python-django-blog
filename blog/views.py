from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def home_view(request):
    return render(request, 'blog/home.html', context=None)

def blog_list_view(request):
    blog_list = [
        {'id': 1, 'title': 'blog title', 'content': 'blog content'},
        {'id': 2, 'title': 'blog title ', 'content': 'blog content'},
        {'id': 3, 'title': 'blog title ', 'content': 'blog content'},
        {'id': 4, 'title': 'blog title ', 'content': 'blog content'},
        {'id': 5, 'title': 'blog title ', 'content': 'blog content'}
    ]
    data = {
        'blog_list': blog_list
    }
    return JsonResponse(data)

def new_blog_view(request):
    blog = {'id': 1, 'title': 'New Blog Title', 'content': 'New blog content'}
    data = {
        'id': blog['id'],
        'title': blog['title'],
        'content': blog['content']
    }
    return JsonResponse(data)