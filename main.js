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
import { dbFunctions } from "./utiils/dbFunctions.js"

let playerName="Nael"
let playerLV = 1
window.playermaxHP = 20
window.playerHP = 20
window.BossHP = 680
window.BossMaxHP = 680
window.textIsWriting = false

const scenes = {
    pressZ:() => {
        add([sprite("blackbg")])
        add([text("[Press Z or ENTER]" ,{
            size:15,
            font:"trouble",
        } ),pos(250,360), color(192,192,192)])
        onKeyPress("z", () => {
            go("intro_1")
        })
        onKeyPress("enter", () => {
            go("intro_1")
        })
    },
    intro_1: () => {
        
        let musicintroplay = play("musicintro", {
            paused : false
        })

        add([sprite("blackbg")])
        window.spriteintro1 = add([sprite("intro0"), scale(2), pos(0,0), "introframe"])
        wait(6, () => {
            window.spriteintro1.use(sprite("intro1"), scale(2))
            wait(6, () => {
                window.spriteintro1.use(sprite("intro2"), scale(2))
                wait(5.5, () => {
                    window.spriteintro1.use(sprite("intro3"), scale(2))
                    wait(6, () => {
                        window.spriteintro1.use(sprite("intro4"), scale(2))
                        wait(6.3, () => {
                            window.spriteintro1.use(sprite("intro5"), scale(2))
                            wait(6, () => {
                                window.spriteintro1.use(sprite("intro6"), scale(2))
                                wait(6, () => {
                                    window.spriteintro1.use(sprite("intro7"), scale(2))
                                    wait(6.5, () => {
                                        window.spriteintro1.use(sprite("intro8"), scale(2))
                                        wait(6.2, () => {
                                            window.spriteintro1.use(sprite("intro9"), scale(2))
                                            window.spriteintro2 = add([sprite("intro11"), scale(2), pos(0, -420), opacity(0)])
                                            wait(6.3, () => {
                                                const linetop = add([sprite("blackbg"), pos(0,-420)])
                                                const linebottom = add([sprite("blackbg"), pos(0,280)])
                                                wait(1, () => {
                                                    tween(vec2(0,-420), vec2(0,70), 11, (t) => spriteintro2.pos = t, easings.linear)
                                                    wait(21, () => {
                                                        destroyIntro()
                                                    })
                                                })
                                                
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        let spr1tran = add([sprite("blackbg"), opacity(0)])
        wait(5.5, () => {
            tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
            wait(0.6, () => {
                tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                wait(5.5, () => {
                    tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                    wait(0.6, () => {
                        tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                        wait(4.9, () => {
                            tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                            wait(0.6, () => {
                                tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                wait(5.3, () => {
                                    tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                    wait(0.6, () => {
                                        tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                        wait(5.4, () => {
                                            tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                            wait(0.6, () => {
                                                tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                wait(5.4, () => {
                                                    tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                    wait(0.6, () => {
                                                        tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                        wait(5.5, () => {
                                                            tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                            wait(0.6, () => {
                                                                tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                                wait(5.8, () => {
                                                                    tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                                    wait(0.6, () => {
                                                                        tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                                        wait(5.5, () => {
                                                                            tween(0, 1, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                                            wait(0.6, () => {
                                                                                tween(1, 0, 0.4, (t) => spr1tran.opacity = t, easings.linear)
                                                                                wait(5.5, () => {
                                                                                    tween(1, 0, 0.4, (t) => spriteintro1.opacity = t, easings.linear)
                                                                                    wait(0.6, () => {
                                                                                        tween(0, 1, 0.4, (t) => spriteintro2.opacity = t, easings.linear)
                                                                                        
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        window.dialogdisplay = UIManager.animerTexteIntro("Long ago,/p two races/bruled over Earth:/b/pHUMANS and MONSTERS.", vec2(120, 320))
        wait(6.3, () => {
            destroy(dialogdisplay)
            window.dialogdisplay = UIManager.animerTexteIntro("One day,/p war broke/bout between the two/braces.", vec2(120, 320))
                wait(6, () => {
                    destroy(dialogdisplay)
                    window.dialogdisplay = UIManager.animerTexteIntro("After a long battle,/p/bthe humans were/bvictorious. ", vec2(120, 320))
                    wait(5.5, () => {
                        destroy(dialogdisplay)
                        window.dialogdisplay = UIManager.animerTexteIntro("They sealed the monsters/bunderground with a magic/bspell.", vec2(120, 320))
                        wait(6, () => {
                            destroy(dialogdisplay)
                            window.dialogdisplay = UIManager.animerTexteIntro("Many years later./p/p./p/p.", vec2(120, 320))
                            wait(5.8, () => {
                                destroy(dialogdisplay)
                                window.dialogdisplay = UIManager.animerTexteIntro("      MT.  EBOTT/p/b         20XX", vec2(120, 320))
                                wait(5.9, () => {
                                    destroy(dialogdisplay)
                                    window.dialogdisplay = UIManager.animerTexteIntro("Legends say that those/bwho climb the mountain/bnever return.", vec2(120, 320))
                                    wait(5.7, () => {
                                        destroy(dialogdisplay)
                                    })
                                })
                            })
                        })
                    })
                })
        })
        function destroyIntro(){
            onUpdate(() => {
                destroy(window.dialogdisplay)
                let spr2tran = add([sprite("blackbg"), opacity(0)])
                tween(0, 1, 6, (t) => spr2tran.opacity = t, easings.linear)
                wait(1.5, () => {
                    go("intro")
                })
            })
        }
        onKeyPress("z", () => {
            destroyIntro()
            musicintroplay.paused = true
        })

    },
    intro: () => {
        add([sprite("blackbg")])
        play("introboom", {
            volume: 2
        })
        add([sprite("logo"), scale(0.48), pos(30,200)])
        wait(2, () => {
            add([text("[Press Z or ENTER]" ,{
                size:15,
                font:"trouble",
            } ),pos(250,360), color(192,192,192)])
        })
        onKeyPress("z", () => {
            window.startmenumusic = play("startmenumusic",{
                volume: 1,
                paused : false,
                loop:true
            })
            go("save_choose")
            
        })
        onKeyPress("enter", () => {
            window.startmenumusic = play("startmenumusic",{
                volume: 1,
                paused : false,
                loop:true
            })
            go("save_choose")
        })
        

    },
    save_choose: () => {
        add([sprite("blackbg"), pos(0, 0), scale(2)])

        window.savedName = ""
        fetch('/api/getSaveName')
        .then(response => response.json())
        .then(data => {
            const saveName = String(data.data); // Convertit la chaîne en entier
            if (saveName !== "000") { 
                console.log("Une sauvegarde existe");
                add([sprite("ruins_2"), pos(0, -230), scale(2.01)])
                add([sprite("chairiel"), pos(255, 285), scale(2)])
                let playerData = { charName: '', lv: '', currentRoom: '' };
                dbFunctions.getSaveInfo(playerData);
                wait(0.1, () => {
                add([text(playerData.charName+"\n"+playerData.currentRoom,{
                        size:25,
                        font:"detersans",
                        lineSpacing : 12
                } ),pos(165,140), color(255,255,255), fixed(), "previousave"])
                add([text("LV "+playerData.lv,{
                        size:25,
                        font:"detersans",
                } ),pos(305,140), color(255,255,255), fixed(), "previousave"])
                add([text("0:00",{
                        size:25,
                        font:"detersans",
                } ),pos(405,140), color(255,255,255), fixed(), "previousave"])
                class UI {
                    constructor() {
                        this.buttons = [
                            { id: "Continue",  pos: [190, 220], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: true, isPressed: false },
                            { id: "Reset", pos: [370, 220], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                        ];
                        this.status = "Continue"
                    }
                    init() {
                        this.buttons.forEach(btn => {
                            const position = vec2(btn.pos[0], btn.pos[1]);
                            btn.entity = add([
                                text(btn.id, {
                                    font : "detersans",
                                    size : 25
                                }),
                                pos(position),
                                color(btn.isSelected ? btn.colorSelected : btn.color),
                            ]);
                        });
                        this.setupInputHandlers()
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
                        this.status = this.buttons[newIndex].id;
                        this.updateButtons()
                    }
                    setupInputHandlers() {
                        onKeyPress("right", () => {
                            if (this.status!="launchedGame"){
                            if (this.status=="Continue"||this.status=="Reset"){
                            this.moveCursor("right");}}
                        });
                        onKeyPress("left", () => {
                            if (this.status!="launchedGame"){
                            if (this.status=="Continue"||this.status=="Reset"){
                            this.moveCursor("left");}}
                        });
                        onKeyPress("z", () => {
                            if (this.status!="launchedGame"){
                            if (this.status=="Continue"){
                                window.startmenumusic.paused = true
                            this.status = "launchedGame"
                            tween(0, 1, 5, (t) => transitionwhite.opacity = t, easings.linear)
                            play("whitewhoosh", {
                                volume : 2
                            })
                            wait(7, () => {
                                go("prepare_game_continue")
                            })
                        }
                            else {
                                this.status = "launchedGame"
                                go("name_choose2")
                            }}
                        });
                        onKeyPress("enter", () => {
                            if (this.status!="launchedGame"){
                            if (this.status=="Continue"){
                                window.startmenumusic.paused = true
                                this.status = "launchedGame"
                                tween(0, 1, 5, (t) => transitionwhite.opacity = t, easings.linear)
                                play("whitewhoosh", {
                                    volume : 2
                                })
                                wait(7, () => {
                                    go("prepare_game_continue")
                                });
                        }
                            else {
                                this.status = "launchedGame"
                                go("name_choose2")
                            }}
                        });
                    }
                    updateButtons() {
                        this.buttons.forEach((btn, index) => {
                            const isSelected = btn.isSelected;
                            btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                        });
                    }
                }

                const ui = new UI(); 
                ui.init();
                let transitionwhite = add([sprite("whitebg"), scale(2), pos(-100,-100), opacity(0)])

            })
                
            } else if(saveName =="000") {
                go("menu")
            }
            else {
            }
        })

    },
    menu: () => {
        add([sprite("blackbg")])
        
        add([text("--- Instruction ---" ,{
            size:25,
            font:"detersans",
        } ),pos(160,80), color(192,192,192)])
        add([text("[Z or ENTER] - Confirm\n[X] - Cancel\n[C or CTRL] - Menu (to be impl.)\n\n\nWhen HP is 0, you lose." ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(160,144), color(192,192,192)])
        add([text("Begin game" ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(160,360), color(255,255,0)])
        onKeyPress("z", () => {
            go("name_choose")
        })
        onKeyPress("enter", () => {
            go("name_choose")
        })
    },
    name_choose: () => {
        onUpdate(() => {
        })
        add([sprite("blackbg"), scale(2), pos(-100,-100)])
        add([text("Name the fallen human." ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(190,70), color(255,255,255)])
        class UI {
            constructor() {
                this.buttons = [
                    { id: "Quit",  pos: [135, 380], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: true, isPressed: false },
                    { id: "Backspace", pos: [240, 380], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Done", pos: [425, 380], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                ];
                this.letters = [
                    { id: "A",  pos: [135, 150], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "B", pos: [195, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "C", pos: [255, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "D", pos: [315, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "E", pos: [375, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "F", pos: [435, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "G", pos: [495, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "H", pos: [135, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "I", pos: [195, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "J", pos: [255, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "K", pos: [315, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "L", pos: [375, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "M", pos: [435, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "N", pos: [495, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "O", pos: [135, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "P", pos: [195, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Q", pos: [255, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "R", pos: [315, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "S", pos: [375, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "T", pos: [435, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "U", pos: [495, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "V", pos: [135, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "W", pos: [195, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "X", pos: [255, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Y", pos: [315, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Z", pos: [375, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    
                    { id: "a",  pos: [135, 260], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "b", pos: [195, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "c", pos: [255, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "d", pos: [315, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "e", pos: [375, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "f", pos: [435, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "g", pos: [495, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "h",  pos: [135, 285], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "i", pos: [195, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "j", pos: [255, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "k", pos: [315, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "l", pos: [375, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "m", pos: [435, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "n", pos: [495, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "o",  pos: [135, 310], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "p", pos: [195, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "q", pos: [255, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "r", pos: [315, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "s", pos: [375, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "t", pos: [435, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "u", pos: [495, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "v",  pos: [135, 335], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "w", pos: [195, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "x", pos: [255, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "y", pos: [315, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "z", pos: [375, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                ];
                this.status = "Quit";
            }
            init() {
                this.buttons.forEach(btn => {
                    const position = vec2(btn.pos[0], btn.pos[1]);
                    btn.entity = add([
                        text(btn.id, {
                            font : "detersans",
                            size : 25
                        }),
                        pos(position),
                        color(btn.isSelected ? btn.colorSelected : btn.color),
                    ]);
                });
                this.letters.forEach(ltr => {
                    const position = vec2(ltr.pos[0], ltr.pos[1]);
                    ltr.entity = add([
                        text(ltr.id, {
                            font : "detersans",
                            size : 25
                        }),
                        pos(position),
                        color(ltr.isSelected ? ltr.colorSelected : ltr.color),
                    ]);
                });
                this.setupInputHandlers()
                
            }
            
            setupInputHandlers() {
                if (this.status=="Quit"||this.status=="Backspace"||this.status=="Done"){}
                onKeyPress("right", () => {
                    if (this.status=="Quit"||this.status=="Backspace"||this.status=="Done"){
                    this.moveCursor("right");}
                    else{
                        this.moveCursorLetter("right")
                    }
                });
                onKeyPress("left", () => {
                    if (this.status=="Quit"||this.status=="Backspace"||this.status=="Done"){
                    this.moveCursor("left");}
                    else{
                        this.moveCursorLetter("left")
                    }
                });
                onKeyPress("up", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"){
                    this.moveCursorLetter("up");}
                    else{
                        this.moveCursor("up")
                    }
                });
                onKeyPress("down", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"){
                    this.moveCursorLetter("down");}
                    else{
                        this.moveCursor("down")
                    }
                });
                onKeyPress("z", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"&&(charName.length<6)){
                    this.activateLetter();}
                    else if(this.status == "Backspace"){
                        this.removeLetter()
                    }
                    else if(this.status == "Quit"){
                        go("menu")
                    }
                    else if(this.status == "Done" && charName.length > 0){
                        go("name_confirm")
                    }

                });
                onKeyPress("enter", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"&&(charName.length<6)){
                    this.activateLetter();}
                    else if(this.status == "Backspace"){
                        this.removeLetter()
                    }
                    else if(this.status == "Quit"){
                        go("menu")
                    }
                    else if(this.status == "Done"){
                        go("name_confirm", charName)
                    }

                });
                onKeyPress("x", () => {
                    this.removeLetter()
                });
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
                this.status = this.buttons[newIndex].id;
                if (direction === "up"&&this.status=="Quit") {
                    this.letters.forEach(ltr => {
                        if (ltr.id == "v") {
                            ltr.isSelected = true;
                            this.status="v"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "up"&&this.status=="Backspace") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "x") {
                            ltr.isSelected = true;
                            this.status="x"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "up"&&this.status=="Done") {
                this.buttons[newIndex].isSelected = false;
                this.letters.forEach(ltr => {
                    if (ltr.id == "t") {
                        ltr.isSelected = true;
                        this.status="t"
                        this.updateLetters();
                    }
                    
                this.buttons[newIndex].isSelected = false;
                });
                }
                else if (direction === "down"&&this.status=="Quit") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "A") {
                            ltr.isSelected = true;
                            this.status="A"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "down"&&this.status=="Backspace") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "C") {
                            ltr.isSelected = true;
                            this.status="C"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "down"&&this.status=="Done") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "F") {
                            ltr.isSelected = true;
                            this.status="F"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                this.updateButtons();
            }
            
            moveCursorLetter(direction) {
                let currentIndex = this.letters.findIndex(btn => btn.isSelected);
                let newIndex = currentIndex;
                if (direction === "right" && this.status !="z") {
                    newIndex = (currentIndex + 1) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                } else if (direction === "left"&& this.status !="A") {
                    newIndex = (currentIndex - 1 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if (direction === "up" && this.status!="a"&& this.status!="b"&& this.status!="c"&& this.status!="d"&& this.status!="e"&& this.status!="f"&& this.status!="g" ) {
                    newIndex = (currentIndex - 7 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "up" && this.status == "a")||(direction === "up" && this.status == "b")||(direction === "up" && this.status == "c")||(direction === "up" && this.status == "d")||(direction === "up" && this.status == "d")||(direction === "up" && this.status == "e")) {
                    newIndex = (currentIndex - 5 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "up" && this.status == "f")||(direction === "up" && this.status == "g")) {
                    newIndex = (currentIndex - 12 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if (direction === "down" && this.status!="V"&& this.status!="W"&& this.status!="X"&& this.status!="Y"&& this.status!="Z"&& this.status!="T"&& this.status!="U"&& this.status!="v"&& this.status!="w"&& this.status!="x"&& this.status!="y"&& this.status!="z"&& this.status!="t"&& this.status!="u") {
                    newIndex = (currentIndex + 7 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "down" && this.status == "V")||(direction === "down" && this.status == "W")||(direction === "down" && this.status == "X")||(direction === "down" && this.status == "Y")||(direction === "down" && this.status == "Z")) {
                    newIndex = (currentIndex + 5 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "down" && this.status == "T")||(direction === "down" && this.status == "U")) {
                    newIndex = (currentIndex + 12 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                } 
                if ((direction === "down" && this.status == "v")||(direction === "down" && this.status == "w")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Quit") {
                            btn.isSelected = true;
                            this.status="Quit"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "down" && this.status == "x")||(direction === "down" && this.status == "y")||(direction === "down" && this.status == "z")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Backspace") {
                            btn.isSelected = true;
                            this.status="Backspace"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "down" && this.status == "t")||(direction === "down" && this.status == "u")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Done") {
                            btn.isSelected = true;
                            this.status="Done"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if ((direction === "up" && this.status == "A")||(direction === "up" && this.status == "B")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Quit") {
                            btn.isSelected = true;
                            this.status="Quit"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "up" && this.status == "C")||(direction === "up" && this.status == "D")||(direction === "up" && this.status == "E")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Backspace") {
                            btn.isSelected = true;
                            this.status="Backspace"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "up" && this.status == "F")||(direction === "up" && this.status == "G")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Done") {
                            btn.isSelected = true;
                            this.status="Done"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                
                this.updateLetters();
            }
            updateButtons() {
                this.buttons.forEach((btn, index) => {
                    const isSelected = btn.isSelected;
                    btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                });
            }
            updateLetters() {
                this.letters.forEach((btn, index) => {
                    const isSelected = btn.isSelected;
                    btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                });
            }
            activateLetter(){
                charName += this.status;
            }
            removeLetter(){
                charName = charName.slice(0, -1);
            }
        }
        window.charName = ""
                let displayText = add([text(charName ,{
                    size:25,
                    font:"detersans",
                    lineSpacing: 7,
                } ),pos(280,110), color(255,255,255)])
                onUpdate(() => {
                    displayText.use(text(charName ,{
                        size:25,
                        font:"detersans",
                        lineSpacing: 7,
                    } ))
                })
        const ui = new UI(); 
        ui.init();
        
    },
    name_confirm: () => {
        add([sprite("blackbg"), scale(2), pos(-100,-100)])
        add([text("Is this name correct ?" ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(190,70), color(255,255,255)])
        let displayText = add([text(charName ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(280,110), color(255,255,255), scale(1)])
        tween(1, 3, 4, (t) => displayText.scale = t, easings.easeOutQuad) 
        tween(280, 220, 4, (t) => displayText.pos.x = t, easings.easeOutQuad)
        tween(110, 250, 4, (t) => displayText.pos.y = t, easings.easeOutQuad)       
        class UI {
            constructor() {
                this.buttons = [
                    { id: "No",  pos: [170, 380], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: true, isPressed: false },
                    { id: "Yes", pos: [450, 380], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                ];
                this.status = "No"
            }
            init() {
                this.buttons.forEach(btn => {
                    const position = vec2(btn.pos[0], btn.pos[1]);
                    btn.entity = add([
                        text(btn.id, {
                            font : "detersans",
                            size : 25
                        }),
                        pos(position),
                        color(btn.isSelected ? btn.colorSelected : btn.color),
                    ]);
                });
                this.setupInputHandlers()
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
                this.status = this.buttons[newIndex].id;
                this.updateButtons()
            }
            setupInputHandlers() {
                onKeyPress("right", () => {
                    if (this.status!="lauchedGame"){
                    if (this.status=="No"||this.status=="Yes"){
                    this.moveCursor("right");}}
                });
                onKeyPress("left", () => {
                    if (this.status!="lauchedGame"){
                    if (this.status=="No"||this.status=="Yes"){
                    this.moveCursor("left");}}
                });
                onKeyPress("z", () => {
                    if (this.status!="launchedGame"){
                    if (this.status=="No"){
                    go("name_choose");}
                    else {
                        window.startmenumusic.paused = true
                        this.status = "launchedGame"
                        tween(0, 1, 5, (t) => transitionwhite.opacity = t, easings.linear)
                        play("whitewhoosh", {
                            volume : 2
                        })
                        const newData = { newValue: charName };
                            fetch('/api/createName', {
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
                        wait(7, () => {
                            go("prepare_game")
                        })
                    }}
                });
                onKeyPress("enter", () => {
                    if (this.status!="launchedGame"){
                    if (this.status=="No"){
                    go("name_choose");}
                    else {
                        this.status = "launchedGame"
                        tween(0, 1, 5, (t) => transitionwhite.opacity = t, easings.linear)
                        window.startmenumusic.paused = true
                        wait(7, () => {
                            go("prepare_game")
                        })
                    }}
                });
            }
            updateButtons() {
                this.buttons.forEach((btn, index) => {
                    const isSelected = btn.isSelected;
                    btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                });
            }
        }
        const ui = new UI(); 
        ui.init();
        let transitionwhite = add([sprite("whitebg"), scale(2), pos(-100,-100), opacity(0)])

        

    },
    name_choose2: () => {
        onUpdate(() => {
        })
        add([sprite("blackbg"), scale(2), pos(-100,-100)])
        add([text("Name the fallen human." ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(190,70), color(255,255,255)])
        class UI {
            constructor() {
                this.buttons = [
                    { id: "Quit",  pos: [135, 380], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: true, isPressed: false },
                    { id: "Backspace", pos: [240, 380], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Done", pos: [425, 380], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                ];
                this.letters = [
                    { id: "A",  pos: [135, 150], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "B", pos: [195, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "C", pos: [255, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "D", pos: [315, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "E", pos: [375, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "F", pos: [435, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "G", pos: [495, 150], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "H", pos: [135, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "I", pos: [195, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "J", pos: [255, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "K", pos: [315, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "L", pos: [375, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "M", pos: [435, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "N", pos: [495, 175], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "O", pos: [135, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "P", pos: [195, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Q", pos: [255, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "R", pos: [315, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "S", pos: [375, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "T", pos: [435, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "U", pos: [495, 200], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "V", pos: [135, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "W", pos: [195, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "X", pos: [255, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Y", pos: [315, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "Z", pos: [375, 225], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    
                    { id: "a",  pos: [135, 260], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "b", pos: [195, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "c", pos: [255, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "d", pos: [315, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "e", pos: [375, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "f", pos: [435, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "g", pos: [495, 260], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "h",  pos: [135, 285], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "i", pos: [195, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "j", pos: [255, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "k", pos: [315, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "l", pos: [375, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "m", pos: [435, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "n", pos: [495, 285], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "o",  pos: [135, 310], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "p", pos: [195, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "q", pos: [255, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "r", pos: [315, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "s", pos: [375, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "t", pos: [435, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "u", pos: [495, 310], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                    { id: "v",  pos: [135, 335], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: false, isPressed: false },
                    { id: "w", pos: [195, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "x", pos: [255, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "y", pos: [315, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                    { id: "z", pos: [375, 335], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },

                ];
                this.status = "Quit";
            }
            init() {
                this.buttons.forEach(btn => {
                    const position = vec2(btn.pos[0], btn.pos[1]);
                    btn.entity = add([
                        text(btn.id, {
                            font : "detersans",
                            size : 25
                        }),
                        pos(position),
                        color(btn.isSelected ? btn.colorSelected : btn.color),
                    ]);
                });
                this.letters.forEach(ltr => {
                    const position = vec2(ltr.pos[0], ltr.pos[1]);
                    ltr.entity = add([
                        text(ltr.id, {
                            font : "detersans",
                            size : 25
                        }),
                        pos(position),
                        color(ltr.isSelected ? ltr.colorSelected : ltr.color),
                    ]);
                });
                this.setupInputHandlers()
                
            }
            
            setupInputHandlers() {
                if (this.status=="Quit"||this.status=="Backspace"||this.status=="Done"){}
                onKeyPress("right", () => {
                    if (this.status=="Quit"||this.status=="Backspace"||this.status=="Done"){
                    this.moveCursor("right");}
                    else{
                        this.moveCursorLetter("right")
                    }
                });
                onKeyPress("left", () => {
                    if (this.status=="Quit"||this.status=="Backspace"||this.status=="Done"){
                    this.moveCursor("left");}
                    else{
                        this.moveCursorLetter("left")
                    }
                });
                onKeyPress("up", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"){
                    this.moveCursorLetter("up");}
                    else{
                        this.moveCursor("up")
                    }
                });
                onKeyPress("down", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"){
                    this.moveCursorLetter("down");}
                    else{
                        this.moveCursor("down")
                    }
                });
                onKeyPress("z", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"&&(charName.length<6)){
                    this.activateLetter();}
                    else if(this.status == "Backspace"){
                        this.removeLetter()
                    }
                    else if(this.status == "Quit"){
                        go("save_choose")
                    }
                    else if(this.status == "Done" && charName.length > 0){
                        go("name_confirm2")
                    }

                });
                onKeyPress("enter", () => {
                    if (this.status!="Quit"&&this.status!="Backspace"&&this.status!="Done"&&(charName.length<6)){
                    this.activateLetter();}
                    else if(this.status == "Backspace"){
                        this.removeLetter()
                    }
                    else if(this.status == "Quit"){
                        go("save_choose")
                    }
                    else if(this.status == "Done"){
                        go("name_confirm2", charName)
                    }

                });
                onKeyPress("x", () => {
                    this.removeLetter()
                });
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
                this.status = this.buttons[newIndex].id;
                if (direction === "up"&&this.status=="Quit") {
                    this.letters.forEach(ltr => {
                        if (ltr.id == "v") {
                            ltr.isSelected = true;
                            this.status="v"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "up"&&this.status=="Backspace") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "x") {
                            ltr.isSelected = true;
                            this.status="x"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "up"&&this.status=="Done") {
                this.buttons[newIndex].isSelected = false;
                this.letters.forEach(ltr => {
                    if (ltr.id == "t") {
                        ltr.isSelected = true;
                        this.status="t"
                        this.updateLetters();
                    }
                    
                this.buttons[newIndex].isSelected = false;
                });
                }
                else if (direction === "down"&&this.status=="Quit") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "A") {
                            ltr.isSelected = true;
                            this.status="A"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "down"&&this.status=="Backspace") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "C") {
                            ltr.isSelected = true;
                            this.status="C"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                else if (direction === "down"&&this.status=="Done") {
                    this.buttons[newIndex].isSelected = false;
                    this.letters.forEach(ltr => {
                        if (ltr.id == "F") {
                            ltr.isSelected = true;
                            this.status="F"
                            this.updateLetters();
                        }
                        
                    this.buttons[newIndex].isSelected = false;
                    });
                }
                this.updateButtons();
            }
            
            moveCursorLetter(direction) {
                let currentIndex = this.letters.findIndex(btn => btn.isSelected);
                let newIndex = currentIndex;
                if (direction === "right" && this.status !="z") {
                    newIndex = (currentIndex + 1) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                } else if (direction === "left"&& this.status !="A") {
                    newIndex = (currentIndex - 1 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if (direction === "up" && this.status!="a"&& this.status!="b"&& this.status!="c"&& this.status!="d"&& this.status!="e"&& this.status!="f"&& this.status!="g" ) {
                    newIndex = (currentIndex - 7 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "up" && this.status == "a")||(direction === "up" && this.status == "b")||(direction === "up" && this.status == "c")||(direction === "up" && this.status == "d")||(direction === "up" && this.status == "d")||(direction === "up" && this.status == "e")) {
                    newIndex = (currentIndex - 5 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "up" && this.status == "f")||(direction === "up" && this.status == "g")) {
                    newIndex = (currentIndex - 12 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if (direction === "down" && this.status!="V"&& this.status!="W"&& this.status!="X"&& this.status!="Y"&& this.status!="Z"&& this.status!="T"&& this.status!="U"&& this.status!="v"&& this.status!="w"&& this.status!="x"&& this.status!="y"&& this.status!="z"&& this.status!="t"&& this.status!="u") {
                    newIndex = (currentIndex + 7 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "down" && this.status == "V")||(direction === "down" && this.status == "W")||(direction === "down" && this.status == "X")||(direction === "down" && this.status == "Y")||(direction === "down" && this.status == "Z")) {
                    newIndex = (currentIndex + 5 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                }
                else if ((direction === "down" && this.status == "T")||(direction === "down" && this.status == "U")) {
                    newIndex = (currentIndex + 12 + this.letters.length) % this.letters.length;
                    this.letters[currentIndex].isSelected = false;
                    this.status = this.letters[newIndex].id;
                    this.letters[newIndex].isSelected = true;
                    this.updateLetters();
                    return;
                } 
                if ((direction === "down" && this.status == "v")||(direction === "down" && this.status == "w")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Quit") {
                            btn.isSelected = true;
                            this.status="Quit"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "down" && this.status == "x")||(direction === "down" && this.status == "y")||(direction === "down" && this.status == "z")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Backspace") {
                            btn.isSelected = true;
                            this.status="Backspace"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "down" && this.status == "t")||(direction === "down" && this.status == "u")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Done") {
                            btn.isSelected = true;
                            this.status="Done"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if ((direction === "up" && this.status == "A")||(direction === "up" && this.status == "B")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Quit") {
                            btn.isSelected = true;
                            this.status="Quit"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "up" && this.status == "C")||(direction === "up" && this.status == "D")||(direction === "up" && this.status == "E")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Backspace") {
                            btn.isSelected = true;
                            this.status="Backspace"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                else if((direction === "up" && this.status == "F")||(direction === "up" && this.status == "G")) {
                    this.letters[newIndex].isSelected = false;
                    this.buttons.forEach(btn => {
                        if (btn.id == "Done") {
                            btn.isSelected = true;
                            this.status="Done"
                            this.updateButtons();
                        }
                        
                    this.letters[newIndex].isSelected = false;
                    });
                }
                
                this.updateLetters();
            }
            updateButtons() {
                this.buttons.forEach((btn, index) => {
                    const isSelected = btn.isSelected;
                    btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                });
            }
            updateLetters() {
                this.letters.forEach((btn, index) => {
                    const isSelected = btn.isSelected;
                    btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                });
            }
            activateLetter(){
                charName += this.status;
            }
            removeLetter(){
                charName = charName.slice(0, -1);
            }
        }
        window.charName = ""
                let displayText = add([text(charName ,{
                    size:25,
                    font:"detersans",
                    lineSpacing: 7,
                } ),pos(280,110), color(255,255,255)])
                onUpdate(() => {
                    displayText.use(text(charName ,{
                        size:25,
                        font:"detersans",
                        lineSpacing: 7,
                    } ))
                })
        const ui = new UI(); 
        ui.init();
        
    },
    name_confirm2: () => {
        add([sprite("blackbg"), scale(2), pos(-100,-100)])
        add([text("Is this name correct ?" ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(190,70), color(255,255,255)])
        let displayText = add([text(charName ,{
            size:25,
            font:"detersans",
            lineSpacing: 7,
        } ),pos(280,110), color(255,255,255), scale(1)])
        tween(1, 3, 4, (t) => displayText.scale = t, easings.easeOutQuad) 
        tween(280, 220, 4, (t) => displayText.pos.x = t, easings.easeOutQuad)
        tween(110, 250, 4, (t) => displayText.pos.y = t, easings.easeOutQuad)       
        class UI {
            constructor() {
                this.buttons = [
                    { id: "No",  pos: [170, 380], color:rgb(255, 255, 255), colorSelected : rgb(255,255,0), isSelected: true, isPressed: false },
                    { id: "Yes", pos: [450, 380], color:rgb(255, 255, 255),colorSelected : rgb(255,255,0),isSelected: false, isPressed: false },
                ];
                this.status = "No"
            }
            init() {
                this.buttons.forEach(btn => {
                    const position = vec2(btn.pos[0], btn.pos[1]);
                    btn.entity = add([
                        text(btn.id, {
                            font : "detersans",
                            size : 25
                        }),
                        pos(position),
                        color(btn.isSelected ? btn.colorSelected : btn.color),
                    ]);
                });
                this.setupInputHandlers()
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
                this.status = this.buttons[newIndex].id;
                this.updateButtons()
            }
            setupInputHandlers() {
                onKeyPress("right", () => {
                    if (this.status!="lauchedGame"){
                    if (this.status=="No"||this.status=="Yes"){
                    this.moveCursor("right");}}
                });
                onKeyPress("left", () => {
                    if (this.status!="lauchedGame"){
                    if (this.status=="No"||this.status=="Yes"){
                    this.moveCursor("left");}}
                });
                onKeyPress("z", () => {
                    if (this.status!="launchedGame"){
                    if (this.status=="No"){
                    go("name_choose2");}
                    else {
                        window.startmenumusic.paused = true
                        this.status = "launchedGame"
                        tween(0, 1, 5, (t) => transitionwhite.opacity = t, easings.linear)
                        play("whitewhoosh", {
                            volume : 2
                        })
                        const newData = { newValue: charName };
                            fetch('/api/createName', {
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
                        wait(7, () => {
                            go("prepare_game")
                        })
                    }}
                });
                onKeyPress("enter", () => {
                    if (this.status!="launchedGame"){
                    if (this.status=="No"){
                    go("name_choose2");}
                    else {
                        this.status = "launchedGame"
                        tween(0, 1, 5, (t) => transitionwhite.opacity = t, easings.linear)
                        const newData = { newValue: charName };
                            fetch('/api/createName', {
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
                        window.startmenumusic.paused = true
                        wait(7, () => {
                            go("prepare_game")
                        })
                    }}
                });
            }
            updateButtons() {
                this.buttons.forEach((btn, index) => {
                    const isSelected = btn.isSelected;
                    btn.entity.use(color(isSelected ? btn.colorSelected : btn.color));
                });
            }
        }
        const ui = new UI(); 
        ui.init();
        let transitionwhite = add([sprite("whitebg"), scale(2), pos(-100,-100), opacity(0)])

        

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
        
        const interieur = add([
            rect(550, 125),
            pos(42, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
    
            const epaisseurMur = 5;
    
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
    prepare_game: () => {
        add([sprite("whitebg"), scale(2), pos(-100,-100), opacity(1)])
        dbFunctions.resetSaveData()
        wait(0.1, () => {
        dbFunctions.writeTempSave()
        wait(0.1, () => {
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
        const newData = { newValue: charName };
                            fetch('/api/createName', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newData),
                            })
                            .then(response => response.text())
                            .then(result => {
                            console.log(result);
                            dbFunctions.resetLV()
                            go("ruins_1")
                            });
        });})
    })
        
    },
    prepare_game_continue: () => {
        add([sprite("whitebg"), scale(2), pos(-100,-100), opacity(1)])
        let playerData = { charName: '', lv: '', currentRoom: '' };
        dbFunctions.writeTempSave();
        dbFunctions.getSaveInfo(playerData);
        wait(0.3, () => {
            switch (playerData.currentRoom) {
                case "Ruins - Entrance":
                    go("ruins_3_continued")
                    break;
                case "":
                case "":
                case "":
                }
        })
    },
    ruins_1: (transition) => {
        if(transition){
            tween(1, 0, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
        wait(1, () => {
            destroy(transition)
        })
        }
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
                        window.currentRoom= "ruins_1"
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
        add([sprite("blackbg"), scale(2), pos(-100,-100), opacity(1)])
        if(transition){
            tween(1, 0, 1, (t) => transition.opacity = t, easings.easeOutQuad)
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
            speaking.paused = true
            window.textIsWriting = false
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
            if(window.currentRoom == "ruins_3"){
                UIManager.playerManager(vec2(305,10))
            player.play("idled")
            }
            
            else if(window.currentRoom == "ruins_1"){
            UIManager.playerManager(vec2(305,390))
            player.play("idleu")
            }
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
        
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
    
            const epaisseurMur = 5;
    
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
            UIManager.displayDialogFight("See that heart ?/p/bThat is your SOUL,/p/bthe very culmination of your being! |Your SOUL starts off weak,/p but can grow stronger if you gain a lot of LV.|What's LV stand for ?/p/bWhy,/p LOVE,/p of course!|You want some LOVE,/p don't you ?|Don't worry,/p I'll share some with you!", vec2(370,135), onComplete)
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
                lifespan(0.6, { fade: 0.5 }), 
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
        
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
            const epaisseurMur = 5;
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
        
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
    
            const epaisseurMur = 5;
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
        
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
    
            const epaisseurMur = 5;
    
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
            const circleCenter = vec2(310, 310); 
            play("pelletcircle")
            const radius = 100; 
            const pelletsCount = 50; 
            const angleStep = 360 / pelletsCount; 
            const delayPerPellet = 0.03;
        
            for (let i = 0; i < pelletsCount; i++) {
                const angleInDegrees = (360 - (angleStep * i)) % 360;
                const angleInRadians = angleInDegrees * (Math.PI / 180); // Conversion en radians
                const pelletPos = vec2(
                    circleCenter.x + radius * Math.cos(angleInRadians), // Calcul de la position x
                    circleCenter.y + radius * Math.sin(angleInRadians) // Calcul de la position y
                );
        
                wait(i * delayPerPellet, () => {
                    const pellet = add([
                        sprite("pellets"), 
                        scale(1),
                        pos(pelletPos.x, pelletPos.y), 
                        area(),
                        "pellet"
                    ]);
        
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
    const circleCenter = vec2(310, 310); 
    const initialRadius = 100; 
    const pelletsCount = 50; 
    const shrinkDuration = 15;
    const shrinkStep = initialRadius / (shrinkDuration / 0.03); 
    play("floweylaugh")
    floweyspritetuto.play("grin");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "grin") {
                    floweyspritetuto.play("grinlaugh")
                }
            })

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
                pellet.pos = newPos;
            });
            wait(0.03, shrinkCircle);
        } else {
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }
    };

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
        
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
    
            const epaisseurMur = 5;
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
            const circleCenter = vec2(310, 310); 
            play("pelletcircle")
            const radius = 100; 
            const pelletsCount = 50;
            const angleStep = 360 / pelletsCount; 
            const delayPerPellet = 0.03; 
        
            for (let i = 0; i < pelletsCount; i++) {
                const angleInDegrees = (360 - (angleStep * i)) % 360;
                const angleInRadians = angleInDegrees * (Math.PI / 180); // Conversion en radians
                const pelletPos = vec2(
                    circleCenter.x + radius * Math.cos(angleInRadians), // Calcul de la position x
                    circleCenter.y + radius * Math.sin(angleInRadians) // Calcul de la position y
                );
        
                wait(i * delayPerPellet, () => {
                    const pellet = add([
                        sprite("pellets"), 
                        scale(1),
                        pos(pelletPos.x, pelletPos.y), 
                        area(),
                        "pellet"
                    ]);
        
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
    const circleCenter = vec2(310, 310); 
    const initialRadius = 100; 
    const pelletsCount = 50;
    const shrinkDuration = 15; 
    const shrinkStep = initialRadius / (shrinkDuration / 0.03);
    play("floweylaugh")
    floweyspritetuto.play("grin");
            const talk2 = onUpdate(() => {
                if (floweyspritetuto.curAnim() == "grin") {
                    floweyspritetuto.play("grinlaugh")
                }
            })

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
                pellet.pos = newPos;
            });
            wait(0.03, shrinkCircle);
        } else {
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }
    };

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
        
        const interieur = add([
            rect(150, 125),
            pos(242, 257),
            color(0, 0, 0),
        ]);
        function updateWalls() {
            destroyAll("wall");
    
            const epaisseurMur = 5;
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
        window.currentMusicPlaying.paused = true
        window.currentMusicPlaying = play("ruins_ost", {
            loop : true
        })
        add([
            rect(150, 20),
            pos(105,470),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(10),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(265,510),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(385,510),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
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
            rect(350, 20),
            pos(520,100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(550, 20),
            pos(120,100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(50,-120),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-30),
            "murdiagonalhaut"
        ]);
        add([
            rect(150, 20),
            pos(450,-210),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(30),
            "murdiagonalhaut"
        ]);
        add([
            rect(120, 20),
            pos(50,0),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(45),
            "murdiagonalhaut"
        ]);
        add([
            rect(100, 20),
            pos(490,80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "murdiagonalhaut"
        ]);
        add([
            rect(70, 10),
            pos(190,-50),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(45),
            "murdiagonalhaut"
        ]);
        add([
            rect(70, 10),
            pos(410, -10),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "murdiagonalhaut"
        ]);
        add([
            rect(150, 20),
            pos(75,-100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(150, 20),
            pos(575,-100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(145,-175),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(250, 5),
            pos(195,-65),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(350,-175),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(240,-195),
            color(0, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "hitboxhaut"
        ]);
        add([sprite("ruins_3"), pos(0, -350), scale(2.01)])
        const save = add([sprite("save_icon"), pos(300, 60), scale(2), area()], add([
            rect(20, 10),
            pos(310,60),
            color(0, 255, 255),
            opacity(0),
            area(),
            body({isStatic: true}),
            rotate(0),
            "hitsave"]))
        save.play("shine")
        UIManager.playerManager(vec2(305,480))
        player.play("idleu")
        const limitUp = -60
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
                            go("ruins_4", transition)
                        })
                    }
                }
            ])
        })
        
        fetch('/api/getTempPlotValue')
        .then(response => response.json())
        .then(data => {
            const plotValue = parseInt(data.data, 10); // Convertit la chaîne en entier
            if (!isNaN(plotValue) && plotValue == 2) { 
                const torielow = add([sprite("torielwalk"), pos(285, 295), scale(2), area()])
                torielLeave()
                function torielLeave(){
                    tween(torielow.pos, vec2(290, 80), 1.4, (p) => torielow.pos = p, easings.linear)
                    torielow.play("up")
                    torielow.onCollide("hit1", () => {
                        tween(torielow.pos, vec2(490, -120), 1.6, (p) => torielow.pos = p, easings.linear)
                        wait(1.6, () => {
                            tween(torielow.pos, vec2(490, -150), 0.3, (p) => torielow.pos = p, easings.linear)
                            wait(0.3, () => {
                                torielow.play("left")
                                tween(torielow.pos, vec2(460, -170), 0.3, (p) => torielow.pos = p, easings.linear)
                                wait(0.3, () => {
                                    torielow.play("idled")
                                    dbFunctions.incrementTempPlotValue()
                                })
                            })
                        })
                    })
                }
                console.log("Plotvalue == 2");
            } else if(plotValue == 3) {
                const torielow = add([sprite("torielwalk"), pos(460, -170), scale(2), area()])
                torielow.play("idled")
                function torielLeave(){
                    player.onCollide("hit2", () => {
                        destroyAll("hit2")
                        torielow.play("left")
                        tween(torielow.pos, vec2(290, -190), 1.4, (p) => torielow.pos = p, easings.linear)
                        wait(1.4, () => {
                            torielow.play("up")
                            tween(torielow.pos, vec2(290, -210), 0.3, (p) => torielow.pos = p, easings.linear)
                            wait(0.3, () => {
                                tween(1, 0, 0.5, (t) => torielow.opacity = t, easings.easeOutQuad)
                                dbFunctions.incrementTempPlotValue()

                            })
                        })
                        
                    })
                }
                torielLeave()
                console.log("Plotvalue égale à 3");
            }
            else {
                console.log("Toriel n'est plus là.");
            }
        })
        add([
            rect(150, 20),
            pos(240,65),
            color(0, 255, 255),
            opacity(0),
            area(),
            rotate(0),
            "hit1"])
        add([
                rect(500, 10),
                pos(40,35),
                color(0, 255, 255),
                opacity(0),
                area(),
                rotate(0),
                "hit2"])
        
        let speaking = play("generic2", {
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
        window.isInDialog = false
        let interacted = false;
        function setupInitialEventListeners() {
            onKeyPress("z", () => {
                if (!interacted && !window.isInDialog) {
                    interact();
                }
            });
        
            onKeyPress("enter", () => {
                if (!interacted && !window.isInDialog) {
                    interact();
                }
            });
        }
        onKeyPress("enter", interact)
        function displaySave(){
            window.savedName = ""
            fetch('/api/getSaveName')
            .then(response => response.json())
            .then(data => {
                const saveName = String(data.data); // Convertit la chaîne en entier
                if (saveName !== "000") { 
                    savedName = saveName;
                    console.log("Une sauvegarde existe");
                    const contour = add([
                        rect(350 + 5*2, 155 + 5*2),
                        pos(142 - 5, 140 - 5),
                        color(255, 255, 255),
                        area(),
                        fixed(),
                        "previousavebox"
                    ]);
                    const interieur = add([
                        rect(350, 155),
                        pos(142, 140),
                        color(0, 0, 0),
                        fixed(),
                        , "previousavebox"
                    ]);
                    let playerData = { charName: '', lv: '', currentRoom: '' };
                    dbFunctions.getSaveInfo(playerData);
                    wait(0.1, () => {
                    add([text(playerData.charName+"\n"+playerData.currentRoom,{
                            size:25,
                            font:"detersans",
                            lineSpacing : 12
                    } ),pos(165,160), color(255,255,255), fixed(), "previousave"])
                    add([text("LV "+playerData.lv,{
                            size:25,
                            font:"detersans",
                    } ),pos(305,160), color(255,255,255), fixed(), "previousave"])
                    add([text("0:00",{
                            size:25,
                            font:"detersans",
                    } ),pos(405,160), color(255,255,255), fixed(), "previousave"])
                })
                    
                } else if(saveName =="000") {
                    console.log("Aucune sauvegarde trouvée");
                    const contour = add([
                        rect(350 + 5*2, 155 + 5*2),
                        pos(142 - 5, 140 - 5),
                        color(255, 255, 255),
                        area(),
                        fixed(),
                        "previousavebox"
                    ]);
                    const interieur = add([
                        rect(350, 155),
                        pos(142, 140),
                        color(0, 0, 0),
                        fixed(), "previousavebox"
                    ]);
                    add([text("EMPTY\n__",{
                        size:25,
                        font:"detersans",
                    } ),pos(165,160), color(255,255,255), fixed(), "previousave"])
                    add([text("LV 0",{
                        size:25,
                        font:"detersans",
                    } ),pos(305,160), color(255,255,255), fixed(), "previousave"])
                    add([text("0:00",{
                        size:25,
                        font:"detersans",
                    } ),pos(405,160), color(255,255,255), fixed(), "previousave"])
                }
                else {
                    console.log("La valeur n'est pas un nombre valide.");
                }
                class UI {
                    constructor() {
                        this.buttons = [
                            { id: "Save",  pos: [190, 250], color:rgb(255, 255, 255), isSelected: true, isPressed: false },
                            { id: "Return", pos: [340, 250], color:rgb(255, 255, 255),isSelected: false, isPressed: false },
                        ];
                        this.heartPos = [160, 253]
                    }
                    init() {
                        this.buttons.forEach(btn => {
                            const position = vec2(btn.pos[0], btn.pos[1]);
                            btn.entity = add([
                                text(btn.id, {
                                    font : "detersans",
                                    size : 25
                                }),
                                pos(position),
                                color(255,255,255),
                                fixed(),
                                "saveUI"
                            ]);
                        });
                        const heartPosition = vec2(this.heartPos[0], this.heartPos[1]);
                        this.heart = add([sprite("heart"), pos(heartPosition), fixed(), "saveUI"])
                        this.setupInputHandlers();
                    }
                    setupInputHandlers() {
                        onKeyPress("right", () => {
                            if(isInSaveMenu == true){
                            this.moveCursor("right");}
                        });
                        onKeyPress("left", () => {
                            if(isInSaveMenu == true){
                            this.moveCursor("left");}
                            
                        });
                        onKeyPress("z", () => {
                            this.activateButton(); 
                        });
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
                            if (isSelected) {
                                const offsetX = -29; 
                                this.heart.use(pos(vec2(btn.pos[0] + offsetX, this.heartPos[1])));
                            }
                        });
                    }
                    activateButton() {
                        const selectedButton = this.buttons.find(btn => btn.isSelected);
                        console.log(`${selectedButton.id} button activated`);
                        let status = selectedButton.id;
                        if(status== "Save"){
                            dbFunctions.writeSave()
                            const newData = { newValue: "Ruins - Entrance" };
                            fetch('/api/updateRoom', {
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
                            wait(0.1, () => {
                                let playerData = { charName: '', lv: '', currentRoom: '' };
                                dbFunctions.getSaveInfo(playerData);
                                wait(0.1, () => {
                                destroyAll("previousave")
                                destroyAll("saveUI")
                                add([text(playerData.charName+"\n"+playerData.currentRoom,{
                                    size:25,
                                    font:"detersans",
                                    lineSpacing : 12
                                } ),pos(165,160), color(255,255,0), fixed(), "newsave"])
                                add([text("LV "+playerData.lv,{
                                    size:25,
                                    font:"detersans",
                                } ),pos(305,160), color(255,255,0), fixed(), "newsave"])
                                add([text("0:00",{
                                    size:25,
                                    font:"detersans",
                                } ),pos(405,160), color(255,255,0), fixed(), "newsave"])
                                add([text("File saved.",{
                                    size:25,
                                    font:"detersans",
                                } ),pos(190, 250), color(255,255,0), fixed(), "newsave"])})
                                onKeyPress("z", () => {
                                    status = "Saved"
                                    wait(0.1, () => {
                                    this.goBack();})
                                })
                                onKeyPress("enter", () => {
                                    status = "Saved"
                                    wait(0.1, () => {
                                        this.goBack();})
                                });
                            })
                        }
                        else if(status == "Return"){
                            wait(0.1, () => {
                            this.goBack()})
                        }
                    }
                    goBack(){
                        destroyAll("previousave")
                        destroyAll("previousavebox")
                        destroyAll("saveUI")
                        destroyAll("newsave")
                        window.isInDialog=false
                        window.isInSaveMenu = false
                        interacted = false;
                        this.makeFalse()
                        go("ruins_3_saved", player.pos.x, player.pos.y)
                    }
                    makeFalse(){
                        interacted = false
                        window.isInDialog=false

                    }
                    
            }
            const ui = new UI(); 
            ui.init();
            })
            window.isInDialog=false
            window.isInSaveMenu = true
        }
        
        function interact() {
            if (!interacted) {
                for (const col of player.getCollisions()) {
                    const c = col.target;
                    if (c.is("hitsave")) {
                        interacted = true;
                        UIManager.displayDialogOW("* (The shadows of the ruins/b looms above, filling you with/b determination.)|* (HP fully restored.)", "down", false, "", "idle", "talk", displaySave);
                        interacted = false
                        return; 
                    }
                }
            }
        }
        setupInitialEventListeners()
    },
    ruins_3_saved: (posx,posy) => {
        add([
            rect(150, 20),
            pos(105,470),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(10),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(265,510),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(385,510),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
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
            rect(350, 20),
            pos(520,100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(550, 20),
            pos(120,100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(50,-120),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-30),
            "murdiagonalhaut"
        ]);
        add([
            rect(150, 20),
            pos(450,-210),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(30),
            "murdiagonalhaut"
        ]);
        add([
            rect(120, 20),
            pos(50,0),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(45),
            "murdiagonalhaut"
        ]);
        add([
            rect(100, 20),
            pos(490,80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "murdiagonalhaut"
        ]);
        add([
            rect(70, 10),
            pos(190,-50),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(45),
            "murdiagonalhaut"
        ]);
        add([
            rect(70, 10),
            pos(410, -10),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "murdiagonalhaut"
        ]);
        add([
            rect(150, 20),
            pos(75,-100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(150, 20),
            pos(575,-100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(145,-175),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(250, 5),
            pos(195,-65),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(350,-175),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(240,-195),
            color(0, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "hitboxhaut"
        ]);
        add([sprite("ruins_3"), pos(0, -350), scale(2.01)])
        const save = add([sprite("save_icon"), pos(300, 60), scale(2), area()], add([
            rect(20, 10),
            pos(310,60),
            color(0, 255, 255),
            opacity(0),
            area(),
            body({isStatic: true}),
            rotate(0),
            "hitsave"]))
        save.play("shine")
        UIManager.playerManager(vec2(posx,posy))
        player.play("idleu")
        const limitUp = -60
        const limitDown = 373
        const limitLeft = 280
        const limitRight = 995
        const playerX = 305
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
                            go("ruins_4", transition)
                        })
                    }
                }
            ])
        })
        
        fetch('/api/getTempPlotValue')
        .then(response => response.json())
        .then(data => {
            const plotValue = parseInt(data.data, 10); // Convertit la chaîne en entier
            if (!isNaN(plotValue) && plotValue == 2) { 
                const torielow = add([sprite("torielwalk"), pos(285, 295), scale(2), area()])
                torielLeave()
                function torielLeave(){
                    tween(torielow.pos, vec2(290, 80), 1.4, (p) => torielow.pos = p, easings.linear)
                    torielow.play("up")
                    torielow.onCollide("hit1", () => {
                        tween(torielow.pos, vec2(490, -120), 1.6, (p) => torielow.pos = p, easings.linear)
                        wait(1.6, () => {
                            tween(torielow.pos, vec2(490, -150), 0.3, (p) => torielow.pos = p, easings.linear)
                            wait(0.3, () => {
                                torielow.play("left")
                                tween(torielow.pos, vec2(460, -170), 0.3, (p) => torielow.pos = p, easings.linear)
                                wait(0.3, () => {
                                    torielow.play("idled")
                                    dbFunctions.incrementTempPlotValue()
                                })
                            })
                        })
                    })
                }
                console.log("Plotvalue == 2");
            } else if(plotValue == 3) {
                const torielow = add([sprite("torielwalk"), pos(460, -170), scale(2), area()])
                torielow.play("idled")
                function torielLeave(){
                    player.onCollide("hit2", () => {
                        destroyAll("hit2")
                        torielow.play("left")
                        tween(torielow.pos, vec2(290, -190), 1.4, (p) => torielow.pos = p, easings.linear)
                        wait(1.4, () => {
                            torielow.play("up")
                            tween(torielow.pos, vec2(290, -210), 0.3, (p) => torielow.pos = p, easings.linear)
                            wait(0.3, () => {
                                tween(1, 0, 0.5, (t) => torielow.opacity = t, easings.easeOutQuad)
                                dbFunctions.incrementTempPlotValue()

                            })
                        })
                        
                    })
                }
                torielLeave()
                console.log("Plotvalue égale à 3");
            }
            else {
                console.log("Toriel n'est plus là.");
            }
        })
        add([
            rect(150, 20),
            pos(240,65),
            color(0, 255, 255),
            opacity(0),
            area(),
            rotate(0),
            "hit1"])
        add([
                rect(500, 10),
                pos(40,35),
                color(0, 255, 255),
                opacity(0),
                area(),
                rotate(0),
                "hit2"])
        let speaking = play("generic2", {
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
        window.isInDialog = false
        let interacted = false;
        function setupInitialEventListeners() {
            onKeyPress("z", () => {
                if (!interacted && !window.isInDialog) {
                    interact();
                }
            });
        
            onKeyPress("enter", () => {
                if (!interacted && !window.isInDialog) {
                    interact();
                }
            });
        }
        onKeyPress("enter", interact)
        function displaySave(){
            window.savedName = ""
            fetch('/api/getSaveName')
            .then(response => response.json())
            .then(data => {
                const saveName = String(data.data); // Convertit la chaîne en entier
                if (saveName !== "000") { 
                    savedName = saveName;
                    console.log("Une sauvegarde existe");
                    const contour = add([
                        rect(350 + 5*2, 155 + 5*2),
                        pos(142 - 5, 140 - 5),
                        color(255, 255, 255),
                        area(),
                        fixed(),
                        "previousavebox"
                    ]);
                    const interieur = add([
                        rect(350, 155),
                        pos(142, 140),
                        color(0, 0, 0),
                        fixed(),
                        , "previousavebox"
                    ]);
                    let playerData = { charName: '', lv: '', currentRoom: '' };
                    dbFunctions.getSaveInfo(playerData);
                    wait(0.1, () => {
                    add([text(playerData.charName+"\n"+playerData.currentRoom,{
                            size:25,
                            font:"detersans",
                            lineSpacing : 12
                    } ),pos(165,160), color(255,255,255), fixed(), "previousave"])
                    add([text("LV "+playerData.lv,{
                            size:25,
                            font:"detersans",
                    } ),pos(305,160), color(255,255,255), fixed(), "previousave"])
                    add([text("0:00",{
                            size:25,
                            font:"detersans",
                    } ),pos(405,160), color(255,255,255), fixed(), "previousave"])
                })
                    
                } else if(saveName =="000") {
                    console.log("Aucune sauvegarde trouvée");
                    const contour = add([
                        rect(350 + 5*2, 155 + 5*2),
                        pos(142 - 5, 140 - 5),
                        color(255, 255, 255),
                        area(),
                        fixed(),
                        "previousavebox"
                    ]);
                    const interieur = add([
                        rect(350, 155),
                        pos(142, 140),
                        color(0, 0, 0),
                        fixed(), "previousavebox"
                    ]);
                    add([text("EMPTY\n__",{
                        size:25,
                        font:"detersans",
                    } ),pos(165,160), color(255,255,255), fixed(), "previousave"])
                    add([text("LV 0",{
                        size:25,
                        font:"detersans",
                    } ),pos(305,160), color(255,255,255), fixed(), "previousave"])
                    add([text("0:00",{
                        size:25,
                        font:"detersans",
                    } ),pos(405,160), color(255,255,255), fixed(), "previousave"])
                }
                else {
                    console.log("La valeur n'est pas un nombre valide.");
                }
                class UI {
                    constructor() {
                        this.buttons = [
                            { id: "Save",  pos: [190, 250], color:rgb(255, 255, 255), isSelected: true, isPressed: false },
                            { id: "Return", pos: [340, 250], color:rgb(255, 255, 255),isSelected: false, isPressed: false },
                        ];
                        this.heartPos = [160, 253]
                    }
                    init() {
                        this.buttons.forEach(btn => {
                            const position = vec2(btn.pos[0], btn.pos[1]);
                            btn.entity = add([
                                text(btn.id, {
                                    font : "detersans",
                                    size : 25
                                }),
                                pos(position),
                                color(255,255,255),
                                fixed(),
                                "saveUI"
                            ]);
                        });
                        const heartPosition = vec2(this.heartPos[0], this.heartPos[1]);
                        this.heart = add([sprite("heart"), pos(heartPosition), fixed(), "saveUI"])
                        this.setupInputHandlers();
                    }
                    setupInputHandlers() {
                        onKeyPress("right", () => {
                            if(isInSaveMenu == true){
                            this.moveCursor("right");}
                        });
                        onKeyPress("left", () => {
                            if(isInSaveMenu == true){
                            this.moveCursor("left");}
                            
                        });
                        onKeyPress("z", () => {
                            this.activateButton(); 
                        });
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
                            if (isSelected) {
                                const offsetX = -29; // Définition de l'offset
                                this.heart.use(pos(vec2(btn.pos[0] + offsetX, this.heartPos[1])));
                            }
                        });
                    }
                    activateButton() {
                        const selectedButton = this.buttons.find(btn => btn.isSelected);
                        console.log(`${selectedButton.id} button activated`);
                        let status = selectedButton.id;
                        if(status== "Save"){
                            dbFunctions.writeSave()
                            const newData = { newValue: "Ruins - Entrance" };
                            fetch('/api/updateRoom', {
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
                            wait(0.1, () => {
                                let playerData = { charName: '', lv: '', currentRoom: '' };
                                dbFunctions.getSaveInfo(playerData);
                                wait(0.1, () => {
                                destroyAll("previousave")
                                destroyAll("saveUI")
                                add([text(playerData.charName+"\n"+playerData.currentRoom,{
                                    size:25,
                                    font:"detersans",
                                    lineSpacing : 12
                                } ),pos(165,160), color(255,255,0), fixed(), "newsave"])
                                add([text("LV "+playerData.lv,{
                                    size:25,
                                    font:"detersans",
                                } ),pos(305,160), color(255,255,0), fixed(), "newsave"])
                                add([text("0:00",{
                                    size:25,
                                    font:"detersans",
                                } ),pos(405,160), color(255,255,0), fixed(), "newsave"])
                                add([text("File saved.",{
                                    size:25,
                                    font:"detersans",
                                } ),pos(190, 250), color(255,255,0), fixed(), "newsave"])})
                                onKeyPress("z", () => {
                                    status = "Saved"
                                    wait(0.1, () => {
                                    this.goBack();})
                                })
                                onKeyPress("enter", () => {
                                    status = "Saved"
                                    wait(0.1, () => {
                                        this.goBack();})
                                });
                            })
                        }
                        else if(status == "Return"){
                            wait(0.1, () => {
                            this.goBack()})
                        }
                    }
                    goBack(){
                        destroyAll("previousave")
                        destroyAll("previousavebox")
                        destroyAll("saveUI")
                        destroyAll("newsave")
                        window.isInDialog=false
                        window.isInSaveMenu = false
                        interacted = false;
                        this.makeFalse()
                        go("ruins_3_saved", player.pos.x, player.pos.y)
                    }
                    makeFalse(){
                        interacted = false
                        window.isInDialog=false

                    }
                    
            }
            const ui = new UI(); 
            ui.init();
            })
            window.isInDialog=true
            window.isInSaveMenu = true
        }
        
        function interact() {
            if (!interacted) {
                for (const col of player.getCollisions()) {
                    const c = col.target;
                    if (c.is("hitsave")) {
                        interacted = true;
                        UIManager.displayDialogOW("* (The shadows of the ruins/b looms above, filling you with/b determination.)|* (HP fully restored.)", "down", false, "", "idle", "talk", displaySave);
                        interacted = false
                        return; 
                    }
                }
            }
        }
        setupInitialEventListeners()
    },
    ruins_3_continued: (posx,posy) => {
        window.textIsWriting = false
        
        window.currentMusicPlaying = play("ruins_ost", {
            loop : true
        })
        add([
            rect(150, 20),
            pos(105,470),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(10),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(265,510),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdiagonalbas"
        ]);
        add([
            rect(150, 20),
            pos(385,510),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
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
            rect(350, 20),
            pos(520,100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(550, 20),
            pos(120,100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(50,-120),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-30),
            "murdiagonalhaut"
        ]);
        add([
            rect(150, 20),
            pos(450,-210),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(30),
            "murdiagonalhaut"
        ]);
        add([
            rect(120, 20),
            pos(50,0),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(45),
            "murdiagonalhaut"
        ]);
        add([
            rect(100, 20),
            pos(490,80),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "murdiagonalhaut"
        ]);
        add([
            rect(70, 10),
            pos(190,-50),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(45),
            "murdiagonalhaut"
        ]);
        add([
            rect(70, 10),
            pos(410, -10),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(-45),
            "murdiagonalhaut"
        ]);
        add([
            rect(150, 20),
            pos(75,-100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murgauche"
        ]);
        add([
            rect(150, 20),
            pos(575,-100),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(90),
            "murdroite"
        ]);
        add([
            rect(150, 20),
            pos(145,-175),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(250, 5),
            pos(195,-65),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(350,-175),
            color(255, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "murhaut"
        ]);
        add([
            rect(150, 20),
            pos(240,-195),
            color(0, 255, 255),
            body({isStatic: true}),
            area(),
            rotate(0),
            "hitboxhaut"
        ]);
        add([sprite("ruins_3"), pos(0, -350), scale(2.01)])
        const save = add([sprite("save_icon"), pos(300, 60), scale(2), area()], add([
            rect(20, 10),
            pos(310,60),
            color(0, 255, 255),
            opacity(0),
            area(),
            body({isStatic: true}),
            rotate(0),
            "hitsave"]))
        save.play("shine")
        UIManager.playerManager(vec2(305,80))
        player.play("idleu")
        const limitUp = -60
        const limitDown = 373
        const limitLeft = 280
        const limitRight = 995
        const playerX = 305
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
                            go("ruins_4", transition)
                        })
                    }
                }
            ])
        })
        
        fetch('/api/getTempPlotValue')
        .then(response => response.json())
        .then(data => {
            const plotValue = parseInt(data.data, 10); // Convertit la chaîne en entier
            if (!isNaN(plotValue) && plotValue == 2) { 
                const torielow = add([sprite("torielwalk"), pos(285, 295), scale(2), area()])
                torielLeave()
                function torielLeave(){
                    tween(torielow.pos, vec2(290, 80), 1.4, (p) => torielow.pos = p, easings.linear)
                    torielow.play("up")
                    torielow.onCollide("hit1", () => {
                        tween(torielow.pos, vec2(490, -120), 1.6, (p) => torielow.pos = p, easings.linear)
                        wait(1.6, () => {
                            tween(torielow.pos, vec2(490, -150), 0.3, (p) => torielow.pos = p, easings.linear)
                            wait(0.3, () => {
                                torielow.play("left")
                                tween(torielow.pos, vec2(460, -170), 0.3, (p) => torielow.pos = p, easings.linear)
                                wait(0.3, () => {
                                    torielow.play("idled")
                                    dbFunctions.incrementTempPlotValue()
                                })
                            })
                        })
                    })
                }
                console.log("Plotvalue == 2");
            } else if(plotValue == 3) {
                const torielow = add([sprite("torielwalk"), pos(460, -170), scale(2), area()])
                torielow.play("idled")
                function torielLeave(){
                    player.onCollide("hit2", () => {
                        destroyAll("hit2")
                        torielow.play("left")
                        tween(torielow.pos, vec2(290, -190), 1.4, (p) => torielow.pos = p, easings.linear)
                        wait(1.4, () => {
                            torielow.play("up")
                            tween(torielow.pos, vec2(290, -210), 0.3, (p) => torielow.pos = p, easings.linear)
                            wait(0.3, () => {
                                tween(1, 0, 0.5, (t) => torielow.opacity = t, easings.easeOutQuad)
                                dbFunctions.incrementTempPlotValue()
                            })
                        })
                        
                    })
                }
                torielLeave()
                console.log("Plotvalue égale à 3");
            }
            else {
                console.log("Toriel n'est plus là.");
            }
        })
        add([
            rect(150, 20),
            pos(240,65),
            color(0, 255, 255),
            opacity(0),
            area(),
            rotate(0),
            "hit1"])
        add([
                rect(500, 10),
                pos(40,35),
                color(0, 255, 255),
                opacity(0),
                area(),
                rotate(0),
                "hit2"])
        let speaking = play("generic2", {
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
        window.isInDialog = false
        let interacted = false;
        function setupInitialEventListeners() {
            onKeyPress("z", () => {
                if (!interacted && !window.isInDialog) {
                    interact();
                }
            });
        
            onKeyPress("enter", () => {
                if (!interacted && !window.isInDialog) {
                    interact();
                }
            });
        }
        onKeyPress("enter", interact)
        function displaySave(){
            window.savedName = ""
            fetch('/api/getSaveName')
            .then(response => response.json())
            .then(data => {
                const saveName = String(data.data); // Convertit la chaîne en entier
                if (saveName !== "000") { 
                    savedName = saveName;
                    console.log("Une sauvegarde existe");
                    const contour = add([
                        rect(350 + 5*2, 155 + 5*2),
                        pos(142 - 5, 140 - 5),
                        color(255, 255, 255),
                        area(),
                        fixed(),
                        "previousavebox"
                    ]);
                    const interieur = add([
                        rect(350, 155),
                        pos(142, 140),
                        color(0, 0, 0),
                        fixed(),
                        , "previousavebox"
                    ]);
                    let playerData = { charName: '', lv: '', currentRoom: '' };
                    dbFunctions.getSaveInfo(playerData);
                    wait(0.1, () => {
                    add([text(playerData.charName+"\n"+playerData.currentRoom,{
                            size:25,
                            font:"detersans",
                            lineSpacing : 12
                    } ),pos(165,160), color(255,255,255), fixed(), "previousave"])
                    add([text("LV "+playerData.lv,{
                            size:25,
                            font:"detersans",
                    } ),pos(305,160), color(255,255,255), fixed(), "previousave"])
                    add([text("0:00",{
                            size:25,
                            font:"detersans",
                    } ),pos(405,160), color(255,255,255), fixed(), "previousave"])
                })
                    
                } else if(saveName =="000") {
                    console.log("Aucune sauvegarde trouvée");
                    const contour = add([
                        rect(350 + 5*2, 155 + 5*2),
                        pos(142 - 5, 140 - 5),
                        color(255, 255, 255),
                        area(),
                        fixed(),
                        "previousavebox"
                    ]);
                    const interieur = add([
                        rect(350, 155),
                        pos(142, 140),
                        color(0, 0, 0),
                        fixed(), "previousavebox"
                    ]);
                    add([text("EMPTY\n__",{
                        size:25,
                        font:"detersans",
                    } ),pos(165,160), color(255,255,255), fixed(), "previousave"])
                    add([text("LV 0",{
                        size:25,
                        font:"detersans",
                    } ),pos(305,160), color(255,255,255), fixed(), "previousave"])
                    add([text("0:00",{
                        size:25,
                        font:"detersans",
                    } ),pos(405,160), color(255,255,255), fixed(), "previousave"])
                }
                else {
                    console.log("La valeur n'est pas un nombre valide.");
                }
                class UI {
                    constructor() {
                        this.buttons = [
                            { id: "Save",  pos: [190, 250], color:rgb(255, 255, 255), isSelected: true, isPressed: false },
                            { id: "Return", pos: [340, 250], color:rgb(255, 255, 255),isSelected: false, isPressed: false },
                        ];
                        this.heartPos = [160, 253]
                    }
                    init() {
                        this.buttons.forEach(btn => {
                            const position = vec2(btn.pos[0], btn.pos[1]);
                            btn.entity = add([
                                text(btn.id, {
                                    font : "detersans",
                                    size : 25
                                }),
                                pos(position),
                                color(255,255,255),
                                fixed(),
                                "saveUI"
                            ]);
                        });
                        const heartPosition = vec2(this.heartPos[0], this.heartPos[1]);
                        this.heart = add([sprite("heart"), pos(heartPosition), fixed(), "saveUI"])
                        this.setupInputHandlers();
                    }
                    setupInputHandlers() {
                        onKeyPress("right", () => {
                            if(isInSaveMenu == true){
                            this.moveCursor("right");}
                        });
                        onKeyPress("left", () => {
                            if(isInSaveMenu == true){
                            this.moveCursor("left");}
                            
                        });
                        onKeyPress("z", () => {
                            this.activateButton(); 
                        });
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
                            if (isSelected) {
                                const offsetX = -29; // Définition de l'offset
                                this.heart.use(pos(vec2(btn.pos[0] + offsetX, this.heartPos[1])));
                            }
                        });
                    }
                    activateButton() {
                        const selectedButton = this.buttons.find(btn => btn.isSelected);
                        console.log(`${selectedButton.id} button activated`);
                        let status = selectedButton.id;
                        if(status== "Save"){
                            dbFunctions.writeSave()
                            const newData = { newValue: "Ruins - Entrance" };
                            fetch('/api/updateRoom', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newData),
                            })
                            wait(0.1, () => {
                                let playerData = { charName: '', lv: '', currentRoom: '' };
                                dbFunctions.getSaveInfo(playerData);
                                wait(0.1, () => {
                                destroyAll("previousave")
                                destroyAll("saveUI")
                                add([text(playerData.charName+"\n"+playerData.currentRoom,{
                                    size:25,
                                    font:"detersans",
                                    lineSpacing : 12
                                } ),pos(165,160), color(255,255,0), fixed(), "newsave"])
                                add([text("LV "+playerData.lv,{
                                    size:25,
                                    font:"detersans",
                                } ),pos(305,160), color(255,255,0), fixed(), "newsave"])
                                add([text("0:00",{
                                    size:25,
                                    font:"detersans",
                                } ),pos(405,160), color(255,255,0), fixed(), "newsave"])
                                add([text("File saved.",{
                                    size:25,
                                    font:"detersans",
                                } ),pos(190, 250), color(255,255,0), fixed(), "newsave"])})
                                onKeyPress("z", () => {
                                    status = "Saved"
                                    wait(0.1, () => {
                                    this.goBack();})
                                })
                                onKeyPress("enter", () => {
                                    status = "Saved"
                                    wait(0.1, () => {
                                        this.goBack();})
                                });
                            })
                        }
                        else if(status == "Return"){
                            wait(0.1, () => {
                            this.goBack()})
                        }
                    }
                    goBack(){
                        destroyAll("previousave")
                        destroyAll("previousavebox")
                        destroyAll("saveUI")
                        destroyAll("newsave")
                        window.isInDialog=false
                        window.isInSaveMenu = false
                        interacted = false;
                        this.makeFalse()
                        go("ruins_3_saved", player.pos.x, player.pos.y)
                    }
                    makeFalse(){
                        interacted = false
                        window.isInDialog=false

                    }
                    
            }
            const ui = new UI(); 
            ui.init();
            })
            window.isInDialog=true
            window.isInSaveMenu = true
        }
        
        function interact() {
            if (!interacted) {
                for (const col of player.getCollisions()) {
                    const c = col.target;
                    if (c.is("hitsave")) {
                        interacted = true;
                        UIManager.displayDialogOW("* (The shadows of the ruins/b looms above, filling you with/b determination.)|* (HP fully restored.)", "down", false, "", "idle", "talk", displaySave);
                        interacted = false
                        return; 
                    }
                }
            }
        }
        setupInitialEventListeners()
    },
    ruins_4: (transition) => {
        if(transition){
            tween(1, 0, 0.5, (t) => transition.opacity = t, easings.easeOutQuad)
        wait(1, () => {
            destroy(transition)
        })
        }
        add([sprite("blackbg"), scale(2), pos(-80,-50)])
        
        add([text(".... A SUIVRE !" ,{
            size:45,
            font:"trouble",
        } ),pos(150,200), color(255,255,255)])
        add([text("MERCI D'AVOIR JOUE !" ,{
            size:45,
            font:"trouble",
        } ),pos(80,260), color(255,255,255)])



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

go("pressZ")