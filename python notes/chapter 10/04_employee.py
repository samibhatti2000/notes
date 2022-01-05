#theree are ywo type of attribuye instence and class
#instance attributes are not presented in class
#instance attributes are defined from outside the class
#class attributes are defined in class
#A program prefer intance attribute frist and then class atribute
class Employee:
    company = "google"


harry = Employee() #new object assigning
rajni = Employee() #new object assigning
harry.salary = "30k" #instance attribute doesnt presented in class
rajni.salary = "40k" #instance attribute doesnt presented in class
print(harry.salary)
print(rajni.salary)

print(harry.company)
Employee.company = "limkdean" #this is class attribute
print(harry.company)
print(rajni.company)

rajni.company = "youtube" #this is instance and class attribute \\ but program prefer instance attribute
print(rajni.company)


