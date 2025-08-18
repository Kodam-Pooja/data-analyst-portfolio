import { BookOpen, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Passionate about transforming complex data into meaningful insights that drive business decisions. My
            journey combines strong technical skills with analytical thinking to solve real-world problems.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="absolute left-1.5 top-3 w-0.5 h-full bg-blue-200"></div>

                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-medium">2020 - 2024</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-600 mb-2">
                  Trinity College of Engineering and Technology, Karimnagar, JUTUH University
                </p>
                <p className="text-gray-600">
                  Specialized in Computer Science with focus on data structures, algorithms, and statistical analysis.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>

                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-medium">2018 - 2020</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Science</h4>
                <p className="text-gray-600 mb-2">B.N.N College, Mumbai University</p>
                <p className="text-gray-600">Foundation in mathematics, statistics, and scientific methodology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
