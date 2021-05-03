testplot = document.getElementById('testplotly');

Plotly.newPlot(testplot, [{
    x: [0, 10, 20, 30, 40],
    y:[8.497, 10.41, 11.083, 11.426, 11.802]
}]);


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth /
    window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 600);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00dd00
});
var cube = new THREE.Mesh(geometry, material);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();