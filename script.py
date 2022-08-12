#!/usr/bin/python3
from os import system

if __name__ == "__main__":
    #system('echo "HOLA mundo"')
    system('yarn build')
    system('rm transfermovil.*')
    system('ln -s build/static/js/main.*.js  transfermovil.js')
    system('ln -s build/static/css/main.*.css transfermovil.css')

    #ln -s build/static/js/main.*.js  transfermovil.js')
    #ln -s build/static/css/main.*.css transfermovil.css
