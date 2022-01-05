mydict = {
    "fast": "in a qick manner",
    "sam": "Sam is python king",   
    "marks": [45,68,],
    "seconddict":{ #nested dictionary
        'python': 'player is sam', #nested dictionary
        'king': 'king python harry'#nested dictionary
        
    }, #nested dictionary
    1: 2
} 

print(list(mydict.keys())) #find key in dictionary
print(list(mydict.values())) #find value in dictionary
print(list(mydict.items())) #find key and values in the form of tuples

secdict = {
    "harry": "harry is a youtuber",
    "python": "best for Ai"
    
}

mydict.update(secdict) # dict.upadte to existing dictionary
print("\n", mydict.items()) # show all the items in round brakets
print("\n", mydict.get("sam")) #if doesnt find dict.get dont throw error
# print(mydict[xyz]) throw error becauze key not found


