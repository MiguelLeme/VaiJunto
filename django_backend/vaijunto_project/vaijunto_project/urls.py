from django.urls import include, path
from rest_framework import routers
from vaijunto_app import views

router = routers.DefaultRouter()
router.register(r'carona', views.CaronaViewSet)
router.register(r'viagem', views.ViagemViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
]
