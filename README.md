# SMP Mobile — Interactive Prototype

Prototype tương tác cho ứng dụng SMP (Service Management Platform) gồm 2 chế độ:
- **Customer** — Đặt dịch vụ, theo dõi đơn, thanh toán, đánh giá
- **Technician** — Nhận đơn, làm việc, theo dõi thu nhập, kỹ năng

## Cấu trúc file

```
smp-mobile/
├── index.html       Entry point
├── styles.css       Design system + components
├── screens.js       Định nghĩa tất cả screens
├── app.js           Navigation logic + render
├── manifest.json    PWA manifest
├── icon.svg         App icon (vector)
├── icon-192.png     Icon cho install (Android)
├── icon-512.png     Icon cho install (high-res)
└── README.md        File này
```

## URL routes

| URL | Hành vi |
|---|---|
| `/` | Auto-detect: mobile viewport → fullscreen Customer mode; desktop → showcase 2 phone song song |
| `/?mode=customer` | Force fullscreen Customer mode (dùng cho QR code, PWA install) |
| `/?mode=technician` | Force fullscreen Technician mode |

## Customer screens

1. **home** — Số dư ví, dịch vụ, đơn đang theo dõi, khuyến mãi
2. **booking** — Wizard đặt dịch vụ 3 bước
3. **tracking** — Bản đồ realtime, timeline điều phối
4. **receipt** — Hoá đơn chi tiết với phân tách phí
5. **rate** — Đánh giá 5 sao + dimension + tag
6. **orders** — Lịch sử đơn với filter
7. **wallet** — Ví, phương thức thanh toán, giao dịch
8. **profile** — Tài khoản, switch sang Technician
9. **switch** — Màn chuyển chế độ

## Technician screens

1. **home** — Toggle online/offline, KPI, đơn mới, việc đang làm
2. **offer** — Đếm ngược 30s nhận đơn mới
3. **job** — Timeline công việc, báo giá khảo sát
4. **earnings** — Thu nhập, biểu đồ 7 ngày, sao kê
5. **skills** — Hạng, kỹ năng chính, chứng chỉ
6. **profile** — Hồ sơ thợ, hợp đồng, switch về Customer
7. **switch** — Màn chuyển chế độ

## Deploy lên Cloudflare Pages

### Cách 1: Upload trực tiếp (nhanh nhất)

1. Vào [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create application** → tab **Pages** → **Upload assets**
3. Đặt tên project (vd: `smp-mobile`)
4. Kéo thả toàn bộ NỘI DUNG trong folder này (`index.html`, `styles.css`, ...) vào ô upload — KHÔNG kéo folder bọc ngoài
5. Click **Deploy site**
6. Nhận URL `https://smp-mobile.pages.dev`

### Cách 2: Qua Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USER/smp-mobile.git
git push -u origin main
```

Sau đó vào Cloudflare Pages → **Connect to Git** → chọn repo này.

Build settings:
- Framework preset: **None**
- Build command: (để trống)
- Build output directory: `/` hoặc để trống

## Test trên điện thoại

1. Mở Cloudflare Pages URL trên Safari/Chrome mobile
2. Tự động hiển thị Customer mode fullscreen
3. Tap **Tài khoản → Chuyển sang chế độ Thợ** để xem Technician mode
4. Hoặc thêm `?mode=technician` vào URL để mở trực tiếp

### Cài đặt như app native (PWA)

**iOS Safari:**
1. Mở URL trên Safari
2. Tap nút Share → **Add to Home Screen**
3. App SMP xuất hiện trên home screen như app thường

**Android Chrome:**
1. Mở URL trên Chrome
2. Tap menu (3 chấm) → **Install app** hoặc **Add to Home screen**

## Design system

- **Typography**: Plus Jakarta Sans + JetBrains Mono (cho ID/code)
- **Primary** (Customer): `#4f46e5` Indigo
- **Tech** (Technician): `#1D9E75` Teal
- **Accent**: Amber/Red/Green theo semantic
- **Icons**: Tabler Icons (qua CDN)
- **Radius**: 6-20px theo size (sm/md/lg/xl)
- **Layout**: Mobile-first, max-width 480px

## Mở rộng

Để thêm screen mới:

1. Mở `screens.js`
2. Thêm function:
   ```js
   SMP.customer.newScreen = () => `
     ${statusBar()}
     <div class="screen screen-enter">
       ...
     </div>
   `;
   ```
3. (Tuỳ chọn) Thêm vào `SMP.tabs.customer` để có trong bottom nav
4. (Tuỳ chọn) Thêm vào `SMP.screenNames` và `SMP.quickJumps` để có quick jump trên desktop

Để navigate sang screen mới: thêm `data-go="newScreen"` vào bất kỳ element nào.

## License

Internal prototype. © SMP 2026.
