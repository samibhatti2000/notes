import pygame
import random
import math
import time
from pygame import mixer

# intailize the pygame
pygame.init()

# craeting screen
width = 800
height = 600
screen = pygame.display.set_mode((width, height))

# ===============background img=====================
backimage = pygame.image.load("spacepic.jpg")
def backimg():
    screen.blit(backimage, (0, 0))

# =======adding sounds==============
mixer.music.load("bensound-goinghigher.mp3")  # background music sound
mixer.music.play(-1)

# Title and icon
pygame.display.set_caption("invader")
icon = pygame.image.load("space.png")
pygame.display.set_icon(icon)


# player
playerimg = pygame.image.load("space.png")
playerX = 370
playerY = 550
playerX_change = 0
playerY_change = 0
def player(x, y):
    screen.blit(playerimg, (x, y))


# making bullet

bulletimg = pygame.image.load("bullet.png")
bulletY = playerY
bulletX = playerX
bullet_change = 10
global bullet_state
bullet_state = False


def fire_bullet(x, y):
    screen.blit(bulletimg, (x + 16, y - 10))


# enemy
# ========
enemyimg = []
enemyX = []
enemyY = []
enemyX_change = []
enemyY_change = []
Num_of_enemy = 6

def enemy(x, y):
    screen.blit(enemyimg, (x, y))

# ===for loop for enemies===
for i in range(Num_of_enemy):
    enemyimg.append(pygame.image.load("chick.png"))
    enemyX.append(random.randint(0, 800))
    enemyY.append(random.randint(50, 600))
    enemyX_change.append(random.uniform(0.6, 0.8))
    enemyY_change.append(random.uniform(0.6, 0.8))

# =======only forsingle enemy==========
# enemyimg = pygame.image.load("chick.png")
# enemyX = random.randint(0, 800)
# enemyY = random.randint(50, 600)
# enemyX_change = random.uniform(0.6, 0.8)
# enemyY_change = random.uniform(0.6, 0.8)



# ====================SCORE==========================
def game_score(new_score):
    new_score = new_score
    with open("highscore.txt", 'r') as f:
        f = f.read()
        hiscore = int(f)

    return hiscore


global boolover
boolover = False
new_score = 0
hi_score = game_score(new_score)
str_hi_score = str(hi_score)

detail = f"Game over your score is: {new_score} || highscore: {hi_score}"

font = pygame.font.Font('freesansbold.ttf', 15)



textX = 10
textY = 10


# +++++++++ screen blit for scoore============
def show_Score(x, y):
    score = font.render("Score is: " + str(new_score), True, (255, 255, 255))
    screen.blit(score, (x, y))


def show_hi_Score(x, y):
    hiscore = font.render("Highscore is: " + str_hi_score,
                          True, (255, 255, 255))
    screen.blit(hiscore, (x, y))


# ====================SCORE==========================




def incollision(enemyX, enemyY, playerX, bullutY):
    distance = math.sqrt((math.pow(enemyX - bulletX, 2)) +
                         (math.pow(enemyY - bulletY, 2)))
    if distance < 27:
        return True
    else:
        return False


def in_player_collision(enemyX, enemyY, playerX, playerY):
    distance = math.sqrt((math.pow(enemyX - playerX, 2)) +
                         (math.pow(enemyY - playerY, 2)))
    if distance < 15:
        return True
    else:
        return False


# game loop
running = True
while running:

    # screen parameters RGB red, blue, green
    screen.fill((0, 0, 0))
    backimg()

    # =========this for loop is only for keystorkes==========================
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.quit
            running = False

        # if keystroke is pressed whether its right or left
        if event.type == pygame.KEYDOWN:
            print("A keystrike has been preesed")
            if event.key == pygame.K_LEFT:
                bulletX = playerX
                bulletY = playerY
                playerX_change = -0.7
                print("left key is pressed")
            if event.key == pygame.K_RIGHT:
                bulletX = playerX
                bulletY = playerY
                playerX_change = +0.7
                print("Right key is pressed")
            if event.key == pygame.K_UP:
                bulletX = playerX
                bulletY = playerY
                playerY_change = -0.7
                print("Right key is pressed")
            if event.key == pygame.K_DOWN:
                bulletX = playerX
                bulletY = playerY
                playerY_change = +0.7
                print("Right key is pressed")
            if event.key == pygame.K_SPACE:
                bullet_state = True
                # fire_bullet(playerX, bulletY)
                # code here what you want to do
                print("space ber is pressed")
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_RIGHT or event.key == pygame.K_SPACE or event.key == pygame.K_LEFT or event.key == pygame.K_UP or event.key == pygame.K_DOWN:
                bullet_state = False
                bulletX = playerX
                bulletY = playerY
                playerX_change = 0
                playerY_change = 0
                print("keystroke has been released")
    # =============This loop is for keyborad storke==== end ===================

    # =============== player and movement============
    playerX += playerX_change
    playerY += playerY_change
    player(playerX, playerY)


    for i in range(Num_of_enemy):
        enemyX[i] += enemyX_change[i]
        enemyY[i] += enemyY_change[i]
    # =============== player and movement============

    # ========this is a boundry snytax to reverse the motion of object========
    if playerY > 560:
        playerY = 560
    elif playerY < 0:
        playerY = 5

    if playerX < 0:
        playerX = 0
    elif playerX > 766:
        playerX = 766

    for i in range(Num_of_enemy):
        if enemyY[i] > 590:
            enemyY_change[i] = -0.6
        elif enemyY[i] < 0:
            enemyY_change[i] = 0.6

    for i in range(Num_of_enemy):
        if enemyX[i] < 0:
            enemyX_change[i] = 0.8
        elif enemyX[i] > 740:
            enemyX_change[i] = -0.8

    # ========this is a boundry snytax=========

    # =============Bullet movement============
    if bulletY <= 0:
        bulletY = playerY
        bulletX = playerX
    if bullet_state == True:
        bullet_sound = mixer.Sound("laser.wav")
        bullet_sound.play()
        bulletY -= bullet_change
        fire_bullet(bulletX, bulletY)
    # =====bullet and collision==============

    # this is a proper method for collision
    for i in range(Num_of_enemy):
        collision = incollision(enemyX[i], enemyY[i], bulletX, bulletY)
        if collision:

            bulletX = playerX
            enemyX[i] = random.randint(0, 800)
            enemyY[i] = random.randint(50, 600)
            new_score += 1
            if new_score > hi_score and boolover == False:
                with open("highscore.txt", 'w') as fo:
                    fo.write(str(new_score))
            print("bullet collision happend your score is:", new_score)  
            
        plycollision = in_player_collision(enemyX[i], enemyY[i], playerX, playerY)
        if plycollision:
            bullet_sound = mixer.Sound("explosion.wav")
            bullet_sound.play()
            game_over_font = pygame.font.Font("freesansbold.ttf", 60)
            gm_over_text = game_over_font.render("Game is over:  score: " + str(new_score) , True, (230, 200, 48))
            gameovr = lambda: screen.blit(gm_over_text, (70,250))
            boolover = True
            time.sleep(3)
            gameovr()
            print("spaceship chrased")
                  
                                 
    
    # ========This is alternaative method for collision=============
    # if ( round(bulletX) == round(enemyX) and round(playerY) > round(enemyY) and bullet_state == True ):
    #         bulletX = playerX
    #         enemyX = random.randint(0, 800)
    #         enemyY = random.randint(50, 600)
    #         score +=1
    #         print("collision happend your score is:", score)
    # ==collision betwenn bullet and enemy


    
    for i in range(Num_of_enemy): 
        screen.blit(enemyimg[i], (enemyX[i], enemyY[i]))
    
    show_Score(10, 10)
    show_hi_Score(10, 30) 
    if boolover:      
        screen.fill((0,0,0))
        gameovr()
        show_hi_Score(350, 400) 
        
    pygame.display.update()
