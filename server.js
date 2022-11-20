require('dotenv').config()
const express = require('express')
const Pokemon = require('./models/pokemon')
const methodOverride = require('method-override')
// const helpers = require('./ejs-helpers')

//express app object
const app = express()

// middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use("/static", express.static("public"))


// App ROUTES //



// homeroute that redirects you to /pokemon 
app.get('/', (req, res) => {
    res.redirect('/pokemon')
})


//---------- INDEX -------------//
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        data: Pokemon
    })
})


//---------- NEW -------------//
app.get('/pokemon/new', (req, res) => {

    res.render('new.ejs')
})


//---------- CREATE -------------//
app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body)
   res.redirect('/pokemon')
})



//---------- EDIT -------------//
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs')
    
})


//---------- UPDATE -------------//
app.put('/pokemon/:id', (req, res) => {
    

})


//---------- DESTROY -------------//
app.delete('/pokemon/:id', (req, res) => {
      //splice the item out of the array
      Pokemon.splice(req.params.id, 1)
      //redirect to index
      res.redirect("/pokemon")

})


//---------- SHOW -------------//
app.get('/pokemon/:id', (req, res) => {
     
    res.render('show.ejs', {

         data: Pokemon[req.params.id]
        
        })
})


const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

