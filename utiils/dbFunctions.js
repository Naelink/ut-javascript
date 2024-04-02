class DB {
    constructor() {
       
    }

    writeSave() {
        fetch('/api/writeSave', {
            method: 'GET', 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour des données');
            }
            return response.text(); 
        })
        .then(data => {
            console.log('Données mises à jour avec succès:', data);
        })
        .catch(error => {
            console.error('Erreur lors de l\'appel de l\'API:', error);
        });
    }
    incrementTempPlotValue() {
        fetch('/api/incrementTempPlotValue', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour de la valeur');
            }
            return response.text();
        })
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }
    writeTempSave() {
        fetch('/api/writeTempSave', {
            method: 'GET', 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour des données');
            }
            return response.text(); 
        })
        .then(data => {
            console.log('Données mises à jour avec succès:', data);
        })
        .catch(error => {
            console.error('Erreur lors de l\'appel de l\'API:', error);
        });
    }
    resetSaveData() {
        fetch('/api/resetSaveData', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la réinitialisation des données');
            }
            return response.text();
        })
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }
    resetLV() {
        fetch('/api/resetLV', {
            method: 'POST'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la modification de LV');
            }
            return response.text();
        })
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    }
    getSaveInfo(player) {
        fetch('/api/getSaveInfo')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des informations du joueur');
                }
                return response.json();
            })
            .then(playerInfo => {
                console.log('Informations du joueur récupérées avec succès:', playerInfo);
                player.charName = playerInfo.charname;
                player.lv = playerInfo.lv;
                player.currentRoom = playerInfo.currentroom;
    
                console.log(`Nom du personnage: ${player.charName}`);
                console.log(`Niveau: ${player.lv}`);
                console.log(`Salle actuelle: ${player.currentRoom}`);
            })
            .catch(error => {
                console.error('Erreur lors de l\'appel de l\'API:', error);
            });
    }
    
    
}

export const dbFunctions = new DB();
