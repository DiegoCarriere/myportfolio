import React from 'react';
import {PresentationControls, Stage, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";



function Model(props){
    const {scene} = useGLTF("./img/3d/piano.glb");
    return <primitive object={scene} {...props} />
}

const Competence_piano = () => {
    return (
        <div className="competence_piano">
            <Canvas className={"canvas"}
                    dpr={[1,2]}
                    shadows
            >

                <directionalLight intensity={1} position={[0,0,2]} />
                <ambientLight />
                <PresentationControls
                    polar={[Math.PI / 32, Math.PI / 4]}
                    azimuth={[-0.8,1]}
                    zoom={5}

                    rotation={[0,0.8,0]}
                    cursor
                    snap
                >

                    <Stage environment={null} >
                        <Model scale={0.1} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default Competence_piano;
