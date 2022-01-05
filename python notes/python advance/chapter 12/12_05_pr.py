#make a list of multiplication with the use of list comprehension
num = int(input("enter your number: "))

table = [num*i for i in range(1, 11)]#this list comprehension

with open("table.txt", "w+") as fo:
    fo.write(str(table))
    
with open("table.txt", "r+") as fo:
    data = fo.read()
    
print(data)

