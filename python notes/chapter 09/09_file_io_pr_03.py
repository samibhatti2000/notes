#spam word remover in file
fo = open("D:\\python first\\chapter 09\\spam_check.txt", 'r+')
content = fo.read()

print(content)

spam = ["buy","promotion","clickit","virus","money online"]

# for spam in content:
#   content = content.replace(spam, "***********")

if(spam[0] in content or spam[1] in content or spam[2] in content or spam[3] in content or spam[4] in content):
    content = content.replace(spam[0],"@********#")
    content = content.replace(spam[2],"@********#")
    content = content.replace(spam[3],"@********#")
    content = content.replace(spam[4],"@********#")
    fo.truncate(0)
    fo.seek(0)
    fo.write(content)
    print(content)
    print("there is spam word")
else:
    print(content)
    print("there is no spam word")    
    
fo.close()
