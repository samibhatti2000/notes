#make a list of multiplication with the use of list comprehension
num = int(input("enter your number"))

table = [num*i for i in range(1, 11)]#this list comprehension

print(table)