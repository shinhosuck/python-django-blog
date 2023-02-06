from django.urls import path
from blog.views import (
    home_view,
    new_blog_view,
    blog_list_view
)



app_name = 'blog'


urlpatterns = [
    path('', home_view, name='home'),
    path('new/blog', new_blog_view, name='new-blog'),
    path('blogs', blog_list_view, name='blogs')
]