console.log ( 'Initialising app' )

// Getting static express
var app = require( './modules/express' )

// Connect, sync and import database models
var db = require( './modules/database' )

// Router ping
app.use( '/', require( __dirname + '/routes/ping' ) )

// Login management
app.use( '/login/', require( __dirname + '/modules/passport-local' ) )

// Listen for requests
var server = app.listen ( 3000, () => {
	console.log( 'App listening on port: ' + server.address().port )
} )