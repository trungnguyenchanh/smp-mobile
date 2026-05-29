// SMP Mobile App — Screens
// Customer (C_*) and Technician (T_*) screen definitions

const SMP = {
  customer: {},
  technician: {},
};

// ============ SHARED COMPONENTS ============

function statusBar() {
  return `<div class="status-bar">
    <span>9:41</span>
    <div class="status-bar__right">
      <i class="ti ti-signal-4g"></i>
      <i class="ti ti-wifi"></i>
      <i class="ti ti-battery-4"></i>
    </div>
  </div>`;
}

function pageHeader(opts) {
  const { back, title, subtitle, right, mode } = opts;
  return `<div class="screen-header">
    ${back ? `<button class="icon-btn" data-go="${back}"><i class="ti ti-arrow-left"></i></button>` : ''}
    <div class="flex-1">
      ${title ? `<div class="fs-15 fw-med">${title}</div>` : ''}
      ${subtitle ? `<div class="screen-subtitle">${subtitle}</div>` : ''}
    </div>
    ${right || ''}
  </div>`;
}

function homeHeader(name, avatar, isTech) {
  return `<div class="screen-header">
    <div>
      <div class="home-greet">${isTech ? 'Chào buổi sáng' : 'Xin chào'}</div>
      <div class="home-name">${name}</div>
    </div>
    <div class="row gap-6">
      <button class="icon-btn"><i class="ti ti-bell"></i><span class="icon-btn__dot"></span></button>
      <button class="avatar avatar--sm ${isTech ? 'avatar--tech' : ''}" data-go="profile" style="width:36px;height:36px;font-size:12px;border:none;">${avatar}</button>
    </div>
  </div>`;
}

function svcTile(icon, label, price, action) {
  return `<button class="svc-tile" ${action ? `data-go="${action}"` : ''}>
    <div class="svc-tile__icon"><i class="ti ti-${icon}"></i></div>
    <div class="svc-tile__label">${label}</div>
    <div class="svc-tile__price">${price}</div>
  </button>`;
}

function pill(text, variant, noDot) {
  return `<span class="pill pill--${variant} ${noDot ? 'no-dot' : ''}">${text}</span>`;
}

function avatar(initials, variant, size) {
  const cls = `avatar ${size ? 'avatar--' + size : ''} ${variant ? 'avatar--' + variant : ''}`;
  return `<div class="${cls}">${initials}</div>`;
}

function stars(value, max, size) {
  const filled = Math.floor(value);
  let html = `<div class="stars ${size ? 'stars--' + size : ''}">`;
  for (let i = 0; i < (max || 5); i++) {
    html += `<i class="ti ti-star${i < filled ? '-filled' : ''}"></i>`;
  }
  html += `</div>`;
  return html;
}

// ============ CUSTOMER SCREENS ============

SMP.customer.home = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${homeHeader('Nguyễn Văn A', 'NA', false)}

    <div class="wallet-card">
      <div class="wallet-card__label">Số dư ví</div>
      <div class="wallet-card__value">340,000 đ</div>
      <div class="wallet-card__sub">Hạng Silver · còn 1 tháng đến Gold</div>
      <div class="wallet-card__actions">
        <button class="wallet-card__btn" data-go="wallet"><i class="ti ti-plus"></i> Nạp tiền</button>
        <button class="wallet-card__btn" data-go="wallet"><i class="ti ti-history"></i> Lịch sử</button>
      </div>
    </div>

    <div class="row between mt-16 mb-12">
      <div class="fs-15 fw-med">Dịch vụ</div>
      <span class="fs-12 text-primary fw-med">Xem tất cả →</span>
    </div>
    <div class="svc-grid">
      ${svcTile('air-conditioning', 'Điều hoà', 'từ 150k', 'booking')}
      ${svcTile('wash-machine', 'Máy giặt', 'từ 200k')}
      ${svcTile('bolt', 'Điện', 'từ 100k')}
      ${svcTile('droplet', 'Nước', 'từ 120k')}
      ${svcTile('snowflake', 'Tủ lạnh', 'từ 180k')}
      ${svcTile('flame', 'Bình nóng', 'từ 150k')}
      ${svcTile('broom', 'Vệ sinh', 'từ 250k')}
      ${svcTile('dots', 'Khác', '')}
    </div>

    <div class="row between mt-16 mb-12">
      <div class="fs-15 fw-med">Đang theo dõi</div>
    </div>
    <div class="order-card tap" data-go="tracking">
      <div class="order-card__head">
        ${pill('Đang điều phối', 'amber')}
        <span class="fs-11 text-faint mono">5 phút trước</span>
      </div>
      <div class="order-card__title">Sửa điều hoà · L3+</div>
      <div class="order-card__sub">15 Lê Lợi, P. Bến Nghé, Q.1</div>
      <div class="order-card__foot">
        <span class="fs-12 text-mute">17 thợ đang được đề nghị</span>
        <span class="fs-12 text-primary fw-med">Chi tiết →</span>
      </div>
    </div>

    <div class="row between mt-16 mb-12">
      <div class="fs-15 fw-med">Khuyến mãi</div>
    </div>
    <div class="card" style="background: var(--c-amber-bg); border-color: #FAC775;">
      <div class="row gap-12">
        <div style="width:44px;height:44px;border-radius:10px;background:white;color:var(--c-amber-text);display:grid;place-items:center;">
          <i class="ti ti-discount-2" style="font-size:22px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-13 fw-bold" style="color:#412402;">Giảm 20% vệ sinh máy lạnh</div>
          <div class="fs-12 text-amber mt-8" style="margin-top:2px;">Mã HOTSUMMER20 · áp dụng đến 30/05</div>
        </div>
      </div>
    </div>

    <div class="row between mt-16 mb-12">
      <div class="fs-15 fw-med">Mới · v3.5</div>
      <span class="fs-12 text-primary fw-med" data-go="warranty-catalog">Xem tất cả →</span>
    </div>
    <div class="card tap" data-go="warranty-catalog" style="background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%); color: white; border: none;">
      <div class="row gap-12">
        <div style="width:44px;height:44px;border-radius:10px;background:white;color:var(--c-primary);display:grid;place-items:center;">
          <i class="ti ti-shield-check" style="font-size:22px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-14 fw-bold">Gói bảo trì thiết bị</div>
          <div class="fs-12 mt-8" style="opacity: 0.85; margin-top:2px;">Vệ sinh + sửa miễn phí · từ 700k/năm</div>
        </div>
        <i class="ti ti-chevron-right" style="font-size:18px; opacity:0.7;"></i>
      </div>
    </div>
  </div>
`;

SMP.customer.booking = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'home', title: 'Đặt dịch vụ', right: '<span class="fs-11 text-faint">Bước 2 / 3</span>' })}

    <div class="stepper">
      <div class="stepper__step done"></div>
      <div class="stepper__step done"></div>
      <div class="stepper__step"></div>
    </div>

    <div class="label-up">Dịch vụ</div>
    <div class="card" style="background:var(--c-primary-bg);border-color:var(--c-primary-border);">
      <div class="row gap-12">
        <div style="width:44px;height:44px;border-radius:10px;background:white;color:var(--c-primary);display:grid;place-items:center;">
          <i class="ti ti-air-conditioning" style="font-size:22px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-14 fw-bold" style="color:var(--c-primary-text);">Sửa điều hoà</div>
          <div class="fs-12" style="color:#3730a3;">Level 3+ · có kinh nghiệm</div>
        </div>
      </div>
    </div>

    <div class="label-up mt-14">Vấn đề gặp phải</div>
    <div class="chips">
      <button class="chip active">Không lạnh</button>
      <button class="chip">Có tiếng kêu</button>
      <button class="chip active">Chảy nước</button>
      <button class="chip">Không bật được</button>
      <button class="chip">Cần vệ sinh</button>
    </div>

    <div class="label-up mt-14">Mô tả thêm</div>
    <textarea class="input input--text" placeholder="VD: máy lạnh phòng ngủ chạy được 20p thì tự tắt, có nhỏ vài giọt nước...">Máy lạnh phòng ngủ chạy được 20p thì tự tắt, có nhỏ vài giọt nước phía trong.</textarea>

    <div class="label-up mt-14">Địa chỉ</div>
    <div class="card tap">
      <div class="row gap-12">
        <i class="ti ti-map-pin" style="color:var(--c-primary);font-size:20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-med">15 Lê Lợi, P. Bến Nghé, Q.1</div>
          <div class="fs-11 text-mute mt-8" style="margin-top:2px;">Nhà riêng · tầng 3 · có thang máy</div>
        </div>
        <i class="ti ti-chevron-right text-faint"></i>
      </div>
    </div>

    <div class="label-up mt-14">Thời gian</div>
    <div class="chips">
      <button class="chip active flex-1" style="justify-content:center;">Ngay (≤30p)</button>
      <button class="chip flex-1" style="justify-content:center;">Hôm nay</button>
      <button class="chip flex-1" style="justify-content:center;">Đặt lịch</button>
    </div>

    <div class="card mt-14" style="background:var(--bg-elev);border:none;">
      <div class="row between fs-12 text-mute mb-8">
        <span>Phí khảo sát</span><span class="mono">50,000 đ</span>
      </div>
      <div class="row between fs-12 text-mute">
        <span>Báo giá chi tiết sau khi xem máy</span><span class="text-faint">—</span>
      </div>
      <div class="divider"></div>
      <div class="row between">
        <span class="fs-13 fw-med">Tạm tính</span>
        <span class="fs-18 fw-bold text-primary mono">50,000 đ</span>
      </div>
    </div>

    <button class="btn btn--primary btn--full mt-16" data-go="tracking">
      Tìm thợ ngay <i class="ti ti-arrow-right"></i>
    </button>
  </div>
`;

SMP.customer.tracking = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'home', title: 'Đang điều phối', right: '<button class="icon-btn"><i class="ti ti-dots"></i></button>' })}

    <div class="map">
      <div class="map-ring" style="left:50%;top:48%;width:160px;height:160px;"></div>
      <div class="map-pin map-pin--cust" style="left:50%;top:48%;"></div>
      <div class="map-pin map-pin--tech" style="left:32%;top:26%;"></div>
      <div class="map-pin map-pin--tech" style="left:64%;top:36%;"></div>
      <div class="map-pin map-pin--tech" style="left:26%;top:58%;"></div>
      <div class="map-pin map-pin--tech" style="left:72%;top:64%;"></div>
      <div class="map-pin map-pin--tech" style="left:44%;top:22%;"></div>
      <div class="map-pin map-pin--tech" style="left:58%;top:72%;"></div>
      <div class="map-label">17 thợ trong vùng 5km</div>
    </div>

    <div class="card" style="background:var(--c-amber-bg);border-color:#FAC775;">
      <div class="row between mb-8">
        ${pill('Vòng 2 / 3', 'amber')}
        <span class="fs-12 text-amber fw-med mono">⏱ 02:18 còn lại</span>
      </div>
      <div class="fs-13" style="color:#412402;">Đang đề nghị tới 17 thợ phù hợp. Vui lòng chờ một chút...</div>
    </div>

    <div class="label-up mt-14">Trạng thái</div>
    <div class="card">
      <div class="timeline">
        <div class="timeline__col">
          <div class="timeline__dot done"><i class="ti ti-check"></i></div>
          <div class="timeline__line done"></div>
          <div class="timeline__dot done"><i class="ti ti-check"></i></div>
          <div class="timeline__line done"></div>
          <div class="timeline__dot active"><i class="ti ti-loader"></i></div>
          <div class="timeline__line"></div>
          <div class="timeline__dot">4</div>
        </div>
        <div class="timeline__content">
          <div class="timeline__row"><span>Đặt đơn thành công</span><span class="ts">09:38</span></div>
          <div class="timeline__row"><span>Hệ thống tìm thợ</span><span class="ts">09:39</span></div>
          <div class="timeline__row active"><span>Đang điều phối...</span><span class="ts">09:40</span></div>
          <div class="timeline__row pending"><span>Thợ đến nơi</span><span class="ts">—</span></div>
        </div>
      </div>
    </div>

    <div class="label-up mt-14">Thông tin đơn</div>
    <div class="card">
      <div class="row between mb-8 fs-12">
        <span class="text-mute">Mã đơn</span><span class="mono">ord_01HX7K2M</span>
      </div>
      <div class="row between mb-8 fs-12">
        <span class="text-mute">Dịch vụ</span><span>Sửa điều hoà · L3+</span>
      </div>
      <div class="row between mb-8 fs-12">
        <span class="text-mute">Địa chỉ</span><span>15 Lê Lợi, Q.1</span>
      </div>
      <div class="row between fs-12">
        <span class="text-mute">Yêu cầu</span><span>Không lạnh, chảy nước</span>
      </div>
    </div>

    <button class="btn btn--outline btn--full mt-14" style="color:var(--c-red-text);border-color:var(--c-red-bg);" data-go="receipt">
      Huỷ đơn → xem hoá đơn demo
    </button>
  </div>
`;

SMP.customer.receipt = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'orders', title: 'Hoá đơn', right: '<button class="icon-btn"><i class="ti ti-share"></i></button>' })}

    <div class="text-center mt-12 mb-14">
      <div class="avatar avatar--lg avatar--tech" style="margin:0 auto 12px;">
        <i class="ti ti-check" style="font-size:30px;"></i>
      </div>
      <div class="fs-18 fw-bold">Hoàn thành</div>
      <div class="fs-12 text-mute mono mt-8" style="margin-top:4px;">ord_01HX7K2M · 26/05/2026</div>
    </div>

    <div class="card">
      <div class="row gap-12">
        ${avatar('TK', 'tech', 'lg')}
        <div class="flex-1">
          <div class="fs-15 fw-bold">Trương Minh K.</div>
          <div class="fs-12 text-mute mono">agt_T4K9 · L3+</div>
          <div class="row gap-4 mt-8" style="margin-top:4px;">
            <i class="ti ti-star-filled" style="font-size:13px;color:var(--c-amber);"></i>
            <span class="fs-12 text-amber">4.94 · 312 đơn</span>
          </div>
        </div>
        <button class="icon-btn"><i class="ti ti-phone"></i></button>
      </div>
    </div>

    <div class="label-up mt-14">Chi tiết hoá đơn</div>
    <div class="card flush">
      <div style="padding:14px 16px;border-bottom:1px dashed var(--border);">
        <div class="fs-14 fw-med mb-8">Sửa điều hoà · L3+</div>
        <div class="row between fs-12 text-mute mb-8" style="margin-bottom:4px;">
          <span>Phí khảo sát</span><span class="mono">50,000 đ</span>
        </div>
        <div class="row between fs-12 text-mute mb-8" style="margin-bottom:4px;">
          <span>Nạp gas R32 · 0.8kg</span><span class="mono">320,000 đ</span>
        </div>
        <div class="row between fs-12 text-mute mb-8" style="margin-bottom:4px;">
          <span>Thay block tụ điện 35μF</span><span class="mono">180,000 đ</span>
        </div>
        <div class="row between fs-12 text-mute">
          <span>Công thợ</span><span class="mono">250,000 đ</span>
        </div>
      </div>
      <div style="padding:14px 16px;">
        <div class="row between fs-12 text-mute mb-8" style="margin-bottom:4px;">
          <span>Tạm tính</span><span class="mono">800,000 đ</span>
        </div>
        <div class="row between fs-12 text-green mb-8" style="margin-bottom:4px;">
          <span>Giảm giá HOTSUMMER20</span><span class="mono">−160,000 đ</span>
        </div>
        <div class="row between fs-12 text-mute">
          <span>VAT 10%</span><span class="mono">64,000 đ</span>
        </div>
        <div class="divider"></div>
        <div class="row between">
          <span class="fs-14 fw-med">Tổng cộng</span>
          <span class="fs-18 fw-bold text-primary mono">704,000 đ</span>
        </div>
      </div>
    </div>

    <div class="label-up mt-14">Thanh toán</div>
    <div class="card">
      <div class="row between">
        <div class="row gap-8">
          <i class="ti ti-wallet" style="color:var(--c-primary);font-size:20px;"></i>
          <div class="fs-13">Ví SMP</div>
        </div>
        ${pill('Đã thanh toán', 'green')}
      </div>
      <div class="fs-11 text-faint mono mt-8">txn_01HX7K · 26/05 10:24</div>
    </div>

    <button class="btn btn--primary btn--full mt-14" data-go="rate">
      Đánh giá thợ →
    </button>
    <button class="btn btn--outline btn--full mt-8">
      <i class="ti ti-download"></i> Tải hoá đơn VAT (PDF)
    </button>
  </div>
`;

SMP.customer.rate = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'receipt', title: 'Đánh giá' })}

    <div class="text-center mt-12 mb-14">
      ${avatar('TK', 'tech', 'lg')}
      <div class="fs-15 fw-bold mt-8" style="margin-top:12px;">Trương Minh K.</div>
      <div class="fs-12 text-mute">Sửa điều hoà · 26/05</div>
    </div>

    <div class="text-center mb-14">
      <div class="fs-13 text-mute mb-12">Bạn thấy dịch vụ thế nào?</div>
      ${stars(5, 5, 'lg')}
      <div class="fs-14 fw-bold text-amber mt-12">Tuyệt vời!</div>
    </div>

    <div class="label-up">Chi tiết</div>
    <div class="card">
      <div class="row between mb-12">
        <span class="fs-13">Đúng giờ</span>
        ${stars(5, 5)}
      </div>
      <div class="row between mb-12">
        <span class="fs-13">Tay nghề</span>
        ${stars(4, 5)}
      </div>
      <div class="row between">
        <span class="fs-13">Thái độ</span>
        ${stars(5, 5)}
      </div>
    </div>

    <div class="label-up mt-14">Tag nhanh</div>
    <div class="chips">
      <button class="chip active">Đúng giờ</button>
      <button class="chip active">Chuyên nghiệp</button>
      <button class="chip active">Sạch sẽ</button>
      <button class="chip">Giải thích rõ</button>
      <button class="chip">Giá hợp lý</button>
    </div>

    <div class="label-up mt-14">Nhận xét (tuỳ chọn)</div>
    <textarea class="input input--text">Anh thợ làm rất nhanh, giải thích rõ ràng vấn đề và báo giá minh bạch. Sẽ gọi lại lần sau!</textarea>

    <button class="btn btn--primary btn--full mt-14" data-go="orders">Gửi đánh giá</button>
  </div>
`;

SMP.customer.orders = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    <div class="screen-header">
      <div class="screen-title">Đơn hàng</div>
      <button class="icon-btn"><i class="ti ti-filter"></i></button>
    </div>

    <div class="chips mb-14">
      <button class="chip active">Tất cả · 14</button>
      <button class="chip">Đang xử lý · 2</button>
      <button class="chip">Hoàn thành · 11</button>
      <button class="chip">Đã huỷ · 1</button>
    </div>

    <div class="order-card tap mb-12" data-go="tracking">
      <div class="order-card__head">
        <span class="order-card__id">ord_01HX7K2M</span>
        ${pill('Đang điều phối', 'amber')}
      </div>
      <div class="order-card__title">Sửa điều hoà · L3+</div>
      <div class="order-card__sub">15 Lê Lợi, Q.1 · hôm nay 09:38</div>
      <div class="order-card__foot">
        <span class="fs-12 text-mute">Đang tìm thợ phù hợp</span>
        <span class="fs-13 fw-med text-primary">—</span>
      </div>
    </div>

    <div class="order-card tap mb-12" data-go="receipt">
      <div class="order-card__head">
        <span class="order-card__id">ord_01HX5K3F</span>
        ${pill('Hoàn thành', 'green')}
      </div>
      <div class="order-card__title">Sửa điều hoà</div>
      <div class="order-card__sub">15 Lê Lợi, Q.1 · 24/05</div>
      <div class="order-card__foot">
        <div class="row gap-6">
          ${avatar('TK', 'tech', 'sm')}
          <span class="fs-12">Trương Minh K. · 4.94★</span>
        </div>
        <span class="fs-13 fw-med mono">704,000 đ</span>
      </div>
    </div>

    <div class="order-card mb-12">
      <div class="order-card__head">
        <span class="order-card__id">ord_01HX4Y2H</span>
        ${pill('Hoàn thành', 'green')}
      </div>
      <div class="order-card__title">Vệ sinh máy giặt</div>
      <div class="order-card__sub">15 Lê Lợi, Q.1 · 18/05</div>
      <div class="order-card__foot">
        <div class="row gap-6">
          ${avatar('LV', 'amber', 'sm')}
          <span class="fs-12">Lê Văn L. · 4.91★</span>
        </div>
        <span class="fs-13 fw-med mono">450,000 đ</span>
      </div>
    </div>

    <div class="order-card mb-12">
      <div class="order-card__head">
        <span class="order-card__id">ord_01HX3X8K</span>
        ${pill('Đã huỷ', 'gray')}
      </div>
      <div class="order-card__title text-mute">Sửa đường ống nước</div>
      <div class="order-card__sub text-faint">15 Lê Lợi, Q.1 · 14/05</div>
      <div class="order-card__foot">
        <span class="fs-12 text-faint">Huỷ bởi khách hàng</span>
        <span class="fs-13 text-faint">—</span>
      </div>
    </div>

    <div class="order-card mb-12">
      <div class="order-card__head">
        <span class="order-card__id">ord_01HX2P5L</span>
        ${pill('Hoàn thành', 'green')}
      </div>
      <div class="order-card__title">Sửa bình nóng lạnh</div>
      <div class="order-card__sub">15 Lê Lợi, Q.1 · 10/05</div>
      <div class="order-card__foot">
        <div class="row gap-6">
          ${avatar('PM', 'purple', 'sm')}
          <span class="fs-12">Phạm Q.M. · 4.86★</span>
        </div>
        <span class="fs-13 fw-med mono">280,000 đ</span>
      </div>
    </div>
  </div>
`;

SMP.customer.wallet = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    <div class="screen-header">
      <div class="screen-title">Ví & thanh toán</div>
      <button class="icon-btn"><i class="ti ti-settings"></i></button>
    </div>

    <div class="wallet-card">
      <div class="wallet-card__label">SỐ DƯ KHẢ DỤNG</div>
      <div class="wallet-card__value">340,000 đ</div>
      <div class="wallet-card__sub">Hạng Silver · còn 1 tháng đến Gold</div>
      <div class="wallet-card__actions">
        <button class="wallet-card__btn"><i class="ti ti-plus"></i> Nạp tiền</button>
        <button class="wallet-card__btn"><i class="ti ti-arrow-down"></i> Rút tiền</button>
      </div>
    </div>

    <div class="label-up mt-14">Phương thức thanh toán</div>
    <div class="card flush">
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-amber-bg);color:var(--c-amber-text);">
          <i class="ti ti-wallet"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title fw-med">Ví SMP</div>
          <div class="list-item__sub">Số dư · 340,000 đ</div>
        </div>
        ${pill('Mặc định', 'blue', true)}
      </div>
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-red-bg);color:var(--c-red-text);">
          <i class="ti ti-credit-card"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title fw-med">VCB Mastercard</div>
          <div class="list-item__sub mono">•••• 4821</div>
        </div>
        <i class="ti ti-chevron-right list-item__chev"></i>
      </div>
      <div class="list-item">
        <div class="list-item__icon" style="background:#EEEDFE;color:#3C3489;">
          <i class="ti ti-device-mobile"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title fw-med">MoMo</div>
          <div class="list-item__sub mono">+84 90 ••• 7842</div>
        </div>
        <i class="ti ti-chevron-right list-item__chev"></i>
      </div>
    </div>
    <button class="btn btn--outline btn--full mt-8">
      <i class="ti ti-plus"></i> Thêm phương thức
    </button>

    <div class="label-up mt-14">Giao dịch gần đây</div>
    <div class="card flush">
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-red-bg);color:var(--c-red-text);">
          <i class="ti ti-arrow-up-right"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title fs-13">Thanh toán đơn ord_01HX5K</div>
          <div class="list-item__sub">24/05 · 10:24</div>
        </div>
        <span class="fs-13 fw-med text-red mono">−704,000</span>
      </div>
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-green-bg);color:var(--c-green-text);">
          <i class="ti ti-arrow-down-left"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title fs-13">Nạp ví · VCB Mastercard</div>
          <div class="list-item__sub">24/05 · 09:12</div>
        </div>
        <span class="fs-13 fw-med text-green mono">+1,000,000</span>
      </div>
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-red-bg);color:var(--c-red-text);">
          <i class="ti ti-arrow-up-right"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title fs-13">Thanh toán đơn ord_01HX4Y</div>
          <div class="list-item__sub">18/05 · 15:42</div>
        </div>
        <span class="fs-13 fw-med text-red mono">−450,000</span>
      </div>
    </div>
  </div>
`;

SMP.customer.profile = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    <div class="screen-header">
      <div class="screen-title">Tài khoản</div>
      <button class="icon-btn"><i class="ti ti-settings"></i></button>
    </div>

    <div class="card text-center" style="padding:18px;">
      ${avatar('NA', '', 'lg')}
      <div class="fs-15 fw-bold mt-12" style="margin-top:10px;">Nguyễn Văn A</div>
      <div class="fs-12 text-mute">+84 90 ••• 7842 · nguyenvana@email.com</div>
      <div class="divider"></div>
      <div class="row" style="justify-content:space-around;">
        <div><div class="fs-18 fw-bold">14</div><div class="fs-11 text-mute">đơn</div></div>
        <div><div class="fs-18 fw-bold text-amber">4.8★</div><div class="fs-11 text-mute">điểm KH</div></div>
        <div><div class="fs-18 fw-bold">Silver</div><div class="fs-11 text-mute">hạng</div></div>
      </div>
    </div>

    <div class="card tap" style="background:var(--c-tech-bg);border-color:var(--c-tech-border);padding:14px;cursor:pointer;" data-go="switch">
      <div class="row gap-12">
        <div style="width:38px;height:38px;border-radius:10px;background:var(--c-tech);color:white;display:grid;place-items:center;">
          <i class="ti ti-arrows-exchange" style="font-size:18px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-13 fw-bold" style="color:var(--c-tech-text);">Chuyển sang chế độ Thợ</div>
          <div class="fs-11" style="color:var(--c-tech-dark);">Bạn đã đăng ký Technician</div>
        </div>
        <i class="ti ti-chevron-right" style="color:var(--c-tech-dark);"></i>
      </div>
    </div>

    <div class="label-up mt-14">Tài khoản</div>
    <div class="card flush">
      ${listItem('user', 'Thông tin cá nhân')}
      ${listItem('map-pin', 'Sổ địa chỉ', '3 địa chỉ đã lưu')}
      ${listItem('shield-check', 'Bảo mật & 2FA', 'Đã bật')}
      ${listItem('bell', 'Thông báo', 'Push + SMS')}
      ${listItem('language', 'Ngôn ngữ', 'Tiếng Việt')}
    </div>

    <div class="label-up mt-14">Hỗ trợ</div>
    <div class="card flush">
      ${listItem('headset', 'Hỗ trợ khách hàng', 'Hotline 1900 0000')}
      ${listItem('file-text', 'Điều khoản dịch vụ')}
      ${listItem('shield-lock', 'Chính sách bảo mật')}
      ${listItem('info-circle', 'Về SMP', 'v2.4.1')}
    </div>

    <button class="btn btn--outline btn--full mt-14" style="color:var(--c-red-text);border-color:var(--c-red-bg);">
      <i class="ti ti-logout"></i> Đăng xuất
    </button>
  </div>
`;

SMP.customer.switch = () => `
  ${statusBar()}
  <div class="screen screen-enter" style="min-height:100%;display:flex;flex-direction:column;justify-content:center;padding:40px 20px;text-align:center;">
    <div class="flex-1" style="display:flex;flex-direction:column;justify-content:center;">
      <div class="avatar avatar--lg avatar--tech" style="width:88px;height:88px;margin:0 auto 20px;font-size:36px;">
        <i class="ti ti-tool"></i>
      </div>
      <div class="fs-18 fw-bold" style="font-size:22px;">Chuyển sang chế độ Thợ</div>
      <div class="fs-13 text-mute mt-8" style="margin-top:8px;line-height:1.6;">Bạn sẽ thấy giao diện nhận việc, quản lý kỹ năng và theo dõi thu nhập.</div>

      <div class="card mt-14" style="background:var(--bg-elev);border:none;text-align:left;margin-top:24px;">
        <div class="row mb-8 gap-8">
          <i class="ti ti-circle-check" style="color:var(--c-tech);font-size:18px;"></i>
          <span class="fs-13">KYC đã xác minh</span>
        </div>
        <div class="row mb-8 gap-8">
          <i class="ti ti-circle-check" style="color:var(--c-tech);font-size:18px;"></i>
          <span class="fs-13">3 kỹ năng đã chứng nhận</span>
        </div>
        <div class="row gap-8">
          <i class="ti ti-circle-check" style="color:var(--c-tech);font-size:18px;"></i>
          <span class="fs-13">Tài khoản ngân hàng đã liên kết</span>
        </div>
      </div>
    </div>
    <button class="btn btn--tech btn--full mt-14" onclick="window.smpSwitchMode('technician')">Chuyển ngay</button>
    <button class="btn btn--ghost btn--full mt-8" data-go="profile">Để sau</button>
  </div>
`;

function listItem(icon, title, sub) {
  return `<div class="list-item">
    <div class="list-item__icon"><i class="ti ti-${icon}"></i></div>
    <div class="list-item__body">
      <div class="list-item__title">${title}</div>
      ${sub ? `<div class="list-item__sub">${sub}</div>` : ''}
    </div>
    <i class="ti ti-chevron-right list-item__chev"></i>
  </div>`;
}

// ============ TECHNICIAN SCREENS ============

SMP.technician.home = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${homeHeader('Trương Minh K.', 'TK', true)}

    <div class="card" style="background:var(--c-tech-bg);border-color:var(--c-tech-border);">
      <div class="row between">
        <div class="row gap-8">
          <div style="width:12px;height:12px;border-radius:50%;background:var(--c-tech);box-shadow:0 0 0 5px rgba(29,158,117,0.2);"></div>
          <div>
            <div class="fs-13 fw-bold" style="color:var(--c-tech-text);">Đang nhận việc</div>
            <div class="fs-11" style="color:var(--c-tech-dark);">HCMC · bán kính 5km · 3 kỹ năng active</div>
          </div>
        </div>
        <label class="toggle">
          <input type="checkbox" checked>
          <span class="toggle__slider"></span>
        </label>
      </div>
    </div>

    <div class="stat-grid mt-14" style="grid-template-columns:1fr 1fr;">
      <div class="stat">
        <div class="stat__label">Hôm nay</div>
        <div class="stat__value text-tech mono">+1.24M</div>
        <div class="stat__sub">5 đơn hoàn thành</div>
      </div>
      <div class="stat">
        <div class="stat__label">Tuần này</div>
        <div class="stat__value mono">+8.4M</div>
        <div class="stat__sub text-green">▲ 12% so tuần trước</div>
      </div>
    </div>

    <div class="label-up mt-14">Cơ hội mới</div>
    <div class="order-card tap" style="border-color:var(--c-amber);" data-go="offer">
      <div class="order-card__head">
        ${pill('Đơn mới · 29 giây', 'amber')}
        <span class="fs-13 fw-bold text-amber mono">+420k</span>
      </div>
      <div class="order-card__title">Sửa điều hoà · L3+</div>
      <div class="order-card__sub">2.4km · 15 Lê Lợi, Q.1</div>
      <button class="btn btn--tech btn--full mt-12">Xem chi tiết →</button>
    </div>

    <div class="label-up mt-14">Việc đang làm</div>
    <div class="order-card tap" data-go="job">
      <div class="order-card__head">
        ${pill('Đang sửa', 'green')}
        <span class="fs-11 text-faint">Bắt đầu 22 phút trước</span>
      </div>
      <div class="order-card__title">Sửa máy giặt</div>
      <div class="order-card__sub">221 Nguyễn Đình Chiểu, Q.3</div>
      <div class="order-card__foot">
        <div class="row gap-6">
          ${avatar('TB', 'amber', 'sm')}
          <span class="fs-12">Trần Thị B.</span>
        </div>
        <span class="fs-12 text-tech fw-med mono">+380k dự kiến</span>
      </div>
    </div>

    <div class="row between mt-16 mb-12">
      <div class="fs-15 fw-med">Mới · v3.5</div>
      <span class="fs-12 text-tech fw-med" data-go="step-detail">Xem chi tiết →</span>
    </div>
    <div class="card tap" data-go="step-detail" style="background: linear-gradient(135deg, var(--c-tech) 0%, #0e7556 100%); color: white; border: none;">
      <div class="row gap-12">
        <div style="width:44px;height:44px;border-radius:10px;background:white;color:var(--c-tech);display:grid;place-items:center;">
          <i class="ti ti-users-group" style="font-size:22px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-14 fw-bold">Làm việc theo team</div>
          <div class="fs-12 mt-8" style="opacity: 0.85; margin-top:2px;">Mời thợ phụ · chia tỷ lệ ăn chia</div>
        </div>
        <i class="ti ti-chevron-right" style="font-size:18px; opacity:0.7;"></i>
      </div>
    </div>

    <div class="label-up mt-14">Chỉ số hoạt động</div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="stat">
        <div class="stat__label">Rating</div>
        <div class="stat__value text-amber">4.94★</div>
      </div>
      <div class="stat">
        <div class="stat__label">Hoàn thành</div>
        <div class="stat__value">98%</div>
      </div>
      <div class="stat">
        <div class="stat__label">Accept rate</div>
        <div class="stat__value">87%</div>
      </div>
    </div>
  </div>
`;

SMP.technician.offer = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'home', title: '<span style="color:var(--c-red-text);">Đơn mới · 29s</span>', right: '<button class="icon-btn"><i class="ti ti-x"></i></button>' })}

    <div class="text-center mb-14">
      <div class="countdown">
        <svg class="countdown__circle" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="56" fill="none" stroke="var(--c-amber-bg)" stroke-width="8"/>
          <circle cx="65" cy="65" r="56" fill="none" stroke="var(--c-amber)" stroke-width="8"
            stroke-dasharray="352" stroke-dashoffset="80" stroke-linecap="round"/>
        </svg>
        <div class="countdown__num">
          <strong>29</strong>
          <span>GIÂY</span>
        </div>
      </div>
    </div>

    <div class="card" style="background:var(--c-amber-bg);border-color:#FAC775;">
      <div class="row between mb-12">
        <div class="fs-15 fw-bold" style="color:#412402;">Sửa điều hoà · L3+</div>
        ${pill('Urgent', 'red')}
      </div>
      <div class="row" style="gap:14px;padding-top:12px;border-top:1px solid #FAC775;">
        <div>
          <div class="fs-11 text-amber fw-bold">DỰ KIẾN</div>
          <div class="fs-18 fw-bold mono" style="color:#412402;">+420k</div>
        </div>
        <div>
          <div class="fs-11 text-amber fw-bold">KHOẢNG CÁCH</div>
          <div class="fs-18 fw-bold" style="color:#412402;">2.4 km</div>
        </div>
        <div>
          <div class="fs-11 text-amber fw-bold">DI CHUYỂN</div>
          <div class="fs-18 fw-bold" style="color:#412402;">8 phút</div>
        </div>
      </div>
    </div>

    <div class="map mt-14" style="height:160px;">
      <div class="map-pin map-pin--tech" style="left:28%;top:62%;"></div>
      <div class="map-pin" style="left:72%;top:30%;background:var(--c-amber);"></div>
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
        <path d="M 90 100 Q 140 80 230 50" stroke="var(--c-amber)" stroke-width="2" stroke-dasharray="5,4" fill="none"/>
      </svg>
    </div>

    <div class="label-up">Khách hàng</div>
    <div class="card">
      <div class="row gap-12">
        ${avatar('NA')}
        <div class="flex-1">
          <div class="fs-13 fw-bold">Nguyễn Văn A.</div>
          <div class="fs-11 text-mute">15 Lê Lợi, P. Bến Nghé, Q.1</div>
          <div class="row gap-4 mt-8" style="margin-top:4px;">
            <i class="ti ti-star-filled" style="font-size:12px;color:var(--c-amber);"></i>
            <span class="fs-11">4.8 · 14 đơn đã đặt</span>
          </div>
        </div>
      </div>
    </div>

    <div class="label-up mt-14">Vấn đề khách báo</div>
    <div class="card">
      <div class="chips mb-12">
        ${pill('Không lạnh', 'gray', true)}
        ${pill('Chảy nước', 'gray', true)}
      </div>
      <div class="fs-12 text-mute" style="font-style:italic;">"Máy lạnh phòng ngủ chạy được 20p thì tự tắt, có nhỏ vài giọt nước phía trong."</div>
    </div>

    <div class="row gap-8 mt-14">
      <button class="btn btn--danger flex-1" data-go="home">Từ chối</button>
      <button class="btn btn--tech flex-1" style="flex:2;" data-go="job">Nhận đơn</button>
    </div>
  </div>
`;

SMP.technician.job = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'home', title: 'Công việc', right: '<button class="icon-btn"><i class="ti ti-dots"></i></button>' })}

    <div class="card">
      <div class="row between mb-8">
        ${pill('Đang sửa', 'green')}
        <span class="order-card__id">ord_01HX7K2M</span>
      </div>
      <div class="fs-15 fw-bold">Sửa điều hoà · L3+</div>
      <div class="fs-12 text-mute mt-8" style="margin-top:2px;">15 Lê Lợi, P. Bến Nghé, Q.1</div>
    </div>

    <div class="label-up mt-14">Tiến độ</div>
    <div class="card">
      <div class="timeline">
        <div class="timeline__col">
          <div class="timeline__dot done"><i class="ti ti-check"></i></div>
          <div class="timeline__line done"></div>
          <div class="timeline__dot done"><i class="ti ti-check"></i></div>
          <div class="timeline__line done"></div>
          <div class="timeline__dot done"><i class="ti ti-check"></i></div>
          <div class="timeline__line done"></div>
          <div class="timeline__dot active tech"><i class="ti ti-loader"></i></div>
          <div class="timeline__line"></div>
          <div class="timeline__dot">5</div>
        </div>
        <div class="timeline__content">
          <div class="timeline__row"><span>Nhận đơn</span><span class="ts">09:38</span></div>
          <div class="timeline__row"><span>Đang di chuyển</span><span class="ts">09:41</span></div>
          <div class="timeline__row"><span>Đã đến nơi</span><span class="ts">09:54</span></div>
          <div class="timeline__row active tech"><span>Đang sửa chữa</span><span class="ts">10:03</span></div>
          <div class="timeline__row pending"><span>Hoàn tất</span><span class="ts">—</span></div>
        </div>
      </div>
    </div>

    <div class="label-up mt-14">Khách hàng</div>
    <div class="card">
      <div class="row gap-12">
        ${avatar('NA')}
        <div class="flex-1">
          <div class="fs-13 fw-bold">Nguyễn Văn A.</div>
          <div class="fs-11 text-mute mono">+84 90 ••• 7842</div>
        </div>
        <button class="icon-btn" style="background:var(--c-tech-bg);color:var(--c-tech-text);border-color:var(--c-tech-border);"><i class="ti ti-phone"></i></button>
        <button class="icon-btn" style="background:var(--c-primary-bg);color:var(--c-primary);border-color:var(--c-primary-border);"><i class="ti ti-message-circle"></i></button>
      </div>
    </div>

    <div class="label-up mt-14">Báo giá khảo sát</div>
    <div class="card flush">
      <div class="list-item" style="padding:12px 14px;">
        <div class="flex-1">
          <div class="fs-13">Nạp gas R32 · 0.8kg</div>
        </div>
        <span class="fs-13 mono">320,000</span>
      </div>
      <div class="list-item" style="padding:12px 14px;">
        <div class="flex-1">
          <div class="fs-13">Thay block tụ điện 35μF</div>
        </div>
        <span class="fs-13 mono">180,000</span>
      </div>
      <div class="list-item" style="padding:12px 14px;">
        <div class="flex-1">
          <div class="fs-13">Công thợ</div>
        </div>
        <span class="fs-13 mono">250,000</span>
      </div>
      <div class="list-item" style="padding:14px;background:var(--bg-elev);">
        <div class="flex-1">
          <span class="fs-14 fw-bold">Tổng báo giá</span>
        </div>
        <span class="fs-15 fw-bold text-tech mono">750,000 đ</span>
      </div>
    </div>
    <div class="row gap-8 mt-8">
      <button class="btn btn--outline flex-1" style="padding:10px;font-size:12px;"><i class="ti ti-plus"></i> Thêm mục</button>
      <button class="btn btn--outline flex-1" style="padding:10px;font-size:12px;"><i class="ti ti-camera"></i> Ảnh trước/sau</button>
    </div>

    <button class="btn btn--tech btn--full mt-14">Hoàn tất công việc</button>
  </div>
`;

SMP.technician.earnings = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    <div class="screen-header">
      <div class="screen-title">Thu nhập</div>
      <button class="icon-btn"><i class="ti ti-calendar"></i></button>
    </div>

    <div class="wallet-card tech">
      <div class="wallet-card__label">CHỜ THANH TOÁN</div>
      <div class="wallet-card__value">4,280,000 đ</div>
      <div class="wallet-card__sub">Chuyển vào VCB ••8821 tối nay 18:00</div>
    </div>

    <div class="stat-grid mt-14" style="grid-template-columns:1fr 1fr;">
      <div class="stat">
        <div class="stat__label">Hôm nay</div>
        <div class="stat__value mono">1,240,000</div>
        <div class="stat__sub">5 đơn · ▲ 12%</div>
      </div>
      <div class="stat">
        <div class="stat__label">Tháng này</div>
        <div class="stat__value mono">32,840,000</div>
        <div class="stat__sub text-green">▲ 18% MoM</div>
      </div>
    </div>

    <div class="card mt-14">
      <div class="fs-13 fw-med mb-12">Thu nhập 7 ngày qua</div>
      <div class="bar-chart">
        <div class="bar-chart__bar" style="height:60%;"><span class="bar-chart__bar__label">T2</span></div>
        <div class="bar-chart__bar" style="height:75%;"><span class="bar-chart__bar__label">T3</span></div>
        <div class="bar-chart__bar" style="height:55%;"><span class="bar-chart__bar__label">T4</span></div>
        <div class="bar-chart__bar" style="height:88%;"><span class="bar-chart__bar__label">T5</span></div>
        <div class="bar-chart__bar" style="height:70%;"><span class="bar-chart__bar__label">T6</span></div>
        <div class="bar-chart__bar" style="height:95%;"><span class="bar-chart__bar__label">T7</span></div>
        <div class="bar-chart__bar today" style="height:62%;"><span class="bar-chart__bar__label">CN</span></div>
      </div>
    </div>

    <div class="label-up mt-14">Phân tách hôm nay</div>
    <div class="card flush">
      <div class="list-item">
        <div class="flex-1 fs-13">Doanh thu gộp</div>
        <span class="fs-13 fw-med mono">1,548,000</span>
      </div>
      <div class="list-item">
        <div class="flex-1 fs-13 text-mute">Hoa hồng nền tảng (20%)</div>
        <span class="fs-13 text-mute mono">−308,000</span>
      </div>
      <div class="list-item" style="background:var(--bg-elev);">
        <div class="flex-1 fs-14 fw-bold">Thực nhận</div>
        <span class="fs-15 fw-bold text-tech mono">1,240,000 đ</span>
      </div>
    </div>

    <div class="label-up mt-14">Giao dịch</div>
    <div class="card flush">
      ${earnItem('ord_01HX7K', 'Sửa điều hoà', 'Hôm nay 10:24', '+560,000')}
      ${earnItem('ord_01HX7G', 'Vệ sinh điều hoà', 'Hôm nay 08:42', '+280,000')}
      ${earnItem('ord_01HX7F', 'Sửa máy giặt', 'Hôm qua 17:18', '+450,000')}
    </div>

    <button class="btn btn--outline btn--full mt-14">
      <i class="ti ti-download"></i> Xuất sao kê tháng
    </button>
  </div>
`;

function earnItem(id, label, time, amount) {
  return `<div class="list-item">
    <div class="list-item__icon" style="background:var(--c-tech-bg);color:var(--c-tech-text);">
      <i class="ti ti-arrow-down-left"></i>
    </div>
    <div class="list-item__body">
      <div class="list-item__title fs-13">${label}</div>
      <div class="list-item__sub mono">${id} · ${time}</div>
    </div>
    <span class="fs-13 fw-med text-tech mono">${amount}</span>
  </div>`;
}

SMP.technician.skills = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    <div class="screen-header">
      <div class="screen-title">Kỹ năng</div>
      <button class="icon-btn"><i class="ti ti-plus"></i></button>
    </div>

    <div class="card" style="background:var(--c-amber-bg);border-color:#FAC775;padding:14px;">
      <div class="row gap-12">
        <div style="width:44px;height:44px;border-radius:50%;background:white;color:var(--c-amber-text);display:grid;place-items:center;">
          <i class="ti ti-trophy" style="font-size:22px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-14 fw-bold" style="color:#412402;">Hạng Gold · Top 8%</div>
          <div class="fs-12 text-amber">Hoàn thành 312 đơn · 4.94★ trung bình</div>
        </div>
      </div>
    </div>

    <div class="label-up mt-14">Kỹ năng chính</div>
    ${skillCard('air-conditioning', 'Sửa điều hoà', 'L4 · chứng nhận', true, 184, '4.96', 92)}
    ${skillCard('wash-machine', 'Sửa máy giặt', 'L3 · chứng nhận', true, 87, '4.91', 78)}
    ${skillCard('bolt', 'Sửa điện', 'L2 · cơ bản', false, 41, '4.82', 45)}

    <div class="label-up mt-14">Có thể nâng cấp</div>
    <div class="card" style="background:var(--bg-elev);border:none;">
      <div class="row gap-12">
        <div style="width:38px;height:38px;border-radius:10px;background:var(--c-primary-bg);color:var(--c-primary);display:grid;place-items:center;">
          <i class="ti ti-droplet" style="font-size:20px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Sửa nước</div>
          <div class="fs-11 text-mute">Thi đánh giá để mở · ước tính +30% đơn/ngày</div>
        </div>
        <button class="btn btn--outline" style="padding:7px 12px;font-size:12px;">Đăng ký</button>
      </div>
    </div>

    <div class="label-up mt-14">Chứng chỉ & KYC</div>
    <div class="card flush">
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-tech-bg);color:var(--c-tech-text);">
          <i class="ti ti-id"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title">CMND/CCCD</div>
          <div class="list-item__sub text-green">Đã xác minh · 14/01/2024</div>
        </div>
        <i class="ti ti-circle-check" style="color:var(--c-tech);font-size:20px;"></i>
      </div>
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-tech-bg);color:var(--c-tech-text);">
          <i class="ti ti-certificate"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title">Chứng chỉ điện lạnh L4</div>
          <div class="list-item__sub text-green">Hết hạn · 03/2027</div>
        </div>
        <i class="ti ti-circle-check" style="color:var(--c-tech);font-size:20px;"></i>
      </div>
      <div class="list-item">
        <div class="list-item__icon" style="background:var(--c-amber-bg);color:var(--c-amber-text);">
          <i class="ti ti-shield-check"></i>
        </div>
        <div class="list-item__body">
          <div class="list-item__title">Bảo hiểm nghề nghiệp</div>
          <div class="list-item__sub text-amber">Hết hạn sau 23 ngày</div>
        </div>
        <button class="btn btn--outline" style="padding:5px 10px;font-size:11px;">Gia hạn</button>
      </div>
    </div>
  </div>
`;

function skillCard(icon, name, level, certified, jobs, rating, pct) {
  const cls = certified ? '' : 'amber';
  const bg = certified ? 'var(--c-tech-bg)' : 'var(--c-amber-bg)';
  const color = certified ? 'var(--c-tech-text)' : 'var(--c-amber-text)';
  return `<div class="card">
    <div class="row gap-12 mb-12">
      <div style="width:38px;height:38px;border-radius:10px;background:${bg};color:${color};display:grid;place-items:center;">
        <i class="ti ti-${icon}" style="font-size:20px;"></i>
      </div>
      <div class="flex-1">
        <div class="fs-13 fw-bold">${name}</div>
        <div class="fs-11" style="color:${color};">${level}</div>
      </div>
      <i class="ti ti-chevron-right text-faint"></i>
    </div>
    <div class="skill-bar">
      <div class="skill-bar__fill ${cls}" style="width:${pct}%;"></div>
    </div>
    <div class="row between fs-11 text-mute">
      <span>${jobs} đơn hoàn thành</span>
      <span><i class="ti ti-star-filled" style="font-size:11px;color:var(--c-amber);"></i> ${rating}</span>
    </div>
  </div>`;
}

SMP.technician.profile = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    <div class="screen-header">
      <div class="screen-title">Tài khoản</div>
      <button class="icon-btn"><i class="ti ti-settings"></i></button>
    </div>

    <div class="card text-center" style="padding:18px;">
      ${avatar('TK', 'tech', 'lg')}
      <div class="fs-15 fw-bold mt-12" style="margin-top:10px;">Trương Minh K.</div>
      <div class="fs-12 text-mute mono">agt_T4K9 · L3+ Technician</div>
      <div class="divider"></div>
      <div class="row" style="justify-content:space-around;">
        <div><div class="fs-18 fw-bold text-amber">4.94★</div><div class="fs-11 text-mute">rating</div></div>
        <div><div class="fs-18 fw-bold">312</div><div class="fs-11 text-mute">đơn</div></div>
        <div><div class="fs-18 fw-bold text-amber">Gold</div><div class="fs-11 text-mute">hạng</div></div>
      </div>
    </div>

    <div class="card tap" style="background:var(--c-primary-bg);border-color:var(--c-primary-border);padding:14px;cursor:pointer;" data-go="switch">
      <div class="row gap-12">
        <div style="width:38px;height:38px;border-radius:10px;background:var(--c-primary);color:white;display:grid;place-items:center;">
          <i class="ti ti-arrows-exchange" style="font-size:18px;"></i>
        </div>
        <div class="flex-1">
          <div class="fs-13 fw-bold" style="color:var(--c-primary-text);">Chuyển sang chế độ Khách</div>
          <div class="fs-11" style="color:#3730a3;">Cùng tài khoản · không cần đăng nhập lại</div>
        </div>
        <i class="ti ti-chevron-right" style="color:var(--c-primary);"></i>
      </div>
    </div>

    <div class="label-up mt-14">Hồ sơ thợ</div>
    <div class="card flush">
      ${listItem('user', 'Thông tin cá nhân')}
      ${listItem('certificate', 'Kỹ năng & chứng chỉ', '3 active · 1 cần gia hạn')}
      ${listItem('map-pin', 'Vùng làm việc', 'HCMC · bán kính 5km')}
      ${listItem('clock', 'Lịch trực', '08:00 — 20:00 các ngày')}
    </div>

    <div class="label-up mt-14">Tài chính</div>
    <div class="card flush">
      ${listItem('credit-card', 'Tài khoản nhận tiền', 'VCB ••8821')}
      ${listItem('file-invoice', 'Hợp đồng dịch vụ', 'Đang hiệu lực · ký 14/01/2024')}
      ${listItem('receipt-tax', 'Mã số thuế cá nhân', '034••••8421')}
    </div>

    <div class="label-up mt-14">Hỗ trợ</div>
    <div class="card flush">
      ${listItem('headset', 'Hỗ trợ kỹ thuật viên', 'Hotline 1900 0000')}
      ${listItem('book', 'Sổ tay kỹ thuật viên')}
      ${listItem('info-circle', 'Về SMP', 'v2.4.1')}
    </div>

    <button class="btn btn--outline btn--full mt-14" style="color:var(--c-red-text);border-color:var(--c-red-bg);">
      <i class="ti ti-logout"></i> Đăng xuất
    </button>
  </div>
`;

SMP.technician.switch = () => `
  ${statusBar()}
  <div class="screen screen-enter" style="min-height:100%;display:flex;flex-direction:column;justify-content:center;padding:40px 20px;text-align:center;">
    <div class="flex-1" style="display:flex;flex-direction:column;justify-content:center;">
      <div class="avatar avatar--lg" style="width:88px;height:88px;margin:0 auto 20px;font-size:36px;">
        <i class="ti ti-user"></i>
      </div>
      <div class="fs-18 fw-bold" style="font-size:22px;">Chuyển sang chế độ Khách</div>
      <div class="fs-13 text-mute mt-8" style="margin-top:8px;line-height:1.6;">Bạn sẽ thấy giao diện đặt dịch vụ và quản lý đơn của mình.</div>
    </div>
    <button class="btn btn--primary btn--full mt-14" onclick="window.smpSwitchMode('customer')">Chuyển ngay</button>
    <button class="btn btn--ghost btn--full mt-8" data-go="profile">Để sau</button>
  </div>
`;

// ============ TAB CONFIG ============

SMP.tabs = {
  customer: [
    { id: 'home', label: 'Trang chủ', icon: 'home' },
    { id: 'orders', label: 'Đơn hàng', icon: 'list' },
    { id: 'wallet', label: 'Ví tiền', icon: 'wallet' },
    { id: 'profile', label: 'Tài khoản', icon: 'user' },
  ],
  technician: [
    { id: 'home', label: 'Trang chủ', icon: 'home' },
    { id: 'job', label: 'Việc làm', icon: 'tool' },
    { id: 'earnings', label: 'Thu nhập', icon: 'coin' },
    { id: 'skills', label: 'Kỹ năng', icon: 'certificate' },
    { id: 'profile', label: 'Tài khoản', icon: 'user' },
  ],
};

SMP.screenNames = {
  customer: {
    home: 'Trang chủ', booking: 'Đặt dịch vụ', tracking: 'Đang điều phối',
    receipt: 'Hoá đơn', rate: 'Đánh giá', orders: 'Đơn hàng',
    wallet: 'Ví & thanh toán', profile: 'Tài khoản', switch: 'Chuyển mode',
  },
  technician: {
    home: 'Trang chủ', offer: 'Nhận đơn', job: 'Công việc',
    earnings: 'Thu nhập', skills: 'Kỹ năng', profile: 'Tài khoản', switch: 'Chuyển mode',
  },
};

SMP.quickJumps = {
  customer: ['home', 'booking', 'tracking', 'receipt', 'rate', 'orders', 'wallet', 'profile'],
  technician: ['home', 'offer', 'job', 'earnings', 'skills', 'profile'],
};

SMP.quickJumpIcons = {
  home: 'home', booking: 'tool', tracking: 'radar', receipt: 'receipt',
  rate: 'star', orders: 'list', wallet: 'wallet', profile: 'user',
  offer: 'bell-ringing', job: 'tool', earnings: 'coin', skills: 'certificate',
};
