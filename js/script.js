var project = document.querySelector('input[value=project]');
var stage = document.querySelector('input[value=stage]');


project.addEventListener('click', function() {
    document.getElementById('stage').classList.add('hidden');
    document.getElementById('project').classList.remove('hidden');
});

stage.addEventListener('click', function() {
    document.getElementById('stage').classList.remove('hidden');
    document.getElementById('project').classList.add('hidden');
});
