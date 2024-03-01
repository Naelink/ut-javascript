class UI {
    displayCombatMenu(enemyName) {
        enemyName = enemyName
        const positionTexte = vec2(60,275);
        const fightbtn = add([
            sprite("fight_btn"),
            pos(35,430),
            {isSelected:true}])
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
        add([sprite("box"), pos(30, 240),scale (0.559)])
        const heart = add ([
            sprite("heart"),
            {position:"fight"}
        ])
        
        onKeyPress("right", () => {
            if (heart.position =="fight"){
                heart.position = "act"
                play("uimove")
            }
            else if (heart.position =="act"){
                heart.position = "item"
                play("uimove")
            } 
            else if (heart.position =="item"){
                heart.position = "spare"
                play("uimove")
            }
            else if (heart.position =="spare"){
                heart.position = "fight"
                play("uimove")
            }
        })
        onKeyPress("left", () => {
            if (heart.position =="fight"){
                heart.position = "spare"
                play("uimove")
            }
            else if (heart.position =="spare"){
                heart.position = "item"
                play("uimove")
            } 
            else if (heart.position =="item"){
                heart.position = "act"
                play("uimove")
            }
            else if (heart.position =="act"){
                heart.position = "fight"
                play("uimove")
            }
        })
        
        onUpdate(() => {
            if (fightbtn.isSelected ==true){
                fightbtn.use(sprite("fight_btn1"))
            }
            else {
                fightbtn.use(sprite("fight_btn"))
            }
            if (actbtn.isSelected ==true){
                actbtn.use(sprite("act_btn1"))
            }
            else {
                actbtn.use(sprite("act_btn"))
            }
            if (itembtn.isSelected ==true){
                itembtn.use(sprite("item_btn1"))
            }
            else {
                itembtn.use(sprite("item_btn"))
            }
            if (sparebtn.isSelected ==true){
                sparebtn.use(sprite("spare_btn1"))
            }
            else {
                sparebtn.use(sprite("spare_btn"))
            }
        })
        onUpdate(() => {
            if (heart.position =="fight"){
                heart.use(pos(43,443))
                fightbtn.isSelected=true
            }
            else{
                
                fightbtn.isSelected=false
            }
            if (heart.position =="act"){
                heart.use(pos(198,443))
                actbtn.isSelected=true
            }
            else{
                
                actbtn.isSelected=false
            }
            if (heart.position =="item"){
                heart.use(pos(353,443))
                itembtn.isSelected=true
            }
            else{
                
                itembtn.isSelected=false
            }
            if (heart.position =="spare"){
                heart.use(pos(498,443))
                sparebtn.isSelected=true
            }
            else{
                
                sparebtn.isSelected=false
            }
        })
        onUpdate(() => {
            if(heart.position == "fight"){
                onKeyPress("enter", () => {
                    status = "fight"
                })
                onKeyPress("z", () => {
                    status = "fight"
                })
            }
            if(heart.position == "act"){
                onKeyPress("enter",() => {
                    status = "act"

                })
                onKeyPress("z",() => {
                    status = "act"
                })
            }
            if(heart.position == "item"){
                onKeyPress("enter",() => {
                    status = "item"
                })
                onKeyPress("z",() => {
                    status = "item"
                })
            }
            if(heart.position == "spare"){
                onKeyPress("enter",() => {
                    status = "spare"
                })
                onKeyPress("z",() => {
                    status = "spare"
                })
            }
        })
        onUpdate(() => {
            if (status == "fight"){
                heart.use(pos(positionTexte))
                fightbtn.isSelected=true
                const enemyfightname = add([
                    text("* " + enemyName , {
                        size: 24, 
                        font: "deter", 
                        width: 510, 
                        lineSpacing: 8
                    }),
                    pos(positionTexte.add(vec2(30,-3))), 
                    color(255, 255, 255)
                ])
                onKeyPress("x",() => {
                    status = "start"
                    heart.position = "fight"
                    destroy(enemyfightname)
                })
            }
        })
        onUpdate(() => {
            if (status == "fight"){
                onKeyPress("enter",() => {
                    if (status == "fight"){
                    go("3")
                    }
                })
            }
        })
            
        const statusinfo = add([
            text(status, {
                size: 34, 
                font: "deter", 
                width: 510, 
                lineSpacing: 8
            }),
            pos(positionTexte.add(vec2(30,-60))), 
            color(255, 255, 255)
        ])
        onUpdate(() => {
            statusinfo.use(text(status))
        })
        
    }
    
    
}
export const UIManager = new UI()
