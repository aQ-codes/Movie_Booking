from django.shortcuts import get_object_or_404
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

from django.http import JsonResponse

 # from med.forms import MedicineForm
from .serializers import *
from .models import *



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
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_id': user.id , 'email': user.username})



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


#get all movies and add new movie
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
            return Response('Successfull created')
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

        
 
@api_view(['GET','PUT','DELETE'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def movie_detail(request, pk):
    # product = get_object_or_404(, pk=pk)
    movie = Movie.objects.get(id=pk)

    if request.method == 'GET':
        # movie = Movie.objects.get(id=pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


    if request.method == 'PUT':
        serializer = MovieSerializer(movie,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('Successfully updated')
        else:
            return Response(serializer.errors)
        
    if request.method == 'DELETE':
        
            movie.delete()
            return Response("deleted successfully")



     
@api_view(["GET"])
@permission_classes((AllowAny,))
def list_screens(request):     
    screens =Screen.objects.all()  
    serializer = ScreenSerializer(screens, many = True)
    
    return Response(serializer.data)     


@api_view(["GET"])
@permission_classes((AllowAny,))
def list_showtimes(request):     
    showtime = ShowTime.objects.all()  
    serializer =ShowTimeSerializer(showtime, many = True)
    
    return Response(serializer.data)     




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



@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def show_detail(request, pk):
    # product = get_object_or_404(, pk=pk)
    show = Show.objects.get(id=pk)
    serializer = ShowSerializer(show)

    return Response(serializer.data)




@api_view(["GET",'POST'])
@permission_classes((AllowAny,))
def list_shows2(request):     
    if request.method == 'GET':
        shows = Show.objects.all()  
        serializer = ShowSerializer2(shows, many = True)
        
        return Response(serializer.data)




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



    
@api_view(["GET"])
@permission_classes((AllowAny,))
def list_bookings(request):     
    bookings =Booking.objects.all()  
    serializer = BookingSerializer(bookings, many = True)
    
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




@api_view(['GET','POST'])
@permission_classes((AllowAny,))
def booking_temp(request):     

    if request.method == 'GET':
       return Response('entered successfully')

    #     # movies = Movie.objects.all()  
    #     # serializer = MovieSerializer(movies, many = True)
    #     # return Response(serializer.data)          
    
    if request.method == 'POST':
        serializer =BookingTempSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('valid serializer')
    #         return Response('Successfull created')
    #     else:
    #         return Response(serializer.errors)
        return Response('entered successfully')







@api_view(["GET"])
@permission_classes((AllowAny,))
def list_tickets(request):     
    tickets =Ticket.objects.all()  
    serializer = TicketSerializer(tickets, many = True)
    
    return Response(serializer.data)  


@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
@permission_classes((AllowAny,))
def ticket_detail(request, pk):
    # product = get_object_or_404(, pk=pk)
    ticket = Ticket.objects.get(id=pk)
    serializer = TicketSerializer(ticket)

    return Response(serializer.data)






# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def create(request):
#     form = MedicineForm(request.POST)
#     if form.is_valid():
#         medicine = form.save()
#         return Response({'id': medicine.id}, status=status.HTTP_201_CREATED)
#     return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['PUT'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def update(request, pk):
#     product = get_object_or_404(Medicine, pk=pk)
#     form = MedicineForm(request.data, instance=product)
#     if form.is_valid():
#         form.save()
#         serializer = MedicineSerializer(product)
#         return Response(serializer.data)
#     else:
#         return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)
    



# @api_view(['DELETE'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
# @permission_classes((AllowAny,))
# def delete(request, pk):
#     try:
#         product = Medicine.objects.get(pk=pk)
#     except Medicine.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     product.delete()
#     return Response("deleted successfully")

     


# @csrf_exempt
# @api_view(["POST"])
# @permission_classes((AllowAny,))
# def login(request):
#     username = request.data.get("username")
#     password = request.data.get("password")
#     if username is None or password is None:
#         return Response({'error': 'Please provide both username and password'},
#                         status=HTTP_400_BAD_REQUEST)
#     user = authenticate(username=username, password=password)
#     if not user:
#         return Response({'error': 'Invalid Credentials'},
#                         status=HTTP_404_NOT_FOUND)
#     token, _ = Token.objects.get_or_create(user=user)
#     return Response({'token': token.key, 'user_id': user.pk , 'email': user.email},status=HTTP_200_OK)
 