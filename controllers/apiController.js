const Produk = require('../models/Produk');

module.exports = {
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
            const produk = await Produk.create(req.body);
            res.status(200).json(produk);
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    },
    updateProduk: async (req, res) => {
        try{
            const {id} = req.params;
            const produk = await Produk.findByIdAndUpdate(id, req.body)
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
