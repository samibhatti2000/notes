def square(num):
    return num**2

l = [5,2,3]
#find th square of list method 1
l2 = []

for i in l:
    s = square(i)
    l2.append(s)
    
print(l2)

#find th square of list method 1
print(list(map(square, l)))
