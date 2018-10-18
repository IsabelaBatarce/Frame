var express=require('express');
var app=express();

app.set('view engine','ejs');


app.get('/',function(req,res){

	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017"; /*porta de conexão padrão do mongodb*/
	MongoClient.connect(url,{userNewUrlParser: true}, function(err,db){ /* utilizar a funão atual do mongo, função de callback */

		if (err) {throw err;} /* mostrar o erro, caso haja um.*/
			var dbo = db.db("clientes"); /*db é o segundo parametro*/ /*o nome do banco que estou acessando */
			dbo.collection('cadastro').find().toArray( function(err,result){ /*to array está colocando o conteúdo do banco em um vetor*/ /* alunos é a coleção dentro do banco, então estou acessando ela*/
				res.render('index',{cadastro:result}); /*res -> método de resposta // render -> renderizar o conteúdo, ou seja o index que está na view// segundo parametro é um json que mostra a coleção em array na views*/
		})
	})
});
 
app.listen(3000, function() {
	console.log('server ON');
});

