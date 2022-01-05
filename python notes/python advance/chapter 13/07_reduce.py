from functools import reduce

sum = lambda a,b: a+b

l = [1,2,3,4,5]# add number in list
val = reduce(sum, l)# reduce applies a rolling computation to sequle pair of elements
print(val)#return addtion of list
