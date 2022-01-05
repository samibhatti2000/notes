
#spam word finder
word = input("enter the text: ")
spam = ["buy","promotion","clickit","virus","make money online"]
if(spam[0] in word or spam[1] in word or spam[2] in word or spam[3] in word or spam[4] in word):
    print("you entered a spam word: ",word)
else:
    print("your word is not a spam word:",word) 


