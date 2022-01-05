#find factorial
# n = 5
# product = 1
# for i in range(n):
#     product = product * (i+1)

# print(product)

#find factorial function
def factorial_find(n):
    product = 1 
    for i in range(0,n):
      product = product * (i+1)
    return product


f = factorial_find()
print(f)