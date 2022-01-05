# p1 + p2  ==> p1 __add__
# p1 - p2  ==> p1 __sub__
# p1 * p2  ==> p1 __mul__
# p1 / p2  ==> p1 __truediv__
# p1 // p2  ==> p1 __florrdiv__

class Number:
    def __init__(self, num):
        self.num = num
        
    def __add__(self, num2):
        print("lets add")
        return self.num + num2.num
    
    def __mul__(self, num2):
        print("lets multiply")
        return self.num * num2.num
        
n1 = Number(4)
n2 = Number(6)
sum = n1 + n2
mul = n1 * n2
print(sum)
print(mul)
