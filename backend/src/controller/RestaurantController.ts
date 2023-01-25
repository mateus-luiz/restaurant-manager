import express from 'express';
import { connection, createTable } from '../database/connection';
import Restaurant from '../model/Restaurant';

const restaurantRouter = express.Router();

restaurantRouter.post('/generateDb', (req, res) => {
    createTable();

    res.send({ OK: true });
});

restaurantRouter.post('/add', (req, res) => {

    const { name, address, addressNumber, openDate, closeDate, photo } = req.body;

    const cmmd = `INSERT INTO restaurants (
            name, 
            address, 
            addressNumber, 
            openDate, 
            closeDate, 
            photo
        ) 
        VALUES (?, ?, ?, ?, ?, ?)`;

    connection.query(
        cmmd,
        [
            name,
            address,
            addressNumber,
            openDate,
            closeDate,
            photo
        ],
        (err) => {
            if (err) throw err;
            res.send({
                id: req.body.id,
                name: req.body.name
            });
        }
    );
});

restaurantRouter.post('/listAll', (req, res) => {

    const cmmd = "SELECT * FROM restaurants";
    connection.query(cmmd, (err, row) => {
        if (err) throw err;

        return res.send(row);
    });

});

restaurantRouter.get('/remove', (req, res) => {
    const id = req.query.id;

    const cmmd = "DELETE FROM restaurants WHERE id=?";
    connection.query(cmmd, [id], (err, row) => {
        if (err) throw err;

        res.send({OK: true});
    });
});

export default restaurantRouter;