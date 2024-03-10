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
        this.heart = add([sprite("heart"), pos(heartPosition)]);

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
    
        let score = 0;
        let increasing = true; // Indicates whether the score is currently increasing
    
        const scoredis = add([
            text(score.toString(), {
                size: 34,
                font: "deter",
                width: 510,
                lineSpacing: 8
            }),
            pos(50, 180),
            color(255, 255, 255)
        ]);
    
        const updateScore = () => {
            score += increasing ? 2.5 : -2.5;
            scoredis.text = score.toFixed(2);
        };
    
        onUpdate(() => {
            scoredis.use(text(score.toString()))
        });
    
        const cursorMoveLoop = loop(0.007, () => {
            atk_cursor.move(396, 0); // Move cursor
            updateScore(); // Update score
    
            if (atk_cursor.pos.x >= 578) {
                cursorMoveLoop.cancel();
                finishAttack(); // Call 'finishAttack' directly here
            }
        });
    
        wait(0.636, () => {
            increasing = false; // Switch to decreasing phase
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
                wait(3, () => {
                    go("2"); // Change to the next scene or logic
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
    
}

export const UIManager = new UI();
