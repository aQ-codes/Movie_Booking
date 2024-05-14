from django.urls import path
from . import views


urlpatterns = [

    #admin
    path('admin/login/', views.admin_login, name="admin-login"),
    path('admin/logout/', views.admin_logout, name="admin-login"),

    #admin
    path('customer/register/', views.customer_register, name="customer"),
    path('customer/login/', views.customer_login, name="customer"),
    path('customer/logout/', views.customer_logout, name="customer"),
    path('customers/', views.customers, name="get-all-customers"),
    path('customer/<int:pk>', views.customer, name="get-customer"),
    
    #get movies based on status 
    path('movies/', views.list_movies, name="get-all-movies"), #also add movie
    path('running/', views.list_running, name="get-running"),
    path('movies/active/', views.list_active, name="get-running"),
    path('movies/paused', views.paused_movies, name="get-all-movies"),
    path('movies/upcoming', views.upcoming_movies, name="get-all-movies"),
    path('movies/completed', views.completed_movies, name="get-all-movies"),
   
    #get,update,delete,edit movie
    path('movies/<int:pk>', views.movie_detail, name="get-movie"),
    path('movies/<int:pk>/delete', views.movie_detail, name="edit-movie"),
    path('movies/<int:pk>/edit/', views.movie_detail_edit, name="edit-movie"),
    

    #show
    #get all shows and add new show
    path('shows/', views.list_shows, name="get-all-shows"),
    #show details of particular show without nested serializer
    path('shows/<int:pk>', views.show_detail, name="get-show"),
    #show details of particular show with nested serializer
     path('show/<int:pk>', views.show_details, name="get-show"),

   #list all shows with nested serializer
    path('shows2/', views.list_shows2, name="get-all-shows"),
    #all show details of particular active movie - nested serializer
    path('shows2/<int:pk>/active', views.show_detail_active),
    path('shows2/<int:pk>/active-disabled', views.show_detail_active_disabled),
    #get all shows by date nested serializer
    path('shows2/date/<int:pk>', views.show_detail_date),

  


    #date
    path('dates/', views.list_dates,name="get-all-dates"),
    #screen
    path('screens/', views.list_screens, name="get-all-screens"),
    #time
    path('showtimes/', views.list_showtimes,name="get-all-slots"),

# ---------------booking-------------------
    #create new booking
    path('booking/', views.booking),
    #update booking
    path('booking/<int:pk>/update', views.booking_update),
    #view all bookings
    path('bookings/', views.list_bookings, name="get-all-bookings"),
    path('bookings/<int:pk>', views.booking_detail, name="get-booking"),
    #get bookings of particular show
    path('bookings/show/<int:pk>', views.booking_show),
    path('bookings/customer/<int:pk>', views.booking_customer),
    #create razorpay order
    path('booking/create-razorpay-order/', views.razorpay_order),

]

