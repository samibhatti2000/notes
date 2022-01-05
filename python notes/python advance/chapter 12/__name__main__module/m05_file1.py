def greet(name):
    print(f"good morning {name}")
    
if __name__ == "main": # this peace of code line help to do not run code in other file
    #if you importing this in other file  
    n = input("Enter a name\n")

    greet(n)