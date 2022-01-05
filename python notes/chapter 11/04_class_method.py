#class method helps to change class instance in derived class
#class method helps to change class instance instead making new instance
class Employee:
    company = "camel"
    salary = 100
    location = "delhi"
    
    
    # def changsalary(self, sal): # its create a new instance
    #     self.salary = sal # self.salary will create a new instance
    #     self.__class__salary = sal # will change class instance
    
    @classmethod #@classmethod is a dacorator 
    # with of help of this method you can chage class instance as well
    def changsalary(cls, sal): # it cls can change class instance
        cls.salary = sal # will change class instance
    
    
    
e = Employee()
print(e.salary)
e.changsalary(455)
print(e.salary)
print(Employee().salary)