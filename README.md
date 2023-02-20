# Note-Application_NodeJS
This application is build using NodeJS packages . We can use this application to add, remove, list-out and read all the notes . 

## Functionalies: A user can do the following things with this Note Application are - 

1. **Add** : User can add notes by providing title and body for it's notes. 
2. **Remove** : User can remove unwanted notes by providing the title of the note.
3. **List** : User can all list out all the notes which he is created.
4. **Read** : User have the option to read the content of a particular note by providing it's title.

## Feature 
- It will not add the duplicate notes in the file.
- If file is not already present while adding content it will create and add the content to it.
- It will show the error and success messages with color.

## Implementation

- **Initalise NPM :** Locate to the project folder and type command. It will intialise our node application and make a package.json file.
```
npm init -y
```
- **Install Dependencies:** chalk,yargs,nodemon.
```
npm install package name
```

If want to install particular package use below syntax.
```
npm install yargs@17.7.0
```

## Explanation of Modules

- **Created app.js File** : This file is created to where we are loading yargs module inorder to create own command-line commands in node.js and it will help us to generate an elegant user interface. Through this package we can parse arguments. We have used .command module of yargs which contains cmd,desc,[builder],[handler].
- command 'ADD' : This represents the command or an array of strings .
- describe : to provide description for each command.
- builder: A function which is executed with a yargs instance and also used to provide command-specific configuration . Created title and body objects in builder for     this application.
- hanlder : Handler function will be executed with the parsed argv object. And we have added the function in this by loading notes.js file which contians the    
  functionality code.
  
 - **Created Note.js File** : This file includes all the logic related to CURD operation which we have for our application. And exported all the functions in the last through 'module.exports' command so that functions can be used in other files just by loading it.



