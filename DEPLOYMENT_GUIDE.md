# OP Lands — Cloudflare Pages + Ionos Deployment Guide

**Objetivo**: Migrar oplands.com de WinkhHosting a Cloudflare Pages (sitio estático) + Cloudflare Registrar (dominio) + Zoho Mail (email).

**Costo final**: ~$10/año (dominio) | Email gratis
**Tiempo estimado**: 30-45 minutos

---

## Resumen del Proceso

1. **Hoy**: Sitio estático generado en `out/` — listo para Cloudflare
2. **Mañana**: Transferencia del dominio a Cloudflare Registrar
3. **Día 3**: Configurar email (Cloudflare Email Routing → Zoho Mail)
4. **Día 4+**: Cancelar WinkhHosting, ahorrar $80/año

---

## Paso 1: Preparar Cloudflare Account

### 1.1 Crear/Iniciar sesión en Cloudflare

1. Ve a https://dash.cloudflare.com
2. Inicia sesión con tu cuenta (o crea una nueva)
3. Tienes acceso gratuito a Cloudflare Pages

### 1.2 Conectar repositorio Git (Recomendado)

El flujo automático es mejor para futuros cambios:

1. Pushea este proyecto a GitHub (o GitLab, Gitea)
   ```bash
   cd C:/tmp/oplands
   git init
   git add .
   git commit -m "Initial commit: OP Lands landing page"
   git remote add origin https://github.com/[tu-usuario]/oplands.git
   git branch -M main
   git push -u origin main
   ```

2. En Cloudflare Dashboard:
   - Click **"Pages"** → **"Create a project"** → **"Connect to Git"**
   - Authorize GitHub/GitLab
   - Select repositorio `oplands`
   - Build settings:
     - **Framework**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Click **"Save and Deploy"**

3. Cloudflare auto-genera un dominio: `[random].pages.dev`

---

## Paso 2: Transferencia del Dominio oplands.com

### 2.1 Preparar WinkhHosting

1. Entra a WinkhHosting cPanel: `oplands.com/cpanel`
2. Ve a **"Registrar Unlock"** (si está requerido)
3. Obtén el **Authorization Code** (ej: `ABC123XYZ`)
   - Ir a **Domains** → **Manage Domains** → obtener código de autorización
4. **Anota**:
   - Dominio: `oplands.com`
   - Authorization code: `[código]`
   - Email de contacto: `oscarpinzon81@gmail.com`

### 2.2 Transferir a Cloudflare Registrar

1. Ve a Cloudflare Dashboard → **Registrar** (en el menú izq.)
2. Click **"Transfer a domain"**
3. Enter: `oplands.com`
4. Selecciona el período (1 año recomendado)
5. Enter Authorization Code de WinkhHosting
6. Confirma los detalles del registrante:
   - **Registrant Email**: oscarpinzon81@gmail.com
   - **Organization**: OP Lands Group LLC
   - **Address**: 414 NE Ravenna Blvd Ste A, Seattle, WA 98115
7. **Review pricing**: ~$8.88/año para .com
8. Complete the purchase

### 2.3 Cambiar Nameservers (en WinkhHosting)

Una vez confirmada la transferencia:

1. En WinkhHosting cPanel, ve a **Zone Editor**
2. Busca la sección "Nameservers"
3. Reemplaza con los nameservers de Cloudflare:
   ```
   Primary:   ns1.dns.cloudflare.com
   Secondary: ns2.dns.cloudflare.com
   ```
   (Cloudflare proporciona estos; los verás en tu dashboard)

4. Espera 24-48 horas para propagación de DNS

---

## Paso 3: Conectar oplands.com a Cloudflare Pages

### 3.1 Agregar dominio personalizado a Pages

1. En Cloudflare Dashboard → **Pages** → `oplands` (tu proyecto)
2. Click **"Custom domain"**
3. Enter: `oplands.com`
4. Cloudflare auto-configura los DNS records
5. Espera a que el status sea "✅ Active"

### 3.2 Verificar sitio en vivo

- Abre https://oplands.com en tu navegador
- Verifica que cargue correctamente
- Prueba funciones: filtros de propiedades, calculadora, FAQ

---

## Paso 4: Configurar Email (info@ y service@)

### 4.1 Cloudflare Email Routing (GRATIS)

Cloudflare Email Routing **recibe** emails y los reenvía a tu buzón real.

1. En Cloudflare Dashboard → **Email** → **Email Routing**
2. Click **"Enable Email Routing"**
3. Crea rules para tus direcciones:
   - **To**: `info@oplands.com` → **Forward to**: tu email personal
   - **To**: `service@oplands.com` → **Forward to**: tu email personal
   
   Ejemplo:
   ```
   info@oplands.com  →  oscarpinzon81@gmail.com
   service@oplands.com  →  oscarpinzon81@gmail.com
   ```

4. Cloudflare agrega automáticamente los DNS records necesarios (SPF, DKIM, DMARC)

### 4.2 Zoho Mail (GRATIS, Envío profesional)

Para **enviar** emails desde info@oplands.com:

1. Crea cuenta en https://www.zoho.com/mail/
2. Selecciona plan **Free** (5 usuarios)
3. Agrega dominio: `oplands.com`
4. Zoho te dará DNS records (MX, TXT, CNAME) para agregar en Cloudflare
5. En Cloudflare Dashboard → **DNS**:
   - Agrega los records MX de Zoho (reemplaza los existentes)
   - Agrega CNAME, TXT records que Zoho proporcione
6. Espera a que Zoho verifique (5-30 minutos)
7. Crea usuarios en Zoho:
   - `info@oplands.com`
   - `service@oplands.com`

**Flujo completo de email**:
```
Cliente envía → info@oplands.com
                ↓ (Zoho MX)
              Servidor Zoho
                ↓ (recibe y almacena)
             Tu buzón Zoho Web
                ↓ (o)
          Cloudflare Email Routing
                ↓
          oscarpinzon81@gmail.com (forwarding)
```

---

## Paso 5: Eliminar hosting en WinkhHosting

**Una vez verificado que todo funciona:**

1. Entra a WinkhHosting
2. Ve a **Billing** → **Active Services**
3. Busca `oplands.com` hosting
4. Click **"Request Cancellation"**
5. Escoge motivo: "Moving to another provider"
6. Completa la cancelación

**NO canceles el dominio**, solo el hosting (si WinkhHosting es registrar, mantén el dominio ahí hasta que termines la transferencia a Cloudflare Registrar).

---

## Verificación Final (Checklist)

- [ ] Sitio carga correctamente en https://oplands.com
- [ ] Responsive en mobile
- [ ] Filtros de propiedades funcionan
- [ ] Calculadora de financiamiento funciona
- [ ] FAQ accordion abre/cierra
- [ ] Botones "Reserve" redirigen a #contact
- [ ] Email: puedes recibir en info@oplands.com
- [ ] Email: puedes enviar desde info@oplands.com (Zoho)
- [ ] SSL/TLS activo (candado verde en navegador)
- [ ] sitemap.xml accesible en https://oplands.com/sitemap.xml
- [ ] robots.txt accesible en https://oplands.com/robots.txt

---

## Troubleshooting

### "Domain not resolving after 48 hours"
- Fuerza actualización de DNS: En Cloudflare Dashboard, ve a **DNS** → verifica nameservers
- En WinkhHosting, asegúrate de que nameservers sean exactos (sin espacios extras)
- Prueba: `nslookup oplands.com 1.1.1.1` (debe resolver a Cloudflare IP)

### "Email no llega"
- Verifica que DNS records (MX, SPF, DKIM, DMARC) estén en Cloudflare
- En Zoho, verifica que dominio esté verificado
- Prueba enviar un email de prueba desde Gmail → info@oplands.com

### "Sitio muestra error 404"
- En Cloudflare Pages, verifica que "Build output directory" sea `out`
- Re-deploy: en Pages → "Deployments" → "Deploy site"
- Verifica que `index.html` exista en `out/index.html`

---

## Actualizar sitio en el futuro

Si cambias el diseño o contenido:

1. **Con Git/GitHub (Automático)**:
   ```bash
   git add .
   git commit -m "Update: [cambios]"
   git push origin main
   ```
   → Cloudflare auto-redeploy automáticamente

2. **Manual (si no usas Git)**:
   - Genera build: `npm run build`
   - Compress `out/` folder a ZIP
   - En Cloudflare Pages → "Upload assets" → sube ZIP

---

## Contacto y Support

- **Cloudflare Support**: https://support.cloudflare.com
- **Zoho Mail Help**: https://www.zoho.com/mail/help/
- **DNS Propagation Checker**: https://dnschecker.org/

---

**Documentación creada**: 18 de abril, 2026
**Sitio estático ubicado en**: `C:\tmp\oplands\out\`
**Nombre del proyecto**: OP Lands Landing
**Versión**: 1.0.0
