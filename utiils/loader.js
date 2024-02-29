export const load = {
    fonts: () => {
        loadFont("trouble", "./assets/TroubleBeneathTheDome.ttf")
        loadFont("deter", "./assets/DTM-Mono.otf")
        loadFont("hp", "./assets/ut-hp-font.ttf")
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
        loadSound("uimove", "./assets/ui bip.mp3")
    

    }
}