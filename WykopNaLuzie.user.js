// ==UserScript==
// @name        Wykop Na Luzie
// @author      Naraya
// @namespace   https://github.com/narayagh/greasemonkey-scripts/
// @description Hides user avatars, names and vote counts from Wykop.pl threads
// @match       https://www.wykop.pl/*
// @run-at      document-idle
// @downloadURL https://github.com/narayagh/greasemonkey-scripts/raw/master/WykopNaLuzie.user.js
// @updateURL   https://github.com/narayagh/greasemonkey-scripts/raw/master/WykopNaLuzie.user.js
// ==/UserScript==

classNegativeVotes = 'cbb0000', classPositiveVotes = 'c2a7017';

elProfile = document.getElementsByClassName('showProfileSummary');
for (var i = 0; i < elProfile.length; i++) elProfile[i].innerText = 'Komentator';

elAvatar = document.getElementsByClassName('avatar  lazy');
for (var i = 0; i < elAvatar.length; i++) elAvatar[i].hidden = true;

// Hide vote counters
elNegativeVotes = document.getElementsByClassName(classNegativeVotes);
for (var i = 0; i < elNegativeVotes.length; i++) elNegativeVotes[i].hidden = true;

elPositiveVotes = document.getElementsByClassName(classPositiveVotes);
for (var i = 0; i < elPositiveVotes.length; i++) elPositiveVotes[i].hidden = true;

elZeroVotes = document.getElementsByTagName('span');
for (var i = 0; i < elZeroVotes.length; i++) if (elZeroVotes[i].innerText == '0') elZeroVotes[i].innerText = '';
