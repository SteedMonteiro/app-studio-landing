```python
from django.shortcuts import render
from .models import User, Testimonial, PricingPlan

def landing_page(request):
    testimonials = Testimonial.objects.all()
    pricing_plans = PricingPlan.objects.all()
    return render(request, 'landing_page.html', {'testimonials': testimonials, 'pricing_plans': pricing_plans})

def sign_up(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('landing_page')
    else:
        form = SignUpForm()
    return render(request, 'sign_up.html', {'form': form})

def log_in(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            form.login()
            return redirect('landing_page')
    else:
        form = LoginForm()
    return render(request, 'log_in.html', {'form': form})

def select_plan(request):
    if request.method == 'POST':
        form = PlanSelectionForm(request.POST)
        if form.is_valid():
            form.select()
            return redirect('landing_page')
    else:
        form = PlanSelectionForm()
    return render(request, 'select_plan.html', {'form': form})

def submit_user_query(request):
    if request.method == 'POST':
        form = UserQueryForm(request.POST)
        if form.is_valid():
            form.submit()
            return redirect('landing_page')
    else:
        form = UserQueryForm()
    return render(request, 'submit_query.html', {'form': form})
```