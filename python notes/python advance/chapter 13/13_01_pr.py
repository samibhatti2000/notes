name = input("enter your name: ")
marks = int(input("enter your marks: "))
phone = input("enter your phone number: ")


template = "stundent name is: {}, his marks are: {}, and phone number is {}"
output = template.format(name,marks,phone)
print(output)