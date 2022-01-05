try:
    a = int(input("enter a number: "))
    c = 1/a
    print(c)
except ValueError as e:
    print(f"Please Enter a valid value: {e}")
except ZeroDivisionError as e:
    print(f"make sure you are are not dividing by zero: {e}")
except Exception as e:
    print("Exception occured")
    print(e)
    
print("Thanks for using this code")
