
write = input("write somthing: ")
fo = open("D:\\python first\\chapter 09\\another.txt", 'w')#if dont have file 'w'
# autmaticaly create file asw ell
fo.write(write)
fo.close()

fo = open("D:\\python first\\chapter 09\\another.txt", 'a')
fo.write("\ni am appending")
fo.close()

