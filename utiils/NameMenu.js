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
        const statusdis = add([
            text(this.status, {
                size: 34, 
                font: "deter", 
                width: 510, 
                lineSpacing: 8
            }),
            pos(20,200), 
            color(255, 255, 255)
        ])
        onUpdate(() => {
            statusdis.use(text(this.status))
        })
        
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
            else if(this.status == "Done"){
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
        this.status = this.letters[newIndex].id;

        if (direction === "right" && this.status !="z") {
            newIndex = (currentIndex + 1) % this.letters.length;
        } else if (direction === "left"&& this.status !="A") {
            newIndex = (currentIndex - 1 + this.letters.length) % this.letters.length;
        }
        else if (direction === "up" && this.status!="a"&& this.status!="b"&& this.status!="c"&& this.status!="d"&& this.status!="e"&& this.status!="f"&& this.status!="g" ) {
            newIndex = (currentIndex - 7 + this.letters.length) % this.letters.length;
        }
        else if ((direction === "up" && this.status == "a")||(direction === "up" && this.status == "b")||(direction === "up" && this.status == "c")||(direction === "up" && this.status == "d")||(direction === "up" && this.status == "d")||(direction === "up" && this.status == "e")) {
            newIndex = (currentIndex - 5 + this.letters.length) % this.letters.length;
        }
        else if ((direction === "up" && this.status == "f")||(direction === "up" && this.status == "g")) {
            newIndex = (currentIndex - 12 + this.letters.length) % this.letters.length;
        }
        else if (direction === "down" && this.status!="V"&& this.status!="W"&& this.status!="X"&& this.status!="Y"&& this.status!="Z"&& this.status!="T"&& this.status!="U"&& this.status!="v"&& this.status!="w"&& this.status!="x"&& this.status!="y"&& this.status!="z"&& this.status!="t"&& this.status!="u") {
            newIndex = (currentIndex + 7 + this.letters.length) % this.letters.length;
        }
        else if ((direction === "down" && this.status == "V")||(direction === "down" && this.status == "W")||(direction === "down" && this.status == "X")||(direction === "down" && this.status == "Y")||(direction === "down" && this.status == "Z")) {
            newIndex = (currentIndex + 5 + this.letters.length) % this.letters.length;
        }
        else if ((direction === "down" && this.status == "T")||(direction === "down" && this.status == "U")) {
            newIndex = (currentIndex + 12 + this.letters.length) % this.letters.length;
        } 
        this.letters[currentIndex].isSelected = false;
        this.letters[newIndex].isSelected = true;
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

export const nameMenu = new UI();