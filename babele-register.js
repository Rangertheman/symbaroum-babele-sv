Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'symbaroum-babele-sv',
			lang: 'sv',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/symbaroum-babele-sv/img/fvtt-anvil-sv.png";
		
	}
});
