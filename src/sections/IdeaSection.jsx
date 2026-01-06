import React from 'react';

const IdeaSection = () => {
  return (
    <section id="idea" className="section-padding bg-cream-50">
      <div className="container-luxury text-center">
        <div className="mb-16">
          <h2 className="heading-luxury text-5xl md:text-6xl mb-6">
            THE MISSION
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated">
            <p className="body-luxury text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              This project was created to change the way we explore personal style online. Instead of telling users what to wear or where they fit, the platform opens space for curiosity, play, and reflection. Through interactive experiences and visual narratives, it helps users connect with fashion on a deeper level — discovering a style that feels personal, intentional, and truly their own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
