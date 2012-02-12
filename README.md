#Create project

The main aim of this project is to allow for quick rake commands to create different types of web dev projects based on a project template.

If like me you find yourself spending more than 10 seconds creating a project each time you may find this useful. 

##Dependencies

- Ruby 1.8.7
- curl
- git

You should only need the Rakefile for this to work as it will clone the latest version of the project to get the template.

Command example:

    > rake create:backbonejs project=example_project
