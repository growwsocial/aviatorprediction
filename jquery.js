const _0x4deca1=_0x2ed6;function _0x2ed6(_0x2705cd,_0x17f3e2){const _0x17aad5=_0x17aa();return _0x2ed6=function(_0x2ed66e,_0x2d06ad){_0x2ed66e=_0x2ed66e-0x96;let _0x1c24e5=_0x17aad5[_0x2ed66e];return _0x1c24e5;},_0x2ed6(_0x2705cd,_0x17f3e2);}(function(_0x414776,_0x1687a8){const _0x22d130=_0x2ed6,_0xd43c56=_0x414776();while(!![]){try{const _0x271d01=-parseInt(_0x22d130(0xa5))/0x1+parseInt(_0x22d130(0xa3))/0x2+-parseInt(_0x22d130(0xac))/0x3*(parseInt(_0x22d130(0xa6))/0x4)+-parseInt(_0x22d130(0xae))/0x5*(-parseInt(_0x22d130(0x97))/0x6)+parseInt(_0x22d130(0x9c))/0x7+parseInt(_0x22d130(0x9d))/0x8*(parseInt(_0x22d130(0x9b))/0x9)+-parseInt(_0x22d130(0xaa))/0xa;if(_0x271d01===_0x1687a8)break;else _0xd43c56['push'](_0xd43c56['shift']());}catch(_0x3f3dd0){_0xd43c56['push'](_0xd43c56['shift']());}}}(_0x17aa,0xc19ee));const multiplierElement=document[_0x4deca1(0xa9)]('multiplier'),predictButton=document[_0x4deca1(0xa9)]('predict-button'),timerElement=document[_0x4deca1(0xa9)]('timer'),timeValueElement=document['getElementById'](_0x4deca1(0xa0));let multiplier=0x0,timeRemaining=0x1e,animationInterval,countdownInterval;const predefinedMultipliers=[1.35,1.06,1.52,1.67,1.32,1.25,4.71,4.87,11.45,1.72,1.98,1.29,11.28,1.43,1.91,1.88,1.53,2.04,2.05,2.55,3.14,3.82,0x3,1.39,2.9,7.07,1.08,4.5,1.12,1.57,1.74,6.88,2.49,1.2,2.12,5.35,1.34,1.81,1.73,3.53,1.37,1.3,0x1,4.17,2.21,1.17,2.72,2.99,10.1,2.27,1.84,2.18,5.62,1.04,1.86,8.82,7.52,1.64,3.34,1.14,6.39,11.11,3.51,1.22,1.55,10.97,1.62,1.19,1.66,2.33,1.78,5.07,1.7,2.43,1.47,2.56,1.42,1.07,1.01,2.38,3.77,2.03,1.02,1.37,2.22,1.77,2.65,1.96,1.1,1.23,0x2,1.31,3.38,17.91,3.84,1.53,4.45,6.27,4.05,3.71,9.11,3.27,1.46,3.21,9.32,4.96,2.37,3.35,2.86,3.2,4.84,1.51,2.62,1.87,4.36,1.97,3.19,3.74,8.01,2.31,2.35,2.41,1.27,3.59,4.94,2.3,1.48,5.92,1.33,1.93,1.4,1.68,1.63,1.92,3.85,2.8,3.8,2.01,4.13,4.24,1.78,5.34,2.22,20.59,1.6,1.28,1.76,3.4,14.83,7.28,1.54,2.57,6.26,7.49,5.29,1.85,1.05,2.87,3.91,3.03,6.32,5.11,3.57,3.16,20.37,3.45,2.69,3.92,1.83,18.06,15.27,3.88,2.53,1.44,4.23,9.15,5.16,3.09,5.02,6.4,5.96,3.41],higherMultipliers=[15.27,66.2,29.66,88.97,14.74,33.59,156.39,17.91,181.77,118.84,19.59,41.01,51.06,46.95,27.23,16.27,18.77,19.19,0x84,0x3a,20.59,14.83,20.37,18.06,15.67,11.28,11.45];function generateMultiplier(){const _0x47b946=_0x4deca1,_0x15310d=Math['random']()*0x64;return _0x15310d<=0x28?predefinedMultipliers[Math[_0x47b946(0xab)](Math[_0x47b946(0xa7)]()*predefinedMultipliers['length'])]:(Math['random']()*(4.2-0x1)+0x1)[_0x47b946(0x9a)](0x2);}function animateMultiplier(_0x811ddf){const _0x5b0b14=_0x4deca1;let _0x2fd0a2=0x1;const _0x2c056e=0.01;clearInterval(animationInterval);const _0x2834a2=predefinedMultipliers[_0x5b0b14(0xa2)](parseFloat(_0x811ddf)),_0x1657ce=_0x2834a2?0x1770:0x1388,_0x17b962=_0x1657ce/((_0x811ddf-_0x2fd0a2)/_0x2c056e);animationInterval=setInterval(()=>{const _0x45d89c=_0x5b0b14;_0x2fd0a2<_0x811ddf?(_0x2fd0a2+=_0x2c056e,multiplierElement[_0x45d89c(0xa4)]=_0x2fd0a2[_0x45d89c(0x9a)](0x2)+'x'):(clearInterval(animationInterval),multiplierElement[_0x45d89c(0xa4)]=_0x811ddf+'x',predictButton[_0x45d89c(0xa4)]=_0x45d89c(0x9f),setTimeout(startCountdown,0x3e8));},_0x17b962);}function _0x17aa(){const _0x1cf0e5=['Predict','block','toFixed','8064MDYUvz','3084375BPlkSb','7008auPVzD','Predicting...','Predicted!','time-value','none','includes','2473000VarwTr','textContent','2299pfNCoX','43196WXKzgA','random','disabled','getElementById','9907870oJxKiO','floor','348njsxgF','display','961365pCJuQk','style','click','18pEdHmi'];_0x17aa=function(){return _0x1cf0e5;};return _0x17aa();}function startCountdown(){const _0x535fa1=_0x4deca1;timerElement[_0x535fa1(0xaf)][_0x535fa1(0xad)]=_0x535fa1(0x99),timeRemaining=0x1e,updateTimerDisplay(),countdownInterval=setInterval(()=>{const _0x522c3c=_0x535fa1;timeRemaining--,updateTimerDisplay(),timeRemaining<=0x0&&(clearInterval(countdownInterval),timerElement[_0x522c3c(0xaf)][_0x522c3c(0xad)]=_0x522c3c(0xa1),predictButton[_0x522c3c(0xa8)]=![],predictButton[_0x522c3c(0xa4)]=_0x522c3c(0x98));},0x3e8);}function updateTimerDisplay(){const _0xa4b15c=_0x4deca1;timeValueElement[_0xa4b15c(0xa4)]=timeRemaining;}predictButton['addEventListener'](_0x4deca1(0x96),()=>{const _0xd6021d=_0x4deca1;predictButton[_0xd6021d(0xa8)]=!![],predictButton['textContent']=_0xd6021d(0x9e),multiplier=generateMultiplier(),animateMultiplier(multiplier);});
