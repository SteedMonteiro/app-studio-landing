```python
from django import forms
from .models import User, Testimonial, PricingPlan

class UserSignUpForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class UserLoginForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput)

class UserQueryForm(forms.Form):
    name = forms.CharField(max_length=150)
    email = forms.EmailField()
    query = forms.CharField(widget=forms.Textarea)

class TestimonialForm(forms.ModelForm):
    class Meta:
        model = Testimonial
        fields = ['user', 'quote', 'rating']

class PricingPlanForm(forms.ModelForm):
    class Meta:
        model = PricingPlan
        fields = ['plan_name', 'features', 'cost']
```