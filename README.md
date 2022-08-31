# Gherkins Training

A simple boilerplate for learning Gherkins syntax

---
## Requirements

For development, you will need need Node.js 

## Node
- ### Node installation
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Install

    $ git clone https://github.com/tylerbrownhenry/gherkins-training
    $ cd gherkins-training
    $ npm install

## Configure app

For this app to run you will need to run 2 commands in 2 seperate terminal windows.

## Running Express server

    $ npm run start

With this server running if you visit [http://localhost:3000/getData](http://localhost:3000/getData) you should see the sample response:

```bash
{"data":[{"title":"This is a title."},{"title":"This is another title."}]}
```

## Running Build Server

    $ npm run react-dev

With this server running if you visit [http://localhost:3000/](http://localhost:3000/) you should see a simple html page:

![Preview](preview.png?raw=true "Preview")

