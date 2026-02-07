import { Layout } from "@/components/layout/Layout";
const experience = [{
  company: "Design Studio",
  role: "Creative Director",
  period: "2022 — Present"
}, {
  company: "Tech Company",
  role: "Senior Designer",
  period: "2019 — 2022"
}, {
  company: "Agency Name",
  role: "Brand Designer",
  period: "2016 — 2019"
}, {
  company: "Startup",
  role: "Product Designer",
  period: "2014 — 2016"
}];
const recognition = [{
  title: "Awwwards Site of the Day",
  year: "2024"
}, {
  title: "D&AD Wood Pencil",
  year: "2023"
}, {
  title: "Communication Arts Award",
  year: "2023"
}, {
  title: "CSS Design Awards",
  year: "2022"
}];
const speaking = [{
  event: "Design Conference",
  location: "New York",
  year: "2024"
}, {
  event: "Brand Summit",
  location: "London",
  year: "2023"
}, {
  event: "Creative Mornings",
  location: "Los Angeles",
  year: "2023"
}];
const clients = ["Apple", "Google", "Spotify", "Nike", "Airbnb", "Stripe", "Notion", "Figma", "Linear", "Vercel", "Pitch", "Framer"];
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
                {/* Experience */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">Work</h3>
                  <div className="space-y-5">
                    {experience.map((item, index) => <div key={index}>
                        <p className="text-sm font-medium text-black uppercase tracking-wide">{item.company}</p>
                        <p className="text-sm text-gray-500">
                          {item.role}
                        </p>
                      </div>)}
                  </div>
                </div>

                {/* Recognition */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">Jury</h3>
                  <div className="space-y-2">
                    {recognition.map((item, index) => <p key={index} className="text-sm text-gray-600">{item.title}</p>)}
                  </div>
                </div>

                {/* Speaking */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">Speaker</h3>
                  <div className="space-y-2">
                    {speaking.map((item, index) => <p key={index} className="text-sm text-gray-600">
                        {item.event} ({item.location})
                      </p>)}
                  </div>
                </div>
              </div>

              {/* Right Column - Bio */}
              <div className="lg:col-span-8">
                <div className="max-w-2xl">
                  <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
                    For over a decade, I've been helping startups and established companies 
                    tell their stories through design. I believe that great brands are built 
                    on clarity—knowing who you are, who you serve, and what you stand for.
                  </p>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    My approach is rooted in strategy, but expressed through craft. I start 
                    every project by asking hard questions: What's the real problem we're 
                    solving? What does success look like? Only after understanding the 
                    fundamentals do I move into visual exploration.
                  </p>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    I've had the privilege of working with companies at every stage—from 
                    pre-launch startups finding their voice to Fortune 500 companies 
                    reimagining their visual identity. Each project teaches me something 
                    new about the power of design to shape perception and drive action.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    I'm currently available for select projects and consulting engagements. 
                    If you're working on something interesting, I'd love to hear about it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 md:py-24 bg-white border-t border-gray-200">
          <div className="container">
            <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-10">Select Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map(client => <div key={client} className="text-base font-medium text-gray-600 hover:text-black transition-colors">
                  {client}
                </div>)}
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default About;