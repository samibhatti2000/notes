class RailWayForm:
    formtype = "RailwayForm"
    def printdata(self):
        print(f"Name is {self.name}")
        print(f"Train is {self.train}")


harryapplicatiom = RailWayForm() #new object
harryapplicatiom.name = "harry"
harryapplicatiom.train = "orangeline"
harryapplicatiom.printdata()