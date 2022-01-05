#word remover from string
def remove_and_strip(string, word):
    newstr = string.replace(word, "")
    return newstr.strip()


this = " sam wons game "
n = remove_and_strip(this, "wons") #remove "wons" this = " sam wons game "
print(n)

