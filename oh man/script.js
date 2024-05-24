const http = require('http');
const fs = require("fs"); // fs full form file System 

const myserver = http.createServer((req, res) => {
    const log = `${req.method} ${req.url} ${new Date().toString()}\n`;  //routing detail isse aati h ${req.url} 
    fs.appendFile("log.txt",log,(err,data) => {
         res.end("Hello server World");
    });
   })
   myserver.listen(8081,() => console.log("server Starter"))



const http = require('http')
const fs = require("fs")
const server =http.createServer((req,res) => {
     const hero = `${req.method}${req.url}${new Date().toString()}\n`;

     fs.readFile("hero.txt",'utf-8',(err,data) => {
          if (err) throw err;
    console.log('File content:', data);
     });
     
})
server.listen(8081),() => {
 console.log("server start ho gya");    
}


// Creating a File:
// To create a file, you can use the fs.writeFile method. If the file does not exist, it will be created; if it does exist, it will be overwritten.


const fs = require('fs');

// Creating and writing to a file
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File created and data written.');
});
// Reading a File:
// To read a file, use the fs.readFile method. It reads the contents of the file and returns it in the callback.

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});
//Updating a File:
//To update a file, you can use the fs.appendFile method to append data to the file, or fs.writeFile to overwrite the file.

// Appending data to a file
fs.appendFile('example.txt', '\nAppending some data.', (err) => {
    if (err) throw err;
    console.log('Data appended to file.');
});

// Overwriting the file
fs.writeFile('example.txt', 'New content', (err) => {
    if (err) throw err;
    console.log('File content overwritten.');
});

//Deleting a File:
//To delete a file, use the fs.unlink method.

// Deleting a file
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted.');
});
//Working with Folders:
//You can create, read, and delete directories using fs.mkdir, fs.readdir, and fs.rmdir respectively.

// Creating a folder
fs.mkdir('exampleFolder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Folder created.');
});

// Reading a folder
fs.readdir('exampleFolder', (err, files) => {
    if (err) throw err;
    console.log('Folder content:', files);
});

// Deleting a folder
fs.rmdir('exampleFolder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Folder deleted.');
});
//Complete Example
//Here's a complete example demonstrating these operations:

const fs = require('fs');
const path = require('path');

// Folder path
const folderPath = path.join(__dirname, 'exampleFolder');

// File path
const filePath = path.join(folderPath, 'example.txt');

// Create a folder
fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Folder created.');

    // Create and write to a file
    fs.writeFile(filePath, 'Hello, world!', (err) => {
        if (err) throw err;
        console.log('File created and data written.');

        // Read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File content:', data);

            // Append data to the file
            fs.appendFile(filePath, '\nAppending some data.', (err) => {
                if (err) throw err;
                console.log('Data appended to file.');

                // Overwrite the file
                fs.writeFile(filePath, 'New content', (err) => {
                    if (err) throw err;
                    console.log('File content overwritten.');

                    // Delete the file
                    fs.unlink(filePath, (err) => {
                        if (err) throw err;
                        console.log('File deleted.');

                        // Delete the folder
                        fs.rmdir(folderPath, { recursive: true }, (err) => {
                            if (err) throw err;
                            console.log('Folder deleted.');
                        });
                    });
                });
            });
        });
    });
});
