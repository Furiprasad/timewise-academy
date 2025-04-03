
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    position: "SBI PO 2023",
    content: "TIME Institute's structured approach helped me crack SBI PO exam. The faculty was very supportive and the mock tests were extremely useful.",
    initials: "PS"
  },
  {
    name: "Rahul Kumar",
    position: "SSC CGL 2022",
    content: "The study material and doubt clearing sessions at TIME were excellent. I owe my success in SSC CGL to their dedicated team.",
    initials: "RK"
  },
  {
    name: "Ananya Patel",
    position: "RRB Officer 2023",
    content: "The specialized coaching for Railway exams at TIME Institute gave me the edge I needed. Their strategy sessions were game-changers.",
    initials: "AP"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students who achieved their goals with our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 bg-yellow-300 text-blue-900">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
