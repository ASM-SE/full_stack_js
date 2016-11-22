'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');

//Tarefa default não precisa ser chamada com o nome, basta utilizar no cmd: gulp
gulp.task('default', () => {
  return runSequence('clean', ['html', 'img'])
})

//Definição de uma tarefa no gulp: para chamar esta tarefa: gulp clean
//clean - gulp, no diretorio (src) limpe (pipe(clean())
gulp.task('clean', () => {
   gulp.src('./dist')
    .pipe(clean());
})

//Copia o que está no src (os /**/* indicam todos os arquivos e manda para o destino ./dist
//o array abaixo indica que a tarefa copy tem uma dependencia, no caso a tarefa clean será executada primeiro
//Pode-se assim criar uma relação entre tarefas, elas não são sincronos.
gulp.task('copy', ['clean'], () => {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./dist'));
})

//Pega todos os arquivos js dentro da pasta js e minifica e joga para a pasta dist/js
gulp.task('js', ['clean'],() => {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('main.js'))              //concatena todos os arquivos js no main.js
    .pipe(babel({ presets: ['es2015'] })) //converte es6 para es5
    .pipe(uglify())                       //minifica arquivos js
    .pipe(gulp.dest('./dist/js'));        //diretorio para o qual será enviado o arquivo main.js

})

//Altera as refs dos js nos htmls e minifica os js
gulp.task('html', ['clean'], () => {
  return gulp.src('./src/**/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', babel({ presets: ['es2015']})))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('./dist'))
})

//Copia imagens
gulp.task('img', ['clean'], () => {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'))
})



//o array abaixo indica que a tarefa build tem uma dependencia, no caso a tarefa clean será executada primeiro
//Pode-se assim criar uma relação entre tarefas, elas não são sincronos.
gulp.task('build', () => {
    console.log('Olá gulp!!');
})
