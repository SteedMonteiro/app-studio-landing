```python
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

class Testimonial(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quote = models.TextField()
    rating = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.user.username}'s Testimonial"

class PricingPlan(models.Model):
    PLAN_CHOICES = (
        ('free', 'Free'),
        ('basic', 'Basic'),
        ('premium', 'Premium'),
    )

    name = models.CharField(max_length=50, choices=PLAN_CHOICES, default='free')
    price = models.DecimalField(max_digits=6, decimal_places=2)
    features = models.TextField()

    def __str__(self):
        return self.name
```