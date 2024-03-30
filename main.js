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
    ruins_1: (transition) => {
        if(transition){
            tween(1, 0, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
        wait(1, () => {
            destroy(transition)
        })
        }
        const newData = { newValue: "0" };
                            fetch('/api/updateTempPlotValue', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newData),
                            })
                            .then(response => response.text())
                            .then(result => {
                            console.log(result);
                            });
        
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
            pos(1200,250),
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
            const transition = add([
                rect(width(), height()),
                color(0,0,0),
                opacity(1),
                stay(),
                fixed(),
                z(100),
                {
                    add() {
                        tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                        wait(0.5, () => {
                            go("ruins_2", transition)
                        })
                    }
                }
            ])
        });
    },
    ruins_2: ( transition ) => {
        if(transition){
            tween(1, 0, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
        wait(1, () => {
            destroy(transition)
        })
        }
        let tuto_over = false
        let torielGone = false
        fetch('/api/getTempPlotValue')
        .then(response => response.json())
        .then(data => {
            const plotValue = parseInt(data.data, 10); // Convertit la chaîne en entier
            if (!isNaN(plotValue) && plotValue == 1) { 
                tuto_over = true;
                torielGone = false;
                console.log("Plotvalue = 1");
            } else if(plotValue > 1) {
                tuto_over = true
                torielGone = true
                console.log("Plotvalue supérieur à 1");
            }
            else {
                console.log("La valeur n'est pas un nombre valide.");
            }
            
        if(tuto_over == false){
            window.nextEvent = 0
            
            const hitboxdialog = add([
                rect(500, 20), // htbox porte
                pos(105,300),
                color(255, 255, 0),
                body({isStatic: true}),
                area(),
                "hitboxdialog",
            ]);
            add([
                rect(150, 20),
                pos(75,450),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(30),
                "murdiagonalbas"
            ]);
            add([
                rect(150, 20),
                pos(400,520),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(-30),
                "murdiagonalbas"
            ]);
            add([
                rect(550, 20),
                pos(520,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(90),
                "murgauche"
            ]);
            add([
                rect(550, 20),
                pos(120,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(90),
                "murdroite"
            ]);
            add([
                rect(150, 20),
                pos(130,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "murhaut"
            ]);
            add([
                rect(150, 20),
                pos(370,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "murhaut"
            ]);
            add([
                rect(150, 20),
                pos(240,-100),
                color(0, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "hitboxhaut"
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
                pos(175,530),
                color(0, 0, 0, 0),
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
                , "up", true, "flowey", "idle", "talk", )
                window.bestfriendost = play("bestfriend", {
                    volume: 1,
                    loop: true
                })
            })
            let speaking = play("floweyspeak", {
                volume: 1,
                paused: true,
                loop:true
            })
            onUpdate(() => {
                if (window.textIsWriting == true) {
                    speaking.paused = false
                }
                else if(!window.textIsWriting){
                    speaking.paused = true
                }
            })
            let fightStarted = false
            onUpdate(() => {
                if(window.nextEvent == 1){
                    if(!fightStarted){
                    fightStarted = true
                    UIManager.startFightAnimationFlowey()
                    }
            }})
            
            player.onCollide('hitboxback', () => {
                window.currentRoom = "ruins_2"
                const transition = add([
                    rect(width(), height()),
                    color(0,0,0),
                    opacity(1),
                    stay(),
                    fixed(),
                    z(100),
                    {
                        add() {
                            tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                            wait(0.5, () => {
                                go("ruins_1", transition)
                            })
                        }
                    }
                ])
            })
            player.onCollide('hitboxhaut', () => {
                window.currentRoom = "ruins_2"
                const transition = add([
                    rect(width(), height()),
                    color(0,0,0),
                    opacity(1),
                    stay(),
                    fixed(),
                    z(100),
                    {
                        add() {
                            tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                            wait(0.5, () => {
                                go("ruins_3", transition)
                            })
                        }
                    }
                ])
            })
        }
        else if (tuto_over == true && torielGone == false){
            
            add([
                rect(150, 20),
                pos(75,450),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(30),
                "murdiagonalbas"
            ]);
            add([
                rect(150, 20),
                pos(400,520),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(-30),
                "murdiagonalbas"
            ]);
            add([
                rect(550, 20),
                pos(520,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(90),
                "murgauche"
            ]);
            add([
                rect(550, 20),
                pos(120,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(90),
                "murdroite"
            ]);
            add([
                rect(150, 20),
                pos(130,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "murhaut"
            ]);
            add([
                rect(150, 20),
                pos(370,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "murhaut"
            ]);
            const hitboxhaut = add([
                rect(150, 20),
                pos(240,-100),
                color(0, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "hitboxhaut"
            ]);
            add([sprite("ruins_2"), pos(0, -350), scale(2.01)])
            const floweyow = add([sprite("torielwalk"), pos(295, 215), scale(2), opacity(1),"torielOW", area()])
            UIManager.playerManager(vec2(305,340))
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
                color(0, 0, 0, 0),
                body({isStatic: true}),
                area(),
                "hitboxback",
            ]);
            window.player.onUpdate(() => {
                camPos(playerX+16, playerY-50)
            })
            window.player.onUpdate(() => {
                if(player.pos.y > limitUp && player.pos.y < limitDown){
                playerY = player.pos.y +50
                }
            })
            function torielLeave(){
                tween(floweyow.pos, vec2(290, -100), 2, (p) => floweyow.pos = p, easings.linear)
                floweyow.play("up")
                floweyow.onCollide("hitboxhaut", () => {
                    floweyow.play("idleu")
                    tween(1, 0, 0.5, (t) => floweyow.opacity = t, easings.easeOutQuad)
                })
                const newData = { newValue: "2" };
                            fetch('/api/updateTempPlotValue', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newData),
                            })
                            .then(response => response.text())
                            .then(result => {
                            console.log(result);
                            });
            }
            UIManager.displayDialogOW("* This way."
                , "up", true, "torieldialog", "idle", "talk", torielLeave)
            let speaking = play("torielspeak", {
                volume: 1,
                paused: true,
                loop:true
            })
            onUpdate(() => {
                if (window.textIsWriting == true) {
                    speaking.paused = false
                }
                else if(!window.textIsWriting){
                    speaking.paused = true
                }
            })
            let fightStarted = false
            
            player.onCollide('hitboxback', () => {
                window.currentRoom = "ruins_2"
                const transition = add([
                    rect(width(), height()),
                    color(0,0,0),
                    opacity(1),
                    stay(),
                    fixed(),
                    z(100),
                    {
                        add() {
                            tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                            wait(0.5, () => {
                                go("ruins_1", transition)
                            })
                        }
                    }
                ])
            })
            player.onCollide('hitboxhaut', () => {
                window.currentRoom = "ruins_2"
                const transition = add([
                    rect(width(), height()),
                    color(0,0,0),
                    opacity(1),
                    stay(),
                    fixed(),
                    z(100),
                    {
                        add() {
                            tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                            wait(0.5, () => {
                                go("ruins_3", transition)
                            })
                        }
                    }
                ])
            })
    
        }
        else if (tuto_over == true && torielGone == true){
            
            add([
                rect(150, 20),
                pos(75,450),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(30),
                "murdiagonalbas"
            ]);
            add([
                rect(150, 20),
                pos(400,520),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(-30),
                "murdiagonalbas"
            ]);
            add([
                rect(550, 20),
                pos(520,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(90),
                "murgauche"
            ]);
            add([
                rect(550, 20),
                pos(120,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(90),
                "murdroite"
            ]);
            add([
                rect(150, 20),
                pos(130,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "murhaut"
            ]);
            add([
                rect(150, 20),
                pos(370,-80),
                color(255, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "murhaut"
            ]);
            const hitboxhaut = add([
                rect(150, 20),
                pos(240,-100),
                color(0, 255, 255),
                body({isStatic: true}),
                area(),
                rotate(0),
                "hitboxhaut"
            ]);
            add([sprite("ruins_2"), pos(0, -350), scale(2.01)])
            UIManager.playerManager(vec2(305,340))
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
                color(0, 0, 0, 0),
                body({isStatic: true}),
                area(),
                "hitboxback",
            ]);
            window.player.onUpdate(() => {
                camPos(playerX+16, playerY-50)
            })
            window.player.onUpdate(() => {
                if(player.pos.y > limitUp && player.pos.y < limitDown){
                playerY = player.pos.y +50
                }
            })
            player.onCollide('hitboxback', () => {
                window.currentRoom = "ruins_2"
                const transition = add([
                    rect(width(), height()),
                    color(0,0,0),
                    opacity(1),
                    stay(),
                    fixed(),
                    z(100),
                    {
                        add() {
                            tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                            wait(0.5, () => {
                                go("ruins_1", transition)
                            })
                        }
                    }
                ])
            })
            player.onCollide('hitboxhaut', () => {
                window.currentRoom = "ruins_2"
                const transition = add([
                    rect(width(), height()),
                    color(0,0,0),
                    opacity(1),
                    stay(),
                    fixed(),
                    z(100),
                    {
                        add() {
                            tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                            wait(0.5, () => {
                                go("ruins_3", transition)
                            })
                        }
                    }
                ])
            })
        }
        });

    },
    flowey_tuto: () => {
        tween(1, 0, 0.5, (t) => transitionfight.opacity = t, easings.easeOutQuad)
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
        let speaking = play("floweyspeak", {
            volume: 1,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
        window.currentKeyPressHandler = null
        function dialog1(onComplete) {
            wait(0.8, () => {
            UIManager.displayDialogFight("See that heart ?/bThat is your SOUL,|Your SOUL starts off weak.", vec2(370,135), onComplete)
            })
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
                play("damagetaken")
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
                    window.bestfriendost.paused = true
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
        window.bestfriendost.speed = 0.90
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
                play("damagetaken")
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
                    window.bestfriendost.paused = true
                    playerHP = 1
                    floweyspritetuto.play("grin")
                    wait(2, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                    go("flowey_tuto_die")
                    })
                }
            })
        }
        let speaking = play("floweyspeak", {
            volume: 1,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
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
        window.bestfriendost.speed = 0.80
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
                play("damagetaken")
                shake(20)
            })
            wait(5, () => {
                window.bestfriendost.paused = true
                play("floweyoutro",{
                    volume: 2
                })
                
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
                    window.bestfriendost.paused = true
                    playerHP = 1
                    floweyspritetuto.play("grin")
                    wait(2, () => {
                        window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                    go("flowey_tuto_die")
                    })
                }
            })
        }
        let speaking = play("floweyspeak", {
            volume: 0.8,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
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
        const floweyspritetuto = add([sprite("flowey"), scale(2),pos(280,140),rotate(0)])
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
        let speaking = play("evilfloweyspeak", {
            volume: 1,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
        function dialog2(onComplete) {
            floweyspritetuto.play("evil");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "evil") {
                    floweyspritetuto.play("evil")
                }
            })
            spawnPellets()
            
        }
        function dialog3(onComplete){
            wait(2, () => {
            UIManager.displayDialogFight("Die.", vec2(370,135), onComplete)
            })
        }
        function spawnPellets() {
            const circleCenter = vec2(310, 310); // Centre du cercle
            play("pelletcircle")
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
            dialog3(() => {
                sendPellets(() => {

                })
            })
        }
        
    function sendPellets(onComplete) {
    const circleCenter = vec2(310, 310); // Centre du cercle
    const initialRadius = 100; // Rayon initial du cercle
    const pelletsCount = 50; // Nombre de pellets à gérer
    const shrinkDuration = 15; // Durée totale du rétrécissement en secondes
    const shrinkStep = initialRadius / (shrinkDuration / 0.03); // Combien rétrécir le rayon à chaque étape
    play("floweylaugh")
    floweyspritetuto.play("grin");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "grin") {
                    floweyspritetuto.play("grinlaugh")
                }
            })

    // Récupère tous les pellets actuellement dans le cercle
    const pellets = get("pellet");

    let currentRadius = initialRadius;

    const shrinkCircle = () => {
        if (currentRadius > 0) {
            currentRadius -= shrinkStep;
            pellets.forEach(pellet => {
                const angleInRadians = Math.atan2(pellet.pos.y - circleCenter.y, pellet.pos.x - circleCenter.x);
                const newPos = vec2(
                    circleCenter.x + currentRadius * Math.cos(angleInRadians),
                    circleCenter.y + currentRadius * Math.sin(angleInRadians)
                );
                // Met à jour la position du pellet pour le nouveau rayon
                pellet.pos = newPos;
            });
            // Continue de rétrécir le cercle après un bref délai
            wait(0.03, shrinkCircle);
        } else {
            // Appelle la fonction callback une fois le rétrécissement terminé
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }
    };

    // Commence le processus de rétrécissement
    shrinkCircle();
    let thisnextEvent = 0
    heart.onCollide('pellet', () => {
        thisnextEvent = 2
        attackStop()
        shake(10)
    })
    wait(4, () => {
        if(thisnextEvent = 0){
            attackStop()
        }
    })
}
        function attackStop(){
            destroyAll("pellet")
            let grin = floweyspritetuto.play("grintalkidle")
            play("heal")
            
            wait(2, () => {
                grin = floweyspritetuto.play("pissed")
                wait(1, () => {
                    const fireball = add([
                        sprite("fireballcutscene"),
                        pos(500,130),
                        fixed(),
                        scale(2),
                        rotate(0),
                        "fireball"
                    ])
                    fireball.play("blink")
                    wait(1, () => {
                        tween(fireball.pos, vec2(330,130),0.8, (p) => fireball.pos = p, easings.linear)
                        fireball.play("burn")
                        wait(0.8, () => {
                            floweyspritetuto.use(sprite("floweyhurt"))
                            destroyAll("fireball")
                            play("floweyscream")
                            tween(floweyspritetuto.pos, vec2(-150,80),0.5, (p) => floweyspritetuto.pos = p, easings.linear)
                            wait(2, () => {
                                window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                                go("flowey_tuto_toriel")
                            })
                        })
                    })
                })
            })
        }

        function startSequence1() {
            dialog1(() => {
                    dialog2(() => {
                        
                    });
            });
        }
        startSequence1()
    },
    flowey_tuto_die: () => {
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        const floweyspritetuto = add([sprite("flowey"), scale(2),pos(280,140),rotate(0)])
        floweyspritetuto.play("grin")
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
            UIManager.displayDialogFight("You idiot.|In this world,/p it's killed or BE killed.|Why would ANYONE pass up an opportunity like this!?", vec2(370,135), onComplete)
            

        }
        let talk1 = onUpdate(() => {
            if (window.textIsWriting == true && floweyspritetuto.curAnim() == "grin") {
                floweyspritetuto.play("grintalk")
            }
            else if (window.textIsWriting != true){
                floweyspritetuto.play("grin")
            }
            if(window.nextEvent > 0){
                floweyspritetuto.play("evil");
                talk1.cancel()
            };
        })
        let speaking = play("evilfloweyspeak", {
            volume: 1,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
        function dialog2(onComplete) {
            window.nextEvent = 1
            floweyspritetuto.play("evil");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "evil") {
                    floweyspritetuto.play("evil")
                }
            })
            spawnPellets()
            
        }
        function dialog3(onComplete){
            wait(2, () => {
            UIManager.displayDialogFight("Die.", vec2(370,135), onComplete)
            })
        }
        function spawnPellets() {
            window.nextEvent = 2
            const circleCenter = vec2(310, 310); // Centre du cercle
            play("pelletcircle")
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
            dialog3(() => {
                sendPellets(() => {

                })
            })
        }
        
    function sendPellets(onComplete) {
    const circleCenter = vec2(310, 310); // Centre du cercle
    const initialRadius = 100; // Rayon initial du cercle
    const pelletsCount = 50; // Nombre de pellets à gérer
    const shrinkDuration = 15; // Durée totale du rétrécissement en secondes
    const shrinkStep = initialRadius / (shrinkDuration / 0.03); // Combien rétrécir le rayon à chaque étape
    play("floweylaugh")
    floweyspritetuto.play("grin");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "grin") {
                    floweyspritetuto.play("grinlaugh")
                }
            })

    // Récupère tous les pellets actuellement dans le cercle
    const pellets = get("pellet");

    let currentRadius = initialRadius;

    const shrinkCircle = () => {
        if (currentRadius > 0) {
            currentRadius -= shrinkStep;
            pellets.forEach(pellet => {
                const angleInRadians = Math.atan2(pellet.pos.y - circleCenter.y, pellet.pos.x - circleCenter.x);
                const newPos = vec2(
                    circleCenter.x + currentRadius * Math.cos(angleInRadians),
                    circleCenter.y + currentRadius * Math.sin(angleInRadians)
                );
                // Met à jour la position du pellet pour le nouveau rayon
                pellet.pos = newPos;
            });
            // Continue de rétrécir le cercle après un bref délai
            wait(0.03, shrinkCircle);
        } else {
            // Appelle la fonction callback une fois le rétrécissement terminé
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }
    };

    // Commence le processus de rétrécissement
    shrinkCircle();
    let thisnextEvent = 0
    heart.onCollide('pellet', () => {
        thisnextEvent = 2
        attackStop()
        shake(10)
    })
    wait(4, () => {
        if(thisnextEvent = 0){
            attackStop()
        }
    })
}
        function attackStop(){
            destroyAll("pellet")
            let grin = floweyspritetuto.play("grintalkidle")
            play("heal")
            playerHP = 20
            
            wait(2, () => {
                grin = floweyspritetuto.play("pissed")
                wait(1, () => {
                    const fireball = add([
                        sprite("fireballcutscene"),
                        pos(500,130),
                        fixed(),
                        scale(2),
                        rotate(0),
                        "fireball"
                    ])
                    fireball.play("blink")
                    wait(1, () => {
                        tween(fireball.pos, vec2(330,130),0.8, (p) => fireball.pos = p, easings.linear)
                        fireball.play("burn")
                        wait(0.8, () => {
                            floweyspritetuto.use(sprite("floweyhurt"))
                            destroyAll("fireball")
                            tween(floweyspritetuto.pos, vec2(-150,80),0.5, (p) => floweyspritetuto.pos = p, easings.linear)
                            wait(2, () => {
                                window.heartpreviouspos = vec2(window.heart.pos.x , window.heart.pos.y)
                                go("flowey_tuto_toriel")
                            })
                        })
                    })
                })
            })
        }

        function startSequence1() {
            dialog1(() => {
                    dialog2(() => {
                        
                    });
            });
        }
        startSequence1()
    },
    flowey_tuto_toriel: () => {
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        window.currentMusicPlaying = play("fallendown", {
            loop : true,
        })
        const torielspritetuto = add([sprite("torieltuto"), scale(2),pos(600,40),rotate(0)])
        tween(torielspritetuto.pos, vec2(250,40),1, (p) => torielspritetuto.pos = p, easings.linear)
        torielspritetuto.play("idle")
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
            UIManager.displayDialogFight("What a terrible creature,/p torturing such a poor,/p innocent youth...|Ah, do not be afraid,/p my child.|I am TORIEL,/p/bcaretaker of the RUINS.|I pass through this place everyday to see if anyone has fallen down.|You are the first human to come here in a long time.|Come!/p/bI will guide you through the catacombs.", vec2(360,105), onComplete)
            

        }
        let talk1 = onUpdate(() => {
            if (window.textIsWriting == true && torielspritetuto.curAnim() == "idle") {
                torielspritetuto.play("talk")
            }
            else if (window.textIsWriting != true){
                torielspritetuto.play("idle")
            }
        })
        let speaking = play("torielspeak", {
            volume: 1,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
        function goNext(){
            wait(1, () => {
            const transition = add([
                rect(width(), height()),
                color(0,0,0),
                opacity(1),
                stay(),
                fixed(),
                z(100),
                {
                    add() {
                        tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                        window.nextEvent = "tuto_over"
                        wait(0.5, () => {
                            go("ruins_2", transition)
                            const newData = { newValue: "1" };
                            fetch('/api/updateTempPlotValue', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newData),
                            })
                            .then(response => response.text())
                            .then(result => {
                            console.log(result);
                            });
                        })
                    }
                }
            ])
        })

        }
        wait(1.2, () => {
            dialog1(() => {
                goNext(() => {

                })
            })
        })
    },
    
    ruins_3: (transition) => {
        if(transition){
            tween(1, 0, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
        wait(1, () => {
            destroy(transition)
        })
        }
        add([
            rect(150, 20),
            pos(75,450),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(30),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(400,520),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-30),
            "murdiagonalbas"
        ]);
        add([
            rect(550, 20),
            pos(520,-80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(550, 20),
            pos(120,-80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(130,-80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(370,-80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(240,-100),
            color(0, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "hitboxhaut"
        ]);
        add([sprite("ruins_3"), pos(0, -350), scale(2.01)])
        const floweyow = add([sprite("torielwalk"), pos(295, 215), scale(2)])
        UIManager.playerManager(vec2(305,480))
        player.play("idleu")
        const limitUp = -200
        const limitDown = 373
        const limitLeft = 280
        const limitRight = 995
        const playerX = player.pos.x
        let playerY = player.pos.y
        const hitboxback = add([
            rect(300, 20), // htbox porte
            pos(175,550),
            color(0, 0, 0, 0),
            body({isStatic: true}),
            area(),
            opacity(0),
            "hitboxback",
        ]);
        window.player.onUpdate(() => {
            camPos(playerX+16, playerY-110)
        })
        window.player.onUpdate(() => {
            if(player.pos.y > limitUp && player.pos.y < limitDown){
            playerY = player.pos.y +110
            }
        })
        let speaking = play("torielspeak", {
            volume: 1,
            paused: true,
            loop:true
        })
        onUpdate(() => {
            if (window.textIsWriting == true) {
                speaking.paused = false
            }
            else if(!window.textIsWriting){
                speaking.paused = true
            }
        })
        let fightStarted = false
        
        player.onCollide('hitboxback', () => {
            window.currentRoom = "ruins_3"
            const transition = add([
                rect(width(), height()),
                color(0,0,0),
                opacity(1),
                stay(),
                fixed(),
                z(100),
                {
                    add() {
                        tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                        wait(0.5, () => {
                            go("ruins_2", transition)
                        })
                    }
                }
            ])
        })
        player.onCollide('hitboxhaut', () => {
            window.currentRoom = "ruins_2"
            const transition = add([
                rect(width(), height()),
                color(0,0,0),
                opacity(1),
                stay(),
                fixed(),
                z(100),
                {
                    add() {
                        tween(0, 1, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
                        wait(0.5, () => {
                            go("ruins_3", transition)
                        })
                    }
                }
            ])
        })
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

go("ruins_1")