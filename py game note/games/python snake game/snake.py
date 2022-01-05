import math
import pygame
import random
import tkinter as tk
from tkinter import messagebox


class cube(object):
    rows = 0
    w = 0
    def __init__(self,start,dirnx=1,diryn=0,color=(255,0,0)):
        pass
    
    def move(self,dirnx,dirny):
        pass
    def draw(self,suface,eyes=False):
        pass
    
    
class snake(object):
    def __init__(self,color,pos):
        pass
    def move(self):
        pass
    def reset(self, pos):
        pass
    def addcube(self, surface):
        pass
    def draw(self, surface):
        pass
    
def drawGrid(w, rows, surface):
    sizebtwn = w // rows
    x = 0
    y = 0
    for i in range(rows):
        x = x + sizebtwn
        y = y + sizebtwn
        pygame.draw.line(surface, (255,255,255), (x,0), (x,w))
        pygame.draw.line(surface, (255,255,255), (0,y), (w,y))

def redrawWindows(surface):
    global rows, width
    surface.fill((0,0,0))
    drawGrid(width, rows, surface)
    pygame.display.update()

def randomSnack(rows, item):
    pass
def massage_box(subject, content):
    pass


def main():
    global width, rows
    width = 500
    rows =20
    win = pygame.display.set_mode((width, width))
    s = snake((255,0,0), (10,10))
    flag = True
    clock = pygame.time.Clock()
    while flag:
        pygame.time.delay(50)
        clock.tick(10)
        redrawWindows(win)
    pass



main()

    