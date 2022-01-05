import main as m

stu_name = input("enter you name: ")
stu_id = input("enter student id: ")

st_name = m.student(stu_name,stu_id)

while (True):
    welcomeMsg = '''======Welcome to cantral library=======
    please choose following options
    1. Listing ll the books
    2.  Request a book
    3.  Return a book
    4.  Get student info
    5.  Exit the library
    ''' 
    print(welcomeMsg)
    while True:
        try:
            a = int(input("Enter your choice: "))   
            break
        except Exception as e:
            print("please enter a inteager ", e)
    
    if a==1:
        st_name.Total_book()
        st_name.current_static()
    elif a==2:
        st_name.stu_borrow_book()     
    elif a==3:
        # recbook = input("enter the book name you want to return: ")
        # st_name.recieved_back(recbook)
        st_name.return_book()
    elif a==4:
        st_name.stu_getinfo()
    elif a==5:
        while True:
            try:
                y = int(input("Are you sure to quit the program: press 1, if you are not sure to quit press: 2 :"))
                y = int(y)
                if y==1 or y==2:
                    print("please select right option")
                break
            except Exception as e:
                print("please enter a inteager ", e)
        
        if y==1:
            exit()
        elif y==2:
            print("your choice is 2 so we are not quite. Program is running")


