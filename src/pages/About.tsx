import { Layout } from "@/components/layout/Layout";
const services = [{
  name: "AI Agents",
  description: "Custom intelligent assistants"
}, {
  name: "Workflow Automation",
  description: "n8n, Make, Zapier integrations"
}, {
  name: "Process Optimization",
  description: "End-to-end automation solutions"
}, {
  name: "AI Consulting",
  description: "Strategy & implementation"
}];
const technologies = [{
  name: "n8n",
}, {
  name: "OpenAI / Claude"
}, {
  name: "LangChain"
}, {
  name: "Make / Zapier"
}];
const achievements = [{
  event: "AI Automation Summit",
  location: "Paris",
  year: "2025"
}, {
  event: "No-Code Conference",
  location: "Berlin",
  year: "2024"
}, {
  event: "Tech Meetup France",
  location: "Lyon",
  year: "2024"
}];
const clients = ["TechStartup", "E-commerce Co", "SaaS Platform", "Marketing Agency", "FinTech", "HealthTech"];
const About = () => {
  return <Layout variant="light">
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
          <div className="container">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black leading-[1.1] tracking-[-0.02em] max-w-6xl">We are a France based agency changing the horizons. Our career spans over years in the industry building products, digital experiences and brands that play meaningful roles in people's lives.</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24 md:pb-32 bg-white">
          <div className="container">
            <div className="w-full h-px bg-gray-300 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              {/* Left Column - Lists */}
              <div className="lg:col-span-4 space-y-14">
                {/* Services */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">Services</h3>
                  <div className="space-y-5">
                    {services.map((item, index) => <div key={index}>
                        <p className="text-sm font-medium text-black uppercase tracking-wide">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>)}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">Tech Stack</h3>
                  <div className="space-y-2">
                    {technologies.map((item, index) => <p key={index} className="text-sm text-gray-600">{item.name}</p>)}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">Events</h3>
                  <div className="space-y-2">
                    {achievements.map((item, index) => <p key={index} className="text-sm text-gray-600">
                        {item.event} ({item.location})
                      </p>)}
                  </div>
                </div>
              </div>

              {/* Right Column - Bio */}
              <div className="lg:col-span-8">
                <div className="max-w-2xl">
                  <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
                    We're Synaptics—a young, ambitious team passionate about harnessing the power 
                    of AI to transform how businesses operate. We build intelligent agents and 
                    seamless automations that free you to focus on what truly matters.
                  </p>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Our approach is hands-on and collaborative. We start by understanding your 
                    unique workflows and pain points, then design custom solutions using cutting-edge 
                    tools like n8n, Make, and advanced AI models. No cookie-cutter solutions—every 
                    automation is tailored to your specific needs.
                  </p>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Founded in 2024, we've quickly built a reputation for delivering results. 
                    From streamlining customer support with AI chatbots to automating complex 
                    data pipelines, we've helped startups and growing companies save countless 
                    hours and scale faster than they thought possible.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We're currently taking on new projects and love tackling interesting challenges. 
                    If you're ready to bring AI into your workflow, let's talk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default About;