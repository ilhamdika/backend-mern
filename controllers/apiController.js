const Produk = require('../models/Produk');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        try{
            const {name, email, password, jenis_kelamin} = req.body;
            const user = await User.create({name, email, password, jenis_kelamin});
            res.status(200).json(user);
        } catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },
    login: async (req, res) => {
        const {email, password} = req.body;

        try{
            const user = await User.findOne({email, password});
            if(user){
                const token = jwt.sign({ email }, 'secret_key', { expiresIn: '1h' });

                res.json({ token });
            } else{
                res.status(401).json({message: 'email atau password salah'});
            }
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    getAllProduk: async (req, res) => {
        try{
            const produk = await Produk.find({});
            res.status(200).json(produk);
        } catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },
    getProdukById:async (req, res) => {
        try{
            const produk = await Produk.findById(req.params.id);
            res.status(200).json(produk);
        } catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },
    createProduk: async (req, res) => {
        try{
            const {name, price, quantity} = req.body;
            const produk = await Produk.create({name, price, quantity});
            // const produk = await Produk.create(req.body);
            res.status(200).json(produk);
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },
    updateProduk: async (req, res) => {
        try{
            const {id} = req.params;
            // const produk = await Produk.findByIdAndUpdate(id, req.body)
            const {name, price, quantity} = req.body;
            const produk = await Produk.findByIdAndUpdate(id, {name, price, quantity})
            if(!produk){
                return res.status(404).json({message: 'produk not found'})
            }
            res.status(200).json(produk);
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },
    deleteProduk: async (req, res) => {
        try{
            const {id} = req.params;
            const produk = await Produk.findByIdAndDelete(id)
            if(!produk){
                return res.status(404).json({message: 'produk not found'})
            }
            res.status(200).json({message: 'produk deleted'});
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    }


}
