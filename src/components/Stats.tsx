
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-12 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">5000+</h3>
            <p className="text-blue-100">Successful Students</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">20+</h3>
            <p className="text-blue-100">Specialized Courses</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">15+</h3>
            <p className="text-blue-100">Years Experience</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">50+</h3>
            <p className="text-blue-100">Expert Faculties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
