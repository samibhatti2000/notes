class Programmer:
    company = "microsoft"
    def putInfo(self, name, langauge, experince):
        self.name = name
        self.langauge = langauge
        self.experince = experince
        
    def getDetail(self):
        print(f"Company is: {self.company}")
        print(f"Name is: {self.name}")
        print(f"Language is: {self.langauge}")
        print(f"Experince is: {self.experince}")
        
        
harry = Programmer()
harry.putInfo("harry", "python", "pro")
harry.getDetail()
print("\n")

sam = Programmer()
sam.putInfo("sam", "python", "new")
sam.getDetail()
