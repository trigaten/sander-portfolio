'use client';
// pages/index.tsx
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './plants.module.css';

interface BinocularImage {
  src: string;
  alt: string;
}

interface PlantImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function Home(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentHeight: number = 5000; // Total scrollable height for the animation sequence

  // Replace these with your actual image paths and data
  const binocularImages: BinocularImage[] = [
    { src: '/images/binoculars-1.png', alt: 'Binocular view distant' },
    { src: '/images/binoculars-2.png', alt: 'Binocular view closer' },
    { src: '/images/binoculars-3.png', alt: 'Binocular view even closer' },
    { src: '/images/binoculars-4.png', alt: 'Binocular view very close' },
    { src: '/images/binoculars-5.png', alt: 'Binocular view extreme closeup' },
    { src: '/images/binoculars-6.png', alt: 'Binocular view extreme closeup' },
    { src: '/images/binoculars-7.png', alt: 'Binocular view extreme closeup' },
  ];

  const plantImages: PlantImage[] = [
    {
      src: '/images/plant-1.jpg',
      alt: 'Plant 1',
      title: 'Monstera Deliciosa',
      description: 'Swiss cheese plant with beautiful fenestrations'
    },
    {
      src: '/images/plant-2.jpg',
      alt: 'Plant 2',
      title: 'Fiddle Leaf Fig',
      description: 'Tall tree with violin-shaped leaves'
    },
    {
      src: '/images/plant-3.jpg',
      alt: 'Plant 3',
      title: 'Snake Plant',
      description: 'Low maintenance succulent with tall leaves'
    },
    {
      src: '/images/plant-4.jpg',
      alt: 'Plant 4',
      title: 'Pothos',
      description: 'Trailing vine with heart-shaped leaves'
    },
    {
      src: '/images/plant-5.jpg',
      alt: 'Plant 5',
      title: 'ZZ Plant',
      description: 'Drought-tolerant plant with waxy leaves'
    },
    {
      src: '/images/plant-6.jpg',
      alt: 'Plant 6',
      title: 'Peace Lily',
      description: 'Elegant flowering plant with white blooms'
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
      
      const handleResize = (): void => {
        setWindowHeight(window.innerHeight);
      };
      
      const handleScroll = (): void => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Calculate animation progress (0 to 1)
  const scrollProgress: number = Math.min(scrollPosition / (contentHeight - windowHeight), 1);
  
  // Calculate which binocular image to show
  const imageProgress: number = scrollProgress * 1.5; // First 66% of scroll for binocular sequence
  const currentImageIndex: number = Math.min(
    Math.floor(imageProgress * binocularImages.length),
    binocularImages.length - 1
  );
  
  // Calculate black and white fade transitions
  const blackFadeProgress: number = (scrollProgress - 0.66) * 5; // Start black fade at 66% progress
  const blackFadeAmount: number = Math.max(0, Math.min(1, blackFadeProgress));
  const whiteFadeProgress: number = (scrollProgress - 0.8) * 5; // Start white fade at 80% progress
  const whiteFadeAmount: number = Math.max(0, Math.min(1, whiteFadeProgress));

  return (
    <div className={styles.container} ref={containerRef}>
      <Head>
        <title>My Personal Site</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky container for animation sequence */}
      <div className={styles.stickyContainer}>
        <div
          className={styles.animationSequence}
          style={{
            backgroundColor: whiteFadeAmount > 0
              ? `rgba(255, 255, 255, ${whiteFadeAmount})`
              : `rgba(0, 0, 0, ${blackFadeAmount})`
          }}
        >
          {scrollProgress < 0.9 && (
            <div
              className={styles.binocularImage}
              style={{ opacity: 1 - blackFadeAmount }}
            >
              <Image
                src={binocularImages[currentImageIndex].src}
                alt={binocularImages[currentImageIndex].alt}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Spacer to create scroll area */}
      <div style={{ height: `${contentHeight}px` }}></div>

      {/* Plant content section */}
      <div className={styles.contentSection}>
        <h1 className={styles.title}>Welcome to My Garden</h1>
        <p className={styles.description}>
          Explore my collection of beautiful plants and more
        </p>
        <div className={styles.plantGrid}>
          {plantImages.map((plant, index) => (
            <div key={index} className={styles.plantCard}>
              <Image
                src={plant.src}
                alt={plant.alt}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <div className={styles.plantInfo}>
                <h3>{plant.title}</h3>
                <p>{plant.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.regularContent}>
          <h2>About Me</h2>
          <p>
            This is where you can add more content about yourself, your interests,
            or anything else you want to share with your visitors.
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}