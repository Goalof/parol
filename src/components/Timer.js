import React from 'react';
import atomize from "@quarkly/atomize"; // Пароль и ссылка на страницу

var pages = {
	'123': '/index2',
	'124': '/index3',
	'125': '/index4',
	'126': '/index5'
},
    fail_url = '/404'; // Ссылка на которую перейдет пользователь при ошибке

var pass = prompt('Введите пароль');

if (pages[pass]) {
	alert('Пароль принят!');
	location.href = pages[pass];
} else {
	alert('Пароль не принят');
	if (fail_url) location.href = fail_url;
}