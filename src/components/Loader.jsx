import React from 'react'
import { Html } from '@react-three/drei'  /** */
export const Loader = () => {
  return (
    <Html>
    <div className="flex justify-center items-center">
       <div className="w-20 h-20 border-2 border-opacity-20
       border-blue-500 border-t-blue-500 rounded-full animate-spin"/> {/**aceste clase fac parte din tailwind
       De asemenea acest div va actiona ca un spinner */}
   
    </div>
    </Html>/*Aceasta este o proprietate 3d care trebuie pusa obligatoriu cand randam elemente in Caanvas ca sa transformam
    ceva ce nu e 3d in 3d* */
  )
}
