from django.urls import path
from . import views


urlpatterns = [

    #admin
    path('admin/login/', views.admin_login, name="admin-login"),
    path('admin/logout/', views.admin_logout, name="admin-login"),

    #get movies based on status 
    path('movies/', views.list_movies, name="get-all-movies"), #also add movie
    path('running/', views.list_running, name="get-running"),
    path('movies/paused', views.paused_movies, name="get-all-movies"),
    path('movies/upcoming', views.upcoming_movies, name="get-all-movies"),
    path('movies/completed', views.completed_movies, name="get-all-movies"),
   
    #get,update,delete,edit movie
    path('movies/<int:pk>', views.movie_detail, name="get-movie"),
    path('movies/<int:pk>/delete', views.movie_detail, name="edit-movie"),
    path('movies/<int:pk>/edit/', views.movie_detail_edit, name="edit-movie"),
    
    #date
    path('dates/', views.list_dates,name="get-all-dates"),

    #show
    path('shows/', views.list_shows, name="get-all-shows"),
    path('shows/<int:pk>', views.show_detail, name="get-show"),
    #show details of particular movie
    path('shows2/', views.list_shows2, name="get-all-shows"),
    path('shows2/<int:pk>', views.show_detail2, name="get-all-shows"),



    path('customers/', views.customers, name="get-all-customers"),
    path('customer/<int:pk>', views.customer, name="get-customer"),
    path('customer/login/', views.customer_login, name="customer"),
    path('customer/logout/', views.customer_logout, name="customer"),



    path('screens/', views.list_screens, name="get-all-screens"),

    path('showtimes/', views.list_showtimes,name="get-all-slots"),





    path('booking/temp/', views.booking_temp, name="book-temp"),

    path('bookings/', views.list_bookings, name="get-all-bookings"),
    path('bookings/<int:pk>', views.booking_detail, name="get-booking"),



    path('tickets/', views.list_tickets, name="get-all-tickets"),
    path('tickets/<int:pk>', views.ticket_detail, name="get-ticket"),

]

