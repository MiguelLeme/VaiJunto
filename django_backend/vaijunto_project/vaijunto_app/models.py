from django.db import models
from django.contrib.auth.models import User

class Carona(models.Model):
    motorista = models.ForeignKey(User, on_delete=models.CASCADE)
    rota = models.CharField(max_length=255)
    capacidade = models.IntegerField()
    hora = models.TimeField()

class Viagem(models.Model):
    aluno = models.ForeignKey(User, on_delete=models.CASCADE)
    Carona = models.ForeignKey(Carona, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=(('pendente', 'Pendente'), ('aceita', 'Aceita')))

class Usuario(models.Model):
    nome_completo = models.CharField(max_length=255)
    cpf = models.CharField(max_length=11, unique=True)
    email = models.EmailField(unique=True)
    telefone = models.CharField(max_length=15)
    matricula = models.CharField(max_length=20, unique=True)
    curso = models.CharField(max_length=100)
    senha = models.CharField(max_length=128)  # Armazenar a senha criptografada

    def __str__(self):
        return self.nome_completo