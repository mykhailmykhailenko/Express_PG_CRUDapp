const {Cat} = require('../models/index');

module.exports.createCat = async (req, res, next) => {
    try {
        const {body} = req;
        const [result] = await Cat.createCat(body);
        res.status(201).send(result);
    } catch (error) {
        next(error)
    }
}
module.exports.getOneCat = async (req, res, next) => {
    try {
        const {params: {catId}} = req;
        const [result] = await Cat.getOne(catId);
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}
module.exports.getAllCats = async (req, res, next) => {
    try {
        const result = await Cat.getAll();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

module.exports.deleteCat = async (req, res, next) => {
    try {
        const {params: {catId}} = req;
        const [result] = await Cat.deleteCat(catId);
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('There is no such cat');
        }   
    } catch (error) {
        next(error)
    }
}

module.exports.updateCat = async (req, res, next) => {
    try {
        const {params: {catId}, body} = req;
        const [result] = await Cat.updateCat({catId, updateValues : body});
        res.status(202).send(result);
    } catch (error) {
        next(error);
    }
}