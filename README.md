# Neox Bot

A discord bot for the Neoxian City. Read the below post for more details.

[Introducing Neox Bot v1.2.0 - A discord bot for Neoxian city](https://steempeak.com/@bala41288/introducing-neox-bot-v1-2-0-a-discord-bot-for-neoxian-city)

## Technologies
* Node.js
* Express
* Discordjs
* Steem
* Moment Js
* Mongo DB

### Current Bot version
v1.6.1

### Installation

Install the dependencies
Install Mongo DB and create a database called neox.

```sh
$ npm install
```
Run app

```sh
$ npm start
```

## Usage

Rename **config-example.json** file as **config.json** and enter a discord bot token value in the file. 
Update database URI in the config file and start the bot. 

## Bot Commands

The following commands works only in `#play-with-bots` channel

```sh
$neox
$random 405 and 670
$gtop
$gwinners
$gnotification Start
$gnotification Stop
```

The following commands works only in `#giveaway` channel

`$neox gcreate` - Follow the replies from the bot after this command to create a giveaway.