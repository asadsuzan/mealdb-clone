import React from "react";

const About = () => {
  return (
    <section className="">
      <h1 className="h-100 py-5 text-center">About Us</h1>
      <div className="container d-md-flex  jsutify-content-between  ">
        <div className="about-content w-50 mx-auto ">
          <h3>Welcome to our TheMealDB</h3>
          <p>
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or "organic" sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal.
          </p>
          <p>
            Dynamically embrace diverse customer service and installed base
            paradigms. Credibly seize enterprise-wide experiences for end-to-end
            data. Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </p>
        </div>
        <div className="w-50 mx-auto">
          <img
            className="img-fluid w-100"
            src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-us.jpg&w=1080&q=75"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
