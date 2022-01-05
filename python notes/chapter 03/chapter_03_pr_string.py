
name = input("enter your name:\n")
date = input("enter date:\n")
print("Good afternoon:", name)

#letter replace
letter = ''' Dear <|name|>,
you are selected
        
        date: <|date|>
'''
letter = letter.replace("<|name|>", name)
letter = letter.replace("<|date|>", date)
print(letter)

st = "this is a string with  double  spaces"
doblespaces = st.find(" ")
doblespacesreplace = st.replace("  "," ")
print(doblespaces) #find double spaces
print(doblespacesreplace)
  



