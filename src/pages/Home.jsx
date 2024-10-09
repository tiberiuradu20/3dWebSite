import {Suspense,useState} from 'react'
 {/*   <div className="absolute top-28 left-0 right-0 z-10 flex 
        items-center justify-center">
        POPUP
        </div>*/}

import { Canvas } from '@react-three/fiber'       
import {Loader}  from '../components/Loader' 
import Insula from '../models/Insula'
import  Sky  from '../models/Sky'
import Bird from '../models/Bird'
import  Plane  from '../models/Plane'



const Home = () => {
  const [isRotating,setIsRotating]=useState(false)
  const adjustIslandForScreenSize=()=>{
let screenScale,screenPosition
let rotation=[0.1,4.7,0]
screenPosition=[0,-6.5,-43]
  if(window.innerWidth<768){
    screenScale=[0.9,0.9,0.9]
    
  }else{
    screenScale=[1,1,1]
  
  }

   return [screenScale,screenPosition,rotation]
  }


  const adjustPlaneForScreenSize=()=>{
    let screenScale,screenPosition
   
      if(window.innerWidth<768){
        screenScale=[1.5,1.5,1.5]
        screenPosition=[0,-1.5,0]
      }else{
        screenScale=[3,3,3]
        screenPosition=[0,-4,-4]
      
      }
    
       return [screenScale,screenPosition]
      }



  const [islandScale,islandPositon,islandRotation]=adjustIslandForScreenSize()
  const [planeScale,planePosition]=adjustPlaneForScreenSize()
  const [currentStage,setCurrentStage]=useState(1)
  return (
    <section className="w-full h-screen relative">
    
        <Canvas
         className={`w-full h-screen bg-transparent ${isRotating?
          'cursor-grabbing':'cursor-grab'}`}
        camera={{near:0.1,far:1000}}>
      <Suspense fallback={<Loader/>}>
       <directionalLight
       position={[1,1,1]}
       intensity={2}/>
       <ambientLight
       intensity={0.5}/>
       <hemisphereLight
       skyColor="#b1e1ff" groundColor="#000000"
       intensity={1}/>
       <Bird isRotating={isRotating}
        setIsRotating={setIsRotating}/>  
       <Sky isRotating={isRotating}/>
      <Insula
       isRotating={isRotating}
       setIsRotating={setIsRotating}
      position={islandPositon}
      scale={islandScale}
      rotation={islandRotation}
      setCurrentStage={setCurrentStage}
      />
      <Plane
      isRotating={isRotating}
      planeScalescale={planeScale}
      planePosition={planePosition}
      rotation={[0,20,0]}
      setCurrentStage={setCurrentStage}
      />

      </Suspense>
      




        </Canvas>

    </section>
  )
}

export default Home


/*<directionalLight/>
<ambientLight/>
<pointLight/>
<spotLight/>
<hemisphereLight/> Acestea sunt toate tipurile de iluminare din three fiber*/
