import React from 'react';
import { FadeMotion, FadeMotionGroup } from './ui/fade-motion';
import { Card } from './ui/card';

const FadeExample = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeMotion>
          <h2 className="text-3xl font-bold mb-8">Fade Up Animation Examples</h2>
        </FadeMotion>

        {/* Single item with fade up */}
        <FadeMotion 
          delay={0.2} 
          duration={0.8}
          direction="up"
          distance={80}
          ease={[0.32, 0.72, 0, 1]} // Smooth easing
        >
          <Card className="p-6 mb-8 bg-[#141C2B] text-white">
            <h3 className="text-xl font-semibold mb-4">Single Fade Up Card</h3>
            <p>This card fades in from the bottom with a smooth easing function.</p>
          </Card>
        </FadeMotion>

        {/* Multiple items with staggered delays */}
        <FadeMotionGroup 
          staggerDelay={0.1} 
          duration={0.7}
          direction="up"
          distance={60}
        >
          <Card className="p-6 mb-4 bg-[#141C2B] text-white">
            <h3 className="text-xl font-semibold mb-2">Staggered Card 1</h3>
            <p>This is the first card in a staggered animation sequence.</p>
          </Card>
          <Card className="p-6 mb-4 bg-[#141C2B] text-white">
            <h3 className="text-xl font-semibold mb-2">Staggered Card 2</h3>
            <p>This card appears shortly after the previous one.</p>
          </Card>
          <Card className="p-6 mb-4 bg-[#141C2B] text-white">
            <h3 className="text-xl font-semibold mb-2">Staggered Card 3</h3>
            <p>The staggered effect creates a smooth, cascading animation.</p>
          </Card>
        </FadeMotionGroup>

        {/* Different directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <FadeMotion direction="left" delay={0.4} distance={40}>
            <Card className="p-6 bg-[#141C2B] text-white">
              <h3 className="text-xl font-semibold mb-2">Fade from Right</h3>
              <p>This card fades in from the right side.</p>
            </Card>
          </FadeMotion>
          <FadeMotion direction="right" delay={0.6} distance={40}>
            <Card className="p-6 bg-[#141C2B] text-white">
              <h3 className="text-xl font-semibold mb-2">Fade from Left</h3>
              <p>This card fades in from the left side.</p>
            </Card>
          </FadeMotion>
        </div>
      </div>
    </section>
  );
};

export default FadeExample; 