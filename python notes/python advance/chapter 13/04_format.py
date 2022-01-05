name = "harry"
channel = "codeWithharry"
type1 = "coding"
# a = f"This is {name} and his channel is {channel}" # this is how can you fstring
# print(a)
a = "this is {} and his channel is {}".format(name, channel) # this is how can you use format instead of fstring
a = "this is {0} and his {2} channel is {1}".format(name, channel, type1) # this is how can you use format instead of fstring
print(a)

