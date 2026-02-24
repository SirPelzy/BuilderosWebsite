import React from "react";
import { LegalPageLayout } from "./LegalPage";

export function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="19th February, 2026"
      preamble={
        <>
          Welcome to BuilderOS. We are building the trust layer for construction
          in Africa, empowering project owners to manage their sites, verify
          their workforce, and disburse funds with absolute transparency. This
          Terms of Service agreement ("Terms") is a binding legal contract
          between you and Builder Operating System Limited. It governs your
          access to and use of the BuilderOS web dashboard, mobile supervisor
          applications, and all associated financial routing tools provided at
          builderos.live.
          <br />
          <br />
          Whether you are a Project Owner funding a build from the Diaspora, or a
          Site Supervisor logging daily milestones on the ground, these Terms
          outline your responsibilities, the rules of our platform, and how we
          resolve disputes. By registering an account, funding a project wallet,
          or using our app to capture site data, you agree to be bound by these
          rules. Please read them carefully.
        </>
      }
      sections={[
        {
          num: "1",
          title: "Acceptance of Terms",
          content: (
            <p>
              By accessing or using the Builder Operating System Limited
              ("BuilderOS", "we", "our", or "us") website at builderos.live and
              our associated mobile applications, you agree to be bound by these
              Terms of Service. If you do not agree, you may not use our
              platform.
            </p>
          ),
        },
        {
          num: "2",
          title: "Description of Service",
          content: (
            <p>
              BuilderOS provides a cloud-based construction management and
              workforce verification platform. Our services include project
              tracking, geofenced attendance verification, biometric identity
              checks for workers, and the facilitation of project fund
              disbursements via third-party financial partners.
            </p>
          ),
        },
        {
          num: "3",
          title: "Account Registration and Roles",
          content: (
            <div className="flex flex-col gap-4">
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Project Owners (Clients)
                </p>
                <p>
                  Must provide accurate information to create a project, set up a
                  virtual wallet, and invite supervisors.
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Supervisors / Agents
                </p>
                <p>
                  Must submit to identity verification (KYC) and are responsible
                  for accurately scanning workers and capturing site conditions.
                  Falsifying biometric or location data is grounds for immediate
                  account termination.
                </p>
              </div>
            </div>
          ),
        },
        {
          num: "4",
          title: "Fees and Payments",
          content: (
            <div className="flex flex-col gap-4">
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Software Fees
                </p>
                <p>
                  Access to the BuilderOS dashboard requires a one-time Project
                  Setup Fee ($50) and a monthly subscription fee ($25). These
                  fees are processed by our Merchant of Record (Paddle) and are
                  subject to their terms.
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Project Wallets
                </p>
                <p>
                  To pay workers and purchase materials, Project Owners fund a
                  dedicated virtual account. This is facilitated by our licensed
                  payment partner (Nomba).
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Transaction Fees
                </p>
                <p>
                  BuilderOS charges a verification and processing fee (e.g.
                  ₦100) on funds disbursed from the Project Wallet to workers or
                  vendors. We do not charge fees for funding the wallet.
                </p>
              </div>
            </div>
          ),
        },
        {
          num: "5",
          title: "Disclaimers",
          content: (
            <div className="flex flex-col gap-4">
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Not a Bank
                </p>
                <p>
                  BuilderOS is a technology company, not a bank. All wallet funds
                  are held and processed by licensed financial institutions.
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  Not a Construction Company
                </p>
                <p>
                  We do not build houses, supply materials, or employ
                  construction workers. We provide the software to manage them.
                  We are not liable for construction defects, delays, or physical
                  site accidents.
                </p>
              </div>
            </div>
          ),
        },
        {
          num: "6",
          title: "Limitation of Liability",
          content: (
            <p>
              To the maximum extent permitted by law, BuilderOS shall not be
              liable for any indirect, incidental, or consequential damages
              resulting from the use or inability to use the platform, including
              but not limited to lost funds due to user error or compromised
              account credentials.
            </p>
          ),
        },
      ]}
      relatedLinks={[
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Refund & Withdrawal Policy", to: "/refund" },
      ]}
    />
  );
}
