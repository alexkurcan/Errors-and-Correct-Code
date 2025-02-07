def check_even_odd(number):
    if number % 2 == 0:
        return print("Even")
    else:
        return print("Odd")

check_even_odd(5)

def check_eligability(age):
    if age >= 18:
        return print("Eligible")

check_eligability(20)

def check_number(number):
    if number > 0:
        return print("Positive")
    elif number == 0:
        return print("Neither positive nor negative")
    else:
        return print("Negative")
check_number(0)

fruits = ["apple","cherry", "mango", "banana"]
for i in fruits:
    print(i)

grades_dictionary = {}
def student_grades(student, grade):
    grades_dictionary.update({student: grade})
    return print(f"{student} has scored a {grade}%")

student_grades("Christopher", 101)
student_grades("Nayan", 99.34)
student_grades("Karim", 1)

my_array = [1, 2, 3, 4, 5]
def array_highest(array):
    return print(f"The highest number in the array is {max(array)}")

array_highest(my_array)

for i in range(1, 11):
    print(i)

i = 1
while i != 6:
    print(i)
    i += 1

def factorial(number):
    result = 1
    for i in range(1, number + 1):
        result *= i
    return print(f"The factorial of {number} is {result}")

factorial(3)

def check_vowels(string):
    num_of_vowels = 0
    vowels = "aeiou"
    for c in vowels:
        for i in string:
            if c != i:
                num_of_vowels += 1
    return print(f"Vowels: {num_of_vowels}")

check_vowels("hello")

def user_greeting():
    name = input("Enter your name: ")
    print(f"Hello, {name}!")

user_greeting()

def even_or_odd(number):
    if number / 2 == 0:
        return print("Even")
    else:
        return print("Odd")
    
even_or_odd(5)

