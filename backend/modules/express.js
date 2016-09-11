// Get express set up
var express 	= require( 'express' )
var app 		= express()
var bodyParser 	= require( 'body-parser' ) // POST body parser
var session 	= require( 'express-session' )

// Timestamp and request processing
app.use( function logger (req, res, next) {
	console.log( req.method + ' ' + req.path + ' @ time: ', Date.now() )
	next()
})

// Set the static to the public folder
app.use( express.static( __dirname + '/../../frontend/public' ) )

// Add post body processing
app.use( bodyParser.urlencoded( {extended: true} ) )

// Enable sessions
app.use( session( {
  secret: 'super mega ukulele',
  resave: false,
  saveUninitialized: true,
  cookie: { 
  	secure: true,
  	maxAge: 1000 * 60 * 60 // One hour
  	 }
} ) )

app.all( '/ping', ( req, res ) => {
	res.send( 'pong' )
})

console.log( 'Express module imported' )
module.exports = app