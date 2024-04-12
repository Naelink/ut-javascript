const express = require('express');
const path = require('path');
const app = express();
const port = 3000; 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'undertale'
});
db.connect(err => {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connecté à la base de données MySQL');
});

app.use(express.json());
  
app.get('/api/getTempPlotValue', (req, res) => {
    const query = 'SELECT `data` FROM `tempsave` WHERE `id` = 546'; 
    db.query(query, (err, results) => {
      if (err) {
        console.error(err); 
        res.status(500).send('Erreur lors de la récupération des données');
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).send('Donnée non trouvée');
        }
      }
    });
  });

app.post('/api/updateTempPlotValue', (req, res) => {
    const newValue = req.body.newValue;
    const query = 'UPDATE tempsave SET data = ? WHERE id = 546';
    db.query(query, [newValue], (err, result) => {
      if (err) throw err;
      res.send('Valeur mise à jour avec succès.');
    });
});
app.get('/api/incrementTempPlotValue', (req, res) => {
    const selectQuery = 'SELECT data FROM tempsave WHERE id = 546';
    db.query(selectQuery, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération de la valeur');
        }
        if (results.length > 0) {
            const currentValue = parseInt(results[0].data, 10);
            const newValue = currentValue + 1;

            const updateQuery = 'UPDATE tempsave SET data = ? WHERE id = 546';
            db.query(updateQuery, [newValue.toString()], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error(updateErr);
                    return res.status(500).send('Erreur lors de la mise à jour de la valeur');
                }
                res.send(`Valeur mise à jour avec succès. Nouvelle valeur: ${newValue}`);
            });
        } else {
            res.status(404).send('Enregistrement non trouvé');
        }
    });
});
app.post('/api/createName', (req, res) => {
    const newValue = req.body.newValue;
    const query = 'UPDATE tempsave SET data = ? WHERE id = 1';
    db.query(query, [newValue], (err, result) => {
      if (err) throw err;
      res.send('Valeur mise à jour avec succès.');
    });
});
app.post('/api/updateRoom', (req, res) => {
    const newValue = req.body.newValue;
    const query = 'UPDATE tempsave SET data = ? WHERE id = 551';
    db.query(query, [newValue], (err, result) => {
      if (err) throw err;
      res.send('Valeur mise à jour avec succès.');
    });
});
app.post('/api/resetLV', (req, res) => {
    const newValue = "1";
    const query = 'UPDATE tempsave SET data = ? WHERE id = 2';
    db.query(query, [newValue], (err, result) => {
      if (err) throw err;
      res.send('Valeur mise à jour avec succès.');
    });
});
app.get('/api/getSaveName', (req, res) => {
    const query = 'SELECT `data` FROM `save` WHERE `id` = 1'; 
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la récupération des données');
      } else {
        if (results.length > 0 && results[0].data != null) {
          res.json(results[0]); // Renvoie la valeur directement depuis la base de données
        } else {
          // Si aucun résultat ou si la `data` est NULL, renvoie "000"
          res.json({data: "000"});
        }
      }
    });
});
app.get('/api/writeSave', (req, res) => {
    db.query('DELETE FROM save', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la suppression des données existantes');
        }
        
        db.query('INSERT INTO save SELECT * FROM tempsave', (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erreur lors de l\'insertion des nouvelles données');
            }
            res.send('Données mises à jour avec succès');
        });
    });
});
app.get('/api/writeTempSave', (req, res) => {
    db.query('DELETE FROM tempsave', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la suppression des données existantes');
        }
        
        db.query('INSERT INTO tempsave SELECT * FROM save', (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erreur lors de l\'insertion des nouvelles données');
            }
            res.send('Données mises à jour avec succès');
        });
    });
});
app.get('/api/getSaveInfo', (req, res) => {
    const query = `
        SELECT
            (SELECT data FROM save WHERE name = 'charname') AS charname,
            (SELECT data FROM save WHERE name = 'lv') AS lv,
            (SELECT data FROM save WHERE name = 'currentroom') AS currentroom
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération des données du joueur');
        }

        if (results.length > 0) {
            const playerInfo = results[0];
            res.json(playerInfo);
        } else {
            res.status(404).send('Informations du joueur non trouvées');
        }
    });
});
app.get('/api/resetSaveData', (req, res) => {
    const updateQuery = 'UPDATE `save` SET `data` = NULL WHERE `id` != 1';
    db.query(updateQuery, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la réinitialisation des données');
        }
        res.send('Données réinitialisées avec succès, à l\'exception de charname.');
    });
});
