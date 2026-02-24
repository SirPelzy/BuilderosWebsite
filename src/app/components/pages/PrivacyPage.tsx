import React from "react";
import { LegalPageLayout } from "./LegalPage";

export function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="19th February, 2026"
      preamble={
        <>
          <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>
            Trust is our product, and that begins with your data.
          </span>
          <br />
          <br />
          At BuilderOS, our mission to eliminate construction fraud requires us to
          capture highly precise and sensitive data — including biometric facial
          vectors, government-issued IDs, and GPS location coordinates. We do not
          take this responsibility lightly.
          <br />
          <br />
          This Privacy Policy explains exactly what information we collect from
          Project Owners, Site Supervisors, and Construction Workers. It details
          why we need this data to provide our "Proof of Presence" services, how
          we encrypt and store it securely, and the strict limits on how it is
          shared with our licensed identity and financial partners. BuilderOS is
          fundamentally committed to your privacy: we use your data solely to
          secure your construction projects and ensure accurate wage disbursement.
          We will never sell your personal or biometric information.
        </>
      }
      sections={[
        {
          num: "1",
          title: "Information We Collect",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                To provide our trust-based platform, we collect the following:
              </p>
              {[
                {
                  label: "Personal Information",
                  desc: "Name, email, phone number, and government-issued ID numbers (e.g., NIN) for KYC purposes.",
                },
                {
                  label: "Financial Information",
                  desc: "Bank account details for payouts and virtual account records. (Credit card data for SaaS fees is handled entirely by Paddle; we do not store it).",
                },
                {
                  label: "Biometric Data",
                  desc: 'Face scans and "Face Vectors" of supervisors and workers used strictly for daily liveness checks and attendance matching.',
                },
                {
                  label: "Location Data",
                  desc: "Precise GPS coordinates (Geofencing) captured from the supervisor's mobile device when opening/closing sites and taking attendance.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          num: "2",
          title: "How We Use Your Information",
          content: (
            <div className="flex flex-col gap-3">
              {[
                'To verify the identity of users and prevent "ghost worker" fraud.',
                "To calculate and automate accurate wage disbursements.",
                "To ensure construction activities are occurring at the verified legal coordinates (Survey Plan).",
                "To communicate project updates to the Project Owner.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ),
        },
        {
          num: "3",
          title: "How We Share Your Information",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <span
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontWeight: 600,
                  }}
                >
                  We do not sell your data.
                </span>{" "}
                We share data only with essential third-party infrastructure
                providers:
              </p>
              {[
                {
                  label: "Identity Partners (Dojah, Smile ID)",
                  desc: "For verifying government IDs and processing face matches.",
                },
                {
                  label: "Payment Partners (Nomba, Paddle)",
                  desc: "To create virtual accounts and process payouts/subscriptions.",
                },
                {
                  label: "Cloud Providers (AWS, Supabase)",
                  desc: "For secure data hosting.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          num: "4",
          title: "Data Retention and Security",
          content: (
            <p>
              Biometric templates are encrypted. We retain worker attendance
              records and site photos for the duration of the project and a
              mandated period thereafter for compliance and dispute resolution.
              Users may request account deletion, subject to financial data
              retention laws.
            </p>
          ),
        },
      ]}
      relatedLinks={[
        { label: "Terms of Service", to: "/terms" },
        { label: "Refund & Withdrawal Policy", to: "/refund" },
      ]}
    />
  );
}
