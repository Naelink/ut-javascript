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
                // Affecter les valeurs aux propriétés de l'objet player
                player.charName = playerInfo.charname;
                player.lv = playerInfo.lv;
                player.currentRoom = playerInfo.currentroom;
    
                // Afficher les informations (dans l'objet player maintenant mis à jour)
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
