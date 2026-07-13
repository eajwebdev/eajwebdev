#!/bin/bash
# EA Software Solutions - Hostinger shared hosting setup
#
# Paste this whole file into PuTTY and press Enter. It is safe to re-run.
# It writes the .htaccess (SPA routing + security headers + caching) and
# fixes permissions. It does NOT build anything - upload your local dist/
# contents into public_html first (or right after) via hPanel File Manager.

set -e

# ---------------------------------------------------------------------------
# 1. Find the web root
# ---------------------------------------------------------------------------
if [ -d "$HOME/public_html" ]; then
  WEBROOT="$HOME/public_html"
else
  WEBROOT=$(find "$HOME/domains" -maxdepth 2 -type d -name public_html 2>/dev/null | head -1)
fi

if [ -z "$WEBROOT" ] || [ ! -d "$WEBROOT" ]; then
  echo "ERROR: Could not find public_html. Run: ls ~ ; ls ~/domains"
  exit 1
fi

echo "Web root: $WEBROOT"

# ---------------------------------------------------------------------------
# 2. Back up any existing .htaccess
# ---------------------------------------------------------------------------
if [ -f "$WEBROOT/.htaccess" ]; then
  cp "$WEBROOT/.htaccess" "$WEBROOT/.htaccess.bak.$(date +%Y%m%d%H%M%S)"
  echo "Backed up existing .htaccess"
fi

# ---------------------------------------------------------------------------
# 3. Write the .htaccess
# ---------------------------------------------------------------------------
cat > "$WEBROOT/.htaccess" <<'HTACCESS'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{HTTPS} !=on
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

  <FilesMatch "\.(js|css|woff2|png|jpg|jpeg|svg|webp|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\.(html)$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml
  AddOutputFilterByType DEFLATE application/javascript application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

Options -Indexes

<FilesMatch "^\.(env|git|gitignore)">
  Require all denied
</FilesMatch>

ErrorDocument 404 /index.html
HTACCESS

echo "Wrote $WEBROOT/.htaccess"

# ---------------------------------------------------------------------------
# 4. Permissions
# ---------------------------------------------------------------------------
find "$WEBROOT" -type d -exec chmod 755 {} \;
find "$WEBROOT" -type f -exec chmod 644 {} \;
echo "Permissions set (dirs 755, files 644)"

# ---------------------------------------------------------------------------
# 5. Verify the build is actually there
# ---------------------------------------------------------------------------
echo ""
echo "--- Check ---"
if [ -f "$WEBROOT/index.html" ]; then
  echo "OK   index.html found"
else
  echo "MISSING  index.html - upload the CONTENTS of your local dist/ folder"
  echo "         into $WEBROOT (the files inside dist, not the dist folder itself)"
fi

if [ -d "$WEBROOT/assets" ]; then
  echo "OK   assets/ found"
else
  echo "MISSING  assets/ - same fix as above"
fi

echo ""
echo "Done. Now open your domain and test a direct URL like /services"
