/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Setting.gltf --transform
Author: vojtaklemperer (https://sketchfab.com/vojtaklemperer)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/green-screen-studio-with-a-softbox-e5fe0a43be604560bce847329494b912
Title: Green screen studio with a softbox
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Setting-transformed.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[83.5, 155.94, -39.12]} rotation={[-Math.PI / 2, -0.21, 0]} scale={100}>
        <mesh geometry={nodes.box_shader_emision_0.geometry} material={materials.emision} />
        <mesh geometry={nodes.box_shader_black_plastic_0.geometry} material={materials.black_plastic} />
      </group>
      <group position={[113.57, 155.25, -38.51]} rotation={[-Math.PI / 2, 1.35, Math.PI / 2]} scale={6.43}>
        <mesh geometry={nodes.light_head_black_plastic_0.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.light_head_white_plastic_0.geometry} material={materials.white_plastic} />
      </group>
      <group position={[102.87, 154.94, -43.14]} rotation={[2.2, -0.75, -2.51]} scale={100}>
        <mesh geometry={nodes.lightbulb003_emision_0.geometry} material={materials.emision} />
        <mesh geometry={nodes.lightbulb003_white_plastic_0.geometry} material={materials.white_plastic} />
      </group>
      <group position={[113.52, 7.64, -39.14]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[1.16, 1.16, 100]}>
        <group scale={[85.98, 85.98, 1]}>
          <mesh geometry={nodes.legs_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.legs_black_metal_0.geometry} material={materials.black_metal} />
        </group>
        <group position={[-0.01, 1.99, 0.38]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw003_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw003_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.17, 1.96, 0.51]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw000_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw000_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.21, 1.96, 0.92]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw001_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw001_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.05, 1.98, 1.25]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw002_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw002_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <mesh geometry={nodes.main_pole_black_metal_0.geometry} material={materials.black_metal} />
        <mesh geometry={nodes.main_pole_shiny_metal_0.geometry} material={materials.shiny_metal} />
        <mesh geometry={nodes.holder001_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 0.92]} rotation={[0, 0, -0.2]} scale={[19, 19, 0.22]} />
        <mesh geometry={nodes.holder002_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 1.24]} rotation={[0, 0, -0.2]} scale={[17.28, 17.28, 0.2]} />
        <mesh geometry={nodes.holder_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 0.51]} rotation={[0, 0, -0.2]} scale={[21.51, 21.51, 0.25]} />
        <mesh geometry={nodes.holder_legs_black_plastic_0.geometry} material={materials.black_plastic} scale={[85.98, 85.98, 1]} />
        <mesh geometry={nodes.botoom_holder_legs_black_plastic_0.geometry} material={materials.black_plastic} position={[0, 0, -0.01]} scale={[85.98, 85.98, 1]} />
      </group>
      <group position={[114.07, 152.55, -39.13]} rotation={[-2.32, Math.PI / 2, 0]} scale={[0.39, 0.39, 1.15]}>
        <mesh geometry={nodes.screw004_shiny_metal_0.geometry} material={materials.shiny_metal} />
        <mesh geometry={nodes.screw004_black_plastic_0.geometry} material={materials.black_plastic} />
      </group>
      <group position={[101.56, 163.48, -44.12]} rotation={[-2.91, -0.99, -1.35]} scale={100}>
        <mesh geometry={nodes.lightbulb000_emision_0.geometry} material={materials.emision} />
        <mesh geometry={nodes.lightbulb000_white_plastic_0.geometry} material={materials.white_plastic} />
      </group>
      <group position={[100.66, 163.94, -35.2]} rotation={[-0.51, -1.2, 1.32]} scale={100}>
        <mesh geometry={nodes.lightbulb001_emision_0.geometry} material={materials.emision} />
        <mesh geometry={nodes.lightbulb001_white_plastic_0.geometry} material={materials.white_plastic} />
      </group>
      <group position={[102.09, 155.23, -35.19]} rotation={[1.15, -0.87, -3.11]} scale={100}>
        <mesh geometry={nodes.lightbulb002_emision_0.geometry} material={materials.emision} />
        <mesh geometry={nodes.lightbulb002_white_plastic_0.geometry} material={materials.white_plastic} />
      </group>
      <group position={[155.03, 3.88, 11.78]} rotation={[-0.37, 0.01, -1.05]} scale={2.1}>
        <mesh geometry={nodes.Cylinder_black_plastic_0.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.Cylinder_shiny_metal_0.geometry} material={materials.shiny_metal} />
      </group>
      <group position={[-141.09, 8.32, 33.07]} rotation={[-Math.PI / 2, 0, 1.52]} scale={[1.39, 1.39, 119.5]}>
        <group scale={[85.98, 85.98, 1]}>
          <mesh geometry={nodes.legs001_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.legs001_black_metal_0.geometry} material={materials.black_metal} />
        </group>
        <group position={[-0.01, 1.99, 0.38]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw005_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw005_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.17, 1.96, 0.51]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw006_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw006_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.21, 1.96, 0.82]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw007_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw007_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.05, 1.98, 1.16]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw008_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw008_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <mesh geometry={nodes.main_pole001_shiny_metal_0.geometry} material={materials.shiny_metal} />
        <mesh geometry={nodes.main_pole001_black_metal_0.geometry} material={materials.black_metal} />
        <mesh geometry={nodes.botoom_holder_legs001_black_plastic_0.geometry} material={materials.black_plastic} position={[0, 0, -0.01]} scale={[85.98, 85.98, 1]} />
        <mesh geometry={nodes.holder003_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 0.82]} rotation={[0, 0, -0.2]} scale={[19, 19, 0.22]} />
        <mesh geometry={nodes.holder004_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 1.16]} rotation={[0, 0, -0.2]} scale={[17.28, 17.28, 0.2]} />
        <mesh geometry={nodes.holder005_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 0.51]} rotation={[0, 0, -0.2]} scale={[21.51, 21.51, 0.25]} />
        <mesh geometry={nodes.holder_legs001_black_plastic_0.geometry} material={materials.black_plastic} scale={[85.98, 85.98, 1]} />
      </group>
      <group position={[-6.99, 8.32, -126.1]} rotation={[-Math.PI / 2, 0, 2.24]} scale={[1.39, 1.39, 119.5]}>
        <group scale={[85.98, 85.98, 1]}>
          <mesh geometry={nodes.legs002_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.legs002_black_metal_0.geometry} material={materials.black_metal} />
        </group>
        <group position={[-0.01, 1.99, 0.38]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw009_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw009_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.17, 1.96, 0.51]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw010_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw010_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.21, 1.96, 0.92]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw011_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw011_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <group position={[0.05, 1.98, 1.25]} rotation={[0, 1.57, 0]} scale={[0, 0.34, 0.99]}>
          <mesh geometry={nodes.screw012_black_plastic_0.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.screw012_shiny_metal_0.geometry} material={materials.shiny_metal} />
        </group>
        <mesh geometry={nodes.main_pole002_black_metal_0.geometry} material={materials.black_metal} />
        <mesh geometry={nodes.botoom_holder_legs002_black_plastic_0.geometry} material={materials.black_plastic} position={[0, 0, -0.01]} scale={[85.98, 85.98, 1]} />
        <mesh geometry={nodes.holder006_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 0.92]} rotation={[0, 0, -0.2]} scale={[19, 19, 0.22]} />
        <mesh geometry={nodes.holder007_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 1.24]} rotation={[0, 0, -0.2]} scale={[17.28, 17.28, 0.2]} />
        <mesh geometry={nodes.holder008_black_plastic_0.geometry} material={materials.black_plastic} position={[-0.12, 0.21, 0.51]} rotation={[0, 0, -0.2]} scale={[21.51, 21.51, 0.25]} />
        <mesh geometry={nodes.holder_legs002_black_plastic_0.geometry} material={materials.black_plastic} scale={[85.98, 85.98, 1]} />
      </group>
      <mesh geometry={nodes.floor001__0.geometry} material={materials['floor.001__0']} position={[0.33, 2.72, 8.1]} rotation={[-Math.PI / 2, 0, 0]} scale={213.14} />
      <mesh geometry={nodes.cable_black_plastic_0.geometry} material={materials.black_plastic} position={[114.03, 7.34, -37.64]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.light_holder_black_plastic_0.geometry} material={materials.black_plastic} position={[113.59, 153.15, -39.12]} rotation={[-Math.PI / 2, 0, 0]} scale={1.47} />
      <mesh geometry={nodes.green_pole_black_metal_0.geometry} material={materials.black_metal} position={[-74.07, 181.01, -46.55]} rotation={[-Math.PI / 2, 0, -0.7]} scale={100} />
      <mesh geometry={nodes.clip002_black_metal_0.geometry} material={materials.black_metal} position={[-12.69, 183.28, -120.23]} rotation={[-1.69, -0.11, -0.73]} scale={48.78} />
      <mesh geometry={nodes.clip003_black_metal_0.geometry} material={materials.black_metal} position={[-81.7, 183.23, -38.83]} rotation={[-1.67, -0.03, -0.76]} scale={48.78} />
      <mesh geometry={nodes.clip001_black_metal_0.geometry} material={materials.black_metal} position={[-130.87, 183.46, 20.93]} rotation={[-1.42, 0.19, -0.74]} scale={48.78} />
      <mesh geometry={nodes.clip004_black_metal_0.geometry} material={materials.black_metal} position={[-142.55, 130.11, 33.21]} rotation={[0.02, -1.45, 0.06]} scale={48.78} />
      <mesh geometry={nodes.clip_black_metal_0.geometry} material={materials.black_metal} position={[-6.55, 129.52, -128.53]} rotation={[3.14, -0.15, -3.1]} scale={48.78} />
      <mesh geometry={nodes.Plane001_green_0.geometry} material={materials.green} position={[-74.16, 81.63, -46.03]} rotation={[-Math.PI, -0.86, -Math.PI / 2]} scale={[100, 101.77, 100]} />
    </group>
  )
}

useGLTF.preload("/Setting-transformed.glb")
