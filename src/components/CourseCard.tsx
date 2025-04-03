
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CourseCard = ({ title, description, icon }: CourseCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg overflow-hidden border-2 border-gray-100">
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-900"></div>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-blue-900 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
