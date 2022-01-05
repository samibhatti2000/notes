while(True):
    print("Press q to quit")
    a = input("enter a number: ")
    if a == 'q':
        break
    try:
        a =int(a)
        if a>6:
            print("you entered a number graeter than 6")
    except Exception as e:
        print(e)
            
 
print("thanks for playing this game")