import sys 
import pygame 
def run_game():
    pygame.init()
    screen = pygame.display.set_mode((1200,800))
    pygame.display.set_caption("alien invasion")
    bg_color = (230, 230, 230) 
    # start the main loop for the game. 
    while True:

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()
        # Redraw the screen during each pass through the loop. 
        screen.fill(bg_color)
        
        pygame.display.flip()

run_game()
