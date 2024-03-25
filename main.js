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
window.playermaxHP = 20
window.playerHP = 20
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
        const texteStart = "* Papyrus blocks the way!/b/p* And he says you smell bad!"
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
    ruins_1: () => {
        add([
            rect(300, 20), // Mur du haut
            pos(150,60),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(20, 200), // Mur de gauche
            pos(20,160),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(20, 200), // Mur de gauche
            pos(560,80),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(20, 200), // Mur de gauche
            pos(1310,280),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(150, 20), // Mur diagonal hautgauche
            pos(20,140),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "wall",
        ]);
        add([
            rect(150, 20), // Mur diagonal basdroite
            pos(400,510),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "wall",
        ]);
        add([
            rect(150, 20), // Mur diagonal basgauche
            pos(40,340),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            rotate(45),
            "wall",
        ]);
        add([
            rect(150, 20), // Mur diagonal hautdroite
            pos(470,60),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            rotate(45),
            "wall",
        ]);
        add([
            rect(300, 20), // Mur du haut couloir
            pos(150,460),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(600, 20), // Mur du haut couloir
            pos(600,255),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(900, 20), // Mur du bas couloir
            pos(500,400),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(600, 20), // Mur droite couloir
            pos(1280,255),
            color(255, 255, 255, 0),
            body({isStatic: true}),
            area(),
            "wall",
        ]);
        add([
            rect(100, 20), // htbox porte
            pos(1200,240),
            color(255, 0, 255, 0),
            body({isStatic: true}),
            area(),
            "hitboxporte",
        ]);
        add([sprite("ruins_1"), pos(0, 0), scale(2)])
        if(window.currentRoom == "ruins_2"){
            UIManager.playerManager(vec2(1220,290))
            const limitUp = 240
            const limitDown = 270
            const limitLeft = 330
            const limitRight = 1040
            let playerX = 1040
            let playerY = 255
            window.player.onUpdate(() => {
                camPos(playerX, playerY)
            })
            window.player.onUpdate(() => {
                if(player.pos.y > limitUp && player.pos.y < limitDown){
                playerY = player.pos.y
                }
                if(player.pos.x > limitLeft && player.pos.x < limitRight){
                    playerX = player.pos.x 
                }
            })
        }
        else{UIManager.playerManager(vec2(280,235))
            const limitUp = 210
            const limitDown = 250
            const limitLeft = 280
            const limitRight = 995
            let playerX = player.pos.x
            let playerY = player.pos.y
            window.player.onUpdate(() => {
                camPos(playerX+45, playerY+30)
            })
            window.player.onUpdate(() => {
                if(player.pos.y > limitUp && player.pos.y < limitDown){
                playerY = player.pos.y
                }
                if(player.pos.x > limitLeft && player.pos.x < limitRight){
                    playerX = player.pos.x 
                }
            })
        }
        
        player.onCollide('hitboxporte', () => {
            go("ruins_2")
        })
    },
    ruins_2: () => {
        window.nextEvent = 0
        const hitboxdialog = add([
            rect(300, 20), // htbox porte
            pos(175,300),
            color(255, 0, 255, 0),
            body({isStatic: true}),
            area(),
            "hitboxdialog",
        ]);
        add([sprite("ruins_2"), pos(0, -350), scale(2.01)])
        const floweyow = add([sprite("floweyow"), pos(295, 215), scale(2)])
        UIManager.playerManager(vec2(305,455))
        player.play("idleu")
        const limitUp = 0
        const limitDown = 295
        const limitLeft = 280
        const limitRight = 995
        const playerX = player.pos.x
        let playerY = player.pos.y
        const hitboxback = add([
            rect(300, 20), // htbox porte
            pos(175,520),
            color(255, 0, 255, 0),
            body({isStatic: true}),
            area(),
            "hitboxback",
        ]);
        window.player.onUpdate(() => {
            camPos(playerX+16, playerY-162)
        })
        window.player.onUpdate(() => {
            if(player.pos.y > limitUp && player.pos.y < limitDown){
            playerY = player.pos.y + 162
            }
        })
        player.onCollide('hitboxdialog', () => {
            UIManager.displayDialogOW("* Howdy ! /b/p* I'm FLOWEY./b/p* FLOWEY the FLOWER!|* Hmmm...|* You're new to the /b UNDERGROUD,/p aren'tcha ?|* Golly,/p you must be so confused.|* Someone ought to teach you how things work around here!|* I guess little old me will have to do.|* Ready ? /p /b* Here we go !"
            , "up", true, "flowey")
        })
        onUpdate(() => {
            if(window.nextEvent == 1){
                wait(0.636, () => {go("flowey_tuto")})
        }})
        
        player.onCollide('hitboxback', () => {
            window.currentRoom = "ruins_2"
            go("ruins_1")
        })

    },
    flowey_tuto: () => {
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        const floweyspritetuto = add([sprite("flowey"), scale(2),pos(280,140)])
        floweyspritetuto.play("idle")
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(198,398)])
        add([text("HP" ,{
            size:10,
            font:"HP",
        } ),pos(270,404)])
        const hp = add([text(playerHP + " / " + playermaxHP,{
            size:20,
            font:"trouble",
        } ),pos((340+((playermaxHP-20)*1.2)),400)])
        
        onUpdate(() => {
            hp.use(text(playerHP + " / " + playermaxHP,{
                size:20,
                font:"trouble",
            } ))
        });
        const contour = add([
            rect(150 + 5*2, 125 + 5*2),
            pos(242 - 5, 257 - 5),
            color(255, 255, 255),
            area(),
            "border"
        ]);
        
        // Intérieur de la boîte (initial)
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
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
        updateWalls()
        UIManager.heartManager(310, 310)
        onUpdate(() => {
            UIManager.displayplayermaxHP(playermaxHP, vec2(303, 398))
            UIManager.displayplayerHP(playerHP, vec2(303, 398))
        });

        window.nextEvent = 0
        window.currentKeyPressHandler = null
        function dialog1(onComplete) {
            UIManager.displayDialogFight("See that heart ?/bThat is your SOUL,|Your SOUL starts off weak.", vec2(370,135), onComplete)
            const talk1 = onUpdate(() => {
                if (window.textIsWriting == true && floweyspritetuto.curAnim() == "idle") {
                    floweyspritetuto.play("talk")
                }
                else if (window.textIsWriting == false && floweyspritetuto.curAnim() !== "idle"){
                    floweyspritetuto.play("idle")
                }
                if(window.nextEvent > 0){
                    talk1.cancel()
                };
            })

        }
        function animateWink(onComplete) {
            wait(0.1, () => {
            const circleCenter = vec2(350, 140);
            const wink = add([
                sprite("wink"),
                pos(circleCenter),
                rotate(0),
                move(340,50),
                anchor("center"),
                opacity(1),
                lifespan(0.6, { fade: 0.5 }), // Assume animation lasts for 0.6 seconds
                "wink"
            ]);
            
            wink.onUpdate(() => {
                wink.angle += 120 * dt();
            });
            floweyspritetuto.play("wink");
            wink.onDestroy(() => {
                onComplete();
            });
        })
        }
        function dialog2(onComplete) {
            floweyspritetuto.play("idleside");
            const talk2 = onUpdate(() => {
                if (window.textIsWriting == true && floweyspritetuto.curAnim() == "idleside") {
                    floweyspritetuto.play("talkside")
                }
                else if (window.textIsWriting == false && floweyspritetuto.curAnim() !== "idleside"){
                    floweyspritetuto.play("idleside")
                }
                if(window.nextEvent > 1){
                    floweyspritetuto.play("idle")
                    talk2.cancel()
                };
            })
            spawnPellets()
            UIManager.displayDialogFight("Down here,/p LOVE is shared through.../p|Little white.../p/b'friendliness /bpellets.'|Are you ready ?", vec2(370,135), onComplete)
            
        }
        function spawnPellets(){
            window.pellet1 = add([sprite("pellets"), scale(1),pos(310,160), area(), "pellet"])
            pellet1.play("spin")
            tween(pellet1.pos, vec2(200, 110), 1, (p) => pellet1.pos = p, easings.linear)
            window.pellet2 = add([sprite("pellets"), scale(1),pos(310,160), area(), "pellet"])
            pellet2.play("spin")
            tween(pellet2.pos, vec2(245, 65), 1, (p) => pellet2.pos = p, easings.linear)
            window.pellet3 = add([sprite("pellets"), scale(1),pos(310,160), area(), "pellet"])
            pellet3.play("spin")
            tween(pellet3.pos, vec2(310, 45), 1, (p) => pellet3.pos = p, easings.linear)
            window.pellet4 = add([sprite("pellets"), scale(1),pos(310,160), area(), "pellet"])
            pellet4.play("spin")
            tween(pellet4.pos, vec2(380, 65), 1, (p) => pellet4.pos = p, easings.linear)
            window.pellet5 = add([sprite("pellets"), scale(1),pos(310,160), area(), "pellet"])
            pellet5.play("spin")
            tween(pellet5.pos, vec2(420, 110), 1, (p) => pellet5.pos = p, easings.linear)
        }
        function sendPellets(onComplete){
            UIManager.annoyingfloweydialog("Move around! /p/bGet as many as you can!", vec2(370,135), onComplete)
            const talk3 = onUpdate(() => {
                if (window.textIsWriting == true && floweyspritetuto.curAnim() == "idle") {
                    floweyspritetuto.play("talk")
                }
                else if (window.textIsWriting == false && floweyspritetuto.curAnim() !== "idle"){
                    floweyspritetuto.play("idle")
                }
                wait(1, () => {
                    floweyspritetuto.play("idle")
                    talk3.cancel()
                })
                
            })
            pellet1.use(move(heart.pos.angle(pellet1.pos), 100))
            pellet2.use(move(heart.pos.angle(pellet2.pos), 100))
            pellet3.use(move(heart.pos.angle(pellet3.pos), 100))
            pellet4.use(move(heart.pos.angle(pellet4.pos), 100))
            pellet5.use(move(heart.pos.angle(pellet5.pos), 100))
            window.gotHitByFlowey = false
            onCollide("heart", "pellet", () => {
                window.gotHitByFlowey = true
                shake(20)
            })
            wait(3.5, () => {
                if (window.gotHitByFlowey == false) {
                    floweyspritetuto.play("sassy")
                    wait(1.5, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                        go("flowey_tuto_1")
                    })
                }
            })
            const floweyDie = onUpdate(() => {
                if (window.gotHitByFlowey == true) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    destroyAll("pellet")
                    playerHP = 1
                    floweyspritetuto.play("grin")
                    wait(2, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                        go("flowey_tuto_die")
                        })
                    
                }
            })
        }
        function checkCollision(){
        }
        function startSequence1() {
            dialog1(() => {
                animateWink(() => {
                    dialog2(() => {
                        sendPellets(() => {
                            checkCollision(() => {

                            })
                        })
                    });
                });
            });
        }
        startSequence1()


    },
    flowey_tuto_1: () => {
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        const floweyspritetuto = add([sprite("flowey"), scale(2),pos(280,140)])
        floweyspritetuto.play("sassy")
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(198,398)])
        add([text("HP" ,{
            size:10,
            font:"HP",
        } ),pos(270,404)])
        const hp = add([text(playerHP + " / " + playermaxHP,{
            size:20,
            font:"trouble",
        } ),pos((340+((playermaxHP-20)*1.2)),400)])
        
        onUpdate(() => {
            hp.use(text(playerHP + " / " + playermaxHP,{
                size:20,
                font:"trouble",
            } ))
        });
        const contour = add([
            rect(150 + 5*2, 125 + 5*2),
            pos(242 - 5, 257 - 5),
            color(255, 255, 255),
            area(),
            "border"
        ]);
        
        // Intérieur de la boîte (initial)
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
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
        updateWalls()
        UIManager.heartManager(window.heartpreviouspos)
        onUpdate(() => {
            UIManager.displayplayermaxHP(playermaxHP, vec2(303, 398))
            UIManager.displayplayerHP(playerHP, vec2(303, 398))
        });

        window.nextEvent = 0
        window.currentKeyPressHandler = null
        function dialog1(onComplete) {
            UIManager.displayDialogFight("Hey buddy,/p/byou missed them.|Let's try again,/p/bokay?", vec2(370,135), onComplete)
            const talk1 = onUpdate(() => {
                if (window.textIsWriting == true && floweyspritetuto.curAnim() == "sassy") {
                    floweyspritetuto.play("sassytalk")
                }
                else if (window.textIsWriting == false && floweyspritetuto.curAnim() !== "sassy"){
                    floweyspritetuto.play("sassytalk")
                }
                if(window.nextEvent > 0){
                    floweyspritetuto.play("idle");
                    talk1.cancel()
                };
            })

        }
        function dialog2(onComplete) {
            floweyspritetuto.play("idle");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "idle") {
                    floweyspritetuto.play("idle")
                }
            })
            spawnPellets()
            sendPellets()
            
        }
        function spawnPellets(){
            window.pellet1 = add([sprite("pellets"), scale(1),pos(200,110), area(), "pellet"])
            pellet1.play("spin")
            window.pellet2 = add([sprite("pellets"), scale(1),pos(245,65), area(), "pellet"])
            pellet2.play("spin")
            window.pellet3 = add([sprite("pellets"), scale(1),pos(310,45), area(), "pellet"])
            pellet3.play("spin")
            window.pellet4 = add([sprite("pellets"), scale(1),pos(380,65), area(), "pellet"])
            pellet4.play("spin")
            window.pellet5 = add([sprite("pellets"), scale(1),pos(420,110), area(), "pellet"])
            pellet5.play("spin")
        }
        function sendPellets(onComplete){
            window.nextEvent = 1
            floweyspritetuto.play("idle");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "idle") {
                    floweyspritetuto.play("idle")
                }
            })
            pellet1.use(move(heart.pos.angle(pellet1.pos), 100))
            pellet2.use(move(heart.pos.angle(pellet2.pos), 100))
            pellet3.use(move(heart.pos.angle(pellet3.pos), 100))
            pellet4.use(move(heart.pos.angle(pellet4.pos), 100))
            pellet5.use(move(heart.pos.angle(pellet5.pos), 100))
            window.gotHitByFlowey = false
            onCollide("heart", "pellet", () => {
                window.gotHitByFlowey = true
                shake(20)
            })
            wait(4, () => {
                if (window.gotHitByFlowey == false) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    floweyspritetuto.play("pissed")
                    wait(2, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                        go("flowey_tuto_2")
                    })
                }
            })
            const floweyDie = onUpdate(() => {
                if (window.gotHitByFlowey == true) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    destroyAll("pellet")
                    playerHP = 1
                    floweyspritetuto.play("grin")
                    wait(2, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                    go("flowey_tuto_die")
                    })
                }
            })
        }
        function startSequence1() {
            dialog1(() => {
                    dialog2(() => {
                        sendPellets(() => {
                            checkCollision(() => {

                            })
                        })
                    });
            });
        }
        startSequence1()
    },
    flowey_tuto_2: () => {
        window.isInDialog = false
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        const floweyspritetuto = add([sprite("flowey"), scale(2),pos(280,140)])
        floweyspritetuto.play("pissed")
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(198,398)])
        add([text("HP" ,{
            size:10,
            font:"HP",
        } ),pos(270,404)])
        const hp = add([text(playerHP + " / " + playermaxHP,{
            size:20,
            font:"trouble",
        } ),pos((340+((playermaxHP-20)*1.2)),400)])
        
        onUpdate(() => {
            hp.use(text(playerHP + " / " + playermaxHP,{
                size:20,
                font:"trouble",
            } ))
        });
        const contour = add([
            rect(150 + 5*2, 125 + 5*2),
            pos(242 - 5, 257 - 5),
            color(255, 255, 255),
            area(),
            "border"
        ]);
        
        // Intérieur de la boîte (initial)
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
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
        updateWalls()
        UIManager.heartManager(window.heartpreviouspos)
        onUpdate(() => {
            UIManager.displayplayermaxHP(playermaxHP, vec2(303, 398))
            UIManager.displayplayerHP(playerHP, vec2(303, 398))
        });

        window.nextEvent = 0
        window.currentKeyPressHandler = null
        function dialog1(onComplete) {
            UIManager.displayDialogFight("Is this a joke?/p/bAre you braindead?/p/bRUN./p INTO./p THE./p/bBULLETS!!!", vec2(370,135), onComplete)
            const talk1 = onUpdate(() => {
                if (window.textIsWriting == true && floweyspritetuto.curAnim() == "pissed") {
                    floweyspritetuto.play("pissedtalk")
                }
                else if (window.textIsWriting == false && floweyspritetuto.curAnim() !== "pissedtalk"){
                    floweyspritetuto.play("pissedtalk")
                }
                if(window.nextEvent > 0){
                    floweyspritetuto.play("idle");
                    talk1.cancel()
                };
            })

        }
        function dialog2(onComplete) {
            floweyspritetuto.play("idle");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "idle") {
                    floweyspritetuto.play("idle")
                }
            })
            spawnPellets()
            sendPellets()
            
        }
        function spawnPellets(){
            window.pellet1 = add([sprite("pellets"), scale(1),pos(200,110), area(), "pellet"])
            pellet1.play("spin")
            window.pellet2 = add([sprite("pellets"), scale(1),pos(245,65), area(), "pellet"])
            pellet2.play("spin")
            window.pellet3 = add([sprite("pellets"), scale(1),pos(310,45), area(), "pellet"])
            pellet3.play("spin")
            window.pellet4 = add([sprite("pellets"), scale(1),pos(380,65), area(), "pellet"])
            pellet4.play("spin")
            window.pellet5 = add([sprite("pellets"), scale(1),pos(420,110), area(), "pellet"])
            pellet5.play("spin")
        }
        function sendPellets(onComplete){
            window.nextEvent = 1
            floweyspritetuto.play("idle");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "idle") {
                    floweyspritetuto.play("idle")
                }
            })
            pellet1.use(move(heart.pos.angle(pellet1.pos), 150))
            pellet2.use(move(heart.pos.angle(pellet2.pos), 150))
            pellet3.use(move(heart.pos.angle(pellet3.pos), 150))
            pellet4.use(move(heart.pos.angle(pellet4.pos), 150))
            pellet5.use(move(heart.pos.angle(pellet5.pos), 150))
            window.gotHitByFlowey = false
            onCollide("heart", "pellet", () => {
                window.gotHitByFlowey = true
                shake(20)
            })
            wait(6, () => {
                if (window.gotHitByFlowey == false) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    floweyspritetuto.play("evil")
                    wait(4, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                        go("flowey_tuto_3")
                    })
                }
            })
            const floweyDie = onUpdate(() => {
                if (window.gotHitByFlowey == true) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    destroyAll("pellet")
                    playerHP = 1
                    floweyspritetuto.play("grin")
                    wait(2, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                    go("flowey_tuto_die")
                    })
                }
            })
        }
        function startSequence1() {
            dialog1(() => {
                    dialog2(() => {
                        sendPellets(() => {
                            checkCollision(() => {

                            })
                        })
                    });
            });
        }
        startSequence1()
    },
    flowey_tuto_3: () => {
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        const floweyspritetuto = add([sprite("flowey"), scale(2),pos(280,140)])
        floweyspritetuto.play("evil")
        add([text("lv " + playerLV ,{
            size:22,
            font:"trouble",
        } ),pos(198,398)])
        add([text("HP" ,{
            size:10,
            font:"HP",
        } ),pos(270,404)])
        const hp = add([text(playerHP + " / " + playermaxHP,{
            size:20,
            font:"trouble",
        } ),pos((340+((playermaxHP-20)*1.2)),400)])
        
        onUpdate(() => {
            hp.use(text(playerHP + " / " + playermaxHP,{
                size:20,
                font:"trouble",
            } ))
        });
        const contour = add([
            rect(150 + 5*2, 125 + 5*2),
            pos(242 - 5, 257 - 5),
            color(255, 255, 255),
            area(),
            "border"
        ]);
        
        // Intérieur de la boîte (initial)
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
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
        updateWalls()
        UIManager.heartManager(window.heartpreviouspos)
        onUpdate(() => {
            UIManager.displayplayermaxHP(playermaxHP, vec2(303, 398))
            UIManager.displayplayerHP(playerHP, vec2(303, 398))
        });

        window.nextEvent = 0
        window.currentKeyPressHandler = null
        function dialog1(onComplete) {
            UIManager.displayDialogFight("You know what's going on here,/p/bdon't you ?|You just wanted to see me suffer.", vec2(370,135), onComplete)
            const talk1 = onUpdate(() => {
                if (window.textIsWriting == true && floweyspritetuto.curAnim() == "evil") {
                    floweyspritetuto.play("eviltalk")
                }
                else if (window.textIsWriting == false && floweyspritetuto.curAnim() !== "eviltalk"){
                    floweyspritetuto.play("eviltalk")
                }
                if(window.nextEvent > 0){
                    floweyspritetuto.play("evil");
                    talk1.cancel()
                };
            })

        }
        function dialog2(onComplete) {
            floweyspritetuto.play("evil");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "evil") {
                    floweyspritetuto.play("evil")
                }
            })
            spawnPellets()
            
        }
        function spawnPellets() {
            const circleCenter = vec2(310, 310); // Centre du cercle
            const radius = 100; // Rayon du cercle
            const pelletsCount = 50; // Nombre de pellets à générer
            const angleStep = 360 / pelletsCount; // Étape d'angle entre chaque pellet
            const delayPerPellet = 0.03; // Délai en secondes entre l'apparition de chaque pellet
        
            for (let i = 0; i < pelletsCount; i++) {
                // Calcul de l'angle pour un placement en contre-sens horaire, en commençant par le bas
                const angleInDegrees = (360 - (angleStep * i)) % 360;
                const angleInRadians = angleInDegrees * (Math.PI / 180); // Conversion en radians
                const pelletPos = vec2(
                    circleCenter.x + radius * Math.cos(angleInRadians), // Calcul de la position x
                    circleCenter.y + radius * Math.sin(angleInRadians) // Calcul de la position y
                );
        
                // Fonction pour ajouter un pellet après un délai
                wait(i * delayPerPellet, () => {
                    const pellet = add([
                        sprite("pellets"), 
                        scale(1),
                        pos(pelletPos.x, pelletPos.y), 
                        area(),
                        "pellet"
                    ]);
        
                    // Alternate between "spin" and "spin2" animations
                    if (i % 2 === 0) {
                        pellet.play("spin");
                    } else {
                        pellet.play("spin2");
                    }
                });
            }
        }
        
        function sendPellets(onComplete){
            wait(6, () => {
                if (window.gotHitByFlowey == false) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    floweyspritetuto.play("evil")
                    wait(4, () => {
                        go("flowey_tuto_3")
                    })
                }
            })
            const floweyDie = onUpdate(() => {
                if (window.gotHitByFlowey == true) {
                    destroy(window.fightdialogbox)
                    destroy(window.currentTextDisplay)
                    destroyAll("pellet")
                    playerHP = 1
                    floweyspritetuto.play("grin")
                    wait(2, () => {
                    go("flowey_tuto_die")
                    })
                }
            })
        }
        function startSequence1() {
            dialog1(() => {
                    dialog2(() => {
                        sendPellets(() => {
                            checkCollision(() => {

                            })
                        })
                    });
            });
        }
        startSequence1()
    },
    flowey_tuto_die: () => {

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
        
        
        add([sprite("bottomtrees1"), pos(0,0), scale(2)])
        
        UIManager.playerManager()
        window.player.onUpdate(() => {
            if(player.pos.x >320 && player.pos.x < 5120){
            camPos(player.pos.x, 240)
            }
        })
;   
    window.isInDialog = false
    UIManager.displayDialogOW("* Howdy ! /b/p* I'm FLOWEY./b/p* FLOWEY the FLOWER!", "up", true)
    UIManager.displayDialogOW("* Howdy ! /b/p* I'm FLOWEY./b/p* FLOWEY the FLOWER!", "up", true)



        },
    }
    
    

for (const key in scenes) {
    scene(key, scenes[key])
}

go("flowey_tuto")