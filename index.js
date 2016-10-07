var fs = require('fs');
var http = require('http');

var port = 8080;

var todos = fs.

var server = http.createServer(handleRequest);

function handleRequest (req, res) {
	// console.log(req.url);
	switch (req.url) {
		case '/':
			// handle url /
			console.log('root');
			break;
		case '/list':
			// handle url /list
			console.log('list');
			break;
		case '/add':
			// handle url /add
			console.log('add');
			break;
		case '/remove':
			// handle url /remove
			console.log('remove')
			break;
		default :
			// handle page not found
			console.log('page not found')
	}
}

function listTodos() {
	openFile('todo.txt', function(error, data) {
    if (error) {
		if (error.code === 'ENOENT') {
			return console.log('Nothing to do! (or your dog ate your todo list)');
      	} else {
        	return console.log('Error: Something went wrong', error);
      	}
    }

    var todos = splitStringByNewline(data);

    if (todos.length === 0) {
		return console.log('Nothing to do!')
    }

    todos.forEach(function(element, index) {
		index = (index + 1).toString();
		console.log(index, element);
    });

    if (todos.length > 5) {
      console.log('You have too much to do!');
    }
  });
}

function openFile(fileName, callback) {
	fs.readFile(__dirname + '/' + fileName, 'utf8', function(error, data) {
	callback(error, data)
	});
}

function splitStringByNewline(string) {
	return string.split('\n').filter(function(element) {
	element = element.trim();
	return element.length > 0;
  });
}

server.listen(port, function (error) {
	if (error) {
		console.log(error);
	} else {
		console.log('listening on port 8080');
	}

});