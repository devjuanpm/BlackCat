let scene, camera, renderer, loader;
function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(45, 16 / 9, 1, 1000);
    camera.rotation.z = 90;
    camera.position.x = 700;
    camera.position.y = 0;
    camera.position.z = 0;

    // hlight = new THREE.AmbientLight(0xffffff, 1.0);
    // scene.add(hlight);

    directionalLightFront = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightBack = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightFront.position.set(1, 0, 0);
    directionalLightBack.position.set(-1, 0, 0);
    directionalLightFront.castShadow = true;
    directionalLightBack.castShadow = true;
    scene.add(directionalLightFront);
    scene.add(directionalLightBack);

    renderer = new THREE.WebGLRenderer({ antialias: true }, { alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(841, 475);

    document.getElementById('model-container').appendChild(renderer.domElement);;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);
    controls.minDistance = 300;
    controls.maxDistance = 900;
    console.log(controls);


    renderer.domElement.onclick = function () {
        console.log(`x: ${camera.position.x} y: ${camera.position.y} z:${camera.position.z} rot.x: ${camera.rotation.x} rot. Y: ${camera.rotation.y}`)
    };
    
    loader = new THREE.GLTFLoader();
    loader.load('../3d/gltf/tv.gltf', function (gltf) {
        let object = gltf.scene.children[0];
        object.scale.set(0.5, 0.5, 0.5);
        object.position.set(0, 0, 0);
        object.rotation.z = -1.6;
        scene.add(gltf.scene);
        animate();
    });
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();

function ResetView() {

}
