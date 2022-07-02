# Write Python 3 code in this online editor and run it.
import copy

def sq(n, lis):
    if n < 0:
        return print(lis)
    x = len(lis)
    b = x + x + 1
    fib = x 
    print(f"{x}+{x+1} = {x+x+x +  1}")
    lis.append(x + x+1)
    return sq(n-1, lis)

list_y = []
sq(8, list_y)