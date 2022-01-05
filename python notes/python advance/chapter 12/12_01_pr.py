def readfile(filename):
    try:
        with open(filename, "r") as f:
            print(f.read())
    except Exception as e:
        print(f"please check file doesnt exist: {e}")


readfile("1.txt")
readfile("2.txt")
readfile("3.txt")
   
