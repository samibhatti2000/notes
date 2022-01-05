content = True
word = "python"
fo = open("D:\\python first\\chapter 09\\log.txt", 'r+')
while content:
    i=+1
    content = fo.read()
    if word in content.lower():
        print("python is presented")
        print("on line no: ", i)
    else:
       print("python is not presented")
       
fo.close()
