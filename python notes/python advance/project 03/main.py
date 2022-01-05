class libary:
    listbook = ['biology',"physic", "chemistry","pakistan studies","political science"]
    availbooks = list(listbook)
    booked_books = ["no book"]
    
    def __init__(self):
        self.availbooks = list(self.listbook)
        print("\n")
        lst = "\n".join(self.listbook)
        print(f"Total books books are: \n{lst}")
        print("\n")
        
    def Total_book(self):
        print("\n")
        lst = "\n".join(self.listbook)
        print(f"Total books books are: \n{lst}")
        print("\n")
        
    def book_a_books(self, bookname):
        self.bookname = bookname
        for item in self.bookname:
            if item in self.listbook:
                self.availbooks.remove(item)
                # self.booked_books.remove("no book")
                self.booked_books.append(item)
                print(f"{item} is boooked you can enjoy! it.")
            elif item in self.booked_books:
                print(f"{item} is already boooked you to someone else: Sorry you can't book this book.")
            else:
                print(f"Book name  {item}: this book is not presented")
                
    def displayAvailablebooks(self):
        print(f"avlailbooks are {self.availbooks}")
        print(f"booked books are {self.booked_books}")
    
    def recieved_back(self, book_r):
        self.book_r = str(book_r)
        self.bookrecived = []
        self.bookrecived.append(self.book_r)
        for item in self.bookrecived:
            if item in self.booked_books:
                self.booked_books.remove(item)
                self.availbooks.append(item)
                print(f"book is recieved {item}")
            else:
                print(f"this {item} book is not presented")
        
    
    def current_static(self):
        print(f"available books are {self.availbooks}")
        print(f"booked books are {self.booked_books}")
        print("\n")
        # self.books = listbook
        pass    

listofbook = ['biology',"physic", "chmeistry","pakistan studies","political science"]
booked_books = ["biology", "physic", "political science"]
booked_books2 = ["biology", "physic", "chmeistry","vscode"]
recivedbooks = ["physic", "chmeistry"]


# a = libary()
# a.book_a_books(booked_books)
# a.book_a_books(booked_books2)
# a.recieved_back(recivedbooks)
# # a.displayAvailablebooks()
# a.current_static()


#================ student class =====================
class student(libary):
   
    def __init__(self,stu_name,stu_id):
        super().__init__()
        self.stu_name = stu_name
        self.stu_id = stu_id
        self.stu_book_list = []

    
    
    def stu_borrow_book(self):
        while True:
            try:
                n = int(input("how many books you want to borrow in numbers: "))
                break
            except Exception as e:
                print("please enter a inteager ", e)
                
        
        for i in range(n):
            list1 = input("enter you book list: ")
            self.list2 = []
            if list1 in self.listbook:
                self.list2.append(list1)
                self.stu_book_list.append(list1)
                self.book_a_books(self.list2)
            elif list1 not in self.listbook:
                 print(f"Book name {list1} this book is not available or already issued: sorry")
            
    def return_book(self):
        recbook = input("enter the book name you want to return: ")
        self.list_recbook = []
        if recbook in self.listbook:
            self.stu_book_list.remove(recbook)
            self.recieved_back(recbook)    
    
        
    def stu_getinfo(self):
        print(f"Student name is: {self.stu_name}")
        print(f"Student id is: {self.stu_id}")
        print(f"books borrow by {self.stu_name} are: {self.stu_book_list} ")

#========================== using classes=======================

# sam = student("sam", 4011)
# # sam.stu_borrow_book()
# sam.current_static()


# stu_name = input("enter you name: ")
# stu_id = input("enter student id: ")

# stu_name = student(stu_name,stu_id)
# stu_name.stu_borrow_book()
# stu_name.stu_getinfo()
# print("\n")

# print("\n")
# harry = student("harry", "0022")
# harry.stu_borrow_book()
# harry.stu_getinfo()
# print("\n")
# sam.stu_getinfo()
