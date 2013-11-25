var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 2000);
var renderer = new THREE.WebGLRenderer();

var width = 400;
var height = 300;

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


var cubeGeometry = new THREE.CubeGeometry(10,10,10);
var cubeMaterial = new THREE.MeshBasicMaterial({color:0xFF00FF});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

cube.position.x = 50;
cube.position.y = 50;
cube.position.z = 50;

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 138;

scene.add(pointLight);

camera.position.z = 5;
renderer.setClearColor(0xf5f5dc);
renderer.render(scene, camera);
var render = function () {
  requestAnimationFrame(render);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
};
render();
