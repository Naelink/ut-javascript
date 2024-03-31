const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Vous pouvez choisir un autre port si nécessaire

// Servir les fichiers statiques depuis le même dossier où se trouve server.js et index.html
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  // Envoyer le fichier index.html quand on accède à la racine
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
        console.error(err); // Log de l'erreur pour le débogage
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
  app.post('/api/createName', (req, res) => {
    const newValue = req.body.newValue;
    const query = 'UPDATE tempsave SET data = ? WHERE id = 1';
    db.query(query, [newValue], (err, result) => {
      if (err) throw err;
      res.send('Valeur mise à jour avec succès.');
    });
  });
  app.get('/api/getSaveName', (req, res) => {
    const query = 'SELECT `data` FROM `save` WHERE `id` = 1'; 
    db.query(query, (err, results) => {
      if (err) {
        console.error(err); // Log de l'erreur pour le débogage
        res.status(500).send('Erreur lors de la récupération des données');
      } else {
        // Vérifie si des résultats ont été trouvés ET si le premier résultat a une propriété `data` qui n'est pas NULL
        if (results.length > 0 && results[0].data != null) {
          res.json(results[0]); // Renvoie la valeur directement depuis la base de données
        } else {
          // Si aucun résultat ou si la `data` est NULL, renvoie "000"
          res.json({data: "000"});
        }
      }
    });
});