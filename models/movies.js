const knex = require('../db')

function getAllMovies(){
    return knex('movies')
        .then(result => {
            return result
        })
}

function getOneMovie(id){
    return knex('movies')
        .where('id', id)
        .then(result => {
            return result
        })
}

function createMovie(postObj){
    return knex('movies')
        .returning('*')
        .insert(postObj)
        .then(result => {
            return result
        })
}

function editMovie(id, postObj){
    return getOneMovie(id)
        .then(result => {
            if (result.length < 1) return false
            return knex('movies')
                .returning('*')
                .where('id', id)
                .update(postObj)
                .then(result => {
                    return result
                })
        })
}

function deleteMovie(id){
    return getOneMovie(id)
        .then(result => {
            if(result.length < 1) return false
            return knex('movies')
                .returning('*')
                .where('id', id)
                .del()
                .then(result => {
                    return result
                })
        })
}
module.exports = {getAllMovies, getOneMovie, createMovie, editMovie, deleteMovie}