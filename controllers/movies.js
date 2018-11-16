const model = require('../models/movies')

function getAllMovies(req, res, next){
    return model.getAllMovies()
        .then(result => {
            res.send({ data: result })
        })
        .catch(next)
}

function getOneMovie(req, res, next) {
    const id = Number(req.params.id)
    return model.getOneMovie(id)
        .then(result => {
            if (!result.length) return next({ status: 404, message: `No movie with ID of ${id} was found`})
            res.send({data: result})
        })
        .catch(next)
}

function createMovie(req, res, next){
    const {director, poster_url, rating, title, year} = req.body
    if (!director || !poster_url || !rating || !title || !year) return next({status: 400, message: 'You must provide all fields'})
    return model.createMovie(req.body)
        .then(result => {
            res.status(201).send({data:result})
        })
        .catch(next)
}

function editMovie(req, res, next){
    const id = Number(req.params.id)
    return model.editMovie(id, req.body)
        .then(result => {
            if (!result) return next({ status: 404, message: `No movie with ID of ${id} was found` })
            res.send({data:result})
        })
        .catch(next)
}

function deleteMovie(req, res, next){
    const id = Number(req.params.id)
    return model.deleteMovie(id)
        .then(result => {
            if (!result) return next({ status: 404, message: `No movie with ID of ${id} was found` })
            res.send({data:result}) 
        })
        .catch(next)
}


module.exports = {getAllMovies, getOneMovie, createMovie, editMovie, deleteMovie}