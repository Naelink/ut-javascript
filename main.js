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

const scenes = {
    menu: () => {
    
    },
    1: () => {
        let enemyName="Papyrus"
        add([sprite("box"), pos(30, 240),scale (0.559)])
        var status = "start"
        add([sprite("blackbg")])
        add([sprite("papyrus"), scale(2),pos(250,40)])
        const positionTexte = vec2(60,275);
        const texteStart = "* Papyrus blocks the way!"
        window.currentText = texteStart
        window.currentTextDisplay = animerTexte(window.currentText, positionTexte)
        UIManager.init();
        UIManager.displayCombatMenu(enemyName);
        
        
        function displayplayerHP(nombre, positionInitiale) {
            for (let i = 0; i < nombre; i++) {
                add([
                    rect(1.2, 20), // Crée une barre de largeur 1 et hauteur 20
                    pos(positionInitiale.x + i * 1.2, positionInitiale.y), // Positionne chaque barre à la suite de l'autre
                    color(255, 255, 0), // Définit la couleur de la barre en jaune (RGB)
                ]);
            }
        }
        function displayplayermaxHP(nombre, positionInitiale) {
            for (let i = 0; i < nombre; i++) {
                add([
                    rect(1.2, 20), // Crée une barre de largeur 1 et hauteur 20
                    pos(positionInitiale.x + i * 1.2, positionInitiale.y), // Positionne chaque barre à la suite de l'autre
                    color(255, 0, 0), // Définit la couleur de la barre en jaune (RGB)
                ]);
            }
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
        displayplayermaxHP(playermaxHP, vec2(280,400))
        displayplayerHP(playerHP, vec2(280, 400))

        // Créer un objet de texte initial vide
        function animerTexte(texteComplet, positionTexte) {
            let texteActuel = ""; // Texte actuellement affiché
        
            // Créer un objet de texte initial vide
            const objetTexte = add([
                text(texteActuel, {
                    size: 24, 
                    font: "deter", 
                    width: 510, 
                    lineSpacing: 8
                }),
                pos(positionTexte), 
                color(255, 255, 255),
            ]);
        
            // Fonction interne pour ajouter une lettre au texte actuel et mettre à jour l'objet de texte
            function textWrite(index) {
                if (index < texteComplet.length) {
                    texteActuel += texteComplet[index];
                    objetTexte.text = texteActuel; // Mettre à jour le texte de l'objet
                    // Attendre un peu avant d'ajouter la prochaine lettre
                    wait(0.03, () => {
                        textWrite(index + 1);
                    });
                }
            }
        
            // Commencer à ajouter les lettres
            textWrite(0);
            return objetTexte
        }
        
    
    },
    2: () => {
        add([sprite("blackbg")])
        add([sprite("papyrus"), scale(2),pos(250,40)])
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
        loop(0.007, () => {
            // Augmentez ces valeurs pour accélérer l'animation
            const ajustementLargeur = 10; // Précédemment 4
            const ajustementPosition = 5; // Précédemment 2
        
            if (interieur.width > 225) {
                interieur.width -= ajustementLargeur;
                contour.width -= ajustementLargeur;
                interieur.pos.x += ajustementPosition;
                contour.pos.x += ajustementPosition;
                updateWalls()
            }
        });
        
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
    
    },
    3: () => {
    
    },
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go("1")