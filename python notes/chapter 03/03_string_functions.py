story = "once upon a time there was a youtuber and coder name harry"

#String Function
print(len(story))
print('''story.endswith ("harry"):''', story.endswith("harry"))
print('''story.count("o"):''', story.count("o"))
print('''story.capitalize():''', story.capitalize())
print('''story.find(harry):''', story.find("harry"))
print('''story.replace("harry", "sam"):''', story.replace("harry", "sam")) 

this = "    hi this space remover       "

print(this)
print(this.strip())#this method remove spaces