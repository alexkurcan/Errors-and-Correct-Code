# IMPORTANT!!! this is just the functions that had the logic errors or at least I thought had logic errors

# the condition if number / 2 ==0 is incorrect is should have been if number 2 % ==0
def even_or_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")
even_or_odd(5)

# The fuction doesn't print anything for ineligible ages
def check_eligibility(age):
    if age >= 18:
        print("Eligible")
    else:
        print("Not Eligible")
check_eligibility(20)