class UI {
    constructor() {
        this.buttons = [
            { id: "fight", sprite: "fight_btn", spriteSelected: "fight_btn1", pos: [35, 430], isSelected: true },
            { id: "act", sprite: "act_btn", spriteSelected: "act_btn1", pos: [190, 430], isSelected: false },
            { id: "item", sprite: "item_btn", spriteSelected: "item_btn1", pos: [345, 430], isSelected: false },
            { id: "spare", sprite: "spare_btn", spriteSelected: "spare_btn1", pos: [490, 430], isSelected: false }
        ];
        this.heartPos = [43, 443];
        this.status = "start";
        this.enemyName = "";
    }

    init() {
        onUpdate(() => {
            
        })
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
            this.moveCursor("right");
            play("uimove")
        });
        onKeyPress("left", () => {
            this.moveCursor("left");
            play("uimove")
        });
        onKeyPress("z", () => {
            this.activateButton();
        });
        onKeyPress("x", () => {
            this.deselectButton(); // Désélectionne le bouton lorsque "x" est pressé
        });
    }
    deselectButton() {
        // Désélectionne le bouton actuellement sélectionné
        this.buttons.forEach(btn => {
            btn.isSelected = false;
            btn.entity.use(sprite(btn.sprite)); // Utilise le sprite non sélectionné
        });
        this.status = "start"; // Réinitialise le statut
        console.log("All buttons deselected");
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
        this.updateButtons();
    }

    updateButtons() {
        this.buttons.forEach((btn, index) => {
            const isSelected = btn.isSelected;
            btn.entity.use(sprite(isSelected ? btn.spriteSelected : btn.sprite));
            if (isSelected) {
                this.heart.use(pos(vec2(btn.pos[0], btn.pos[1])));
            }
        });
    }

    activateButton() {
        const selectedButton = this.buttons.find(btn => btn.isSelected);
        console.log(`${selectedButton.id} button activated`);
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
        if(this.status=="fight"){
            this.fightMenu(this.enemyName)
        }
    }
    fightMenu(enemyName) {
        destroy(window.currentText)
        let positionTexte = vec2(60,275);
        text(this.status, {
            size: 34, 
            font: "deter", 
            width: 510, 
            lineSpacing: 8
        }),
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
