class Employee:
    def __init__(self, salary, increment):
        self.salary = salary
        self.increment = increment

    @property
    def salaryafterincrement(self):
        return self.salary*self.increment
    
    @salaryafterincrement.setter
    def salaryafterincrement(self, sai):
        self.increment = sai/self.salary
        
e = Employee(1000, 1.5)
print(e.salaryafterincrement)
print(e.increment)
e.salaryafterincrement = 2000
print(e.increment)