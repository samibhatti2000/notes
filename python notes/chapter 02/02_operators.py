# Arithmetic operator: = +, -, *, /, etc
# Assigment operator: =, +=, -=, etc
# Relational or compersion operator: ==, >, >=, <, != etc
# logical  operators: and, or, not


a = 3
b = 4

# Arithmetic operator
print("Arithmetic operator")

print("the value of 3 + 4 = ", a+b)
print("the value of 3 - 4 =", a-b)
print("the value of 3 * 4 =", a*b)
print("the value of 3 / 4 =", a/b)

# Assignment operators
print("Assignment operators")

a += 3
b -=3
print("New value of a =", a)
print("New value of b =", b)


# compsrision operators
print("compsrision operators")

b = (4>7) #false
c = (14>7) #true
d = (14==14) #true
e = (14!=2) #true
print(b) 
print(c) 
print(d) 
print(e) 


# logical operators
print("logical operators")

bool1 = True
bool2 = False
print("the value of bool1 and bool2 is ", (bool1 and bool2))
print("the value of bool1 and bool2 is ", (bool1 or bool2))
print("the value of bool1 and bool2 is ", (not bool2))




