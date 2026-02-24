import { createBrowserRouter } from "react-router";
import { Layout } from "./components/landing/Layout";
import { LandingPage } from "./components/landing/LandingPage";
import { AboutPage } from "./components/pages/AboutPage";
import { BlogPage } from "./components/pages/BlogPage";
import { ForSponsorsPage } from "./components/pages/ForSponsorsPage";
import { ForContractorsPage } from "./components/pages/ForContractorsPage";
import { PricingPage } from "./components/pages/PricingPage";
import { TermsPage } from "./components/pages/TermsPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";
import { RefundPage } from "./components/pages/RefundPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";
import { BlogPostPage } from "./components/pages/BlogPostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "about", Component: AboutPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostPage },
      { path: "for-sponsors", Component: ForSponsorsPage },
      { path: "for-contractors", Component: ForContractorsPage },
      { path: "pricing", Component: PricingPage },
      { path: "terms", Component: TermsPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "refund", Component: RefundPage },
    ],
  },
  // Auth pages outside layout (no navbar/footer)
  { path: "/login", Component: LoginPage },
  { path: "/signup", Component: SignupPage },
]);