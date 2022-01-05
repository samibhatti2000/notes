#match resulter
num1 = int(input("enter num 1: "))
num2 = int(input("enter num 2: "))
num3 = int(input("enter num 3: "))
num4 = int(input("enter num 4: "))

bool1 = True

if(num1>num2 and num1>num3 and num1>num4):
    bool1 = False
    print("num1 is winner: ", num1)

if(num2>num1 and num2>num3 and num2>4):
    bool1 = False
    print("num2 is winner: ", num2)

if(num3>num1 and num3>num2 and num3>num4):
    bool1 = False
    print("num3 is winner: ", num3)
    
if(num4>num1 and num4>num2 and num4>num3):
    bool1 = False
    print("num4 is winner: ", num4)
    
    
if(bool1):
    if(num1==num2 or num1==num3 or num1==num4 or num2==num3 or num2==num4 or num3==num4):

                print("Macth ties")


 
