// Index.tsx
import { useMemo } from "react";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import { Card, Page } from "@/components/Page";

const PDF_URL =
  "https://cdn.builder.io/o/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2Fdd81e04ee02140a29fbde17149213045?alt=media&token=ad511945-97c3-43d1-a9af-72557f8d578a&apiKey=d98f0891d6ae4a92bb1ee9f8bab25f39";

function PillsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="28" width="22" height="12" rx="6" fill="#60A5FA" />
      <rect x="36" y="20" width="22" height="12" rx="6" fill="#93C5FD" />
      <rect x="12" y="22" width="22" height="12" rx="6" fill="#BFDBFE" />
    </svg>
  );
}

export default function Index() {
  const services = useMemo(
    () => [
      {
        title: "Order Medicines/Drugs",
        body: "Browse and purchase genuine medicines.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2Fd099ea46a1954d38a530d668bd132751",
      },
      {
        title: "Upload Prescription",
        body: "Snap and upload prescriptions for fulfillment.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F605113fe95874e54a34c0f25bc679738",
      },
      {
        title: "Teleconsultations",
        body: "Secure video or chat with doctors & pharmacists.",
        img: "https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Diagnostic Tests",
        body: "Book lab tests with home/office sample pickup.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2Fdd33f3f6c33143239ae8e1bf0abe2408",
      },
      {
        title: "Wellness & Devices",
        body: "Thermometers, glucometers and health gadgets.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2Fd8cd6885b6354795be026976a67c2f76",
      },
      {
        title: "Vitamins & Supplements",
        body: "Daily essentials from trusted brands.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2Ff552eabb241c4ccaa5051c6b2e39ba88",
      },
      {
        title: "Fast Home Delivery",
        body: "Reliable same-day delivery in supported areas.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F3b8aa9f7dfa64cfe9a49fc919fd54ea0",
      },
      {
        title: "Pharmacist Support",
        body: "Get guidance on medicines and usage.",
        img: "https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F08fcfc1077ba44f4935abf9b521c6a91",
      },
    ],
    []
  );

  const growthTeam = [
    "Anthony Ezeoyili Jr.",
    "Nonso Udenwani",
    "Hadassah Esther",
    "Isifeh Kizito",
    "Onyeji Nneka",
    "Ugwu Augustine",
    "Pharm. Kenneth Abaeme",
    "Chuka Okeke",
    "Emekaizu Jennifer",
    "Dr. Arene Ebube Chinwe",
    "Ezeigbo Chidinma",
  ];

  const keyPartners = [
    "Hospital Management",
    "Pharmacy Stores",
    "Attending Physicians",
    "Doctors",
    "Pharmacists",
    "Healthcare Personnel",
  ];

  return (
    <div className="min-h-screen w-full bg-slate-100 py-6">
      <header className="no-print mx-auto mb-4 flex w-full max-w-[1200px] items-center justify-between px-3">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F701aeb98cabd4d7b97610fc0d6532d90?format=webp&width=800" 
            alt="Drugs.ng logo" 
            className="h-12 w-12 rounded object-contain drop-shadow-md" 
          />
          <div className="text-xl font-bold text-blue-700">Drugs.ng</div>
        </div>
        <DownloadPdfButton url={PDF_URL} />
      </header>

      {/* COVER */}
      <Page background="gradient" className="p-10">
        <div className="grid h-full grid-cols-12 gap-10">
          <div className="col-span-7 flex flex-col">
            <h1 className="text-6xl font-extrabold leading-[1.05] text-blue-700">
              Drugs.ng Company Profile
            </h1>
            <p className="mt-6 max-w-xl text-xl text-slate-700">
              Bringing healthcare closer to you. Africa&apos;s leading health-tech platform for
              e-pharmacy, teleconsultations, and diagnostics.
            </p>
            <div className="mt-auto grid grid-cols-3 gap-6">
              <Card>
                <div className="text-blue-600 font-semibold">E-pharmacy</div>
                <div className="text-slate-600">Order medicines &amp; health products</div>
              </Card>
              <Card>
                <div className="text-blue-600 font-semibold">Teleconsultations</div>
                <div className="text-slate-600">Talk to doctors &amp; pharmacists</div>
              </Card>
              <Card>
                <div className="text-blue-600 font-semibold">Diagnostics</div>
                <div className="text-slate-600">Book tests with home sample pickup</div>
              </Card>
            </div>
            <div className="mt-8 text-sm text-slate-600">
              Phone: 0700-700-3300 • Email: info@drugsng.com • Web: www.drugsng.com • Social: @DRUGSNG
            </div>
          </div>
          <div className="col-span-5 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2Fe78cd472267f4581b5ec2e060995a250"
              alt="Diverse professional doctors"
              className="absolute inset-0 h-full w-full rounded-3xl object-cover ring-1 ring-black/10"
            />
            <div className="absolute bottom-6 right-6">
              <div className="rounded-full bg-blue-600/90 px-4 py-2 text-sm text-white shadow">
                One stop for your health needs
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* ABOUT */}
      <Page className="p-10">
        <div className="grid h-full grid-cols-12 gap-10">
          <div className="col-span-7">
            <h2 className="text-4xl font-extrabold text-blue-700">About Drugs.ng</h2>
            <p className="mt-4 max-w-2xl text-slate-700">
              At Drugs.ng, we use technology to transform healthcare—improving outcomes, enhancing the
              care experience, and making quality care more accessible and affordable. Our platform
              offers e-pharmacy, teleconsultations, and online diagnostics, with fast home delivery
              across Africa.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Card>
                <div className="font-semibold">Mission</div>
                <p className="mt-2 text-slate-700">
                  Provide accessible, high-quality, and affordable healthcare using creative and
                  smarter technologies for everyone in Africa.
                </p>
              </Card>
              <Card>
                <div className="font-semibold">Vision</div>
                <p className="mt-2 text-slate-700">
                  Be the go-to platform for all healthcare needs—from online consultations and
                  diagnostics to doorstep delivery of medicines and products.
                </p>
              </Card>
              <Card>
                <div className="font-semibold">Team</div>
                <p className="mt-2 text-slate-700">
                  A multidisciplinary team of healthcare, technology, and data science experts driving
                  impact across Africa.
                </p>
              </Card>
              <Card>
                <div className="font-semibold">Partners</div>
                <p className="mt-2 text-slate-700">
                  We collaborate with hospitals, pharmacy stores, physicians, doctors, pharmacists,
                  and healthcare personnel.
                </p>
              </Card>
            </div>
            <Card className="mt-6">
              <div className="font-semibold">Contact</div>
              <p className="mt-2 text-slate-700">
                0700-700-3300 • info@drugsng.com • www.drugsng.com • Social: DRUGSNG
              </p>
            </Card>
          </div>
          <div className="col-span-5">
            <div className="text-right text-slate-500">African-owned health-technology company</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F0e8dfaa5447441c49818c76b54d2b68d"
              alt="Doctors"
              className="mt-4 h-[520px] w-full rounded-3xl object-cover ring-1 ring-black/10"
            />
          </div>
        </div>
      </Page>

      {/* PROBLEM & SOLUTION */}
      <Page background="gradient" className="p-10">
        <h2 className="text-4xl font-extrabold text-blue-700">The Problem &amp; Our Solution</h2>
        <div className="mt-6 grid grid-cols-2 gap-8">
          <Card className="overflow-hidden p-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F56848ad8f0f6409987f918adaddd40d8"
              alt="Healthcare challenges"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="text-lg font-semibold">The Opportunity (The Problem)</div>
              <p className="mt-2 text-slate-700">
                The healthcare industry in Africa has long suffered from transparency problems,
                including substandard services, fake and expired drugs, poor distribution chains,
                inadequate access to certified care personnel, and rising costs.
              </p>
            </div>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F39eaf0951bc24315afd4f869c3539a21"
              alt="Telemedicine and modern care"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="text-lg font-semibold">Our Solution</div>
              <p className="mt-2 text-slate-700">
                Drugs.ng is building an ecosystem that delivers reliable, accessible, and affordable
                care. Our app and website provide on-demand access to genuine medicines, healthcare
                products, tele-consultations, and online diagnostics with fast home delivery.
              </p>
            </div>
          </Card>
        </div>
      </Page>

      {/* CORE SERVICES */}
      <Page className="p-10">
        <div className="flex items-start justify-between">
          <h2 className="text-4xl font-extrabold text-blue-700">Core Services</h2>
          <div className="text-slate-500">We are your one-stop platform for all health needs</div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden">
              <img 
                src={s.img} 
                alt={s.title} 
                loading="lazy" 
                className="mb-4 h-36 w-full rounded-xl object-cover" 
              />
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-slate-700">{s.body}</p>
            </Card>
          ))}
        </div>
      </Page>

      {/* DISTRIBUTION CHANNELS */}
      <Page className="p-10">
        <div className="flex items-start justify-between">
          <h2 className="text-4xl font-extrabold text-blue-700">Distribution Channels</h2>
          <div className="text-slate-500">Multiple convenient ways to reach us</div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          {[
            {
              title: "Mobile App (Google Play &amp; App Store)",
              body:
                "Use our Android and iOS apps for the full experience—ordering, consultations, and tracking.",
            },
            {
              title: "Web Platform",
              body: "Access services on any browser at www.drugsng.com—no install required.",
            },
            {
              title: "WhatsApp Bot",
              body:
                "Place orders and get updates directly from WhatsApp—simple and familiar.",
            },
            {
              title: "Phone Orders &amp; Support",
              body:
                "Call 0700-700-3300 for orders, inquiries, and 24/7 support.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="mt-1 text-slate-700">{item.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Page>

      {/* WHY CHOOSE US */}
      <Page className="p-10">
        <div className="flex items-start justify-between">
          <h2 className="text-4xl font-extrabold text-blue-700">Why Choose Us</h2>
          <div className="text-slate-500">Reliable, accessible, and affordable healthcare</div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {[
            "Qualified Experts",
            "Quality Products",
            "24/7 Support",
            "Swift Response",
            "Clinical Resources",
            "Professional Execution",
          ].map((x) => (
            <Card key={x}>
              <div className="flex items-start gap-3">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mt-1 text-blue-600"
                >
                  <path 
                    d="M20 6 9 17l-5-5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
                <div>
                  <div className="font-semibold">{x}</div>
                  <p className="mt-1 text-slate-700">
                    We uphold this standard across our products and services.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Page>

      {/* TEAM &amp; PARTNERS */}
      <Page className="p-10">
        <div>
          <h2 className="text-4xl font-extrabold text-blue-700">Our Team &amp; Partners</h2>
          <div className="text-slate-500">Growth Team and key collaborators powering the ecosystem</div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-8">
          <div>
            <div className="text-lg font-semibold">Growth Team</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {growthTeam.map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold">Key Partners</div>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {keyPartners.map((name) => (
                <div 
                  key={name} 
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  <span className="text-slate-700">{name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-slate-500">For partnerships: info@drugsng.com</div>
          </div>
        </div>
      </Page>

      {/* THANK YOU */}
      <Page background="gradient" className="p-10">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Fd98f0891d6ae4a92bb1ee9f8bab25f39%2F701aeb98cabd4d7b97610fc0d6532d90?format=webp&width=800" 
            alt="Drugs.ng logo" 
            className="h-16 w-16 object-contain" 
          />
          <h2 className="mt-6 text-6xl font-extrabold text-blue-700">Thank You</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            We are dedicated to making healthcare reliable, accessible, and affordable for all
            Africans.
          </p>
          <div className="mt-10 text-sm text-slate-600">
            Phone: 0700-700-3300 • Email: info@drugsng.com • Web: www.drugsng.com • Social: @DRUGSNG
          </div>
        </div>
      </Page>

      <footer className="no-print mx-auto mt-6 w-full max-w-[1200px] px-3 text-center text-xs text-slate-500">
        © 2025 Drugs.ng — Company Profile
      </footer>
    </div>
  );
}