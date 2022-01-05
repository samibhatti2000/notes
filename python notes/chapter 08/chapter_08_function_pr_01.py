# match resulter function

def maximum(num1,num2,num3,num4):
    bool1 = True
    
    if(num1>num2 and num1>num3 and num1>num4):
        bool1 = False
        return num1
        print("num1 is winner: ", num1)
    
    if(num2>num1 and num2>num3 and num2>4):
        bool1 = False
        return num2
        print("num2 is winner: ", num2)
    
    if(num3>num1 and num3>num2 and num3>num4):
        bool1 = False
        return num3
        print("num3 is winner: ", num3)
        
    if(num4>num1 and num4>num2 and num4>num3):
        bool1 = False
        return num4
        print("num4 is winner: ", num4)
        
m = maximum(55,56,820,68)
print("maximum num is: ", m)