# Generated by Django 4.2.4 on 2023-08-17 01:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Acentos', '0003_rename_hola_book'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='tittle',
            new_name='title',
        ),
    ]
