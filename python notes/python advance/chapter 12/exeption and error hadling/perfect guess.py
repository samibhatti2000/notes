import random

def game(score01):
    score = score01
    with open("D:\\python notes\\python advance\\exeption hadling\\highscore.txt", 'r') as f:
        f = f.read()
        hiscore = int(f)
        # hiscore = int(float(hiscoretypecast))
              
    if hiscore== '' :
        with open("D:\\python notes\\python advance\\exeption hadling\\highscore.txt", 'w') as fo:
            score1 = str(score)
            fo.write(score1)
    elif score<hiscore :
         with open("D:\\python notes\\python advance\\exeption hadling\\highscore.txt", 'w') as fo:
            score1 = str(score)
            fo.write(score1)
            return score1
            print("new high score: ", score)

    return hiscore

#===============highscore function ====================== =

randnum = random.randint(1, 100)
yourguess = None
guesses = 0
while (yourguess != randnum):
    guesses+=1
    yourguess = int(input("enter you guess: "))
    if (yourguess==randnum):
        print(f"you guess it right! : {randnum}")
    elif(yourguess<randnum):
        print(f"you guess is smaller try something greater ")
    elif(yourguess>randnum):
        print("your guess is greater try something smaller")

print(f"your guesses number: {int(guesses)}")
newscore =  game(guesses)
print(f"highscore {newscore}")



