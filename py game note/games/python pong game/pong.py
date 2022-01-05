import turtle


wn = turtle.Screen()
wn.title("pong by @TokyoEdtech")
wn.bgcolor("black")
wn.setup(width=880, height=600)
wn.tracer(0)

# Paddle a
paddle_a = turtle.Turtle()
paddle_a.speed(0)
paddle_a.shape("square")
paddle_a.color("white")
paddle_a.shapesize(stretch_wid=5, stretch_len=1)
paddle_a.penup()
paddle_a.goto(-350, 0)



# Paddle b
paddle_b = turtle.Turtle()
paddle_b.speed(0)
paddle_b.shape("square")
paddle_b.color("white")
paddle_b.shapesize(stretch_wid=5, stretch_len=1)
paddle_b.penup()
paddle_b.goto(350, 0)



# Ball
Ball = turtle.Turtle()
Ball.speed(100)
Ball.shape("circle")
Ball.color("white")
# Ball.shapesize(stretch_wid=5, stretch_len=1)
Ball.penup()
Ball.goto(0, 0)
Ball.dx = 2
Ball.dy = -2


# ==============function==============
def paddle_a_up():
    y = paddle_a.ycor()
    y +=20
    paddle_a.sety(y)
#keyboard binding
wn.listen()
wn.onkeypress(paddle_a_up, "w")


def paddle_a_down():
    y = paddle_a.ycor()
    y -=20
    paddle_a.sety(y)
#keyboard binding
wn.listen()
wn.onkeypress(paddle_a_down, "s")


def paddle_b_up():
    y = paddle_b.ycor()
    y +=20
    paddle_b.sety(y)
#keyboard binding
wn.listen()
wn.onkeypress(paddle_b_up, "Up")

def paddle_b_down():
    y = paddle_b.ycor()
    y -=20
    paddle_b.sety(y)
#keyboard binding
wn.listen()
wn.onkeypress(paddle_b_down, "Down")





# ==============function==============



# Main game loop
while True:
    wn.update()
    
    # move ball
    Ball.setx(Ball.xcor() + Ball.dx)
    Ball.sety(Ball.ycor() + Ball.dy)

    # border checking
    if Ball.ycor() > 290:
        Ball.sety(290)
        Ball.dy *= -1
    if Ball.ycor() < -290:
        Ball.sety(-290)
        Ball.dy *= -1
    if Ball.xcor() > 390:
        Ball.goto(0, 0)
        Ball.dx *= -1
    if Ball.xcor() < -390:
        Ball.goto(0, 0)
        Ball.dx *= -1
        
    #Paddle and ball collision
    if Ball.xcor() > 340 and Ball.xcor() < 350 and Ball.ycor() < paddle_b.ycor() + 40 and Ball.ycor() > paddle_b.ycor() -40:
        Ball.setx(340)
        Ball.dx *= -1
    if Ball.xcor() < -340 and Ball.xcor() > -350 and Ball.ycor() < paddle_a.ycor() + 40 and Ball.ycor() > paddle_a.ycor() -40:
        Ball.setx(-340)
        Ball.dx *= -1