export const load = {
    fonts: () => {
        loadFont("trouble", "./assets/TroubleBeneathTheDome.ttf")
        loadFont("deter", "./assets/DTM-Mono.otf")
        loadFont("detersans", "./assets/DTM-Sans.otf")
        loadFont("hp", "./assets/ut-hp-font.ttf")
        loadFont("dmg", "./assets/undertale-damage.ttf")
        loadFont("dmg2", "./assets/undertale-attack-font.ttf")
        loadFont("plain", "./assets/plain.ttf")
    },
    assets: () => {
        loadSprite("blackbg", "./assets/blackbg.png")
        loadSprite("whitebg", "./assets/whitebg.png")
        loadSprite("logo", "./assets/logo.png")
        loadSprite("intro0", "./assets/spr_introimage_0.png")
        loadSprite("intro1", "./assets/spr_introimage_1.png")
        loadSprite("intro2", "./assets/spr_introimage_2.png")
        loadSprite("intro3", "./assets/spr_introimage_3.png")
        loadSprite("intro4", "./assets/spr_introimage_4.png")
        loadSprite("intro5", "./assets/spr_introimage_5.png")
        loadSprite("intro6", "./assets/spr_introimage_6.png")
        loadSprite("intro7", "./assets/spr_introimage_7.png")
        loadSprite("intro8", "./assets/spr_introimage_8.png")
        loadSprite("intro9", "./assets/spr_introimage_9.png")
        loadSprite("intro10", "./assets/spr_introimage_10.png")
        loadSprite("intro11", "./assets/spr_introlast_0.png")
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
        loadSprite("savebox", "./assets/savebox.png")
        loadSprite("heart", "./assets/heart.png")
        loadSprite("papyrus", "./assets/papyrus.png")
        loadSprite("attackbar", "./assets/attack_bar.png")
        loadSprite("attackcursor", "./assets/attack_cursor.png")
        loadSprite("attackcursor1", "./assets/attack_cursor1.png")
        loadSprite("ruins_1", "./assets/ruins_1.png")
        loadSprite("ruins_2", "./assets/ruins_2.png")
        loadSprite("ruins_3", "./assets/ruins_3.png")
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
                "grintalkidle":{
                    from: 6,
                    to: 6
                },
                "grinlaugh":{
                    from: 5,
                    to: 6,
                    speed: 18,
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
        loadSprite("fireballcutscene", "./assets/fireball_cutscene.png", {
            sliceX: 3,
            anims: {
                "idle": {
                    from: 1,
                    to: 1
                },
                "burn": {
                    from: 1,
                    to: 2,
                    speed: 8,
                    loop : true
                }
                ,
                "blink": {
                    from: 0,
                    to: 1,
                    speed: 16,
                    loop : true
                }
            }
        })
        loadSprite("torieltuto", "./assets/toriel_tuto.png", {
            sliceX: 2,
            anims: {
                "idle": {
                    from: 0,
                    to: 1
                },
                "talk": {
                    from: 0,
                    to: 1,
                    speed: 8,
                    loop : true
                }
            }
        })
        loadSprite("torieldialog", "./assets/torieldialog.png", {
            sliceX: 8,
            anims: {
                "idle": {
                    from: 0,
                    to: 0
                },
                "talk": {
                    from: 0,
                    to: 1,
                    speed: 8,
                    loop : true
                }
            }
        })
        loadSprite("torielwalk", "./assets/torielow.png", {
            sliceX: 16,
            anims: {
                "down": {
                    from: 0,
                    to: 3,
                    speed: 6,
                    loop : true
                },
                "left": {
                    from: 4,
                    to: 7,
                    speed: 6,
                    loop : true
                },
                "right": {
                    from: 8,
                    to: 11,
                    speed: 6,
                    loop : true
                },
                "up": {
                    from: 12,
                    to: 15,
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
                    from: 8,
                    to: 8,
                },
                "idleu": {
                    from: 12,
                    to: 12,
                },
            }
        })
        loadSprite("wink", "./assets/winkstar.png")
        loadSprite("floweyhurt", "./assets/floweyhurt.png")
        loadSprite("miss", "./assets/miss.png")
        loadSprite("textbubble", "./assets/textbubble.png")
        loadSprite("save_icon", "./assets/save.png", {
            sliceX: 2,
            anims: {
                "shine": {
                    from: 0,
                    to: 1,
                    speed: 6,
                    loop : true
                }}
            })
        loadSound("uimove", "./assets/ui bip.mp3")
        loadSound("bestfriend", "/assets/bestfriend.mp3")
        loadSound("floweyspeak", "/assets/floweyspeak.mp3")
        loadSound("evilfloweyspeak", "/assets/evilfloweyspeak.mp3")
        loadSound("floweyscream", "/assets/floweyscream.mp3")
        loadSound("floweyoutro", "/assets/floweyoutro.mp3")
        loadSound("heal", "/assets/heal.mp3")
        loadSound("pelletcircle", "/assets/pelletcircle.mp3")
        loadSound("floweylaugh", "/assets/floweylaugh.mp3")
        loadSound("encounter", "/assets/encounter.mp3")
        loadSound("torielspeak", "/assets/torielspeak.mp3")
        loadSound("fallendown", "/assets/fallendown.mp3")
        loadSound("damagetaken", "/assets/damagetaken.mp3")
        loadSound("startmenumusic", "/assets/startmenu.mp3")
        loadSound("whitewhoosh", "/assets/whitewhoosh.mp3")
        loadSound("introboom", "/assets/introboom.mp3")
        loadSound("musicintro", "/assets/onceuponatime.mp3")
        loadSound("generic2", "/assets/generic2.mp3")
        
    

    }
}