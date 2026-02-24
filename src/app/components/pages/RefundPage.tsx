import React from "react";
import { LegalPageLayout } from "./LegalPage";

export function RefundPage() {
  return (
    <LegalPageLayout
      title="Refund & Withdrawal Policy"
      lastUpdated="19th February, 2026"
      preamble={
        <>
          <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>
            Total clarity on your capital.
          </span>
          <br />
          <br />
          BuilderOS operates a hybrid financial model. We strictly separate the
          cost of our software platform from the capital you deposit to actually
          build your project. Because we act as the gatekeeper for your
          construction funds, we want you to have complete peace of mind
          regarding how your money moves and when it can be returned.
          <br />
          <br />
          This Refund and Withdrawal Policy clearly outlines the billing
          structure for our software (SaaS) subscriptions and setup fees, which
          are inherently non-refundable. More importantly, it explains your
          absolute right to withdraw any unspent construction capital from your
          dedicated BuilderOS Project Wallet at any time. Read on to understand
          the mechanics of wallet funding, our fee structures on successful
          payouts, and our policies on completed transactions.
        </>
      }
      sections={[
        {
          num: "1",
          title: "Software SaaS Fees",
          content: (
            <div className="flex flex-col gap-4">
              <p
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                Processed via Paddle
              </p>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    Setup Fee
                  </p>
                  <span
                    style={{
                      color: "var(--bos-text-1)",
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                  >
                    $50
                  </span>
                </div>
                <p>
                  The one-time project setup fee covers administrative KYC,
                  wallet provisioning, and coordinate mapping. It is
                  non-refundable once the project dashboard has been generated.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    Monthly Subscription
                  </p>
                  <span
                    style={{
                      color: "var(--bos-text-1)",
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                  >
                    $30/mo
                  </span>
                </div>
                <p>
                  Subscriptions are billed month-to-month. You may cancel your
                  subscription at any time to prevent future billing. We do not
                  provide prorated refunds for partial months used.
                </p>
              </div>
            </div>
          ),
        },
        {
          num: "2",
          title: "Project Wallet Funds",
          content: (
            <div className="flex flex-col gap-4">
              <p
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                Processed via Nomba
              </p>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(16,185,129,0.04)",
                  border: "1px solid rgba(16,185,129,0.1)",
                }}
              >
                <p style={{ color: "#34D399", fontWeight: 600 }}>
                  💰 Your Money is Yours
                </p>
                <p className="mt-2">
                  Funds deposited into your BuilderOS Project Wallet are your
                  property, intended for your project's labor and materials.
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 600,
                  }}
                >
                  Project Cancellation / Withdrawal
                </p>
                <p>
                  If you pause or cancel your building project, you may withdraw
                  the unspent balance of your Project Wallet back to your
                  originating bank account at any time.
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 600,
                  }}
                >
                  Withdrawal Fees
                </p>
                <p>
                  BuilderOS does not charge a penalty for withdrawing your
                  unspent project capital. Standard bank transfer network fees
                  may apply, but we do not add a markup.
                </p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(245,158,11,0.04)",
                  border: "1px solid rgba(245,158,11,0.1)",
                }}
              >
                <p style={{ color: "#F59E0B", fontWeight: 600 }}>
                  ⚠️ Disbursed Funds
                </p>
                <p className="mt-2">
                  Once funds have been released to a verified worker or vendor
                  based on successful biometric and location checks, those
                  specific transactions are final and non-refundable.
                </p>
              </div>
            </div>
          ),
        },
        {
          num: "3",
          title: "Dispute Resolution",
          content: (
            <p>
              If a Project Owner suspects fraudulent scanning by a supervisor,
              they must dispute the daily muster report within 24 hours before
              the automated payout is triggered. Once payouts are executed to
              workers' bank accounts, BuilderOS cannot reverse the transaction.
            </p>
          ),
        },
      ]}
      relatedLinks={[
        { label: "Terms of Service", to: "/terms" },
        { label: "Privacy Policy", to: "/privacy" },
      ]}
    />
  );
}