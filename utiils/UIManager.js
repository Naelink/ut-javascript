class UI {
    constructor() {
        this.buttons = [
            { id: "fight", sprite: "fight_btn", spriteSelected: "fight_btn1", pos: [35, 430], isSelected: true, isPressed: false },
            { id: "act", sprite: "act_btn", spriteSelected: "act_btn1", pos: [190, 430], isSelected: false, isPressed: false },
            { id: "item", sprite: "item_btn", spriteSelected: "item_btn1", pos: [345, 430], isSelected: false, isPressed: false },
            { id: "spare", sprite: "spare_btn", spriteSelected: "spare_btn1", pos: [490, 430], isSelected: false, isPressed: false }
        ];
        this.heartPos = [43, 443];
        this.status = "start";
        
        this.enemyName = "";
    }

    init() {
        this.buttons.forEach(btn => {
            const position = vec2(btn.pos[0], btn.pos[1]);
            btn.entity = add([
                sprite(btn.isSelected ? btn.spriteSelected : btn.sprite),
                pos(position)
            ]);
        });
        const heartPosition = vec2(this.heartPos[0], this.heartPos[1]);
        this.heart = add([sprite("heart"), pos(heartPosition)])

        this.setupInputHandlers();
        add([sprite("box"), pos(30, 240),scale (0.559)])
    }

    setupInputHandlers() {
        onKeyPress("right", () => {
            if (this.status !== "fightMenu" && this.status !== "actMenu" && this.status !== "itemMenu" && this.status !=="spareMenu" && this.status !="attackBar") {
            this.moveCursor("right");
            }
        });
        onKeyPress("left", () => {
            if (this.status !== "fightMenu" && this.status !== "actMenu" && this.status !== "itemMenu" && this.status !=="spareMenu" && this.status !="attackBar") {
            this.moveCursor("left");
            }
        });
        onKeyPress("z", () => {
            if(this.status !="attackBar"){
                this.activateButton(); // Désélectionne le bouton lorsque "x" est pressé
            }
        });
        onKeyPress("enter", () => {
            if(this.status !="attackBar"){
                this.activateButton(); // Désélectionne le bouton lorsque "x" est pressé
            }
        });
        onKeyPress("x", () => {
            if(this.status != "start" && this.status !="attackBar"){
                this.deselectButton(); // Désélectionne le bouton lorsque "x" est pressé
            }
        });
    }
    deselectButton() {
        // Désélectionne le bouton actuellement sélectionné
        destroy(currentTextDisplay)
        const positionTexte = vec2(60,275);
        this.buttons.forEach(btn => {
            if(btn.isPressed == true){
            btn.isSelected = false;
            btn.entity.use(sprite(btn.sprite)); // Utilise le sprite non sélectionné
            }
        });
        this.status = "start"; // Réinitialise le statut
        console.log("All buttons deselected");z
        currentTextDisplay = this.animerTexte(window.currentText, positionTexte)
        this.updateButtons()
    }

    moveCursor(direction) {
        let currentIndex = this.buttons.findIndex(btn => btn.isSelected);
        let newIndex = currentIndex;

        if (direction === "right") {
            newIndex = (currentIndex + 1) % this.buttons.length;
        } else if (direction === "left") {
            newIndex = (currentIndex - 1 + this.buttons.length) % this.buttons.length;
        }
        this.buttons[currentIndex].isSelected = false;
        this.buttons[newIndex].isSelected = true;
        play("uimove")
        this.updateButtons();
    }

    updateButtons() {
        this.buttons.forEach((btn, index) => {
            const isSelected = btn.isSelected;
            btn.entity.use(sprite(isSelected ? btn.spriteSelected : btn.sprite));
            if (isSelected) {
                // Ajoutez un offset de 5 pixels vers la droite à la position x du cœur
                const offsetX = 9; // Définition de l'offset
                this.heart.use(pos(vec2(btn.pos[0] + offsetX, this.heartPos[1])));
            }
        });
    }

    activateButton() {
        const selectedButton = this.buttons.find(btn => btn.isSelected);
        console.log(`${selectedButton.id} button activated`);
        if(this.status == "fightMenu"){
            this.attackBar()
            return;
        }
        this.status = selectedButton.id;
        let positionTexte = vec2(60,275);
        const statusdis = add([
            text(this.status, {
                size: 34, 
                font: "deter", 
                width: 510, 
                lineSpacing: 8
            }),
            pos(positionTexte.add(vec2(30,-60))), 
            color(255, 255, 255)
        ])
        onUpdate(() => {
            statusdis.use(text(this.status))
        })
        switch (this.status) {
        case "fight":
            this.fightMenu(this.enemyName);
            break;
        case "act":
            this.actMenu(this.enemyName);
            break;
        case "item":
            this.itemMenu(this.enemyName);
            break;
        case "spare":
            this.spareMenu(this.enemyName);
            break;
        }
    }
    fightMenu(enemyName) {
        destroy(window.currentTextDisplay)
        let positionTexte = vec2(60,275);
        this.heart.use(pos(positionTexte))
        this.status = "fightMenu"
        pos(positionTexte.add(vec2(30,-60))), 
        color(255, 255, 255)
        window.currentTextDisplay = add([text("  * " + enemyName,{
            size:24,
            font:"deter",
        } ),pos(positionTexte)])

    }
    attackBar() {
        this.status = "attackBar";
        destroy(this.heart);
        destroy(currentTextDisplay);
        window.attack_bar = add([sprite("attackbar"), pos(38, 254), scale(1)]);
        const atk_cursor = add([sprite("attackcursor"), pos(48, 257), scale(0.97)]);
    
        window.score = 0;
        let increasing = true; // Indicates whether the score is currently increasing
    
        const scoredis = add([
            text(window.score.toString(), {
                size: 34,
                font: "deter",
                width: 510,
                lineSpacing: 8
            }),
            pos(50, 180),
            color(255, 255, 255)
        ]);
    
        const updateScore = () => {
            scoredis.text = window.score.toFixed(2);
            window.score = Math.floor(window.score)
        };
    
        onUpdate(() => {
            scoredis.use(text(window.score.toString()))
        });
        
        const cursorMoveLoop = loop(0.01, () => {
            atk_cursor.move(500, 0); 
            window.score += increasing ? 3 : -3.5;
            if(window.score >100){
                increasing = false
            }
            updateScore();
    
            if (atk_cursor.pos.x >= 578) {
                cursorMoveLoop.cancel();
                finishAttack(); 
                window.miss = true
                go("2"); 
            }
        });
    
        wait(0.636, () => {
            increasing = false;
        });
    
        const blinkCursor = (cursor) => {
            let isOriginalSprite = true;
            const blinking = loop(0.1, () => {
                if (isOriginalSprite) {
                    cursor.use(sprite("attackcursor1"));
                } else {
                    cursor.use(sprite("attackcursor"));
                }
                isOriginalSprite = !isOriginalSprite;
            });
            return blinking;
        };
    
        let atkAnimationPlayed = false;
        const playatk = () => {
            if (!atkAnimationPlayed) {
                const atk = add([sprite("atk"), pos(290, -10), scale(1.2)]);
                atk.play("idle");
                atkAnimationPlayed = true;
                wait(1, () => {
                    window.miss = false
                    window.hasAttacked = true
                    go("2");
                    this.status = "start";
                });
            }
        };
        wait(0.01, () => {
        onKeyPress("z", () => {
            if (this.status === "attackBar" && !atkAnimationPlayed) {
                cursorMoveLoop.cancel();
                increasing = false;
                blinkCursor(atk_cursor);
                playatk();
            }
        });
    
        onKeyPress("enter", () => {
            if (this.status === "attackBar" && !atkAnimationPlayed) {
                cursorMoveLoop.cancel();
                increasing = false;
                blinkCursor(atk_cursor);
                playatk();
            }
        }); })
    
        const finishAttack = () => {
            this.status = "start"; // Correctly set 'this.status' without needing to bind 'this'
            console.log("Attack finished, status reset to start.");
        };
    }
    displayBossHP(Damage) {
        let NewHP = (window.BossHP-Damage)
        const maxBar = add([
            rect(300, 20),
            pos(165, 200),
            color(61, 63, 60),
        ]);
        let currentHP = add([
            rect((window.BossHP * 300 / window.BossMaxHP), 20),
            pos(165, 200),
            color(0, 217, 3),
        ]);
        const loopHP = loop(0.001, () => {
            if (window.BossHP > NewHP && currentHP.width > 0) {
                window.BossHP -= (window.BossMaxHP/300); 
                currentHP.width = window.BossHP * 300 / window.BossMaxHP;
                currentHP.use(rect(currentHP.width, 20));
            } 
            else if (currentHP.width <= 0){
                loopHP.cancel();
                go("3")
            }
            else {
                loopHP.cancel();

            }
        });
        const displayDMG = add([
            text(Damage, {
                size: 24.9,
                font: "dmg2",
                width: 510,
                lineSpacing: 8
            }),
            pos(289.5, 163),
            color(0, 0, 0), "dmgdis"])
            add([
                text(Damage, {
                    size: 24.9,
                    font: "dmg2",
                    width: 510,
                    lineSpacing: 8
                }),
                pos(288, 163),
                color(0, 0, 0), "dmgdis"])
        add([
            text(Damage, {
                size: 34,
                font: "dmg",
                width: 510,
                lineSpacing: 8
            }),
            pos(290, 160),
            color(222, 34, 10), "dmgdis"]);
        wait(1.5, () => {
            destroy(maxBar);
            destroy(currentHP)
            destroyAll("dmgdis");
        });
    }
    displayDialogOW(dialogText, upOrDown) {
        
        let positionTexte = vec2(60,350);
        let positionBox = vec2(30, 315)
        if (upOrDown == "up"){
            positionTexte = vec2(60,50);
            positionBox = vec2(30, 15)
        }
        const box = add([sprite("box2"), pos(positionBox), scale(0.559)]);
    
        function segmenterTexte(texte, longueurSegment) {
            const segments = [];
            for (let i = 0; i < texte.length; i += longueurSegment) {
                segments.push(texte.substring(i, i + longueurSegment));
            }
            return segments;
        }
    
        const segments = segmenterTexte(dialogText, 90);
        let currentSegmentIndex = 0;
    
        const afficherSegment = () => {
            if (currentSegmentIndex < segments.length) {
                if (window.currentTextDisplay) {
                    destroy(window.currentTextDisplay);
                }
                window.currentTextDisplay = this.animerTexte(segments[currentSegmentIndex], positionTexte);
                currentSegmentIndex++;
    
                if (currentSegmentIndex === segments.length) {
                    console.log("fini");
                    onKeyPress("z", () => {
                        destroy(window.currentTextDisplay);
                        destroy(box);
                    });
                }
            }
        };
    
        // Écouteur d'événement pour passer au segment suivant
        onKeyPress("z", () => {
            // Assurez-vous que l'écriture du texte est terminée avant de passer au segment suivant.
            if (!window.textIsWriting && currentSegmentIndex < segments.length) {
                afficherSegment();
            }
        });
    
        // Affiche le premier segment
        afficherSegment();
    }
    
    
    actMenu(enemyName) {
        destroy(window.currentTextDisplay)
        this.status = "actMenu"
        let positionTexte = vec2(60,275);
        pos(positionTexte.add(vec2(30,-60))), 
        color(255, 255, 255)
    }
    itemMenu(enemyName) {
        destroy(window.currentTextDisplay)
        this.status = "itemMenu"
        let positionTexte = vec2(60,275);
        pos(positionTexte.add(vec2(30,-60))), 
        color(255, 255, 255)
    }
    spareMenu(enemyName) {
        destroy(window.currentTextDisplay)
        this.status = "spareMenu"
        let positionTexte = vec2(60,275);
        pos(positionTexte.add(vec2(30,-60))), 
        color(255, 255, 255)
    }

    displayCombatMenu(enemyName) {
        this.enemyName = enemyName;
        console.log(`Displaying combat menu for ${this.enemyName}`);
        // Additional setup if needed
    }
    animerTexte(texteComplet, positionTexte) {
        let texteActuel = ""; // Texte actuellement affiché
        window.textIsWriting = true; // Indique que le texte commence à s'afficher
    
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
            } else {
                // Lorsque toutes les lettres ont été ajoutées, indiquer que l'écriture du texte est terminée
                window.textIsWriting = false;
            }
        }
    
        // Commencer à ajouter les lettres
        textWrite(0);
        return objetTexte;
    }
    
    displayplayerHP(nombre, positionInitiale) {
        for (let i = 0; i < nombre; i++) {
            add([
                rect(1.2, 20), // Crée une barre de largeur 1 et hauteur 20
                pos(positionInitiale.x + i * 1.2, positionInitiale.y), // Positionne chaque barre à la suite de l'autre
                color(255, 255, 0), // Définit la couleur de la barre en jaune (RGB)
            ]);
        }
    }
    displayplayermaxHP(nombre, positionInitiale) {
        for (let i = 0; i < nombre; i++) {
            add([
                rect(1.2, 20), // Crée une barre de largeur 1 et hauteur 20
                pos(positionInitiale.x + i * 1.2, positionInitiale.y), // Positionne chaque barre à la suite de l'autre
                color(255, 0, 0), // Définit la couleur de la barre en jaune (RGB)
            ]);
        }
    }
    
}

export const UIManager = new UI();
