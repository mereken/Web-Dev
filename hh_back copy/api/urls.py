from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies), 


    path('vacancies/', views.VacancyListView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view()),


]
