import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"
import { load } from "./utiils/loader.js"

kaboom(
    {
        width : 640,
        height : 480,
        letterbox : true
    }
)
load.fonts()
load.assets()
import { UIManager } from "./utiils/UIManager.js"

let playerName="Nael"
let playerLV = 1
let playermaxHP = 20
let playerHP = 17
window.BossHP = 680
window.BossMaxHP = 680

const scenes = {
    menu: () => {
    
    },
    1: () => {
        let enemyName="Papyrus"
        window.isBoss = true
        add([sprite("box"), pos(30, 240),scale (0.559)])
        const status = "start"
        add([sprite("blackbg")])
        add([sprite("papyrus"), scale(2),pos(250,40)])
        const positionTexte = vec2(60,275);
        const texteStart = "* Papyrus blocks the way!"
        window.currentText = texteStart
        window.currentTextDisplay = UIManager.animerTexte(window.currentText, positionTexte)
        UIManager.init();
        UIManager.displayCombatMenu(enemyName);
        add([text(playerName,{
            size:22,
            font:"trouble",
        } ),pos(30,400)])
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(128,400)])
        add([text("HP" ,{
            size:10,
            font:"HP",
        } ),pos(250,404)])
        add([text(playerHP + " / " + playermaxHP,{
            size:20,
            font:"trouble",
        } ),pos((320+((playermaxHP-20)*1.2)),400)])
        UIManager.displayplayermaxHP(playermaxHP, vec2(280,400))
        UIManager.displayplayerHP(playerHP, vec2(280, 400))
        
    },
    2: () => {
        add([sprite("blackbg")])
        add([sprite("papyrus"), scale(2),pos(250,40)])
        if(window.isBoss = true && window.hasAttacked == true){
            UIManager.displayBossHP(window.score)
            window.hasAttacked = false
        }
        
        add([
            text(window.BossHP, {
                size: 24, 
                font: "deter", 
                width: 510, 
                lineSpacing: 8
            })])
        if(window.miss == true){
            const missspr = add([sprite("miss"), pos(265, 110), scale(0.1)]);
            window.miss = false
            wait(1, () => {
                destroy(missspr)
            })
        }
        add([text(playerName,{
            size:22,
            font:"trouble",
        } ),pos(30,400)])
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(128,400)])
        add([text("HP" ,{
            size:10,
            font:"HP",
        } ),pos(250,404)])
        add([text(playerHP + " / " + playermaxHP,{
            size:20,
            font:"trouble",
        } ),pos((320+((playermaxHP-20)*1.2)),400)])
        UIManager.displayplayermaxHP(playermaxHP, vec2(280,400))
        UIManager.displayplayerHP(playerHP, vec2(280, 400))
        const fightbtn = add([
            sprite("fight_btn"),
            pos(35,430),
            {isSelected:false}])
        if (fightbtn.isSelected) {
            fightbtn.use(sprite("fight_btn1"))
        }
        const actbtn = add([
            sprite("act_btn"),
            pos(190,430),
            {isSelected:false}])
        if (actbtn.isSelected) {
            actbtn.use(sprite("act_btn1"))
        }
        const itembtn = add([
            sprite("item_btn"),
            pos(345,430),
            {isSelected:false}])
        if (itembtn.isSelected) {
            itembtn.use(sprite("item_btn1"))
        }
        const sparebtn = add([
            sprite("spare_btn"),
            pos(490,430),
            {isSelected:false}])
        if (sparebtn.isSelected) {
            sparebtn.use(sprite("spare_btn1"))
        }
        add([text(playerName,{
            size:22,
            font:"trouble",
        } ),pos(30,400)])
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(128,400)])
    
        const contour = add([
            rect(550 + 5*2, 125 + 5*2),
            pos(42 - 5, 257 - 5),
            color(255, 255, 255),
            area(),
            "border"
        ]);
        
        // Intérieur de la boîte (initial)
        const interieur = add([
            rect(550, 125),
            pos(42, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            // Supprimer les murs existants pour les recréer
            destroyAll("wall");
    
            // Épaisseur des murs
            const epaisseurMur = 5;
    
            // Création des murs en fonction des dimensions de 'interieur'
            add([
                rect(interieur.width, epaisseurMur), // Mur du haut
                pos(interieur.pos.x, interieur.pos.y - epaisseurMur),
                color(255, 255, 255, 0),
                body({isStatic: true}),
                area(),
                "wall",
            ]);
            add([
                rect(interieur.width, epaisseurMur), // Mur du bas
                pos(interieur.pos.x, interieur.pos.y + interieur.height),
                color(255, 255, 255, 0),
                body({isStatic: true}),
                area(),
                "wall",
            ]);
            add([
                rect(epaisseurMur, interieur.height + 2 * epaisseurMur), // Mur de gauche
                pos(interieur.pos.x - epaisseurMur, interieur.pos.y - epaisseurMur),
                color(255, 255, 255, 0),
                body({isStatic: true}),
                area(),
                "wall",
            ]);
            add([
                rect(epaisseurMur, interieur.height + 2 * epaisseurMur), // Mur de droite
                pos(interieur.pos.x + interieur.width, interieur.pos.y - epaisseurMur),
                color(255, 255, 255, 0),
                body({isStatic: true}),
                area(),
                "wall",
            ]);
        }
    
        // Animation pour transformer la boîte
        function reduceBoxSize() {
            let loopId = loop(0.007, () => {
                const ajustementLargeur = 14;
                const ajustementPosition = 7;
                if (interieur.width > 225) {
                    interieur.width -= ajustementLargeur;
                    contour.width -= ajustementLargeur;
                    interieur.pos.x += ajustementPosition;
                    contour.pos.x += ajustementPosition;
                    updateWalls();
                } else {
                    loopId.cancel(); 
                }
            });
        }
        function increaseBoxSize() {
            let loopId = loop(0.007, () => {
                const ajustementLargeur = 14;
                const ajustementPosition = 7;
                if (interieur.width < 550) { 
                    interieur.width += ajustementLargeur;
                    contour.width += ajustementLargeur;
                    interieur.pos.x -= ajustementPosition;
                    contour.pos.x -= ajustementPosition;
                    updateWalls();
                } else {
                    loopId.cancel(); 
                }
            });
        }
        reduceBoxSize();
        
        
        const SPEED = 150
        const heart = add ([
            sprite("heart"),
            pos(302, 310),
            area(),
            body(),
            {position:"fight"}
        ])
        onKeyDown("left", () => {
            heart.move(-SPEED, 0)
        })
        
        onKeyDown("right", () => {
            heart.move(SPEED, 0)
        })
        
        onKeyDown("up", () => {
            heart.move(0, -SPEED)
        })
        
        onKeyDown("down", () => {
            heart.move(0, SPEED)
        })
        let fightProgress = 1
        wait(5, () => {
            destroy(heart)
            increaseBoxSize()
            wait(0.45, () => {
                go("1")
            });
        });
    
    },
    3: () => {
    
    },
    snowdin: () => {
        const map = addLevel([
            ""

        ], {
            tileWidth: 25,
            tileHeight: 25,
            tiles: {
                "$": () => [
                    sprite("hitbox"),
                    scale(0.4),
                    area(),
                    body({ isStatic: true }),
                ]
            },
            
        })
        
        add([
            rect(20, 260), // Mur de gauche
            pos(-15,170),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(260, 20), // Mur de gauche
            pos(0,170),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(260, 20), // Mur de gauche
            pos(0,320),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(240, 20), // Mur de gauche
            pos(260,175),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            rotate(-45),
            area(),
            "wall",
        ]);
        
        add([
            rect(240, 20), // Mur de gauche
            pos(270,320),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            rotate(45),
            area(),
            "wall",
        ]);
        add([
            rect(430, 20), 
            pos(380,90),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(20, 100), // mur de gauche chalet de gauche
            pos(810,90),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(60, 20), // 
            pos(830,170),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(450, 20), 
            pos(950,170),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(20, 100), // mur de droite chalet de droite
            pos(1380,90),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(1780, 20), 
            pos(1380,90),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(5780, 20), 
            pos(180,400),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        
        add([sprite("snowdin"), pos(0,0), scale(2)])
        add([sprite("snowdin2"), pos(4096,0), scale(2)])
        
        
        const player = add([
            sprite("frisk"),
            pos(20, 260),
            anchor("center"),
            scale(2),
            area(),
            body(),
        ])
        add([sprite("bottomtrees1"), pos(0,0), scale(2)])
        
        player.onUpdate(() => {
            if(player.pos.x >320 && player.pos.x < 5120){
            camPos(player.pos.x, 240)
            }
        })
        const SPEED = 200
        onKeyDown("down", () => {
            player.move(0, SPEED)
            if (player.curAnim() !== "down") {
                player.play("down")
                onKeyRelease("down", () => {
                    player.play("idled")})
            }
        })
        
        onKeyDown("left", () => {
            player.move(-SPEED, 0)
            if (player.curAnim() !== "left") {
                player.play("left")
                onKeyRelease("left", () => {
                    player.play("idlel")})
            }
        })
        onKeyDown("right", () => {
            player.move(SPEED, 0)
            if (player.curAnim() !== "right") {
                player.play("right")
                onKeyRelease("right", () => {
                    player.play("idler")})
            }
        })
        onKeyDown("up", () => {
            player.move(0, -SPEED)
            if (player.curAnim() !== "up") {
                player.play("up")
                onKeyRelease("up", () => {
                    player.play("idleu")})
            }
        });
        ;
        UIManager.displayDialogOW("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.", "up")
    },
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go("snowdin")