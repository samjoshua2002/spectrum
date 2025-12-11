import { useState } from "react";
import { User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
  systemType: string;
  systemSize: string;
  image: string;
  category: "residential" | "commercial";
}

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

  const projects: Project[] = [
    {
      id: "1",
      title: "Taking a Family Home from High Bills to Energy Independent",
      client: "Dhanendrakumar",
      location: "Heggenegara, Bengaluru",
      description: "For this modern family home, we designed the perfect system to offset their electricity needs, effectively eliminating their monthly electricity bill.",
      systemType: "On-Grid Rooftop System",
      systemSize: "5kW",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "residential"
    },
    {
      id: "2",
      title: "The Perfect Start to a Solar Journey",
      client: "Amaragouda & Shankar Guru",
      location: "Jakkur, Bengaluru & Raichur",
      description: "We provided these homeowners with the ideal entry-level system, allowing them to start their transition to solar and benefit from government subsidies.",
      systemType: "On-Grid Rooftop System",
      systemSize: "3kW",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "residential"
    },
    {
      id: "3",
      title: "Industrial Solar Solution for Manufacturing",
      client: "Industrial Manufacturing Corp",
      location: "Industrial Park, Bangalore",
      description: "A comprehensive solar solution for a manufacturing facility, significantly reducing operational costs and carbon footprint.",
      systemType: "Commercial Rooftop System",
      systemSize: "150kW",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "commercial"
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Project Showcase Header */}
        <div className="text-center mb-12 fadeInUp">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Project Showcase</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            The right partnership technology can reinvent your energy generation and return on investment.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-3 rounded-lg font-semibold smooth-transition ${
                activeTab === "residential"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
              }`}
              data-testid="button-filter-residential"
            >
              Residential
            </Button>
            <Button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-3 rounded-lg font-semibold smooth-transition ${
                activeTab === "commercial"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
              }`}
              data-testid="button-filter-commercial"
            >
              Commercial
            </Button>
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="space-y-8 fadeInUp stagger-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover-lift smooth-transition">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="bg-gray-100 p-4 flex items-center justify-center">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src={project.image}
                      alt={`Solar installation project - ${project.title}`}
                      className="w-full h-full object-cover hover-scale smooth-transition"
                      data-testid={`img-project-${project.id}`}
                    />
                  </div>
                </div>
                {/* Project Details */}
                <div className="p-8 bg-white">
                  <h4 className="text-xl font-bold text-gray-800 mb-4" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-gray-600">
                      <User className="w-4 h-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Client:</span>
                        <span className="ml-1">{project.client}</span>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Location:</span>
                        <span className="ml-1">{project.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">System Type:</span>
                      <span className="font-semibold text-primary">{project.systemType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">System Size:</span>
                      <span className="font-semibold text-primary">{project.systemSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
