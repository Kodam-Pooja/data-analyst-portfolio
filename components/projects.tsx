"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Impact of Sales in Weather Conditions Dashboard",
      description:
        "Built an interactive dashboard analyzing how temperature and rainfall affect product-wise and regional sales trends. Detected seasonal peaks (+18% in Q4) and weather-related dips (-12% during heavy rainfall), enabling smarter inventory decisions.",
      impact: "Informed stock planning and weather-based promotions",
      achievements: [
        "18% seasonal peak identification",
        "12% weather impact analysis",
        "Multi-regional sales tracking",
      ],
      technologies: [
        "Python",
        "Power BI",
        "Pandas",
        "Statistical Analysis",
        "Data Visualization",
      ],
      category: "Dashboard Development",
      image: "/weather-sales-dashboard.png",
      github:
        "https://github.com/Poojitha-Kodam/Influence-of-sales-in-weather-conditions",
    },
    {
      title: "Shark Tank India Data Analysis",
      description:
        "Comprehensive analysis of investment patterns, shark preferences, and industry trends across multiple seasons. Visualized shark-wise and industry-wise investment trends, analyzed deal patterns and funding distribution.",
      impact:
        "Improved understanding of investor preferences for strategic pitch planning",
      achievements: [
        "Multi-season trend analysis",
        "Investor pattern recognition",
        "Industry-wise funding insights",
      ],
      technologies: [
        "Python",
        "Matplotlib",
        "Seaborn",
        "Pandas",
        "Data Mining",
      ],
      category: "Business Analytics",
      image: "/investment-analytics-dashboard.png",
      github: "https://github.com/Poojitha-Kodam/Shark-Tank-India-Analysis",
    },
    {
      title: "SuperStore Sales Analysis",
      description:
        "In-depth analysis of sales performance, discount strategies, and profit optimization across different categories and regions. Created comprehensive dashboards for business insights and loss identification.",
      impact:
        "Helped identify underperforming areas and optimized pricing and shipping strategies",
      achievements: [
        "Regional performance analysis",
        "Category-wise profit optimization",
        "Discount impact assessment",
      ],
      technologies: ["Python", "Power BI", "Excel", "Statistical Analysis"],
      category: "Business Analytics",
      image: "/superstore-sales-dashboard-dark.png",
      github: "https://github.com/Poojitha-Kodam/SuperStore-Sales-Analysis",
    },
  ];

  const categories = [
    "All",
    "Dashboard Development",
    "Business Analytics",
    "Business Intelligence",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Projects
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my data analysis projects that demonstrate practical
            application of statistical analysis, visualization, and business
            intelligence to solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                  <h4 className="text-blue-600 font-semibold text-sm mb-1">
                    Business Impact
                  </h4>
                  <p className="text-gray-700 text-sm">{project.impact}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-foreground font-semibold text-sm mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-foreground font-semibold text-sm mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
