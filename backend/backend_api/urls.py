from django.urls import path
from . import views
from django.conf import settings #new
from django.conf.urls.static import static #new
urlpatterns = [
    path('register/', views.signup, name="admin-register"),
    path('login/', views.login, name="admin-login"),

    path('customers/', views.customers, name="get-all-customers"),
    path('customer/<int:pk>', views.customer, name="get-customer"),
    path('customer/login/', views.customer_login, name="customer"),
    path('customer/logout/', views.customer_logout, name="customer"),


    path('movies/', views.list_movies, name="get-all-movies"),
    path('movies/<int:pk>', views.movie_detail, name="get-movie"),
    path('movies/<int:pk>/edit', views.movie_detail, name="edit-movie"),
    path('movies/<int:pk>/delete', views.movie_detail, name="edit-movie"),

    path('screens/', views.list_screens, name="get-all-screens"),

    path('showtimes/', views.list_showtimes,name="get-all-slots"),

    path('shows/', views.list_shows, name="get-all-shows"),
    path('shows/<int:pk>', views.show_detail, name="get-show"),
    path('shows2/', views.list_shows2, name="get-all-shows"),
    path('shows2/<int:pk>', views.show_detail2, name="get-all-shows"),




    path('booking/temp/', views.booking_temp, name="book-temp"),

    path('bookings/', views.list_bookings, name="get-all-bookings"),
    path('bookings/<int:pk>', views.booking_detail, name="get-booking"),



    path('tickets/', views.list_tickets, name="get-all-tickets"),
    path('tickets/<int:pk>', views.ticket_detail, name="get-ticket"),
    # path('login/', views.login, name="api-login"),
    # path('create/', views.create, name="api-create"),
    # path('update/<int:pk>', views.update, name="api-edit"),
    # path('delete/<int:pk>', views.delete, name="api-delete"),
    # path('list/', views.list, name="api-list"),
    path('running/', views.list_running, name="get-running"),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 