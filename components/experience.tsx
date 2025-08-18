import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Currently seeking opportunities to apply my data analysis skills in
            a professional setting while continuously building my expertise
            through personal projects and certifications.
          </p>
        </div>

        <div className="space-y-12">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="absolute left-1.5 top-3 w-0.5 h-20 bg-blue-200"></div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Data Analyst</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Seeking Opportunities
                </div>
              </div>
              <p className="text-gray-600 mt-2">Hyderabad, Telangana</p>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500 text-sm">Current</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                Current
              </span>
            </div>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                Actively seeking data analyst opportunities to apply analytical
                skills in real-world business scenarios
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                Continuously updating skills through personal projects and
                certifications
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      Deloitte Data Analytics Certification
                    </h4>
                    <span className="text-blue-600 font-medium">2024</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">Deloitte</p>
                  <p className="text-sm text-gray-600">
                    Self-paced job simulation
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Comprehensive certification covering data analytics
                    methodologies and business applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      Code Unnati
                    </h4>
                    <span className="text-blue-600 font-medium">2024</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">
                    Course Completion
                  </p>
                  <p className="text-sm text-gray-700">
                    Advanced programming and data analysis techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      Edunet Foundation Advance Course
                    </h4>
                    <span className="text-blue-600 font-medium">2024</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">
                    Edunet Foundation
                  </p>
                  <p className="text-sm text-gray-600">Course Completion</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Foundation course in data science and analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
