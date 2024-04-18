from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    class Meta:
        model = Customer
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


    def create(self, validated_data):
        Movie.objects.create(**validated_data)
        

class ShowTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShowTime
        fields = '__all__'


class ShowDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = ShowDay
        fields = '__all__'

class ScreenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screen
        fields = '__all__'


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = '__all__'


class ShowSerializer2(serializers.ModelSerializer):
    movie=MovieSerializer()
    date=ShowDaySerializer()
    time=ShowTimeSerializer()
    screen=ScreenSerializer()
    class Meta:
        model = Show
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class BookingSerializer2(serializers.ModelSerializer):
    show=ShowSerializer2()
    # customer=CustomerSerializer()
    class Meta:
        model = Booking
        fields = '__all__'
