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
    displayDialogOW(dialogText, upOrDown, hasSprite, Sprite) {
        window.isInDialog = true
        let positionTexte = upOrDown === "up" ? vec2(60, 50) : vec2(60, 350);
        const box = add([sprite("box2"), fixed(), pos(upOrDown === "up" ? vec2(30, 15) : vec2(30, 315),), scale(0.559)]);
    
        const segments = dialogText.split("|");
        let currentSegmentIndex = 0;
    
        const cleanup = () => {
            destroy(window.dialSprite);
            destroy(window.currentTextDisplay);
            destroy(box);
            debug.log("Dialogue finished.");
            window.isInDialog = false;
            window.nextEvent =+ 1
        };
    
        const afficherSegment = () => {
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay); // Clear the previous text display if it exists
            }
    
            if (currentSegmentIndex < segments.length) {
                if(hasSprite){
                    window.currentTextDisplay = this.animerTexteSprite(segments[currentSegmentIndex], positionTexte, Sprite);
                }
                else{
                    window.currentTextDisplay = this.animerTexte(segments[currentSegmentIndex], positionTexte);
                }
                
                currentSegmentIndex++; // Prepare for the next segment
            } else {
                // Cleanup after the last segment has been displayed
                cleanup();
            }
        };
    
        // Listener to move to the next segment when 'Z' is pressed
        onKeyPress("z", () => {
            if(window.textIsWriting == false){
                afficherSegment()
            }})
        // Display the first segment initially
        afficherSegment();
    }
    
    animerTexte(texteComplet, positionTexte) {
        let texteActuel = ""; // Texte actuellement affiché
        window.textIsWriting = true; // Indique que le texte commence à s'afficher
    
        // Créer un objet de texte initial vide
        const objetTexte = add([
            text("", { size: 24, font: "deter", width: 510, lineSpacing: 8 }),
            pos(positionTexte),
            color(255, 255, 255),
            fixed()
        ]);
    
        const commands = texteComplet.split(/(\/b|\/p)/); // Split the text on /b and /p commands
        let commandIndex = 0; // Current command index
    
        const processNext = () => {
            if (commandIndex < commands.length) {
                if (commands[commandIndex] === "/b") {
                    // Handle line break
                    texteActuel += "\n";
                    commandIndex++;
                    processNext();
                } else if (commands[commandIndex] === "/p") {
                    // Handle pause
                    wait(0.5, () => {
                        commandIndex++;
                        processNext();
                    });
                } else {
                    // Handle text
                    const processText = (text, index) => {
                        if (index < text.length) {
                            texteActuel += text[index];
                            objetTexte.text = texteActuel;
                            wait(0.03, () => processText(text, index + 1));
                        } else {
                            commandIndex++;
                            processNext();
                        }
                    };
                    processText(commands[commandIndex], 0);
                }
            } else {
                window.textIsWriting = false; // No more commands to process
            }
        };
    
        processNext(); // Start processing
        return objetTexte;
    }
    animerTexteSprite(texteComplet, positionTexte, Sprite) {
        let texteActuel = ""; // Texte actuellement affiché
        window.textIsWriting = true; // Indique que le texte commence à s'afficher
    
        // Créer un objet de texte initial vide
        const objetTexte = add([
            text("", { size: 24, font: "deter", width: 410, lineSpacing: 8 }),
            pos(positionTexte.add(vec2(100,0))),
            color(255, 255, 255),
            fixed()
        ]);
    
        const commands = texteComplet.split(/(\/b|\/p)/); // Split the text on /b and /p commands
        let commandIndex = 0; // Current command index
    
        const processNext = () => {
            if (commandIndex < commands.length) {
                if (commands[commandIndex] === "/b") {
                    // Handle line break
                    texteActuel += "\n";
                    commandIndex++;
                    processNext();
                } else if (commands[commandIndex] === "/p") {
                    // Handle pause
                    wait(0.5, () => {
                        commandIndex++;
                        processNext();
                    });
                } else {
                    // Handle text
                    const processText = (text, index) => {
                        if (index < text.length) {
                            texteActuel += text[index];
                            objetTexte.text = texteActuel;
                            wait(0.03, () => processText(text, index + 1));
                        } else {
                            commandIndex++;
                            processNext();
                        }
                    };
                    processText(commands[commandIndex], 0);
                }
            } else {
                window.textIsWriting = false; // No more commands to process
            }
        };
        window.dialSprite = add([
            sprite(Sprite),
            pos(60,53),
            fixed(),
            scale(1.8),
        ])
        dialSprite.play("idle")
        onUpdate(() => {
            if (window.textIsWriting == true && dialSprite.curAnim() == "idle") {
                dialSprite.play("talk")
            }
            else if (window.textIsWriting == false && dialSprite !== "idle"){
                dialSprite.play("idle")
            }
        });
    
        processNext(); // Start processing
        return objetTexte;
    }
    displayDialogFight(dialogText, position) {
        window.isInDialog = true
        const box = add([sprite("textbubble"), fixed(), pos(position), scale(1)]);
    
        const segments = dialogText.split("|");
        let currentSegmentIndex = 0;
    
        const cleanup = () => {
            destroy(window.currentTextDisplay);
            destroy(box);
            debug.log("Dialogue finished.");
            window.isInDialog = false;
            window.nextEvent =+ 1
        };
    
        const afficherSegment = () => {
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay); // Clear the previous text display if it exists
            }
    
            if (currentSegmentIndex < segments.length) {
                    window.currentTextDisplay = this.animerTexteFight(segments[currentSegmentIndex], position);
                currentSegmentIndex++; // Prepare for the next segment
            } else {
                // Cleanup after the last segment has been displayed
                cleanup();
            }
        };
    
        // Listener to move to the next segment when 'Z' is pressed
        onKeyPress("z", () => {
            if(window.textIsWriting == false && window.isInDialog){
                afficherSegment()
            }})
        // Display the first segment initially
        afficherSegment();
    }
    animerTexteFight(texteComplet, positionTexte) {
        let texteActuel = ""; // Texte actuellement affiché
        window.textIsWriting = true; // Indique que le texte commence à s'afficher
    
        // Créer un objet de texte initial vide
        const objetTexte = add([
            text("", { size: 13, font: "plain", width: 200, lineSpacing: 8 }),
            pos(positionTexte.add(vec2(40,10))),
            color(0, 0, 0),
            fixed()
        ]);
    
        const commands = texteComplet.split(/(\/b|\/p)/); // Split the text on /b and /p commands
        let commandIndex = 0; // Current command index
    
        const processNext = () => {
            if (commandIndex < commands.length) {
                if (commands[commandIndex] === "/b") {
                    // Handle line break
                    texteActuel += "\n";
                    commandIndex++;
                    processNext();
                } else if (commands[commandIndex] === "/p") {
                    // Handle pause
                    wait(0.5, () => {
                        commandIndex++;
                        processNext();
                    });
                } else {
                    // Handle text
                    const processText = (text, index) => {
                        if (index < text.length) {
                            texteActuel += text[index];
                            objetTexte.text = texteActuel;
                            wait(0.03, () => processText(text, index + 1));
                        } else {
                            commandIndex++;
                            processNext();
                        }
                    };
                    processText(commands[commandIndex], 0);
                }
            } else {
                window.textIsWriting = false; // No more commands to process
            }
        };
    
        processNext(); // Start processing
        return objetTexte;
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
    playerManager(spawnPoint){
        window.player = add([
            sprite("frisk"),
            pos(spawnPoint),
            scale(2),
            area(),
            body(),
        ])
        const SPEED = 200
        onKeyDown("down", () => {
            if (window.isInDialog != true) {
            player.move(0, SPEED)
            if (player.curAnim() !== "down") {
                player.play("down")
                onKeyRelease("down", () => {
                    player.play("idled")})
            }
        }
        })
        
        onKeyDown("left", () => {
            if (window.isInDialog != true) {
            player.move(-SPEED, 0)
            if (player.curAnim() !== "left") {
                player.play("left")
                onKeyRelease("left", () => {
                    player.play("idlel")})
            }
        }
        })
        onKeyDown("right", () => {
            if (window.isInDialog != true) {
            player.move(SPEED, 0)
            if (player.curAnim() !== "right") {
                player.play("right")
                onKeyRelease("right", () => {
                    player.play("idler")})
            }
        }
        })
        onKeyDown("up", () => {
            if (window.isInDialog != true) {
            player.move(0, -SPEED)
            if (player.curAnim() !== "up") {
                player.play("up")
                onKeyRelease("up", () => {
                    player.play("idleu")})
            }
        }
        })
    }
    heartManager(){
        const SPEED = 150
        window.heart = add ([
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
    }
    
}

export const UIManager = new UI();
