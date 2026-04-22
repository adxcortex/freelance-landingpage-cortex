import { Code2, Globe, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary transition-colors">
                <Code2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {siteConfig.name.split(' ')[0]}<span className="text-primary">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Building premium web experiences that convert. Partner with me to elevate your digital presence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#work" className="text-gray-400 hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#process" className="text-gray-400 hover:text-white transition-colors">Process</Link></li>
              <li><Link href="#calculator" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
            <div className="flex gap-4">
              <a href={`mailto:${siteConfig.contact.email}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
