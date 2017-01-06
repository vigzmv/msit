q="querySelector('strong').innerHTML.split(' ')[1]";
s=">div>table>tbody";
["#robotics", "#quizzes"]
	.forEach(I=>{ document.querySelector(`${I}${s}`)
	.innerHTML=[...document.querySelectorAll(`${I}${s}>tr`)]
	.sort((a,b)=>eval(`a.${q}`)>eval(`b.${q}`)?1:-1)
	.map(s=>s.outerHTML).join('')});
