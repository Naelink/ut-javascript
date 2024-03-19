export const load = {
    fonts: () => {
        loadFont("trouble", "./assets/TroubleBeneathTheDome.ttf")
        loadFont("deter", "./assets/DTM-Mono.otf")
        loadFont("hp", "./assets/ut-hp-font.ttf")
        loadFont("dmg", "./assets/undertale-damage.ttf")
        loadFont("dmg2", "./assets/undertale-attack-font.ttf")
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
                    speed: 4,
                    loop : true
                },
                "left": {
                    // Starts from frame 0, ends at frame 3
                    from: 4,
                    to: 5,
                    speed: 4,
                    loop : true
                },
                "right": {
                    from: 6,
                    to: 7,
                    speed: 4,
                    loop : true
                },
                "up": {
                    from: 8,
                    to: 11,
                    speed: 4,
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
        loadSprite("miss", "./assets/miss.png")
        loadSound("uimove", "./assets/ui bip.mp3")
        
    

    }
}