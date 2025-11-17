import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-secondary text-balance">
            Privacy Policy
          </h1>
          <p className="text-foreground/60 mb-12">Last updated: November 2025</p>

          <Card className="bg-card border-secondary/20 p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">1. Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Name and email address when you contact us</li>
                <li>Information submitted through forms on our website</li>
                <li>Comments and feedback you provide</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">2. Automatically Collected Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">3. Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold 
                certain information. Cookies are files with small amount of data which may include an 
                anonymous unique identifier. You can instruct your browser to refuse all cookies or to 
                indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">4. Use of Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">5. Third-Party Services</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website contains links to third-party websites and services, including Amazon. These 
                third parties have their own privacy policies, and we are not responsible for their practices. 
                We encourage you to read their privacy policies before providing any information to them.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">6. Amazon Affiliate Program</h2>
              <p className="text-foreground/80 leading-relaxed">
                As an Amazon Associate, we earn from qualifying purchases. When you click on affiliate links 
                and make a purchase, Amazon may collect information about your transaction. Please refer to 
                Amazon's Privacy Policy for more information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">7. Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect the security of 
                your personal information. However, no method of transmission over the Internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">8. Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to our processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">9. Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">10. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@techorahome.com
              </p>
            </section>
          </Card>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
