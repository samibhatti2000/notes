with open("D:\\python first\\chapter 09\\this.txt", 'r') as fo:
    content = fo.read()

with open("D:\\python first\\chapter 09\\copy.txt", 'r') as co:
    content1 = co.read()

if content == content1:
    print("files are indentical")
else:
    print("files are not identical")