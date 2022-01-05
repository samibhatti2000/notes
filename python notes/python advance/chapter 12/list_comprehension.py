a = [3,6,7,8,95,95,665,525,36,54,7,58,547,]
b =[]


#find even numbers in the list \ this old way
for item in a:
    if item%2==0:
        b.append(item)
print(b)

#shorcut to write the same
# this is a new way with listcomprehension 
o = [i for i in a if i%2==0]#this is list comprehension
print(o)

