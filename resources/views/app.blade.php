<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/eajicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EAJ Web Development Services | Custom Web Systems &amp; Software for Philippine Businesses</title>

    <!-- SEO Meta Tags -->
    <meta
      name="description"
      content="EAJ Web Development Services builds custom web systems, workflow automation, ERP solutions, and operational dashboards for Philippine businesses and startups. Scale your business with tailor-made software."
    />
    <meta
      name="keywords"
      content="EAJ Web Development Services, EAJ, eajwebdev, web development Philippines, custom web systems, custom ERP Philippines, workflow automation, software solutions Philippines, operational dashboard, custom software development, web application development, HRIS system, pharmacy system, laundry management system, Filipino web developer"
    />
    <meta name="author" content="EAJ Web Development Services" />
    <link rel="canonical" href="https://eajwebdev.com" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://eajwebdev.com" />
    <meta property="og:title" content="EAJ Web Development Services | Custom Web Systems & Software" />
    <meta
      property="og:description"
      content="EAJ Web Development Services builds custom web systems, workflow automation, ERP solutions, and operational dashboards for Philippine businesses and startups."
    />
    <meta property="og:image" content="https://eajwebdev.com/eajicon.png" />
    <meta property="og:site_name" content="EAJ Web Development Services" />
    <meta property="og:locale" content="en_PH" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://eajwebdev.com" />
    <meta name="twitter:title" content="EAJ Web Development Services | Custom Web Systems & Software" />
    <meta
      name="twitter:description"
      content="EAJ Web Development Services builds custom web systems, workflow automation, ERP solutions, and operational dashboards for Philippine businesses."
    />
    <meta
      name="twitter:image"
      content="https://eajwebdev.com/eajicon.png"
    />

    <!-- Structured Data (JSON-LD Schema) — Organization -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "EAJ Web Development Services",
        "alternateName": ["EAJ", "EAJWEB", "eajwebdev"],
        "url": "https://eajwebdev.com",
        "logo": "https://eajwebdev.com/eajicon.png",
        "image": "https://eajwebdev.com/eajicon.png",
        "description": "EAJ Web Development Services builds custom web systems, workflow automation, ERP solutions, HRIS portals, pharmacy management tools, and operational dashboards for Philippine businesses and startups.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PH"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Philippines"
        },
        "sameAs": ["https://facebook.com", "https://instagram.com"],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@eajwebdev.com",
          "contactType": "customer service"
        },
        "knowsAbout": [
          "Web Development",
          "Custom ERP Systems",
          "HRIS Systems",
          "Pharmacy Management Software",
          "Laundry Management Systems",
          "Workflow Automation",
          "Operational Dashboards"
        ]
      }
    </script>

    <!-- Structured Data (JSON-LD Schema) — WebSite with SearchAction -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "EAJ Web Development Services",
        "url": "https://eajwebdev.com"
      }
    </script>

    <!-- Security Headers -->
    @env('local')
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline' http://localhost:5173 http://127.0.0.1:5173; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com http://localhost:5173 http://127.0.0.1:5173; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: http://localhost:5173 http://127.0.0.1:5173; connect-src 'self' https://formsubmit.co ws://localhost:5173 ws://127.0.0.1:5173 http://localhost:5173 http://127.0.0.1:5173; frame-ancestors 'none';"
    />
    @else
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://formsubmit.co; frame-ancestors 'none';"
    />
    @endenv
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta
      http-equiv="Referrer-Policy"
      content="strict-origin-when-cross-origin"
    />
    <meta
      http-equiv="Permissions-Policy"
      content="camera=(), microphone=(), geolocation=()"
    />
  </head>
  <body>
    <div id="root"></div>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/main.tsx'])
  </body>
</html>
