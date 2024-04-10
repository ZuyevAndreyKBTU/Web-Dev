from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer(serializers.ModelSerializer):
    company_id = serializers.IntegerField(write_only=True)
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Vacancy
        fields = '__all__'

    def create(self, validated_data):
        company_id = validated_data.pop('company_id')
        company = Company.objects.get(id=company_id)
        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy
