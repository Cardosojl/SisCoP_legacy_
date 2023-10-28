# SisCoP legacy application
SisCoP is a legacy web application developed using JavaScript, MongoDB with Replication Set, Express, and Handlebars as the template engine. It utilizes asynchronous AJAX calls to enhance user experience. The primary objective of SisCoP is to facilitate the generation, storage, and management of documentation for contract procurement processes, also known as tendering processes. Additionally, it offers features to track and visualize the progress of these processes through different stages.

[![Author](http://img.shields.io/badge/author-@Cardosojl-blue.svg)](https://www.linkedin.com/in/jorge-luiz-cardoso-215914235/) ![GitHub license](https://img.shields.io/github/license/maitraysuthar/rest-api-nodejs-mongodb.svg)

## Features

+ **Document Generation and Storage:** SisCoP enables users to generate, create, and store essential documents related to contract procurement processes. These documents could include official announcements, proposals, and more.

+ **Process Management:** The application offers a user-friendly interface for managing contract procurement processes. Users can create new processes, assign responsibilities, and set milestones.

+ **Process Tracking:** SisCoP provides an overview of the current status of each procurement process. Users can easily identify which stage a process is currently in and access relevant documents.

+ **Replication Set:** SisCoP is built using MongoDB with Replication Set, ensuring data redundancy, high availability, and fault tolerance.

+ **Asynchronous AJAX Calls:** The application utilizes asynchronous AJAX calls to provide seamless interactions and real-time updates to users. This enhances the user experience by minimizing page reloads.

## Requirements

+ Node.js 16+
+ MongoDB 5.0.22+

## How to Install

  ### Using Git
  1.   Clone the project from github. Change "myproject" to your project name or Download using the "Download Zip" button:
  ```bash
  git clone https://github.com/Cardosojl/SisCoP_legacy.git ./myproject
  ```
  ### Download and Uncompress
  1. Donwload the repository.
  2. Uncompress to your desired directory.

  ### Install Dependencies
  1. Start a terminal in the repository folder.
  2. Run npm to install project dependencies:
  ```bash
  npm install
  ```
  ### Initiate Database
  1. Create collections with initial values ​​for the application to work. (It is recommended to use replicaset):
  ```bash
  node ./DBStart/initDB.js
  ```
  + After your run you should see:
  ```sh
  Connected to Database
  Collections Created
  ```
  ### Prepare the enviroment
  1. Create a file called ***.env*** and type the environment variables:
  ```sh
  SISCOP_SECRET=[insert the value to your session secret]
  HOST=[your host to create a server]  Ex: 127.0.0.1
  PORT=[the port to run the application]  Ex: 9999
  DB_LINK=[your mongodb link]  Ex:mongodb+srv://[user]:[password]@[cluster]/siscop?retryWrites=true&w=majority
  ```
## Running
  1. To be albe to run the application you must use:
  ```bash
  npm run dev
  ```
  + After that it's just access http://[your selected HOST]:[your selected PORT].
  + To login, you can use:  login: "ADM" / password: "123456".