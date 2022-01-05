#can you change self to any variable like  harry
#yes youcan
class Sample:
    def __init__(anyvariable, name):
        anyvariable.name = name
        

obj = Sample("sam")
print(obj.name)