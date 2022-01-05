#we can create function and use when ever we need it
#you create function by def():
#you can your own function with any logic

#======this is a long way to find percentage of given list================
marks1 = [45,78,86,77]
percentage1 = (sum(marks1)/400)*100
print(percentage1)

marks2 = [45,78,86,77]
percentage2 = (sum(marks2)/400)*100
print(percentage2)
# ======this is a long way to find percentage of given lisst------


def percen(marks):  #percentage function
    return (sum(marks)/400)*100 #percentage function
# percen(): thats how we call function

per = percen(marks2) #thats how we use function
print(per) #thats how we use function

