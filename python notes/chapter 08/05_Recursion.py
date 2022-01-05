#find factorial
# n = 5
# product = 1
# for i in range(n):
#     product = product * (i+1)

# print(product)

#find factorial function
def factorial_find(n):
    product = 1
    for i in range(n):
      product = product * (i+1)
    return product

#find factorial Recursive
def factorial_recursive(n):
    if (n == 1 or n==0):
        return 1
    else:
     return n * factorial_recursive(n-1)
 

f = factorial_find(5)
print(f)

f_r = factorial_recursive(5)
print(f)

