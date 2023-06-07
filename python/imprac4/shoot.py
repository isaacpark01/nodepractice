import sys 
import pygame 

from settings import Settings 

def run_game():
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode((
        ai_settings.screen_width, ai_settings.screen_height
    ))
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
        screen.fill(ai_settings.bg_color)
        pygame.display.flip()

run_game()
