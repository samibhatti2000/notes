#find the multiplication table
num = int(input("enter the number: "))

for i in range(1,11):
    print(str(num), "x", str(i), "=", str(i*num) )
    if i>10:
       break
print("\n","reverse the multimplication table")

#reverse the multiplication table============================
for i in range(1,11):
    print(str(num), "x", str(11-i), "=", str((11-i)*num) )
    if i>10:
       break
print("\n","print table with while loop")


#find the multiplication table with while loop==========================
R = 0
while R < 11:
    R = R+1
    print(str(num), "x", str(R), "=", str(R*num))
    
#find the number is prime or not========================
prime = True
for i in range(2,num):
    if(num%i == 0):
        prime = False
        break
    

if prime:    
        print("ths number is prime ", num)
else:
        print("the number is not prime", num)
 