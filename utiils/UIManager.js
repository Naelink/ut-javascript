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
                this.activateButton(); 
            }
        });
        onKeyPress("enter", () => {
            if(this.status !="attackBar"){
                this.activateButton(); 
            }
        });
        onKeyPress("x", () => {
            if(this.status != "start" && this.status !="attackBar"){
                this.deselectButton(); 
            }
        });
    }
    deselectButton() {
        destroy(currentTextDisplay)
        const positionTexte = vec2(60,275);
        this.buttons.forEach(btn => {
            if(btn.isPressed == true){
            btn.isSelected = false;
            btn.entity.use(sprite(btn.sprite)); 
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
                const offsetX = 9; 
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
        let increasing = true; 
    
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
            this.status = "start";
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
    displayDialogOW(dialogText, upOrDown, hasSprite, Sprite, animidle, anim2, onComplete) {
        window.isInDialog = true
        let positionTexte = upOrDown === "up" ? vec2(60, 50) : vec2(60, 350);
        const box = add([sprite("box2"), fixed(), pos(upOrDown === "up" ? vec2(30, 15) : vec2(30, 315),), scale(0.559)]);
    
        const segments = dialogText.split("|");
        let currentSegmentIndex = 0;
    
        const cleanup = () => {
            if (window.dialSprite) {
                destroy(window.dialSprite);
            }
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay);
            }
            destroy(box);
            window.isInDialog = false;
            window.nextEvent =+ 1
            if(typeof onComplete === 'function'){
                onComplete()
            }
            return;
        };
    
        const afficherSegment = () => {
            window.isInDialog = true
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay); // Clear the previous text display if it exists
            }
    
            if (currentSegmentIndex < segments.length) {
                if(hasSprite){
                    window.currentTextDisplay = this.animerTexteSprite(segments[currentSegmentIndex], positionTexte, Sprite, animidle, anim2);
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
    
        onKeyPress("z", () => {
            if(window.textIsWriting == false){
                afficherSegment()
            }})
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
    
        const commands = texteComplet.split(/(\/b|\/p)/); 
        let commandIndex = 0; 
    
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
    animerTexteSprite(texteComplet, positionTexte, Sprite, animidle, anim2) {
        let texteActuel = ""; 
        window.textIsWriting = true; 
    
        const objetTexte = add([
            text("", { size: 24, font: "deter", width: 410, lineSpacing: 8 }),
            pos(positionTexte.add(vec2(100,0))),
            color(255, 255, 255),
            fixed()
        ]);
    
        const commands = texteComplet.split(/(\/b|\/p)/); 
        let commandIndex = 0; 
    
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
            if (window.textIsWriting == true && dialSprite.curAnim() == animidle) {
                dialSprite.play(anim2)
            }
            else if (window.textIsWriting == false && dialSprite !== animidle){
                dialSprite.play(animidle)
            }
        });
    
        processNext(); // Start processing
        return objetTexte;
    }
    animerTexteIntro(texteComplet, positionTexte) {
        let texteActuel = ""; // Texte actuellement affiché
        window.textIsWriting = true; // Indique que le texte commence à s'afficher
    
        // Créer un objet de texte initial vide
        const objetTexte = add([
            text("", { size: 25, font: "deter", width: 450, lineSpacing: 10, letterSpacing:3 }),
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
                            wait(0.065, () => processText(text, index + 1));
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
    displayDialogFight(dialogText, position, onComplete) {
        if (window.isInDialog) {
            console.log("A dialogue is already in progress.");
            return;
        }
        window.isInDialog = true;
        window.fightdialogbox = add([sprite("textbubble"), fixed(), pos(position), scale(1)]);
        const segments = dialogText.split("|");
        let currentSegmentIndex = 0;
    
        // Ensure any existing key press handler is canceled before setting up a new one
        if (currentKeyPressHandler) {
            currentKeyPressHandler.cancel();
        }
    
        const afficherSegment = () => {
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay);
            }
            if (currentSegmentIndex < segments.length) {
                window.currentTextDisplay = this.animerTexteFight(segments[currentSegmentIndex], position);
                currentSegmentIndex++;
            } else {
                cleanup();
            }
            if(window.endFloweyDialogue){
                return
            }
        };
    
        const cleanup = () => {
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay);
            }
            destroy(fightdialogbox);
            window.nextEvent = window.nextEvent + 1;
            window.isInDialog = false;
            if (typeof onComplete === 'function') {
                onComplete();
            }
            // Cancel the key press handler as part of cleanup
            if (currentKeyPressHandler) {
                currentKeyPressHandler.cancel();
                currentKeyPressHandler = null;
            }
        };
    
        // Setup the key press handler and keep a reference to it
        currentKeyPressHandler = onKeyPress("z", () => {
            if (!window.textIsWriting && window.isInDialog) {
                afficherSegment();
            }
        });
    
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
                            wait(0.04, () => processText(text, index + 1));
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
    annoyingfloweydialog(dialogText, position, onComplete) {
        if (window.isInDialog) {
            console.log("A dialogue is already in progress.");
            return;
        }
        wait(3.5, () => {cleanup()})
        window.isInDialog = true;
        window.fightdialogbox = add([sprite("textbubble"), fixed(), pos(position), scale(1)]);
        const segments = dialogText.split("|");
        let currentSegmentIndex = 0;
    
        // Ensure any existing key press handler is canceled before setting up a new one
        if (currentKeyPressHandler) {
            currentKeyPressHandler.cancel();
        }
    
        const afficherSegment = () => {
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay);
            }
            if (currentSegmentIndex < segments.length) {
                window.currentTextDisplay = this.animerTexteFight(segments[currentSegmentIndex], position);
                currentSegmentIndex++;
            } else {
                cleanup();
            }
            if(window.endFloweyDialogue){
                return
            }
        };
    
        const cleanup = () => {
            if (window.currentTextDisplay) {
                destroy(window.currentTextDisplay);
            }
            destroy(fightdialogbox);
            window.nextEvent = window.nextEvent + 1;
            window.isInDialog = false;
            if (typeof onComplete === 'function') {
                onComplete();
            }
            // Cancel the key press handler as part of cleanup
            if (currentKeyPressHandler) {
                currentKeyPressHandler.cancel();
                currentKeyPressHandler = null;
            }
        };
    
        // Setup the key press handler and keep a reference to it
        currentKeyPressHandler = onKeyPress("z", () => {
            if (!window.textIsWriting && window.isInDialog) {
                afficherSegment();
            }
        });
    
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
    }
    
    
    displayplayerHP(nombre, positionInitiale) {
        destroyAll("HPdisplay")
        for (let i = 0; i < nombre; i++) {
            add([
                rect(1.2, 20), 
                pos(positionInitiale.x + i * 1.2, positionInitiale.y), 
                color(255, 255, 0), 
                "HPdisplay"
            ]);
        }
    }
    displayplayermaxHP(nombre, positionInitiale) {
        destroyAll("HPMaxdisplay")
        for (let i = 0; i < nombre; i++) {
            add([
                rect(1.2, 20),
                pos(positionInitiale.x + i * 1.2, positionInitiale.y), 
                color(255, 0, 0),
                "HPMaxdisplay"
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
    heartManager(position){
        const SPEED = 150
        window.heart = add ([
            sprite("heart"),
            pos(position),
            area(),
            body(),
            "heart",
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
    startFightAnimationFlowey(){
        play("encounter")
        window.transitionfight = add([
            rect(width(), height()),
            color(0,0,0),
            opacity(1),
            stay(),
            fixed(),
            z(100)])
        player.use(z(95))
        const tempheart = add([
                sprite("heart"),
                pos(vec2(window.player.pos.x+10, window.player.pos.y-20)),
                scale(1),
                area(),
                fixed(),
                z(99)
            ])
        wait(0.1, () => {
            transitionfight.use(z(90))
            wait(0.1, () => {
                tempheart.use(opacity(0))
                wait(0.1, () => {
                    tempheart.use(opacity(1))
                            wait(0.1, () => {
                                tempheart.use(opacity(0))
                                wait(0.1, () => {
                                    window.player.use(opacity(0))
                                    tempheart.use(opacity(1))
                                    wait(0.1, () => {
                                        tween(tempheart.pos, vec2(310,310),0.5, (p) => tempheart.pos = p, easings.linear)
                                        wait(0.51, () => {
                                            go("flowey_tuto")
                                            wait(0.51, () => {
                                                window.player.use(opacity(1))})
                                        })
                                    })
                                })
                            })
                        
                })
            })
        })
        
    }
    
}

export const UIManager = new UI();
