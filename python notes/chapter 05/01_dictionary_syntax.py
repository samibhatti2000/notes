
#Rule key of dictionary should be uniqe
#Rule values in dictionary can same
#Rule a = {} a variable with empty {} is dictionary not a set

#rule you cant duplicate values in dictionary
mydict = {
    "fast": "in a qick manner",
    "sam": "Sam is python king",   
    "marks": [45,68,],
    "seconddict":{ #nested dictionary
        'python': 'player is sam', #nested dictionary
        'king': 'king python harry'#nested dictionary
        
    } #nested dictionary
} 
sum1 = mydict['marks'] = [45,65,845,26]
print("total marks are:",sum(sum1)) #adding mydict value

print(mydict['sam'])
print(mydict['fast'])
print(mydict['seconddict']['king'])


