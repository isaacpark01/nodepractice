import sys 
import pygame 
import gamefunctions as gf

from Settings import Settings  
from ship import Ship

def run_game():
    pygame.init()
    ai_settings = Settings()
    ship = Ship(screen) 
    screen = pygame.display.set_mode((
        ai_settings.screen_width, ai_settings.screen_height
    ))
    screen = pygame.display.set_mode((1200,800))
    pygame.display.set_caption("alien invasion")
    bg_color = (230, 230, 230) 
    # start the main loop for the game. 
    while True:
        gf.check_events()
        gf.update_screen(ai_settings, screen, ship)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()
        # Redraw the screen during each pass through the loop. 
        screen.fill(bg_color)
        screen.fill(ai_settings.bg_color)
        ship.blitme()

        #make the most recently drawn screen visible 
        pygame.display.flip()

run_game()
