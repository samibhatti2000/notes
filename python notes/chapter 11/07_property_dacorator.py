class Employee:
    company = "pso Gass"
    salary = 5600
    salarybonus = 500
    # totalsalary = 6100
    
    @property # with help property dacorator you can use instance as a function
    def totalsalary(self):
        return self.salary + self.salarybonus
    
    @totalsalary.setter
    def totalsalary(self, val):
        self.salarybonus = val - self.salary
        
        
e = Employee()
print(e.totalsalary)
e.totalsalary = 5800
print(e.salarybonus)
