import sys 
import pygame 
def check_events():
    """respond to keypresses and mouse events. """
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        elif even.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                #move the ship to the right. 
                ship.rect.centerx += 1 
                