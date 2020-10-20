// Global Variables
let excludeFolders = ['.github', 'src', 'libraries'], githubData;

// HTML Elements
// let projects = document.getElementById('projects');
// let projects;


window.onload = async () => {
    // projects = document.getElementById('projects');

    githubData = await fetch(`https://api.github.com/repos/daanbreur/P5js-Projects/git/trees/main`)
        .then(res => res.json())

    githubData.tree.forEach(element => {
        if (!excludeFolders.includes(element.path) && element.type == 'tree') {
            let node = document.createElement('p');
            node.innerHTML = `<a class="projectLink" href=\"${element.path}\">${element.path}</a>`;
            projects.appendChild(node)
        }
    });
}