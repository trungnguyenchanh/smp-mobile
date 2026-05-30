# SMP · Service Marketplace Platform

Nền tảng kết nối dịch vụ sửa chữa & bảo trì gia dụng tại Việt Nam · 3-sided marketplace dạng SaaS.

---

## Tổng quan

SMP là hệ thống marketplace 3 bên cho ngành dịch vụ tại gia (sửa điều hoà, máy giặt, tủ lạnh, ống nước, điện...):

| Bên | Vai trò | Giao diện |
|---|---|---|
| **Khách hàng** | Đặt dịch vụ, theo dõi, đánh giá, quản lý thiết bị + hợp đồng bảo trì | Mobile app |
| **Thợ kỹ thuật** | Nhận đơn, làm việc, ghi chứng từ, tính lương theo step | Mobile app |
| **Đối tác B2B** | Văn phòng, retail chain quản lý nhiều địa điểm | Mobile app (Partner mode) |
| **Quản trị viên** | Vận hành, finance, BD, ops, CS | Web admin |

**Quy mô hiện tại:**
- 28,479 khách hàng (1,247 mới/tháng · 87% active rate)
- 847 thợ kỹ thuật active (L1-L4, đa kỹ năng)
- 23 đối tác B2B (Office + Retail)
- 12 tỉnh thành (HCM 68% GMV · HN 22% · ĐN 4% · pilot 4 tỉnh khác)
- 28 service templates · 22 steps with BOM · 187 material SKUs
- MTD GMV: 48.2B VND · 8,247 đơn · AOV 585k · take rate 20.4%

---

## Kiến trúc kỹ thuật

| Layer | Stack |
|---|---|
| **Backend** | Go (Gin/Echo) + MySQL (transactional) + Redis (cache + queue) + MongoDB (logs + analytics) |
| **Mobile** | HTML/JS prototype (current) → native iOS/Android (planned) |
| **Admin** | Vanilla HTML/JS/CSS, no framework |
| **Doc processing** | Standalone tool tại smp-doc-process |

**Brand & design:**
- Primary indigo `#4F46E5`
- Mobile: Material 3 design system (Roboto Flex + Material Symbols)
- Admin: Light theme (Plus Jakarta Sans + Tabler Icons)

**Repositories & deployment:**
| Repo | URL | Deploy |
|---|---|---|
| Mobile | `github.com/trungnguyenchanh/smp-mobile` | `smp-mobile.trungnguyenchanh.workers.dev` |
| Admin | `github.com/trungnguyenchanh/smp-admin` | `smp-admin.trungnguyenchanh.workers.dev` |
| Doc process | `github.com/trungnguyenchanh/smp-doc-process` | `smp-doc-process.pages.dev` |

---

## Mobile App (43 screens · Material 3)

3 modes truy cập qua query param `?mode=`:

### Customer mode (22 screens)
Home · Search · Service detail · Booking · Reschedule · Order tracking · Order detail · Orders list · Rate & review · Profile · Helpers · Devices/Assets · Device detail · Contracts · Contract detail · Warranty book · Claim new · Claim status · Claim approved · History · Receipts · Settings

### Technician mode (15 screens)
Home (KPI dashboard) · Job detail · Step detail · Earnings · Earnings detail · Material report · Material pick · Photo proof · Role choice (multi-agent) · Survey · Skills tier · Booking (tech view) · Map · Settings · Profile

### Partner mode (6 screens)
Dashboard · Locations · Bulk orders · Account · Reports · Settings

### Material 3 design system
| Token group | Implementation |
|---|---|
| Color roles | `--md-sys-color-primary` (#4F46E5) + container + 5 surface containers · tertiary teal cho tech mode |
| Shape | `--md-shape-corner-{xs/s/m/l/xl/full}` (4/8/12/16/28px) |
| Elevation | Level 1-5 tonal + shadow |
| Motion | Standard + emphasized easing · short 100ms / medium 250ms / long 400ms |
| Typography | Roboto Flex variable + Roboto Mono + Material Symbols Rounded |

### Components
Top App Bar (sticky 64dp) · Bottom Nav (80dp pill indicator) · Cards (12dp elevated/filled/outlined) · Filled/Outlined/Tonal buttons (40dp pill) · FAB · Chips (8dp filter) · Pills/Badges · List items (56dp min) · Avatars (40dp tone container) · Timeline · Steppers · Skill bars

### Layout
- Mobile viewport: 412px max-width (Pixel 7 reference), centered with shadow on desktop
- `@media ≤600px`: expands to full width
- Bottom nav centered with `transform: translateX(-50%)`

---

## Admin Web (65 pages · 11 sidebar groups)

Nav English, không version suffix, badges chỉ trên item cụ thể.

### Sidebar structure

```
📂 Operations (5)
   Operations dashboard · Dispatch monitor [LIVE] · Orders [847]
   Order flow · Quality & disputes [12]

📂 Customer (4)
   All customers [28k] · Customer detail
   Customer assets · Maintenance contracts

📂 Partners (4)
   Partners overview · All partners [8] · Partner detail · Portal view

📂 Catalog (6)
   Service templates · Steps + BOM [22] · Master skills
   Maintenance packages · Material types · Material variants

📂 Geography (2)
   Coverage map · Provinces & areas

📂 Modules (2)
   Agents & KYC · Finance

📂 Integration (2)
   Integration health · Material verification [23]

📂 Multi-agent & Warranty (4)
   Step roles & splits [v3.5] · Warranty packages [v3.5]
   Claim queue [5] · Warranty revenue [v3.5]

📂 Sales Reports (7)
   Sales dashboard · By customer · By service · By technician
   By area · By partner · By material

📂 Analytics (8)
   All reports · Step performance [HOT] · Revenue trend
   Customer cohort · Acquisition · CAC
   Multi-agent perf [v3.5] · Warranty financials [v3.5] · Claim approval [v3.5]

📂 System (7)
   System health · Audit log · Users & roles
   API keys · Webhooks · Notification settings · General settings
```

### Customer module

**All customers** · Bảng danh sách 28k khách với:
- KPI: Total · New (1,247/tháng) · Active rate (87%) · Avg LTV (3.42M VND)
- 8 segment tabs: All / VIP (285) / B2B Office (147) / Regular (5,696) / New 30d (1,247) / At-risk (412) / Churned (847) / Inactive (3,705)
- Filter: search, area, registration period, status, customer type
- Bulk actions: Send notification, Add tag, Mark inactive, Export, Block

**Customer detail** · Profile đầy đủ với:
- Hero: avatar, segment badge, LTV
- 4 KPI: Orders, AOV, Frequency, Avg rating
- 8 tabs: Overview, Orders, Assets, Contracts, Warranties, Vouchers, Notes, Activity log
- Loyalty status, communication preferences, tags

### Sales Reports module

7 báo cáo standalone (no reuse), tất cả dùng layout hybrid: top KPIs + drill-down sections.

| Report | Focus |
|---|---|
| **Sales dashboard** | 4 KPIs tổng + 6 drill-down panels (by customer/service/tech/area/partner/material) + daily trend |
| **By customer** | ABC pareto segmentation (A 42% · B 33% · C 25%) · Top 20 ranking · concentration risk · new vs returning |
| **By service** | Waterfall 6 categories (AC · Washer · Fridge · Plumbing · Electric · Other) · margin % · MoM trend |
| **By technician** | Top 20 leaderboard với multi-agent split · GMV by level (L4: 22%/46% · L3: 50%/37% · L2: 22%/12% · L1: 6%/5%) |
| **By area** | District rankings HCM · province expansion table · growth leaders · underserved 8 districts |
| **By partner** | Top 10 B2B accounts · concentration warning (top 3 = 52%) · churn risk flags |
| **By material** | Most consumed (Gas R32 top 3,247 units) · Least consumed (slow movers 42 SKUs) · margin · inventory actions |

### System module

| Page | Function |
|---|---|
| **System health** | Service status, latency, error rate |
| **Audit log** | 87,247 events recorded, severity filter, immutable history |
| **Users & roles** | 12 admin users · 6 roles RBAC (Owner/Admin/Ops/CS/Finance/Viewer) · 2FA enforced |
| **API keys** | 5 active keys · 1 expiring · usage log · rate limits |
| **Webhooks** | 8 endpoints (Slack ops/cs · Discord finance · PT Office · Lotte sync · BI · push · SMS) · 99.7% delivery |
| **Notification settings** | 5 channels (Push 28k/d · SMS 6k/d · Email 4k/d · Zalo OA · Voice) · 24 event triggers · quiet hours |
| **General settings** | Brand, locale, currency, timezone, fiscal year |

---

## Domain concepts

### Step vs Đơn (KPI convention)

| Context | Term used | Purpose |
|---|---|---|
| Customer-facing | **bước** (tiếng Việt) | UX dễ hiểu cho người dùng cuối |
| Technician operational | **step** (giữ English) | Technical workflow, payroll calc |
| KPI dashboard | **đơn / khách / Repeat %** | Business metric tổng quát |
| Multi-agent | **đơn chính / đơn phụ** | Lead vs Helper split |

### Multi-agent (v3.5)

Nhiều thợ làm chung 1 đơn:
- **Roles:** Lead (đơn chính) · Helper (đơn phụ) · Specialist (đơn chuyên)
- **Earnings split:** Theo step weights (defined per service template)
- **Stats hiện tại:** 18% đơn là multi-agent · avg team size 2.3 thợ · time saved ▼ 28%
- **Use cases:** Lắp đặt phức tạp, sửa chữa nhiều hạng mục, đơn gấp cần nhiều thợ

### Warranty (v3.5)

- **3 tiers:** Basic 6mo / Standard 12mo / Premium 18mo
- **Pricing:** % của service value (Finance + Founder đang review)
- **Accounting:** Deferred revenue, recognized over coverage period
- **Claims:** Queue với SLA, auto-approval criteria, fraud detection
- **Hiện có:** 5 claims pending · approval rate target 80%+

### Customer segments

| Segment | Count | Definition |
|---|---:|---|
| ⭐ VIP | 285 | LTV > 15M VND hoặc 20+ orders |
| 🏢 B2B Office | 147 | Office building accounts |
| 👥 Regular | 5,696 | Order trong 90 ngày qua |
| 🌱 New (30d) | 1,247 | Đăng ký < 30 ngày |
| ⚠️ At-risk | 412 | Không đặt 60-90 ngày, lịch sử cao |
| 💤 Churned | 847 | Không đặt > 90 ngày |
| 🚫 Inactive | 3,705 | Không đặt > 180 ngày |
| 🚷 Blocked | 5 | Spam, fraud, abuse |

### Service catalog

- **28 service templates** trên 8 categories: AC · Washer · Fridge · Plumbing · Electric · Stove/Hood · Water heater · Other
- **22 steps** trong catalog with BOM (Bill of Materials)
- **187 material SKUs**: Gas R32, capacitor, compressor, filter, valves, etc.
- **Skills:** 47 master skills · gold/silver/bronze tier system cho thợ

---

## Business model

### Revenue streams
1. **Service commission** · 20.4% take rate trên GMV
2. **Warranty packages** · margin 40-60% · deferred revenue
3. **Material markup** · 30-70% per SKU
4. **B2B partner subscription** · monthly retainer + per-order
5. **Premium membership** (planned) · ưu tiên thợ, giảm giá

### Geographic expansion

| Region | Status | Districts | GMV share |
|---|---|---:|---:|
| HCM | Live | 19 of 22 | 68% |
| Hà Nội | Live | 12 of 30 | 22% |
| Đà Nẵng | Live | 6 of 8 | 4% |
| Bình Dương | Pilot | 3 | 2% |
| Hải Phòng | Pilot | 4 | 1% |
| Cần Thơ | Pilot | 4 | 1% |
| Others | Planned | - | 2% |

### Partnerships (8 active B2B)
- **Office:** PT Office Tower (820M MTD), Vingroup Tower, Hyundai Plaza, Times City North, Saigon Pearl
- **Retail:** Lotte Mart Q.7 (680M), Long Châu Pharma, Big C Phú Mỹ Hưng

---

## Compliance & risk

### Legal review pending (VN lawyer)
- PDPL (Personal Data Protection Law) compliance
- COD (Cash On Delivery) handling
- Warranty terms & coverage limits
- Cooling-off period rules
- VAT invoice generation

### Operational risks
- **Customer concentration** · Top 3 B2B = 52% GMV → BD priority
- **Technician retention** · Top 10% generate 28% revenue → L4 incentive program
- **Material supply** · Single-source for Gas R32 (3,247 units/mo) → diversify suppliers

---

## Tech & data

### Integration health
- **External integrations:** Payment gateway · SMS · Zalo OA · Mailgun · Firebase push · Maps · Internal BI
- **Webhook delivery:** 99.7% (8 endpoints, auto-retry on 5xx)
- **API uptime target:** 99.9% (current: 99.94% trailing 30d)
- **Audit trail:** Every action logged, immutable, 90-day retention online + S3 cold storage

### Material verification
- Real-time validation khi thợ pick material
- 23 đơn flagged hiện tại cần verify (substitute hoặc out-of-stock)
- Anti-fraud: photo proof, barcode scan, checksum

---

## Development status

| Component | State |
|---|---|
| Mobile UI (43 screens) | ✅ Material 3 prototype hoàn chỉnh |
| Admin UI (65 pages) | ✅ Full mockup hoàn chỉnh |
| Backend API | 🟡 Sprint 3-4 in progress |
| Database schema | ✅ Designed, migrations ready |
| Payment integration | 🟡 In progress |
| KYC for agents | 🟡 In progress |
| Doc-process site | ✅ Live |
| Mobile native app | ⏳ Planned post-launch validation |

### Open items (cross-team)
- Finance + Founder: finalize warranty pricing tiers
- BA + Ops: define step weights for top 10 services
- Legal (VN lawyer): PDPL/COD/warranty/cooling-off/VAT review
- Mobile UX: review wireframes for native handoff
- Ops: training documentation (Doc 28 in progress)

---

## Project structure

```
smp/
├── smp-mobile/                     # mobile prototype
│   └── smp-mobile-v3.5.html        # single-file HTML/JS, 43 screens
├── smp-admin/                      # admin web
│   ├── index.html                  # SPA shell
│   ├── assets/
│   │   ├── shell.js                # NAV + routing + topbar/sidebar
│   │   └── style.css               # design tokens + components
│   └── pages/
│       ├── dashboard.html          # operations dashboard
│       ├── customers.html          # customer list
│       ├── customer-detail.html    # customer detail
│       ├── report-sales-*.html     # 7 sales reports
│       ├── report-*.html           # 21 analytics reports
│       ├── audit-log.html          # system pages (5)
│       ├── users-roles.html
│       ├── api-keys.html
│       ├── webhooks.html
│       ├── notifications.html
│       └── ... (29 more operational pages)
└── smp-doc-process/                # standalone doc processor
```

---

## Contact

**Product Owner:** Trung Nguyễn · HCMC, VN
**Language:** Vietnamese (primary) · English (technical docs, code)
**Currency:** VND
**Timezone:** ICT (UTC+7)
