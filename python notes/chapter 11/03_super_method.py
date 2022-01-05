class Person:
    country = "pak"
    def takeBraeth(self):
        print("i am breathing....")
        
class Employee(Person):
    company = "honda"
    
    def getSalary(self):
        print(f"salary is {self.salary}")
    
    def takeBraeth(self):
        print("i am employee so i am luckly breathing ")

class Programer(Employee):
    company = "fiverr"
    
    def getSalary(self):
        print(f"no salary to programers")
        
    def takeBraeth(self):
        super().takeBraeth() #its print perent class instance
        print("i am programer so i am breathing")
   

p = Person()
E = Employee()
pr = Programer()  

p.takeBraeth()
E.takeBraeth()
pr.takeBraeth()


  
    
    
    