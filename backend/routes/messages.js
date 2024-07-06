const express = require('express');
const router = express.Router();
const { Message } = require('../db');
const { authMiddleware } = require('../middleware');


router.post('/',authMiddleware, async (req, res) => {
  try {
    const {  receiver, content } = req.body; 
    const sender=req.userId;
    if(sender === receiver) return res.status(400).json({ error: 'Sender and receiver cannot be the same' });

    const newMessage = new Message({
     sender,
      receiver,
      content
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:userId1/:userId2',authMiddleware, async (req, res) => {
  try {
    const userId1=req.userId;
    const {  userId2 } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 }
      ]
    }).sort('timestamp');

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
