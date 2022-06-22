- create a header/heading to welcome the user
- create a button to start the game
- what happens when i click the button?
- welcome message should become hidden
- show the main game/tamagotchi
- Do we need two pages
    - Yes or no
    - Single page applications vs. multiple page applications
- Start/Initialize the game
    - Create a tamagotchi/pet
        - properties
            - hunger
            - tiredness
            - boredom
            - age
            - Status/Living?
        - methods
            - feed
            - sleep
            - play
            - age?
        = Start some timers to increment the properties (setInterval? setTimeout?)
            -Hunger increments every 6 seconds
            - tiredness 4 seconds
            -age 5 seconds
            -boredom 3 seconds
    - Buttons to perform actions
        - call methods for tamagotchi
        - consider menu buttons
    - What happens if we fail to take care of the tamagotchi
        - If the tamagotchi reaches max levels of any of the properties, the game is over
            - hunger: 25
            - tiredness: 20
            - boredom : 50
            - age : 100
        - if the tamagotchi dies, game over message
    

const MAX_AGE= 90
const MAX_HUNGER=25
const MAX_BOREDOM=50

const playButton=