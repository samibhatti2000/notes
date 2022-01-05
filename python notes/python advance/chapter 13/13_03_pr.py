from functools import reduce as r
l1 = [4,5,98,26,577,855,44,]

b = max(l1)
print(b)

a = r(max, l1)# max numebr in list by reduce methid 
print(a)