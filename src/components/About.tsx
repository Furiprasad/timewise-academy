
import { MapPin, Clock, Trophy, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Trophy className="h-10 w-10 text-blue-900" />,
      title: "Expert Faculty",
      description: "Learn from experienced educators with proven success records in competitive exams."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-900" />,
      title: "Small Batch Sizes",
      description: "Personalized attention with limited students per batch for better learning outcomes."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-900" />,
      title: "Flexible Timings",
      description: "Multiple batches to accommodate working professionals and students."
    }
  ];

  return (
    <section id="about" className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About TIME Institute</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Triumphant Institute of Management Education (T.I.M.E.) is a leading institute providing coaching for competitive exams.
            With our experience and dedicated approach, we help students achieve their career goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Locations</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-900 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">Dwarakanagar Branch</h4>
                <p className="text-gray-600">123 Main Road, Dwarakanagar, Visakhapatnam - 530016</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-900 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">NAD Branch</h4>
                <p className="text-gray-600">45 College Road, NAD Junction, Visakhapatnam - 530027</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-900 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">Gajuwaka Branch</h4>
                <p className="text-gray-600">78 Market Street, Gajuwaka, Visakhapatnam - 530026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
