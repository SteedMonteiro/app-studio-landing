```python
from django.test import TestCase
from .models import User, Testimonial, PricingPlan

class UserModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        User.objects.create(username='testuser', password='testpassword')

    def test_user_creation(self):
        user = User.objects.get(id=1)
        self.assertEqual(user.username, 'testuser')

class TestimonialModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Testimonial.objects.create(user_id=1, testimonial_text='Great app!')

    def test_testimonial_creation(self):
        testimonial = Testimonial.objects.get(id=1)
        self.assertEqual(testimonial.testimonial_text, 'Great app!')

class PricingPlanModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        PricingPlan.objects.create(plan_name='Basic', plan_price=0)

    def test_pricing_plan_creation(self):
        pricing_plan = PricingPlan.objects.get(id=1)
        self.assertEqual(pricing_plan.plan_name, 'Basic')
        self.assertEqual(pricing_plan.plan_price, 0)
```