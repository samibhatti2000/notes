#method biengs with double underScore __init__ and ends with double underscore

# Dunder or magic methods in Python are the methods having two prefix and suffix underscores in 
# the method name. Dunder here means “Double Under (Underscores)”. 
# These are commonly used for operator overloading. 
# Few examples for magic methods are: __init__, __add__, __len__, __repr__ etc.

# declare our own string class
class Number:
    def __init__(self, num):
        self.num = num
        
    def __add__(self, num2):
        print("lets add")
        return self.num + num2.num
    
    def __mul__(self, num2):
        print("lets multiply")
        return self.num * num2.num
    
    def __str__(self):
        return f"Decimal Number: {self.num}"
        
# n1 = Number(4)
# n2 = Number(6)
# sum = n1 + n2
# mul = n1 * n2
# print(sum)
# print(mul)

n = Number(9)
print(n)


