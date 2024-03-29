export const load = {
    fonts: () => {
        loadFont("trouble", "./assets/TroubleBeneathTheDome.ttf")
        loadFont("deter", "./assets/DTM-Mono.otf")
        loadFont("hp", "./assets/ut-hp-font.ttf")
        loadFont("dmg", "./assets/undertale-damage.ttf")
        loadFont("dmg2", "./assets/undertale-attack-font.ttf")
        loadFont("plain", "./assets/plain.ttf")
    },
    assets: () => {
        loadSprite("blackbg", "./assets/blackbg.png")
        loadSprite("act_btn", "./assets/act_btn.png")
        loadSprite("act_btn1", "./assets/act_btn1.png")
        loadSprite("fight_btn", "./assets/fight_btn.png")
        loadSprite("fight_btn1", "./assets/fight_btn1.png")
        loadSprite("item_btn", "./assets/item_btn.png")
        loadSprite("item_btn1", "./assets/item_btn1.png")
        loadSprite("spare_btn", "./assets/spare_btn.png")
        loadSprite("spare_btn1", "./assets/mercy_btn.png")
        loadSprite("box", "./assets/box.png")
        loadSprite("box2", "./assets/box2.png")
        loadSprite("heart", "./assets/heart.png")
        loadSprite("papyrus", "./assets/papyrus.png")
        loadSprite("attackbar", "./assets/attack_bar.png")
        loadSprite("attackcursor", "./assets/attack_cursor.png")
        loadSprite("attackcursor1", "./assets/attack_cursor1.png")
        loadSprite("ruins_1", "./assets/ruins_1.png")
        loadSprite("ruins_2", "./assets/ruins_2.png")
        loadSprite("snowdin", "./assets/snowdin1.png")
        loadSprite("snowdin2", "./assets/snowdin2.png")
        loadSprite("bottomtrees1", "./assets/bottomtrees1.png")
        loadSprite("hitbox", "./assets/0.png")
        loadSprite("atk", "./assets/atk1.png", {
            sliceX: 7,
            anims: {
                "idle": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 6,
                    speed: 7
                }
            }
        })
        loadSprite("frisk", "./assets/frisk.png", {
            sliceX: 12,
            anims: {
                "down": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 3,
                    speed: 6,
                    loop : true
                },
                "left": {
                    // Starts from frame 0, ends at frame 3
                    from: 4,
                    to: 5,
                    speed: 6,
                    loop : true
                },
                "right": {
                    from: 6,
                    to: 7,
                    speed: 6,
                    loop : true
                },
                "up": {
                    from: 8,
                    to: 11,
                    speed: 6,
                    loop : true
                },
                "idled": {
                    from: 0,
                    to: 0
                },
                "idlel": {
                    from: 4,
                    to: 4,
                },
                "idler": {
                    from: 6,
                    to: 6,
                },
                "idleu": {
                    from: 8,
                    to: 8,
                },
            }
        })
        loadSprite("flowey", "./assets/flowey.png", {
            sliceX: 13,
            anims: {
                "idle": {
                    from: 0,
                    to: 0,
                    speed: 6,
                    loop : true
                },
                "wink": {
                    from: 2,
                    to: 2
                },
                "talk": {
                    from: 0,
                    to: 1,
                    speed: 6,
                    loop : true
                },
                "talkside":{
                    from: 3,
                    to: 4,
                    speed: 6,
                    loop : true
                },
                "idleside":{
                    from: 3,
                    to: 3,
                },
                "grin":{
                    from: 5,
                    to: 5,
                },
                "grintalk":{
                    from: 5,
                    to: 6,
                    speed: 6,
                    loop : true
                },
                "sassy":{
                    from: 7,
                    to: 7,
                },
                "sassytalk":{
                    from: 7,
                    to: 8,
                    speed: 6,
                    loop : true
                },
                "pissed":{
                    from: 9,
                    to: 9,
                },
                "pissedtalk":{
                    from: 9,
                    to: 10,
                    speed: 6,
                    loop : true
                },
                "evil":{
                    from: 11,
                    to: 11,
                },
                "eviltalk":{
                    from: 11,
                    to: 12,
                    speed: 6,
                    loop : true
                }
            }
        })
        loadSprite("floweyow", "./assets/floweyow.png", {
            sliceX: 10,
            anims: {
                "idle": {
                    from: 0,
                    to: 0,
                }
            }
        })
        loadSprite("pellets", "./assets/pellets.png", {
            sliceX: 2,
            anims: {
                "spin": {
                    from: 0,
                    to: 1,
                    speed: 14,
                    loop : true
                },
                "spin2": {
                    from: 1,
                    to: 0,
                    speed: 14,
                    loop : true
                }
            }
        })
        loadSprite("wink", "./assets/winkstar.png")
        loadSprite("miss", "./assets/miss.png")
        loadSprite("textbubble", "./assets/textbubble.png")
        loadSound("uimove", "./assets/ui bip.mp3")
        
    

    }
}