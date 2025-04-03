
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-yellow-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 91234 56789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@timeinstitute.com</p>
                  <p className="text-gray-600">admissions@timeinstitute.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Main Office</h4>
                  <p className="text-gray-600">
                    123 Main Road, Dwarakanagar,<br />
                    Visakhapatnam, Andhra Pradesh - 530016
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday to Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
                  <Input id="name" placeholder="Your name" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Your phone number" className="border-gray-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
                <Input id="email" placeholder="Your email address" className="border-gray-300" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="course" className="text-gray-700 font-medium">Interested Course</label>
                <select id="course" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a course</option>
                  <option value="banking">Banking Exams</option>
                  <option value="ssc">SSC Exams</option>
                  <option value="railway">Railway Exams</option>
                  <option value="insurance">Insurance Exams</option>
                  <option value="other">Other Competitive Exams</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  className="border-gray-300 min-h-[120px]" 
                />
              </div>
              
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
