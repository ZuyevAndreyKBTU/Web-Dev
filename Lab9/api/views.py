from django.db.models import Sum
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Vacancy, Company
from api.serializer import CompanySerializer, VacancySerializer


def index(request):
    return HttpResponse("Welcome to the shop")


class CompanyList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CompanyByID(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, pk, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VacancyListByCompany(generics.GenericAPIView, mixins.ListModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['pk']
        return Vacancy.objects.filter(company_id=company_id)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class VacancyList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin, ):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class VacancyByID(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, pk, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VacancyTopTen(generics.GenericAPIView, mixins.ListModelMixin):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.all().order_by('-salary')[:10]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
