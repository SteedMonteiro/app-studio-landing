```python
from django.contrib import admin
from .models import User, Testimonial, PricingPlan

# Register your models here.
admin.site.register(User)
admin.site.register(Testimonial)
admin.site.register(PricingPlan)
```