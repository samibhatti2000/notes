# =====This function has two parameters=========
def mySum(num1, num2):
    return num1 + num2

s = mySum(6, 32)
print(s)

# ===you can make default statemnet in function or default parameter, variable=========
def greet(name="stranger"):
    print("Good day,", name)
greet()