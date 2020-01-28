let scene, camera, renderer, loader;
    function init(){
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        camera = new THREE.PerspectiveCamera(40, 1920 / 1080, 1, 5000);
        camera.rotation.z = 90;
        camera.position.x = 700;
        camera.position.y = 0;
        camera.position.z = 0;

        hlight = new THREE.AmbientLight(0xff0000, 5.0);
        scene.add(hlight);

        directionalLightFront = new THREE.DirectionalLight(0xffffff, 5);
        directionalLightBack = new THREE.DirectionalLight(0xffffff, 5);
        directionalLightFront.position.set(100, 0, 0);
        directionalLightBack.position.set(-100, 0, 0);
        directionalLightFront.castShadow = true;
        directionalLightBack.castShadow = true;
        scene.add(directionalLightFront);   
        scene.add(directionalLightBack);

        renderer = new THREE.WebGLRenderer({antialias:true}, {alpha:true});
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(720, 480);

        document.getElementById('model-container').appendChild(renderer.domElement);
        document.getElementById('model-container').style.border = '1px solid gray';

        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', renderer);
        controls.minDistance = 300;
        controls.maxDistance = 900;
        console.log(controls);
        controls.domElement.onmouseleave = function(){
            controls.target = 0;
        }
        

        loader = new THREE.GLTFLoader();
        loader.load('../3d/gltf/sony-smart-tv.gltf', function(gltf){
            let object = gltf.scene.children[0];
            object.scale.set(0.5, 0.5, 0.5);
            object.position.set(0, 0, 0);
            object.rotation.y = 1.6;
            scene.add(gltf.scene);
            animate();
            });
        }

    function animate(){
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
        }
        
        init();

    function ResetView(){

    }
