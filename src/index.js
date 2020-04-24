"use strict";

const $ = require('jquery');

$(document).ready( () => {
    console.log('dom is ready');
    const sayHello = () => { console.log('Hello') };
    sayHello();

    const renderHello = (input) => { return `${sayHello()} there! My name is terminal from node. It's nice to meet you ${input}` };

    let $textValue = $('#text-value');

   $('#submit').click( (e) => {
       e.preventDefault();

       console.log($textValue.val());
   });

});



