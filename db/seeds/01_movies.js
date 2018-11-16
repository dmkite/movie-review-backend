
exports.seed = function (knex, Promise) {
      return knex('movies').insert([
        { id: 1, title: 'No Country For Old Men', director: 'Ethan and Joel Coen', year: 2007, rating: 4.5, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41eVqtpRMcL.jpg' },
        { id: 2,title: 'Hereditary', director: 'Ari Aster', year: 2018, rating: 4, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/91lJZ56mRHL._SY606_.jpg' },
        { id: 3,title: 'No Country For Old Men', director: 'Ethan and Joel Coen', year: 2007, rating: 4.5, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41eVqtpRMcL.jpg' },
        { id: 4,title: 'Hereditary', director: 'Ari Aster', year: 2018, rating: 4, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/91lJZ56mRHL._SY606_.jpg' },
        { id: 5,title: 'No Country For Old Men', director: 'Ethan and Joel Coen', year: 2007, rating: 4.5, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41eVqtpRMcL.jpg' },
        { id: 6,title: 'Hereditary', director: 'Ari Aster', year: 2018, rating: 4, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/91lJZ56mRHL._SY606_.jpg' },
        { id: 7,title: 'No Country For Old Men', director: 'Ethan and Joel Coen', year: 2007, rating: 4.5, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41eVqtpRMcL.jpg' },
        { id: 8,title: 'Hereditary', director: 'Ari Aster', year: 2018, rating: 4, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/91lJZ56mRHL._SY606_.jpg' },
        { id: 9,title: 'No Country For Old Men', director: 'Ethan and Joel Coen', year: 2007, rating: 4.5, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41eVqtpRMcL.jpg' },
        { id: 10,title: 'Hereditary', director: 'Ari Aster', year: 2018, rating: 4, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/91lJZ56mRHL._SY606_.jpg' }
      ])
        .then(() => {
          return knex.raw(`SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`)
    })
};
