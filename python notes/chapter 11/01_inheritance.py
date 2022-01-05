# inhertance is allabout relation ship between perent and child class 
class Employee: # this is perent class
    company = "google"
    
    def showDetails(self):
        print("this is an employee")
        

#python prefer child abject and instance first
class Programer(Employee):#this child class which inherit from perent class
    company = "youtube"
    langauge = "python"
    def getlang(self):
        print(f"The langauge is {self.langauge}")
        
e = Employee()
e.showDetails()
print(e.company)
p = Programer()
p.showDetails()  #it get instance Employee.company from Employee class
print(p.company) #this time it will prefer program.company tham Employee.company
