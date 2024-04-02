from django.http import HttpResponse

def home(request):
    return HttpResponse("Back_test_page")