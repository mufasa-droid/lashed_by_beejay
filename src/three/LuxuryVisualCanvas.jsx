import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Selective, high-performance Three.js visual component.
 * Features an editorial tactile plane with subtle ambient lighting, dynamic specular sheen,
 * and mouse-driven inertia tilt that smoothly returns to neutral.
 */
export default function LuxuryVisualCanvas({ imageUrl, alt = "Luxury Editorial Art", className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer;
    let scene;
    let camera;
    let mesh;
    let animationFrameId;
    let isVisible = true;

    // Target tilt coordinates and current lerped coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    try {
      scene = new THREE.Scene();

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
      camera.position.z = 3.2;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      // Texture loading with smooth filtering
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        imageUrl,
        (texture) => {
          texture.generateMipmaps = true;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.colorSpace = THREE.SRGBColorSpace;

          // Aspect ratio fitting geometry
          const imageAspect = texture.image.width / texture.image.height;
          const planeGeo = new THREE.PlaneGeometry(1.65, 1.65 / imageAspect, 32, 32);

          // Subtle curved depth to give editorial tactile presence
          const pos = planeGeo.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const vx = pos.getX(i);
            const vy = pos.getY(i);
            const dist = Math.sqrt(vx * vx + vy * vy);
            pos.setZ(i, -Math.pow(dist, 2) * 0.08);
          }
          planeGeo.computeVertexNormals();

          // Luxury material with subtle sheen
          const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            roughness: 0.25,
            metalness: 0.1,
            clearcoat: 0.35,
            clearcoatRoughness: 0.15,
            reflectivity: 0.3,
          });

          mesh = new THREE.Mesh(planeGeo, material);
          scene.add(mesh);
        },
        undefined,
        () => {
          // If texture fails, fallback to standard image
          setHasWebGL(false);
        }
      );

      // Refined Studio Lighting
      const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.4);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xfffdf5, 2.0);
      directionalLight.position.set(2, 4, 3);
      scene.add(directionalLight);

      const softFillLight = new THREE.DirectionalLight(0xc5a880, 0.8);
      softFillLight.position.set(-3, -2, 2);
      scene.add(softFillLight);

      // Mouse Move Handler for subtle tilt
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        // Normalized [-1, 1]
        const nx = (clientX / rect.width) * 2 - 1;
        const ny = -(clientY / rect.height) * 2 + 1;

        targetRotY = nx * 0.12; // subtle max 7 degrees
        targetRotX = -ny * 0.10;
      };

      const handleMouseLeave = () => {
        targetRotX = 0;
        targetRotY = 0;
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Intersection Observer to pause rendering when offscreen
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );
      observer.observe(container);

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      // Render Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (!isVisible) return;

        // Smooth Lerp (Inertia)
        currentRotX += (targetRotX - currentRotX) * 0.06;
        currentRotY += (targetRotY - currentRotY) * 0.06;

        if (mesh) {
          mesh.rotation.x = currentRotX;
          mesh.rotation.y = currentRotY;
          // Very gentle floating breath
          mesh.position.y = Math.sin(Date.now() * 0.001) * 0.015;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        observer.disconnect();

        if (renderer) {
          renderer.dispose();
        }
        if (mesh) {
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        }
      };
    } catch (err) {
      console.warn("Three.js initialization skipped, falling back to CSS visual:", err);
      setHasWebGL(false);
    }
  }, [imageUrl]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] flex items-center justify-center overflow-hidden cursor-crosshair select-none ${className}`}
      aria-label={alt}
    >
      {/* Three.js Interactive Canvas */}
      {hasWebGL ? (
        <canvas ref={canvasRef} className="w-full h-full block" />
      ) : (
        /* Seamless Graceful Fallback if WebGL is disabled or reduced-motion is requested */
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full max-h-[580px] object-cover rounded-2xl shadow-luxury transition-transform duration-700 hover:scale-[1.02]"
            loading="eager"
          />
        </div>
      )}

      {/* Subtle Editorial Overlay Tag */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none bg-[#121110]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#E8DEC8]">
        Interactive 3D Depth • Atelier Edition
      </div>
    </div>
  );
}
