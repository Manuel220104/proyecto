# Generated by Django 4.2.4 on 2023-09-09 22:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Table_Games', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='table_game',
            name='ProductType',
            field=models.CharField(choices=[('Viento', 'Viento'), ('Cuerda', 'Cuerda'), ('Percusión', 'Percusión'), ('Electrófonos', 'Electrófonos'), ('Idiófonos', 'Idiófonos')], max_length=20),
        ),
    ]
