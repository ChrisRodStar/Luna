import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  type: "Career Path" | "Course";
  technologies: string[];
  isComingSoon?: boolean;
  stepNumber?: number;
}

export default function CourseCard({ 
  title, 
  description, 
  type, 
  technologies, 
  isComingSoon = false,
  stepNumber
}: CourseCardProps) {
  return (
    <Card className={`
      group cursor-pointer transition-all duration-300 ease-in-out
      hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
      active:scale-[0.98] active:shadow-md
      ${isComingSoon ? 'opacity-75' : ''}
      min-h-[280px] sm:min-h-[320px] flex flex-col
      touch-manipulation
      min-w-0 w-full
    `}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {stepNumber && (
              <div className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
                {stepNumber}
              </div>
            )}
            <Badge 
              variant={type === "Career Path" ? "default" : "secondary"}
              className={`
                text-xs font-medium px-3 py-1
                ${type === "Career Path" 
                  ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }
              `}
            >
              {type}
            </Badge>
          </div>
          {isComingSoon && (
            <Badge variant="outline" className="text-xs text-amber-600 border-amber-300">
              Coming Soon
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between">
        <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </CardDescription>
        
        {/* Technology Icons/Labels */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}