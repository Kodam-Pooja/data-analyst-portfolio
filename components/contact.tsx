"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pkodam93@gmail.com",
      href: "mailto:pkodam93@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "08179323635",
      href: "tel:08179323635",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Poojitha-Kodam/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/poojithakodam93",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Let's Connect</h2>
          <p className="font-body text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing data analysis opportunities, collaborations, or just connecting with
            fellow data enthusiasts. Feel free to reach out!
          </p>
        </div>

        <div className="mb-16">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg"
            asChild
          >
            <a href="mailto:pkodam93@gmail.com">Get In Touch</a>
          </Button>
        </div>

        <div className="text-left max-w-2xl mx-auto">
          <h3 className="font-heading font-semibold text-2xl mb-8 text-center">Get in Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon
              const content = (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg mb-3">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="font-body font-medium text-white mb-1">{item.label}</div>
                  <div className="font-body text-sm text-slate-300">{item.value}</div>
                </div>
              )

              return item.href ? (
                <a key={index} href={item.href} className="block hover:bg-slate-800/50 rounded-lg transition-colors">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              )
            })}
          </div>

          <div className="text-center">
            <h4 className="font-heading font-semibold text-lg mb-4">Follow Me</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-slate-600 hover:bg-slate-800 bg-transparent"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
