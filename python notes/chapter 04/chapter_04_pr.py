
#Add fruit names in one list
f1 = input("enter frist fruit name\n")
f2 = input("enter second fruit name\n")
f3 = input("enter third fruit name\n")
f4 = input("enter fourth fruit name\n")
f5 = input("enter fifth fruit name\n")
f6 = input("enter sixth fruit name\n")
f7 = input("enter seventh fruit name\n")
fn = [f1,f2,f3,f4,f5,f6,f7]
print("your fruits are",fn)


#Add stundent marks in sorted manner in a list
s1 = input("enter marks of stundent_01: \n")
s2 = input("enter marks of stundent_02: \n")
s3 = input("enter marks of stundent_03: \n")
s4 = input("enter marks of stundent_04: \n")
s5 = input("enter marks of stundent_05: \n")
s6 = input("enter marks of stundent_06: \n")


s1i = int(s1)
s2i = int(s2)
s3i = int(s3)
s4i = int(s4)
s5i = int(s5)
s6i = int(s6)

stulist = [s1i,s2i,s3i,s4i,s5i,s6i]
stulist.sort()
print("your mark are", stulist)
print("total marks of students are: ", sum(stulist))

t =(1,0,0,12,0,505)
print("zero's in tuple:",t.count(0))








