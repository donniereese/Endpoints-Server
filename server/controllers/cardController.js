// Require mongoose
const mongoose = require('mongoose');
// Import Status
const STATUS = require('../helpers/status.js')
// Import Card model
//

// get list of cards
const getCards = (req, res) => {
    Card.find({}).exect((err, c) => {
        // error caught
        if (err) return res.status(STATUS.SERVER_ERR).json({ success: false, stack: err.stack, message: err.message });
        // return result even if empty array
        res.json(c);
    });
};

// get single card by ObjectId
const getCardById = (req, res) => {
    // Get cardId from params
    const { id } = req.params;
    // catch id error
    if (!id) return res.status(STATUS.USER_ERR).json({ success: false, error: 'did not provide cardID paramater' });
    // find one card by id
    const card = Card.findById(id);
    // Execute
    card.exec((err, c) => {
        // error caught
        if (err) return res.status(STATUS.SERVER_ERR).json({ success: false, stack: err.stack, message: err.message });
        res.json(c);
    });
};

// create new Card
const createCard = (req, res) => {
    // get intent of new card instance
    const cardIntent = req.body;
    // error catch
    if (!cardItent.body) res.status(STATUS.USER_ERR).json({ success: false, error: 'did not provide card body' });
    const card = new Card(cardItent);
    // save it
    card.save()
    .then((c) => {
        // catch results
    })
    .catch((err) => {
        // catch error
        // 
    });

};

// modify existing Card by ObjectId
const modifyCard = (req, res) => {

};

// remove existing card by ObjectId
const removeCard = (req, res) => {

};
