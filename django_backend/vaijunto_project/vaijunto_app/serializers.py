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

    def create(self, validated_data):
        # Aqui você pode adicionar lógica para criptografar a senha antes de salvar
        usuario = Usuario(
            nome_completo=validated_data['nome_completo'],
            cpf=validated_data['cpf'],
            email=validated_data['email'],
            telefone=validated_data['telefone'],
            matricula=validated_data['matricula'],
            curso=validated_data['curso'],
        )
        # Criptografar a senha
        usuario.senha = validated_data['senha']  # Criptografia real deve ser implementada
        usuario.save()
        return usuario