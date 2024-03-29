from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from Books import views
from .views import ObtainBookandProduct



router = routers.DefaultRouter()
router.register(r'Book', views.BookView, 'Book')
# Como vas a visiar la url, como empieza la api
# se pone asi para saber la version pero se puede
# luego de la , van las urls generadas por django
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('api/v1/Book_Product/', ObtainBookandProduct.as_view(), name='product_book'),
]

