
import { Building2, Train, Briefcase, Shield } from 'lucide-react';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    {
      title: 'Banking Exams',
      description: 'Comprehensive preparation for SBI, IBPS, RBI and other banking exams with mock tests and expert guidance.',
      icon: <Building2 className="w-6 h-6 text-blue-900" />
    },
    {
      title: 'SSC Exams',
      description: 'Complete coaching for all Staff Selection Commission exams including CGL, CHSL, MTS and more.',
      icon: <Briefcase className="w-6 h-6 text-blue-900" />
    },
    {
      title: 'Railway Exams',
      description: 'Specialized training for RRB, NTPC, Group D and all other railway recruitment examinations.',
      icon: <Train className="w-6 h-6 text-blue-900" />
    },
    {
      title: 'Insurance Exams',
      description: 'Expert coaching for LIC, GIC and other insurance sector examinations with proven success strategies.',
      icon: <Shield className="w-6 h-6 text-blue-900" />
    }
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer specialized coaching programs designed to help you excel in various competitive examinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
