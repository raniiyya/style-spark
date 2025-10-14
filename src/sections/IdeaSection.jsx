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
              To break down creative barriers and inspire artists, designers, and creators of all levels 
              to explore styles they might never have considered. By combining random discovery with 
              personalized insights, we create a unique platform for creative growth and exploration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
