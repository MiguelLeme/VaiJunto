from rest_framework import serializers
from .models import Carona, Viagem
from .models import Usuario

class CaronaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carona
        fields = '__all__'
        
class ViagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viagem
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nome_completo', 'cpf', 'email', 'telefone', 'matricula', 'curso', 'senha']