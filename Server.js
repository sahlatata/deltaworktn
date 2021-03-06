const express = require("express")
const ConnectDB = require("./Config/ConnectDB")
const AnnonceRouter = require("./Routes/Annonce")
const UserRouter = require("./Routes/User")
const DemandeRouter = require ("./Routes/Demande")

const app = express()
require('dotenv').config()
ConnectDB()
app.use (express.json())
app.use('/upload',express.static('upload'))
app.use('/api/auth',UserRouter)
app.use('/api/annonce',AnnonceRouter)
app.use('/api/demande',DemandeRouter)




app.listen(process.env.PORT || 5000 ,console.log(`le serveur est connecté sur le port ${process.env.port}`))
