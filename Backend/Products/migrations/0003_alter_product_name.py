# Generated by Django 4.2.4 on 2023-09-09 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_alter_product_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='Name',
            field=models.CharField(max_length=200),
        ),
    ]
