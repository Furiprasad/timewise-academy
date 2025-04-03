
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-yellow-300 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Your Success Is Our <span className="text-blue-800">TIME</span>
            </h1>
            <p className="text-blue-900 text-lg md:text-xl mb-8">
              Expert coaching for Banks, SSC, Railways, Insurance and other competitive exams. Start your journey to success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                Explore Courses
              </Button>
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-100 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-white rounded-full opacity-50"></div>
              <img 
                src="/placeholder.svg" 
                alt="Students studying" 
                className="relative z-10 rounded-lg shadow-xl max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
