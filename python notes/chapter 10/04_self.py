#self is a parameter to define attribute value in function
#if dont provide any prameter to function is class
#you will get this error: TypeError: getsalary() takes 0 positional arguments but 1 was given

class Employee:
    company = "Google"
    def getSalary(self):
        print(f"salary for the employee working in {self.company} is {self.salary} ")
        
harry = Employee() #new object assigning
harry.salary = "10k" #assigining salary to self.salary
harry.getSalary() # harry.geySalary == Employee.getSalary(harry) do same work
