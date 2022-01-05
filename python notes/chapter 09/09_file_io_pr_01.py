#find o word is presented in file or not
with open("D:\\python first\\chapter 09\\peom.txt", 'r') as f:
    data = str(f.read())


word = "twinkle"

print(data)
if word in data:
    print("twinkle is presented")
else:
    print("twinkle is not presented")
    
    