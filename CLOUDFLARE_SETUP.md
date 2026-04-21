# Cloudflare Domain Migration Checklist

## Current Status
- Live Site: https://91ad8fd3.oplands.pages.dev ✓
- Original Claude Design deployed ✓
- All sections functional ✓

## Domain Migration Steps (oplands.com)

### 1. In Cloudflare Dashboard
- [ ] Add site to Cloudflare (if not already done)
- [ ] Note the Cloudflare nameservers provided
- [ ] Create DNS records:
  - [ ] CNAME for Pages deployment
  - [ ] MX records for email routing
  
### 2. In WinkhHosting
- [ ] Unlock domain
- [ ] Get authorization code
- [ ] Update nameservers to Cloudflare's
  
### 3. Cloudflare Email Setup
- [ ] Enable Cloudflare Email Routing
- [ ] Create catch-all: info@ and service@ routes
- [ ] Configure Zoho Mail forwarding
  
### 4. DNS Configuration
```
Type: CNAME
Name: oplands.com (or @)
Content: 91ad8fd3.oplands.pages.dev
TTL: Auto
Proxy: Proxied (orange cloud)
```

### 5. Verification
- [ ] Domain resolves to Cloudflare IP
- [ ] SSL certificate auto-issued
- [ ] Pages deployment accessible via oplands.com
- [ ] Email routing working

## Timeline
- Today (Apr 17): Setup Cloudflare DNS
- Before Apr 23: Update nameservers at WinkhHosting
- Apr 23-30: Allow nameserver propagation (24-48 hours typical)

## Contacts
- WinkhHosting support: Check account dashboard
- Cloudflare: Integrated in account
- Zoho Mail: Mail setup after domain active
