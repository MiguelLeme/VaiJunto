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
