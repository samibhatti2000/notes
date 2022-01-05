#find the Square, Square root and Cabe
class Calculator:
    def __init__(self, num):
        self.num = num
        
    def Square(self):
        print(f"the Square of {self.num} is: {self.num **2}")
        
    def Cube(self):
        print(f"the Cube of {self.num} is: {self.num **3}")
    
    def Squareroot(self):
        print(f"the Square root of {self.num} is: {self.num **0.5}")
    
a = Calculator(9)
a.Square()
a.Cube()
a.Squareroot()