#print item and the index number
list1 = [3, 53, 2, 'Flase' , 6.2,"harry"]

# simple way to do
# index = 0
# for item in list1:
#     print(f"{item}, : {index}")
#     index +=1


# enumurate function to do same thing
for index,item in enumerate(list1):
    print(f"{item}, : {index}")

