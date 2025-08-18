import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, BarChart3, Database, Users, Brain } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Skills & Expertise</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, from data collection and cleaning to advanced statistical
            analysis and compelling data visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Programming & Tools Card */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-heading text-blue-900">
                <Code2 className="h-6 w-6 text-blue-600" />
                Programming & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "Power BI",
                  "Excel",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Matplotlib",
                  "Seaborn",
                  "Jupyter Notebook",
                  "VS Code",
                  "PyCharm",
                ].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Analysis Card */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-heading text-blue-900">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                Data Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Cleaning",
                  "Exploratory Data Analysis",
                  "Statistical Analysis",
                  "Data Visualization",
                  "Dashboard Creation",
                  "Machine Learning",
                  "Data Mining",
                ].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analytics Tools Card */}
          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-heading text-purple-900">
                <Database className="h-6 w-6 text-purple-600" />
                Analytics Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Excel", "VLOOKUP", "PivotTables", "Tableau", "Git", "GitHub"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills Card */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-heading text-green-900">
                <Users className="h-6 w-6 text-green-600" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Attention to Detail",
                  "Collaboration",
                  "Presentation",
                  "Critical Thinking",
                  "Business Acumen",
                ].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Advanced</h4>
              <p className="text-muted-foreground text-sm">Python, SQL, Excel, Power BI</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Intermediate</h4>
              <p className="text-muted-foreground text-sm">Machine Learning, Tableau, R</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Developing</h4>
              <p className="text-muted-foreground text-sm">Advanced Statistics, Big Data</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-heading">
              <Brain className="h-6 w-6 text-primary" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-body font-semibold text-foreground">English</div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fluent</span>
              </div>
              <div className="text-center">
                <div className="font-body font-semibold text-foreground">Hindi</div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Intermediate
                </span>
              </div>
              <div className="text-center">
                <div className="font-body font-semibold text-foreground">Telugu</div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Native</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
