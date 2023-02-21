const http  = require('http');

http.createServer( ( req, res ) =>{

    //res.writeHead(200, {'Content-Type': 'application/json' });
    /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv' });

    const persona = {
        id: 1,
        nombre: 'Michell'
    }
    
    res.write( 'id, nombre\n' );
    res.write( '1, Michell\n' );
    res.write( '2, Eduardo\n' );
    res.write( '3, Quiñonez\n' );
    */

    res.write( 'Hola mundo' );
    res.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);