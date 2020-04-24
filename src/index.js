"use strict";

import $ from 'jquery';
import message from './say-hello'

$(document).ready( () => {
    console.log('dom is ready');
    const sayHello = () => { return 'Hello' };
    sayHello();

    const renderHello = () => { return `${sayHello()} there! My name is terminal from node. It's nice to meet you` };


   $('#submit').click( (e) => {
       e.preventDefault();
       let $textValue = $('#text-value').val();
       console.log($textValue);
       $('#render-text').append(`<li>${renderHello()} ${$textValue}!</li>`);
   });
    console.log('hello from node!');
    console.log(message.niceMessage('ron'));
});



