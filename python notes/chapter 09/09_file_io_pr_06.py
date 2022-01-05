#make a copy of this.txt
fo = open("D:\\python first\\chapter 09\\this.txt", 'r')
content = fo.read()

co = open("D:\\python first\\chapter 09\\copy.txt", 'w')
data = co.write(content)

 