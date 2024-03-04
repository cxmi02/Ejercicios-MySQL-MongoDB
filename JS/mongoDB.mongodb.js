// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('users');

// Create a new document in the collection.
db.users.find();

// 1. Listado de todos los usuarios con solo los nombres, apellidos y edad, que tengan 20 años de edad.
use('users');
db.users.find(
    { edad: 20 },
    { _id: 0, nombres: 1, apellidos: 1, edad: 1 }
);

// 2. Listado de todas las mujeres en la base de datos que tengan entre 20 y 30 años de edad.
use('users');
db.users.find(
    {
        genero: "M",
        edad: {
            $gte: 20,
            $lte: 30
        }
    }
);

// 3. Quién es la persona con menos edad de la base de datos.
use('users');
db.users.find().sort({ edad: 1 }).limit(1);

// 4. Cuantos usuarios hay registrados en la base de datos.
use('users');
db.users.count();

// . Traer los 5 primeros usuarios de la base de datos.
use('users');
db.users.find().limit(5);

// 6. Traer los 10 últimos usuarios de la base de datos.
use('users');
db.users.find().sort({ id: -1 }).limit(10);

// 7. Listar usuarios que su correo finalice en .net
use('users');
db.users.find(
    {
        correo:
            { $regex: /\.net/ }
    }
);

// 8. Listar usuarios no vivan en  colombia.
use('users');
db.users.find(
    {
        pais:
            { $ne: "colombia" }
    }
);

// 9. Listar usuarios que no vivan en ecuador y panamá.
use('users');
db.users.find(
    {
        pais:
            { $nin: ["ecuador", "panama"] }
    }
);

// 10. Cuantos(numero) usuarios son de colombia y les gusta el rock.
use('users');
db.users.count(
    {
        pais: "colombia",
        musica: "rock"
    }
);

// 11. Actualizar el género musical de todos los usuarios de la base de datos de "metal" a "carranga".
use('users');
db.users.updateMany(
    { musica: "metal" },
    {
        $set: {
            musica: "carranga"
        }
    }
);

use('users');
db.users.find(
    {
        musica: "carranga"
    }
);

// 12. Listado de hombres que les guste la "carranga" sean de colombia y tengan entre 10 y 20 años de edad.
use('users');
db.users.find(
    {
        musica: "carranga",
        pais: "colombia",
        edad: {
            $gte: 10,
            $lte: 20
        }
    }
);

// 13. Actualizar a todos los usuarios que tengan 99 años, su nuevo género musical favorito será la "carranga".
use('users');
db.users.updateMany(
    { edad: 99 },
    {
        $set: {
            musica: "carranga"
        }
    }
);

use('users');
db.users.find(
    {
        edad: 99
    }
);

// 14. Listar todos los usuarios que su nombre inicie con "a","A".
use('users');
db.users.find(
    {
        nombres: {
            $regex: /^[Aa]/
        }
    }
);

// 15. Listar todos los usuarios que su apellido finalice en "z","Z".
use('users');
db.users.find(
    {
        apellidos: {
            $regex: /[Zz]$/
        }
    }
);

// 16. Actualizar los usuarios que tengan 50 años de edad su nuevo género musical será NULL.
use('users');
db.users.updateMany(
    { edad: 50 },
    {
        musica: null
    }
);

use('users');
db.users.find(
    {
        edad: 50
    }
);

// 17. Listar todos los usuarios que su género musical sea igual a NULL.
use('users');
db.users.find(
    {
        musica: null
    }
);

// 18. Cual es el resultado de la suma de todas las edades de la base de datos.
use('users');
db.users.aggregate(
    {
        $group: {
            _id: null,
            sumaEdad: {
                $sum: "$edad"
            }
        }
    }
);

// 19. Cuantos usuarios tenemos registrados de "ecuador".
use('users');
db.users.count(
    {
        pais: "ecuador"
    }
);

// 20. Cuántos usuarios son de Colombia y les gusta el vallenato.
use('users');
db.users.count(
    {
        pais: "colombia",
        musica: "vallenato"
    }
);
