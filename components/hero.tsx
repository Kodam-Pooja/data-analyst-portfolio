"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, BarChart3, TrendingUp, Database } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-blue-600 font-medium">Data Analyst</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Poojitha</span>...
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Data Analyst skilled in Python, SQL, and Power BI, with experience transforming raw data into actionable
              insights through dashboards and statistical analysis. Strong foundation in machine learning and passion
              for solving business problems with data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto my-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-gray-600">Tools Mastered</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
