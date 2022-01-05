import random

def game(you1):
  comp_chocie = ""
  randno = random.randint(1, 3)
  
  if (randno == 1):
       comp_chocie = "s"
  elif(randno == 2):
       comp_chocie = "w"
  elif(randno == 3):
      comp_chocie = "g"
  com_print = "comp turn: snake(s) water(w) Gun(g) choice is: ", comp_chocie
  play_print = "player turn: snake(s) water(w) Gun(g) choice is: ", you1
  
  print("\n")
  print(com_print)
  print(play_print)
  
  if(comp_chocie == "s" and you1 == "g" ):
      print("you wins")
  elif(comp_chocie =="w" and you1 == "s"):
      print("you wins")
  elif(comp_chocie == "g" and you1 == "w"):
      print("you wins")
  elif(comp_chocie == you1):
      print("match ties")
  else:
      print("comp wins")
  
you2 = input("player turn:snake(s) water(w) Gun(g) choice is: ")
game(you2)