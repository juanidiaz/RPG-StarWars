#------------------------------------------------#
#                   VARIABLES                    #
#------------------------------------------------#

# Obejcts

var character = {
    name: undefined,
    isEnemy: false,
    isDefender: false,
    healthPoints: undefined,
    attackPower: undefined,
    counterAtackPower: undefined,
}

    attackPoint: undefined,

# Arrays





# Integers





# Strings





# Boolean






#------------------------------------------------#



# Redraw page (INITIAL)
- Create an object for characters that contain:
    + name
    + picture (path)
    + isEnemy (boolean = false)
    + isDefender (boolean = false)
    + [USER] Health Points (once the character becomes ME = random NEED PARAMETERS!)
    + [USER] Attack Power (**increases by its base Attack Power** = random NEED PARAMETERS!)
    + [DEFENDER] Attack Points (once the character is not ME = random NEED PARAMETERS!)
    + [DEFENDER] Counter Attack Power (once the character is not ME = random NEED PARAMETERS!)
    + attack counter (inits on 0)
- Page prints the four characters (with HP/AP visible) for the user to pick.
- Option to show instructions!
- Console Log the object info for every character

# User selects charater to play as (ON CLICK!)
- The selected character is placed in a YOUR CHARACTER area.
- All other three characters change their look and go to ENEMIES AVAILABLE TO ATTACK area
- The game stats (games played, games won, games lost) is displayed.

# User selects character to attack (ON CLICK!)
- Selected character changes look and is placed in DEFENDER area.
- "ATTACK" button is displayed

# User attacks
- User clicks on ATTACK button
- Calculations go as follwow:
    + User      health points = health points - counter attack power
    + Defender  attack points = attack points - attack power + ( attack power * attack counter )

- update player values
    + [IF] Validate if USER or DEFENDER has <0 health/attack points
    + [IF] Validate if any ENEMY left
    + [IF] Declare winner of game/challenge

- update screen


