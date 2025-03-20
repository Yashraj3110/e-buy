const express = require('express');

const router = express.Router();
const cors = require('cors');
const axios = require('axios');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configure your destination folder

// Sample Route
router.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

// Create product
router.post('/api/Product/create', upload.single('Product_Image'), async (req, res) => {
    try {
        const productData = req.body;
        const imageFile = req.file;

        console.log("Product Data:", productData);
        console.log("Uploaded File:", imageFile);

        res.status(200).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;