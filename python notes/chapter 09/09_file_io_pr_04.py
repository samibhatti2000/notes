fo = open("D:\\python first\\chapter 09\\log.txt", 'r+')
content = fo.read()

word = "python"

if word in content.lower():
    print("python is presented")
else:
   print("python is not presented")
   
fo.close()