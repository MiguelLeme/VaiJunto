from rest_framework import viewsets
from .models import Carona, Viagem
from .serializers import CaronaSerializer, ViagemSerializer

class CaronaViewSet(viewsets.ModelViewSet):
    queryset = Carona.objects.all()
    serializer_class = CaronaSerializer
    
class ViagemViewSet(viewsets.ModelViewSet):
    queryset = Viagem.objects.all()
    serializer_class = ViagemSerializer