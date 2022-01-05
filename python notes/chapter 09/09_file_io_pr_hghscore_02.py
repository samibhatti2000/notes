def game(score01):
    score = score01
    #change the file location onboth three areas
    with open("D:\\python first\\chapter 09\\highscore.txt", 'r') as f:
        f = f.read()
        hiscore = int(f)
      
    if hiscore== '' :
        #change the file location onboth three areas
        with open("D:\\python first\\chapter 09\\highscore.txt", 'w') as f:
            score1 = str(score)
            f.write(score1)
    elif score>hiscore :
        #change the file location onboth three areas
         with open("D:\\python first\\chapter 09\\highscore.txt", 'w') as f:
            score1 = str(score)
            f.write(score1)
            print("new high score: ", score)

    return score
    
sr = 90
sc = game(sr)
print("your curruent score is:",sc)
