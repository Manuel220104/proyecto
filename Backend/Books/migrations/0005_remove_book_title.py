# Generated by Django 4.2.4 on 2023-09-09 22:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Books', '0004_alter_book_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='Title',
        ),
    ]
