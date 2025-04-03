
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="bg-yellow-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Ready to Start Your Journey to Success?</h2>
            <p className="text-blue-800">Join TIME Institute today and take the first step towards your dream career.</p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-6">
              Enroll Now
            </Button>
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-100 px-6 py-6">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
