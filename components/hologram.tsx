"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Type declarations for global objects
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    _fbq: any;
    gtag: any;
  }
}

const HologramPage = () => {
  useEffect(() => {
    // Only run on client-side to avoid hydration mismatch
    if (typeof window === "undefined") return;

    // Google Analytics
    const loadGoogleAnalytics = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-GRQNNES08Z");
    };

    // Facebook Pixel
    const loadFacebookPixel = () => {
      // Initialize Facebook Pixel if it exists
      if (window.fbq) {
        window.fbq("init", "1461098068042674");
        window.fbq("track", "PageView");
      }
    };

    loadGoogleAnalytics();
    loadFacebookPixel();
  }, []);

  return (
    <>
      <Head>
        <title>Orgalaser Group of Companies</title>
        <meta name="description" content="Pioneer of Production based Laser Cutting, CNC & Manufacturing Hologram Labels in Sri Lanka" />
        <meta name="keywords" content="Laser Cutting, CNC, Hologram Labels, Digital Printing, Wedding Invitations, Orgalaser Group, Orgalaser Hologram Pvt. Ltd., Orgalaser Cutting Wedding Cards & Graphic Items Pvt. Ltd." />
        <meta name="author" content="Orgalaser Group" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
        suppressHydrationWarning
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo">
            <img src="/img/logo.png" alt="Orgalaser Group Logo" />
          </Link>
          <nav id="navmenu" className="navmenu" suppressHydrationWarning>
            <ul>
              <li>
                <Link href="#hero">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <a className="btn-getstarted" href="#contact">
            Contact Us
          </a>
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            suppressHydrationWarning
          ></i>
        </div>
      </header>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Hologram Labels</h1>
                  <p className="mb-0">
                    Pioneering in Hologram Security in Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link href="/#hero">Home</Link>
                </li>
                <li className="current">Hologram Labels</li>
              </ol>
            </div>
          </nav>
        </div>

        {/* Portfolio Details Section */}
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  speed={600}
                  autoplay={{
                    delay: 5000,
                  }}
                  slidesPerView="auto"
                  pagination={{
                    clickable: true,
                  }}
                  className="portfolio-details-slider"
                >
                  {[...Array(10)].map((_, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={`/img/portfolio/Holograms/${i + 1}.jpg`}
                        alt={`Hologram sample ${i + 1}`}
                        width={800}
                        height={600}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <ul>
                    <li>
                      <strong>Details</strong>: Secure and enhance your branding
                      with premium hologram labels—offering authenticity,
                      anti-counterfeiting protection, and a sleek, high-tech
                      look.
                    </li>
                    <li>
                      <strong>Contact</strong>:{" "}
                      <a href="tel:+94716520030">071 652 0030</a>
                    </li>
                    <li>
                      <strong>More Pictures</strong>:
                      <a
                        href="https://www.facebook.com/OrgalaserHologram/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">Orgalaser Group</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>No. 64/B/1/1</p>
                  <p>Station Road,</p>
                  <p>Kandana</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+94 11 223 6311</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>orgalaser@gmail.com</span>
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="https://api.whatsapp.com/send/?phone=94765281529&text&type=phone_number&app_absent=0">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/OrgalaserWedding1"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/orgalaser/"
                    target="_blank"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@wedding.orgalaser"
                    target="_blank"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#hero"> Home</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#about"> About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#services"> Services</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#services"> Laser Cutting & Engraving</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#services"> Wedding Invitations</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#services"> Hologram Labels</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="index.html#services"> CNC</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-center">
            <p>
              © <span>Copyright </span>{" "}
              <strong className="sitename px-1">ORGA_IT</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
            <div className="credits">
              Designed by{" "}
              <a
                href="https://www.facebook.com/Yuvindu1.induwara"
                target="_blank"
              >
                Yuvi_In
              </a>{" "}
              2025
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default HologramPage;
