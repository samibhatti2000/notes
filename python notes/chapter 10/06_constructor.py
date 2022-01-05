# __init__() method known as constructor
# # __init__() is special method which run 
# as soon as the objest creadted
#__init__ runs automatic without assiging


class Employee:
    company = "Google"
    
    def __init__(self): #__init__ runs automatic without assiging
        print("__init __ started") #__init__ runs automatic without assiging
        
    def __init__(self, name, salary, subunit): #__init__ runs automatic without assiging
        print("__init__ second started")
        self.name = name
        self.salary = salary
        self.subunit = subunit
        print("second __init__ started and employee craeted") #__init__ runs automatic without assiging
    
    def getDetails(self):
        print(f"the name of employee is: {self.name}")
        print(f"the salary of employee id: {self.salary}")
        print(f"the facalty of employee is: {self.subunit}")
        
    def getSalary(self, signature): #you can use multiple parameter as well
        print(f"salary for the employee working in {self.company} is {self.salary} ")
        

            
harry = Employee("harry", "100k", "adsense") #new object assigning
# harry.salary = "10k" #assigining salary to self.salary
harry.getDetails()
