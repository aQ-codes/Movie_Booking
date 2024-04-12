from django.db import models
from django.contrib.auth.models import User

#users who book tickets
class Customer(models.Model):
    # mobile=models.PositiveBigIntegerField() 
    user = models.ForeignKey(User,on_delete=models.CASCADE)
   
    def __str__(self):  
         return self.user.username
    

   
    
class Movie(models.Model):
    STATUS = (
        ('Upcoming', 'Upcoming'),
        ('Running', 'Running'),
        ('Paused', 'Paused'),
        ('Completed', 'Completed')
        )
    title = models.CharField(max_length = 200, null = True)
    language = models.CharField(max_length = 200, null = True)
    description = models.TextField(max_length = 200, null = True, blank = True)
    duration = models.IntegerField (null = True)   # time in minutes
    status = models.CharField(max_length = 200, null = True, choices = STATUS,default='Upcoming')
    poster = models.ImageField(upload_to='upload/images/movies', height_field=None, width_field=None, max_length=100, blank=True, null = True)

    def __str__(self):  
        return self.title
    

class ShowTime(models.Model):
    time = models.CharField(max_length = 200, blank=False, null = False)

    def __str__(self):  
        return self.time
    

class ShowDay(models.Model):

    date = models.CharField(max_length = 200, blank=False, null = False)

    def __str__(self):  
        return self.date


class Screen(models.Model):
    name = models.CharField(max_length = 200, blank=False, null = False)
  

    def __str__(self):  
        return self.name
    

class Show(models.Model):
    SHOW_STATUS = (
        ('active', 'active'),
        ('disabled', 'disabled'),
        ('finished', 'finished'),
        )
    movie = models.ForeignKey(Movie, null=True, on_delete=models.SET_NULL)
    date = models.ForeignKey(ShowDay, null=True, on_delete=models.SET_NULL)
    time = models.ForeignKey(ShowTime, null=True, on_delete=models.SET_NULL)
    screen = models.ForeignKey(Screen, null=True, on_delete=models.SET_NULL)
    status = models.CharField(max_length = 200, null = True, choices = SHOW_STATUS, default='active')
    price = models.FloatField (null = True) 
 
    def __str__(self):  
        return self.movie.title


class Booking(models.Model):
    bk_id = models.CharField(max_length = 200, blank=False, null = False)
    show = models.ForeignKey(Show, null=True, on_delete=models.SET_NULL)
    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add = True, null =True)  


    def __str__(self):  
        return self.bk_id
    



class BookingTemp(models.Model):
    bk_id = models.CharField(max_length = 200, blank=False, null = False)
    show = models.ForeignKey(Show, null=True, on_delete=models.SET_NULL)
    screen = models.ForeignKey(Screen, null=True, on_delete=models.SET_NULL)
    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    date = models.ForeignKey(ShowDay, null=True, on_delete=models.SET_NULL)
    time = models.ForeignKey(ShowTime, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add = True, null =True)  


    def __str__(self):  
        return self.time 


class Ticket(models.Model):
    bk_id = models.ForeignKey(Booking, null=True, on_delete=models.SET_NULL)
    # movie = models.ForeignKey(Movie, null=True, on_delete=models.SET_NULL)
    seat_id = models.IntegerField (null = True)
    seat_count = models.IntegerField (null = True)
    price = models.FloatField(null=True)

    
    def __str__(self):  
        return self.bk_id