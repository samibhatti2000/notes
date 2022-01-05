greeting = "Good Morning,"
name = "sam"

print(type(name))
print(greeting + name)

c = greeting + name #concatenating twop strings
print(c) #concatenating twop strings
print("indexing of string # list always strat with zero [0,1,2]:",name[0]) #indexing of string # list always strat with zero [0,1,2] for "sam"
print("#slcing of string:",name[1:3]) #slcing of string

print("is same as [0:2]:",name[:2]) #is same as [0:4]
print("is same as [0:]:",name[0:]) #is same as [0:4]
print("#[-1] is same as [4] # negtive indexing:",name[-1]) #is same as [0:4] # negtive indexing
print("is same as [0:-2]:",name[:-2]) #is same as [0:4]

# slcing with skip value
d = name[0:2:1]
print("name[0:2:1] slcing with skip value:",d)

print("the lenght of name is:", len(name))









