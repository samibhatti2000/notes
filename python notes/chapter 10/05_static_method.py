#self is a parameter to define attribute value in function
#if dont provide any prameter to function is class
#you will get this error: TypeError: getsalary() takes 0 positional arguments but 1 was given

class Employee:
    company = "Google"
    def getSalary(self, signature): #you can use multiple parameter as well
        print(f"salary for the employee working in {self.company} is {self.salary} ")
        
    @staticmethod # and defined @staticmethod and put slef it will throw error self not defined
    def greet(): # @staticmethod is only wgen you dont wan t any vakue fore function Like: self
        print("good morning, sir")
    
    @staticmethod
    def time():
        print("pront current time")
            
harry = Employee() #new object assigning
harry.salary = "10k" #assigining salary to self.salary
harry.getSalary("thanks") # harry.geySalary == Employee.getSalary(harry) do same work
harry.greet() #Employee.getSalary()
harry.time()