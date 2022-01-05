class Train:
    
    Lseats = []
    def __init__(self, tname, fare, seats):
        self.tname = tname
        self.fare = fare
        self.seats = seats
        totalseats = self.seats
        Lseats = []
        self.seats = Lseats
        R=0
        while R<totalseats:
            R+=1
            Lseats.append(R)
            
            
    def customerInfo(self,):
        pass
            
    def bookTicet(self, customer_name):
        self.cust = customer_name
        if(len(self.seats)>0):
            print(f"customer name is: {self.cust}")
            seatno =len(self.seats) 
            print(f"your seat is booked and your seat no is: {seatno}")
            a = len(self.seats)
            self.seats.remove(a)
            print(f"avalable train seats are: {self.seats}")
        else:
            print(f"customer name is: {self.cust}")
            print("sorry train full")
    
    def cancelTicet(self, seatno):
        self.seatno = seatno
        if ( (self.seatno in self.seats) != True ):   
            self.seats.append(self.seatno)
            print(f"canceled seat no: {self.seatno} and available now available seats are {self.seats}")
        elif (self.seatno in self.seats):
            print(f"seat no: {self.seatno} is already available")
        
        
    def getTinfo(self):
        print(f"train name is: {self.tname}")
        print(f"train fare is: RS {self.fare}")
        self.seats.sort()
        print(f"avalable train seats are: {self.seats}")
        
        
    

print("\nTrain info")
intercity = Train("Intercity Experss", 200, 5)
intercity.getTinfo()
print("\n")


intercity.bookTicet("sam")
intercity.bookTicet("harry")
intercity.bookTicet("jack")
intercity.cancelTicet(3)
intercity.bookTicet("ham")
