from django.urls import include, path
from rest_framework import routers
from vaijunto_app import views
from vaijunto_app.views import CaronaViewSet, ViagemViewSet, cadastrar_usuario

router = routers.DefaultRouter()
router.register(r'carona', views.CaronaViewSet)
router.register(r'viagem', views.ViagemViewSet)
router.register(r'cadastro', views.cadastrar_usuario)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    path('cadastrar_usuario/', cadastrar_usuario, name='cadastrar_usuario'),

]
