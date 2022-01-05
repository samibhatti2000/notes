8#dictionary method findinf value stored================
meaning = {
    
    "pankha": "pankha is fan",
    "chalna": "chalna is runing",
    "bhook": "bhook is fetuige",
    "dabba": "daabais box"
    
}

print("option are \n", meaning.keys())
a =input("enter the word for meaning: ")
print("\n","the meaning your word:", meaning.get(a))

#display unique set===============================
num1 = int(input("enter number 1\n"))
num2 = int(input("enter number 2\n"))
num3 = int(input("enter number 3\n"))
num4 = int(input("enter number 4\n"))
num5 = int(input("enter number 5\n"))
num6 = int(input("enter number 6\n"))
num7 = int(input("enter number 7\n"))
num8 = int(input("enter number 8\n"))

s = {num1,num2,num3,num4,num5,num6,num7,num8}
print("lenght of set: ", len(s)) #lenght is depend on sets uniqe vzlue
print(s)
 
#========make a set contianing int and string===============================

s = {18 , "18", } #18 only print 18 two times because one is string one is int
print(s)
s = {20,20.0,"20"} #18 only print 18 two times because one is string one is int
print("\n",len(s))


#===================favlang languge pickerr========================
favlang = {} #make dictionary
a = input("enter your favorite language sam\n")
b = input("enter your favorite language harry\n")
c = input("enter your favorite language tom\n")
d = input("enter your favorite language jack\n")

favlang ['sam'] = a #add value in dictionar
favlang ['harry'] = b #add value in dictionar
favlang ['tom']  = c #add value in dictionar
favlang ['jack'] = d #add value in dictionar

print(favlang.items())





