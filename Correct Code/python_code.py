# # Challenge 1 - Control Structures (if-else statements)
#
# # Write a program in Python that checks if a number is even or odd.
def odd_or_even(userinput):
    if userinput % 2 == 0:
        return "even"
    else:
        return "odd"

userinput_number = int(input("Enter any number:"))
print(odd_or_even(userinput_number))

# # Write a program in Python that checks if a person is eligible to vote based on their age.
def checking_voting_age(x):
    if x >= 18:
        return "You are old enough to vote."
    else:
        return "you are not eligible to vote."

user_input_age = int(input("Enter your age please: "))
print(checking_voting_age(user_input_age))

# # Write a program in Python that checks if a number is positive, negative, or zero, and displays the appropriate message.
def pos_neg_zero(x):
    if x >= 0:
        return f"{x} is positive"
    if x == 0:
        return "The number is neither odd or even, it is zero"
    if x < 0:
        return f"{x} is negative" 
   
user_input = int(input("Enter a number: "))
print(pos_neg_zero(user_input))

#----------------------------------------------------------------------------
# # Challenge 2 - Loops (for and while loops)
#
# # Write a program in Python that prints numbers from 1 to 10 using a for loop.
i =" "
for i in range(1,11):
    print(i)

# Write a program in Python that prints numbers from 1 to 5 using a while loop.
i = 0
while i < 5:
    i += 1
    print(i)

# # Write a program in Python that calculates the factorial of a given number using a loop.
factorial = 1
num = int(input("Enter a number: "))
for i in range(1, num+1):
    factorial *= 1

print(factorial)

#----------------------------------------------------------------------------
# Challenge 3 - Functions and Scopes
#
# # Write a function in Python that greets a user by name.
def greeting_by_username(username):
    return f'Hello {username}, welcome to blah blah'

username = input("Enter your username: ")
print(greeting_by_username(username))

# # Write a function in Python that checks if a number is even or odd.
def even_or_odd(x):
    if x % 2 == 0:
        return 'even'
    else:
        return "odd"

user_input = int(input("Enter a number: "))
print(even_or_odd(user_input))

# # Write a function in Python that accepts a string and returns the number of vowels in the string
def checking_for_vowels(x):
    count = 0
    vowels = "AEIOUaeiou"
    for i in x:
        if i in vowels:
            count += 1
        print(count)

word = input("Eneter a word: ")
print(checking_for_vowels(word))

#----------------------------------------------------------------------------
# Challange 4 - Arrays and Objects
#
# # Write a program in Python that stores a list of fruits and prints each fruit using a loop.
fruits = ['grapes', 'apples', 'grapfruit', 'oranges', 'banana', "kiwi", "dragonfruit"]
for i in fruits:
    print(i)

# #Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.
students_in_class = {
    "Shimmer Sham" : 100,
    "Khani Lyan" : 100,
    "Jane Smith" : 92,
    "John Smith" : 1
}

for key, value in students_in_class.items():
    print(f"{key}: {value}")

# # Create an array of numbers in Python and write a function to find the highest number in the array
numbers = [1, 5, 1000, 99, 100, 80, 82]
def finding_largest_number(num):
    num.sort()
    largest = num[-1]
    return largest

finding_largest_number(numbers)