from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate , logout
from django.contrib.auth.forms import UserCreationForm
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status , permissions
from rest_framework.decorators import api_view, permission_classes,authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK ,HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter, OrderingFilter
from django.contrib.auth.hashers import make_password

from django.http import JsonResponse

import razorpay

from .serializers import *
from .models import *
from .models import Customer


#----------------------------------admin------------------------------
#admin Login
@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def admin_login(request):
     username = request.data.get("username")
     password = request.data.get("password")
     user = authenticate(username=username, password=password)
     if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_id': user.id , })
     else:
      return Response({'error': 'Invalid Credentials'})
     
#admin logout   
@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def admin_logout(request):
    logout(request)
    return Response({'bool':True,'message':'logout successfully'})   


#-----------------------------------customer----------------------------
#customer Register
@api_view(['POST'])
@permission_classes((AllowAny,))
def customer_register(request):     
        username = request.data.get('email')
        first_name = request.data.get('name')
        password = request.data.get('password')
        hashed_pass = make_password(password, salt=None, hasher='default')
        user = User.objects.create(
            first_name=first_name,
            username=username,
            password=hashed_pass
        )
        if user:
            msg='user created'
            customer = Customer.objects.create(
                user=user
            )
            if customer:
               return Response('Customer Created Successfully')
            else:
               return Response('user created but failed to create customer')
        else :
            return Response({'error': 'Technical Problem.Try After Some Time'})
   
        

# customer login
@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def customer_login(request):  
    #  msg = {
    #      'bool':True,
    #      'post':request.data.get('email')

    #  }
    #  return Response(msg)

     username = request.data.get("email")
     password = request.data.get("password")
     user = authenticate(username=username, password=password)
     if user:
        try:
         customer = Customer.objects.get(user_id=user.id)
        except:
           return Response({'error': 'No Account Found.Please Sign Up First'})
        else:
           token, _ = Token.objects.get_or_create(user=user)
           return Response({'token': token.key, 'user_id': user.id , 'email': user.username,'customer_id':customer.id ,'name':user.first_name})
        
     else:
        return Response({'error': 'Incorrect Email or Passwod.Please Try Again'})


#customer logout   
@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def customer_logout(request):
    logout(request)
    return Response({'bool':True,'message':'logout successfully'})   




@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def customers(request):     
    customers = Customer.objects.all()  
    serializer =CustomerSerializer(customers, many = True)
    
    return Response(serializer.data)         

@api_view(["GET"])
@permission_classes((AllowAny,))
def customer(request, pk):     
    customer = Movie.objects.get(id=pk)
    serializer = CustomerSerializer(customer)
    
    return Response(serializer.data)      





#-----------------getting movies based on status------------

#get all movies and add a new movie
@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def list_movies(request):     

    if request.method == 'GET':
        movies = Movie.objects.all()  
        serializer = MovieSerializer(movies, many = True)
        return Response(serializer.data)          
    
    if request.method == 'POST':
        
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
           serializer.save()   
           return Response('Successfully created')
        else:
            return Response(serializer.errors)

#get running movies
@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def list_running(request):       
   
   movies = Movie.objects.filter(status__iexact='running') 
   serializer = MovieSerializer(movies, many = True)
   return Response(serializer.data)     

#get paused movies
@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def paused_movies(request):       
   
   movies = Movie.objects.filter(status__iexact='paused') 
   serializer = MovieSerializer(movies, many = True)
   return Response(serializer.data)     

#get upcoming movies
@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def upcoming_movies(request):       
   
   movies = Movie.objects.filter(status__iexact='upcoming') 
   serializer = MovieSerializer(movies, many = True)
   return Response(serializer.data)     

#get completed movies
@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def completed_movies(request):       
   
   movies = Movie.objects.filter(status__iexact='completed') 
   serializer = MovieSerializer(movies, many = True)
   return Response(serializer.data)     




#----------getting,updating,deleting a particular movie---------------

#view and delete particular movie
@api_view(['GET','DELETE'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def movie_detail(request, pk):
    # movie = get_object_or_404(Movie, pk=pk)
    # movie = Movie.objects.get(id=pk)
    if request.method == 'GET':
        movie = Movie.objects.get(id=pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    

    if request.method == 'DELETE':
         movie = Movie.objects.get(id=pk)
         movie.delete()
         return Response("Deleted successfully")
    
#edit particular movie
@api_view(["PUT"])
@permission_classes((AllowAny,))
def movie_detail_edit(request,pk):  
    movie = Movie.objects.get(id=pk)
    serializer = MovieSerializer(movie,data=request.data)
    if serializer.is_valid():
            serializer.save()
            return Response('Successfully updated')
    else:
            return Response("Failed To Update")





#-------------------show dates-------------------------------
#get all dates and add a new date
@api_view(["GET","POST"])
@permission_classes((AllowAny,))
def list_dates(request):   
    
  if request.method == 'GET':  
    days = ShowDay.objects.all()  
    serializer =ShowDaySerializer(days, many = True)
    return Response(serializer.data)             
    
  if request.method == 'POST':
        
        serializer = ShowDaySerializer(data=request.data)
        if serializer.is_valid():
           serializer.save()   
           return Response('Successfully added date')
        else:
            return Response({'error': serializer.errors})




#-------------------------screens----------------------------
#get all screens    
@api_view(["GET"])
@permission_classes((AllowAny,))
def list_screens(request):     
    screens =Screen.objects.all()  
    serializer = ScreenSerializer(screens, many = True)
    
    return Response(serializer.data)     




#---------------------------show time slots----------------------------
#get all show times
@api_view(["GET"])
@permission_classes((AllowAny,))
def list_showtimes(request):     
    showtime = ShowTime.objects.all()  
    serializer =ShowTimeSerializer(showtime, many = True)
    
    return Response(serializer.data)     



#-------------------------shows-----------------------------------------

#get all shows and add a new show
@api_view(["GET",'POST'])
@permission_classes((AllowAny,))
def list_shows(request):     
    if request.method == 'GET':
        shows = Show.objects.all()  
        serializer = ShowSerializer2(shows, many = True)
        
        return Response(serializer.data)
    
    if request.method == 'POST':

        serializer = ShowSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('Successfull created')
        else:
            return Response(serializer.errors)


##get a particular show detail - no nested serializer
@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def show_detail(request, pk):
    # product = get_object_or_404(, pk=pk)
    show = Show.objects.get(id=pk)
    serializer = ShowSerializer(show)

    return Response(serializer.data)


#list all shows with nested serializer
@api_view(["GET",'POST'])
@permission_classes((AllowAny,))
def list_shows2(request):     
    if request.method == 'GET':
        shows = Show.objects.all()  
        serializer = ShowSerializer2(shows, many = True)
        
        return Response(serializer.data)

#show details of marticular movie - nested serializer
@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def show_detail2(request, pk):
    # product = get_object_or_404(, pk=pk)
    movie = Movie.objects.get(id=pk)
    shows = movie.show_set.all()
    serializer = ShowSerializer2(shows,  many = True)
    return Response(serializer.data)   




#active show details of particular  movie - nested serializer
@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def show_detail_active(request, pk):
    # product = get_object_or_404(, pk=pk)
    movie = Movie.objects.get(id=pk)
    shows=movie.show_set.filter(status__iexact='active')
    serializer = ShowSerializer2(shows,  many = True)
    return Response(serializer.data)   



#active and Disabled show details of particular movie  - nested serializer
@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def show_detail_active_disabled(request, pk):
    # product = get_object_or_404(, pk=pk)
    movie = Movie.objects.get(id=pk)
    shows=movie.show_set.filter(status__iexact='active') | movie.show_set.filter(status__iexact='disabled')
    serializer = ShowSerializer2(shows,  many = True)
    return Response(serializer.data)   






@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def show_detail_date(request, pk):
    # product = get_object_or_404(, pk=pk)
    date = ShowDay.objects.get(id=pk)
    shows=date.show_set.filter(status__iexact='active')
    serializer = ShowSerializer2(shows,  many = True)
    return Response(serializer.data)   


# -------------------------------booking----------------------------
#create new booking 
@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def booking(request):     

    if request.method == 'GET':
       return Response('entered successfully')

    #     # movies = Movie.objects.all()  
    #     # serializer = MovieSerializer(movies, many = True)
    #     # return Response(serializer.data)          
    
    if request.method == 'POST':

        serializer =BookingSerializer(data=request.data)
        if serializer.is_valid():
            booking=serializer.save()
            return Response({'booking_id':booking.id})
        else:
            return Response(serializer.errors)
        
   
#update booking
@api_view(['PATCH'])
@permission_classes((AllowAny,))
def booking_update(request,pk):  
        if request.method == 'PATCH':
             booking = Booking.objects.get(id=pk)
             serializer =BookingSerializer(instance=booking,data=request.data, partial =True)
             if serializer.is_valid():
                serializer.save()
                return Response({'success':'updated successfully'})
             else:
                return Response(serializer.errors)

#get all bookings    
@api_view(["GET"])
@permission_classes((AllowAny,))
def list_bookings(request):     
    bookings =Booking.objects.all()  
    serializer = BookingSerializer(bookings, many = True)
    
    return Response(serializer.data)  


#get all confirmed bookings of a customer
@api_view(["GET"])
@permission_classes((AllowAny,))
def booking_customer(request,pk):     
    bookings=Booking.objects.filter(status__iexact='confirmed') & Booking.objects.filter(customer_id=pk)
    serializer = BookingSerializer2(bookings, many = True)
    
    return Response(serializer.data)  


@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def booking_detail(request, pk):
    # product = get_object_or_404(, pk=pk)
    bookings = Booking.objects.get(id=pk)
    serializer = BookingSerializer(bookings)

    return Response(serializer.data)


#get all bookings of particular show
@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def booking_show(request, pk):
    bookings = Booking.objects.filter(show=pk) 
    serializer = BookingSerializer(bookings, many = True)

    return Response(serializer.data)



#create razorpay order
@api_view(['POST'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def razorpay_order(request):
    client = razorpay.Client(auth=("rzp_test_OZZv3kK0jph7j5", "6DWB2BLDg4ZBUZLuypoHFKuW"))

    DATA = {
        "amount":int( request.data.get('amount')),
        "currency": "INR",
        "receipt": request.data.get('order_id'),
        "notes": {
            "key1": "value3",
            "key2": "value2"
        }
    }
    res=client.order.create(data=DATA)
    if res:
        msg={
            'bool':True,
            'data':res
        }
    else:
        msg={
            'bool':False,
            
        }
    return Response(msg)


    
