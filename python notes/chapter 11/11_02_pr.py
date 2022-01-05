class animals:
    animaltype = "mammal"

class pets(animals):
    color = "white"
    

class dog(pets):
    
    @staticmethod
    def bark():
        print("Bow BOw")

d = dog()
d.bark()