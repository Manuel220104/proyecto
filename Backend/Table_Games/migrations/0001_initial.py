# Generated by Django 4.2.4 on 2023-09-09 22:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Products', '0003_alter_product_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Table_Game',
            fields=[
                ('Table_GameId', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ProductType', models.CharField(choices=[('Viento', 'Viento'), ('Cuerda', 'Cuerda'), ('Percusión', 'Percusión'), ('Electrófonos', 'Electrófonos'), ('Idiófonos', 'Idiófonos')], default=False, max_length=20)),
                ('Maker', models.CharField(max_length=100)),
                ('Players_Number', models.PositiveIntegerField()),
                ('Product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Products.product')),
            ],
        ),
    ]