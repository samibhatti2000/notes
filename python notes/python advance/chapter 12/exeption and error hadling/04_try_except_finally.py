try:
    i = int(input("enter a number: "))
    c = 1/i
except Exception as e:
    print(e)
    exit()
finally: #finaly is must with try statment
    print("we are done")
    
print("thanks for using this program") # if program exit with exit() thi statment doesnt print


