import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleWave3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Software WebGL detection
    const isSoftwareGl = (() => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.025);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 20, 35);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particle wave geometry (larger grid for full screen coverage)
    const numX = 70;
    const numZ = 70;
    const separation = 1.2;
    const count = numX * numZ;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    let i = 0;
    for (let x = 0; x < numX; x++) {
      for (let z = 0; z < numZ; z++) {
        positions[i * 3] = (x - numX / 2) * separation;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (z - numZ / 2) * separation;
        i++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.3,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      let idx = 0;
      for (let x = 0; x < numX; x++) {
        for (let z = 0; z < numZ; z++) {
          const px = (x - numX / 2) * separation;
          const pz = (z - numZ / 2) * separation;
          
          const py = Math.sin(px * 0.25 + elapsedTime * 1.2) * Math.cos(pz * 0.25 + elapsedTime * 0.9) * 3;
          
          array[idx * 3 + 1] = py;
          idx++;
        }
      }
      posAttr.needsUpdate = true;

      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40" />;
};
