// Global Variables
let excludeFolders = ['.github', 'src', 'libraries'],
	githubData;

// HTML Elements
let projects, navbar;

window.onload = async () => {
	projects = document.getElementById('projects');
	document.getElementById('sandbox').innerHTML = '';

	githubData = await fetch(
		`https://api.github.com/repos/daanbreur/P5js-Projects/git/trees/main`
	).then((res) => res.json());

	githubData.tree.forEach((element) => {
		if (!excludeFolders.includes(element.path) && element.type == 'tree') {
			let node = document.createElement('p');
			node.innerHTML = `<a class="projectLink" >${element.path}</a>`;
			projects.appendChild(node);
		}
	});
	[...document.getElementsByClassName('projectLink')].forEach((element) => {
		element.addEventListener('click', () => {
			let sandbox = document.getElementById('sandbox');
			let iframe = document.createElement('iframe');
			sandbox.innerHTML = '';
			sandbox.appendChild(iframe);
			iframe.src = `${element.innerHTML}`;
		});
	});
};
