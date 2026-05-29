// SMP Mobile App — v3.5+ Screens
// Multi-agent step assignment + Warranty packages
// Customer: warranty-catalog, warranty-purchase, my-warranties, create-claim
// Technician: step-detail, invite-helper, earnings-breakdown

// ============ CUSTOMER · WARRANTY SCREENS ============

SMP.customer['warranty-catalog'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'home', title: 'Gói bảo hành', right: '<button class="icon-btn"><i class="ti ti-info-circle"></i></button>' })}

    <div class="card" style="background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%); color: white; border: none;">
      <div class="fs-12" style="opacity: 0.85;">Mới · v3.5</div>
      <div class="fs-18 fw-bold mt-4">Gói bảo trì thiết bị</div>
      <div class="fs-12 mt-4" style="opacity: 0.9;">Vệ sinh định kỳ + sửa miễn phí · Tiết kiệm 40% so với sửa lẻ</div>
    </div>

    <div class="label-up mt-16">Máy lạnh · 2 gói</div>

    <div class="card tap" data-go="warranty-purchase" style="position: relative;">
      <span class="pill pill--green no-dot" style="position: absolute; top: 12px; right: 12px; font-size: 9px; padding: 3px 8px;">BÁN CHẠY</span>
      <div class="row gap-12">
        <div style="font-size: 32px;">❄️</div>
        <div class="flex-1">
          <div class="fs-15 fw-bold">AC Basic 1 năm</div>
          <div class="fs-11 text-mute mt-4">4 vệ sinh + 4 sửa miễn phí</div>
        </div>
      </div>
      <div class="row between mt-12 pt-12" style="border-top: 1px solid var(--border);">
        <div>
          <div class="fs-20 fw-bold text-primary mono">1.200.000 ₫</div>
          <div class="fs-11 text-mute mono">≈ 100k / tháng</div>
        </div>
        <button class="btn btn--primary" style="padding: 8px 16px; font-size: 12px;">Xem</button>
      </div>
    </div>

    <div class="card tap" style="border-color: #C4B5FD; background: linear-gradient(to right, #FAF7FF 0%, white 50%);">
      <span class="pill no-dot" style="position: absolute; background: #EDE9FE; color: #6D28D9; font-size: 9px; padding: 3px 8px; top: 12px; right: 12px;">PREMIUM</span>
      <div class="row gap-12">
        <div style="font-size: 32px;">❄️</div>
        <div class="flex-1">
          <div class="fs-15 fw-bold">AC Premium 1 năm</div>
          <div class="fs-11 text-mute mt-4">4 vệ sinh + 8 sửa · ưu tiên 24/7</div>
        </div>
      </div>
      <div class="row between mt-12 pt-12" style="border-top: 1px solid var(--border);">
        <div>
          <div class="fs-20 fw-bold mono" style="color: #6D28D9;">1.800.000 ₫</div>
          <div class="fs-11 text-mute mono">≈ 150k / tháng</div>
        </div>
        <button class="btn" style="padding: 8px 16px; font-size: 12px; background: #6D28D9; color: white;">Xem</button>
      </div>
    </div>

    <div class="label-up mt-16">Thiết bị khác</div>

    <div class="card tap">
      <div class="row gap-12">
        <div style="font-size: 28px;">🧺</div>
        <div class="flex-1">
          <div class="fs-14 fw-bold">Máy giặt Basic 1 năm</div>
          <div class="fs-11 text-mute mt-4">2 vệ sinh + 3 sửa</div>
        </div>
        <div class="fs-14 fw-bold mono text-primary">800k</div>
      </div>
    </div>

    <div class="card tap">
      <div class="row gap-12">
        <div style="font-size: 28px;">🧊</div>
        <div class="flex-1">
          <div class="fs-14 fw-bold">Tủ lạnh Basic 1 năm</div>
          <div class="fs-11 text-mute mt-4">4 sửa + 1 inspection/năm</div>
        </div>
        <div class="fs-14 fw-bold mono text-primary">900k</div>
      </div>
    </div>

    <div class="card tap">
      <div class="row gap-12">
        <div style="font-size: 28px;">🚿</div>
        <div class="flex-1">
          <div class="fs-14 fw-bold">Máy nước nóng 1 năm</div>
          <div class="fs-11 text-mute mt-4">1 súc rửa + 3 sửa</div>
        </div>
        <div class="fs-14 fw-bold mono text-primary">700k</div>
      </div>
    </div>

    <div class="card mt-16" style="background: var(--c-amber-bg); border-color: #FAC775;">
      <div class="row gap-12">
        <i class="ti ti-info-circle" style="font-size: 22px; color: var(--c-amber-text);"></i>
        <div class="flex-1">
          <div class="fs-12 fw-bold" style="color: var(--c-amber-text);">Lưu ý</div>
          <div class="fs-11 mt-4" style="color: var(--c-amber-text);">1 gói áp dụng cho 1 thiết bị. Có thể cancel trong 7 ngày đầu để được hoàn 100%.</div>
        </div>
      </div>
    </div>
  </div>
`;

// ============ WARRANTY PURCHASE FLOW ============

SMP.customer['warranty-purchase'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'warranty-catalog', title: 'Mua gói' })}

    <div class="card" style="background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%); color: white; border: none;">
      <div class="fs-13" style="opacity: 0.85;">Gói đã chọn</div>
      <div class="fs-17 fw-bold mt-4">AC Basic 1 năm</div>
      <div class="fs-22 fw-bold mt-12 mono">1.200.000 ₫</div>
      <div class="fs-11 mt-4" style="opacity: 0.8;">Đã bao gồm VAT 8%</div>
    </div>

    <div class="label-up mt-16">Chọn thiết bị áp dụng (1 gói = 1 thiết bị)</div>

    <div class="card flush">
      <label class="list-item tap" style="padding: 12px 14px; border-left: 3px solid var(--c-primary); background: var(--c-primary-bg);">
        <input type="radio" name="device" checked style="accent-color: var(--c-primary);">
        <div class="flex-1">
          <div class="fs-13 fw-bold">Daikin FTKZ25NVMV</div>
          <div class="fs-11 text-mute mt-4">Phòng khách · Lắp 03/2024 · Serial DKZ-12345</div>
        </div>
      </label>
      <label class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border);">
        <input type="radio" name="device" style="accent-color: var(--c-primary);">
        <div class="flex-1">
          <div class="fs-13 fw-bold">Panasonic CS-PU9TKH</div>
          <div class="fs-11 text-mute mt-4">Phòng ngủ chính · Lắp 2023</div>
        </div>
      </label>
      <div class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border); color: var(--c-primary);">
        <i class="ti ti-plus"></i>
        <span class="fs-13 fw-med">Thêm thiết bị mới</span>
      </div>
    </div>

    <div class="label-up mt-16">Bao gồm</div>
    <div class="card">
      <div class="row gap-12">
        <i class="ti ti-broom" style="font-size: 24px; color: var(--c-green);"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">4 lần vệ sinh / năm</div>
          <div class="fs-11 text-mute mt-4">Mỗi 3 tháng · auto-suggest lịch</div>
        </div>
      </div>
      <div class="row gap-12 mt-12">
        <i class="ti ti-tool" style="font-size: 24px; color: var(--c-amber);"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">4 lần sửa miễn phí / năm</div>
          <div class="fs-11 text-mute mt-4">6 lỗi cơ bản · 1 lần / tháng tối đa</div>
        </div>
      </div>
      <div class="row gap-12 mt-12">
        <i class="ti ti-shield-check" style="font-size: 24px; color: var(--c-primary);"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Bảo hành tay nghề thợ</div>
          <div class="fs-11 text-mute mt-4">30 ngày sau mỗi lần sửa</div>
        </div>
      </div>
    </div>

    <div class="label-up mt-16">6 lỗi được sửa miễn phí</div>
    <div class="card flush">
      <div class="list-item" style="padding: 10px 14px; border-bottom: 1px solid var(--border);">
        <span class="fs-12">Tụ điện máy lạnh</span>
        <span class="fs-11 mono text-mute">≤ 300k</span>
      </div>
      <div class="list-item" style="padding: 10px 14px; border-bottom: 1px solid var(--border);">
        <span class="fs-12">Nạp gas bổ sung (&lt; 0.5kg)</span>
        <span class="fs-11 mono text-mute">≤ 500k</span>
      </div>
      <div class="list-item" style="padding: 10px 14px; border-bottom: 1px solid var(--border);">
        <span class="fs-12">Quạt dàn lạnh/nóng</span>
        <span class="fs-11 mono text-mute">≤ 400k</span>
      </div>
      <div class="list-item" style="padding: 10px 14px; border-bottom: 1px solid var(--border);">
        <span class="fs-12">Đường thoát nước</span>
        <span class="fs-11 mono text-mute">≤ 200k</span>
      </div>
      <div class="list-item" style="padding: 10px 14px; border-bottom: 1px solid var(--border);">
        <span class="fs-12">Cảm biến nhiệt</span>
        <span class="fs-11 mono text-mute">≤ 250k</span>
      </div>
      <div class="list-item" style="padding: 10px 14px;">
        <span class="fs-12">Remote điều khiển</span>
        <span class="fs-11 mono text-mute">≤ 150k</span>
      </div>
    </div>

    <div class="card mt-12" style="background: var(--c-red-bg); border-color: #F5C2C2;">
      <div class="fs-11 fw-bold" style="color: var(--c-red-text); text-transform: uppercase;">Không cover (cần order trả phí)</div>
      <div class="fs-11 mt-8" style="color: var(--c-red-text);">
        ✕ Thay block/máy nén &nbsp;&nbsp; ✕ Thay máy mới<br>
        ✕ Hư do thiên tai &nbsp;&nbsp; ✕ Máy &gt; 10 năm tuổi
      </div>
    </div>

    <div class="card mt-12" style="background: var(--c-amber-bg); border-color: #FAC775;">
      <label class="row gap-12 tap">
        <input type="checkbox" checked style="accent-color: var(--c-amber); margin-top: 2px;">
        <div class="flex-1">
          <div class="fs-12" style="color: var(--c-amber-text);">
            Tôi đã đọc và đồng ý <span style="text-decoration: underline;">Điều khoản gói bảo trì</span>, 
            hiểu rõ về quyền cancel trong 7 ngày, và các trường hợp loại trừ.
          </div>
        </div>
      </label>
    </div>

    <button class="btn btn--primary btn--full mt-16" data-go="my-warranties">
      Thanh toán 1.200.000 ₫
    </button>
    <div class="fs-11 text-mute mt-8" style="text-align: center;">Thanh toán qua VNPay · Visa **** 4567</div>
  </div>
`;

// ============ MY WARRANTIES ============

SMP.customer['my-warranties'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'home', title: 'Gói của tôi', right: '<button class="icon-btn" data-go="warranty-catalog"><i class="ti ti-plus"></i></button>' })}

    <div class="card" style="border-radius: var(--r-lg); padding: 0; overflow: hidden;">
      <div style="background: var(--c-primary); color: white; padding: 12px 14px;">
        <div class="fs-14 fw-bold">AC Basic 1 năm</div>
        <div class="fs-11 mt-4" style="opacity: 0.9;">Daikin · Phòng khách</div>
      </div>
      <div style="padding: 14px;">
        <div class="row between mb-12">
          <span class="fs-11 text-mute mono">15/06/2026 → 15/06/2027</span>
          <span class="pill pill--green no-dot" style="font-size: 10px; padding: 2px 8px;">280 ngày còn lại</span>
        </div>
        <div class="row gap-8">
          <div class="flex-1" style="background: var(--bg-elev); border-radius: var(--r-md); padding: 10px; text-align: center;">
            <div class="fs-10 text-mute" style="text-transform: uppercase; letter-spacing: 0.5px;">🧹 Vệ sinh</div>
            <div class="fs-18 fw-bold mono text-primary mt-4">3</div>
            <div class="fs-10 text-mute">/ 4 lần</div>
          </div>
          <div class="flex-1" style="background: var(--bg-elev); border-radius: var(--r-md); padding: 10px; text-align: center;">
            <div class="fs-10 text-mute" style="text-transform: uppercase; letter-spacing: 0.5px;">🔧 Sửa</div>
            <div class="fs-18 fw-bold mono text-primary mt-4">4</div>
            <div class="fs-10 text-mute">/ 4 lần</div>
          </div>
        </div>
        <button class="btn btn--primary btn--full mt-12" data-go="create-claim">Sử dụng gói</button>
      </div>
    </div>

    <div class="card mt-12" style="border-radius: var(--r-lg); padding: 0; overflow: hidden;">
      <div style="background: #6D28D9; color: white; padding: 12px 14px;">
        <div class="fs-14 fw-bold">Washer Basic 1 năm</div>
        <div class="fs-11 mt-4" style="opacity: 0.9;">LG · Khu giặt</div>
      </div>
      <div style="padding: 14px;">
        <div class="row between mb-12">
          <span class="fs-11 text-mute mono">01/03/2026 → 01/03/2027</span>
          <span class="pill pill--green no-dot" style="font-size: 10px; padding: 2px 8px;">175 ngày còn lại</span>
        </div>
        <div class="row gap-8">
          <div class="flex-1" style="background: var(--bg-elev); border-radius: var(--r-md); padding: 10px; text-align: center;">
            <div class="fs-10 text-mute" style="text-transform: uppercase; letter-spacing: 0.5px;">🧹 Vệ sinh</div>
            <div class="fs-18 fw-bold mono mt-4" style="color: #6D28D9;">1</div>
            <div class="fs-10 text-mute">/ 2 lần</div>
          </div>
          <div class="flex-1" style="background: var(--bg-elev); border-radius: var(--r-md); padding: 10px; text-align: center;">
            <div class="fs-10 text-mute" style="text-transform: uppercase; letter-spacing: 0.5px;">🔧 Sửa</div>
            <div class="fs-18 fw-bold mono mt-4" style="color: #6D28D9;">2</div>
            <div class="fs-10 text-mute">/ 3 lần</div>
          </div>
        </div>
        <button class="btn btn--full mt-12" style="background: #6D28D9; color: white;">Sử dụng gói</button>
      </div>
    </div>

    <button class="btn btn--outline btn--full mt-16" data-go="warranty-catalog" style="border-style: dashed;">
      <i class="ti ti-plus"></i> Mua thêm gói
    </button>

    <div class="label-up mt-16">Lịch sử claim</div>
    <div class="card flush">
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-12 fw-med">Vệ sinh máy lạnh</span>
            <span class="pill pill--green no-dot" style="font-size: 10px; padding: 2px 8px;">Hoàn thành</span>
          </div>
          <div class="fs-11 text-mute mono mt-4">15/05/2026 · ORD-321</div>
        </div>
      </div>
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-12 fw-med">Thay tụ máy lạnh</span>
            <span class="pill pill--green no-dot" style="font-size: 10px; padding: 2px 8px;">Hoàn thành</span>
          </div>
          <div class="fs-11 text-mute mono mt-4">22/04/2026 · ORD-298</div>
        </div>
      </div>
      <div class="list-item" style="padding: 12px 14px;">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-12 fw-med">Vệ sinh máy lạnh</span>
            <span class="pill pill--green no-dot" style="font-size: 10px; padding: 2px 8px;">Hoàn thành</span>
          </div>
          <div class="fs-11 text-mute mono mt-4">02/03/2026 · ORD-256</div>
        </div>
      </div>
    </div>
  </div>
`;

// ============ CREATE CLAIM ============

SMP.customer['create-claim'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'my-warranties', title: 'Yêu cầu sửa' })}

    <div class="card" style="background: var(--c-primary-bg); border-color: var(--c-primary-border);">
      <div class="fs-11 fw-med" style="color: var(--c-primary-text); text-transform: uppercase; letter-spacing: 0.5px;">Gói đang dùng</div>
      <div class="fs-14 fw-bold mt-4">AC Basic 1 năm · Daikin phòng khách</div>
      <div class="fs-11 text-mute mt-4 mono">Quota: 3 vệ sinh + 4 sửa còn lại</div>
    </div>

    <div class="label-up mt-16">Bạn cần gì?</div>

    <div class="card" style="border: 2px solid var(--c-green); background: var(--c-green-bg);">
      <div class="row gap-12">
        <div style="font-size: 32px;">🧹</div>
        <div class="flex-1">
          <div class="fs-14 fw-bold" style="color: var(--c-green-text);">Vệ sinh định kỳ</div>
          <div class="fs-11 mt-4" style="color: var(--c-green-text);">Còn 3/4 lần · auto-approve</div>
          <div class="pill pill--green no-dot mt-8" style="font-size: 10px; padding: 2px 8px;">Lần gần nhất: 3 tháng trước</div>
        </div>
      </div>
    </div>

    <div class="card mt-8">
      <div class="row gap-12">
        <div style="font-size: 32px;">🔧</div>
        <div class="flex-1">
          <div class="fs-14 fw-bold">Sửa chữa</div>
          <div class="fs-11 text-mute mt-4">Còn 4/4 lần · cần Ops duyệt 5 phút</div>
          <div class="pill no-dot mt-8" style="font-size: 10px; padding: 2px 8px; background: var(--c-amber-bg); color: var(--c-amber-text);">Chỉ cover các lỗi whitelisted</div>
        </div>
      </div>
    </div>

    <div class="label-up mt-16">Chọn lỗi cụ thể (cho sửa chữa)</div>
    <div class="fs-11 text-mute mb-12">Chỉ các lỗi sau được cover trong gói AC Basic</div>

    <div class="card flush">
      <label class="list-item tap" style="padding: 12px 14px; border-left: 3px solid var(--c-primary); background: var(--c-primary-bg);">
        <input type="radio" name="issue" checked style="accent-color: var(--c-primary);">
        <i class="ti ti-bolt" style="font-size: 20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Tụ điện máy lạnh</div>
          <div class="fs-11 text-mute mt-4 mono">≤ 300.000 ₫</div>
        </div>
      </label>
      <label class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border);">
        <input type="radio" name="issue" style="accent-color: var(--c-primary);">
        <i class="ti ti-droplet" style="font-size: 20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Nạp gas bổ sung</div>
          <div class="fs-11 text-mute mt-4 mono">≤ 500.000 ₫</div>
        </div>
      </label>
      <label class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border);">
        <input type="radio" name="issue" style="accent-color: var(--c-primary);">
        <i class="ti ti-wind" style="font-size: 20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Quạt dàn lạnh/nóng</div>
          <div class="fs-11 text-mute mt-4 mono">≤ 400.000 ₫</div>
        </div>
      </label>
      <label class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border);">
        <input type="radio" name="issue" style="accent-color: var(--c-primary);">
        <i class="ti ti-spray" style="font-size: 20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Đường thoát nước</div>
          <div class="fs-11 text-mute mt-4 mono">≤ 200.000 ₫</div>
        </div>
      </label>
      <label class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border);">
        <input type="radio" name="issue" style="accent-color: var(--c-primary);">
        <i class="ti ti-thermometer" style="font-size: 20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Cảm biến nhiệt</div>
          <div class="fs-11 text-mute mt-4 mono">≤ 250.000 ₫</div>
        </div>
      </label>
      <label class="list-item tap" style="padding: 12px 14px; border-top: 1px solid var(--border);">
        <input type="radio" name="issue" style="accent-color: var(--c-primary);">
        <i class="ti ti-device-remote" style="font-size: 20px;"></i>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Remote điều khiển</div>
          <div class="fs-11 text-mute mt-4 mono">≤ 150.000 ₫</div>
        </div>
      </label>
    </div>

    <div class="card mt-8" style="background: var(--c-red-bg); border-color: #F5C2C2;">
      <div class="row gap-12">
        <i class="ti ti-alert-triangle" style="font-size: 20px; color: var(--c-red-text);"></i>
        <div class="flex-1">
          <div class="fs-12 fw-bold" style="color: var(--c-red-text);">Lỗi không trong danh sách?</div>
          <div class="fs-11 mt-4" style="color: var(--c-red-text);">Vd: thay block/máy nén · không cover · đặt order trả phí →</div>
        </div>
      </div>
    </div>

    <div class="label-up mt-16">Mô tả chi tiết</div>
    <textarea class="card" placeholder="Máy lạnh không khởi động, nghi tụ điện hỏng..." style="width: 100%; min-height: 80px; padding: 12px; border: 1px solid var(--border); border-radius: var(--r-md); font-family: inherit; font-size: 13px; resize: vertical;"></textarea>

    <div class="label-up mt-16">Ảnh minh chứng (tùy chọn)</div>
    <div class="row gap-8">
      <div style="width: 70px; height: 70px; border-radius: var(--r-md); background: var(--bg-elev); display: flex; align-items: center; justify-content: center; font-size: 24px;">📷</div>
      <div style="width: 70px; height: 70px; border-radius: var(--r-md); background: var(--bg-elev); display: flex; align-items: center; justify-content: center; font-size: 24px;">📷</div>
      <div style="width: 70px; height: 70px; border-radius: var(--r-md); border: 2px dashed var(--text-tertiary); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary); font-size: 24px;">+</div>
    </div>

    <button class="btn btn--primary btn--full mt-16">Gửi yêu cầu</button>
    <div class="fs-11 text-mute mt-8" style="text-align: center;">⏰ Ops sẽ phản hồi trong 5 phút</div>
  </div>
`;

// ============ TECHNICIAN · MULTI-AGENT STEP DETAIL ============

SMP.technician['step-detail'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'job', title: 'Step 3 · Lắp đặt', right: '<button class="icon-btn"><i class="ti ti-info-circle"></i></button>' })}

    <div class="card" style="background: linear-gradient(135deg, var(--c-tech) 0%, var(--c-tech-dark) 100%); color: white; border: none;">
      <div class="fs-11" style="opacity: 0.85;">Doanh thu step này</div>
      <div class="fs-24 fw-bold mt-4 mono">300.000 ₫</div>
      <div class="fs-11 mt-4" style="opacity: 0.85;">30% của đơn 1.000.000 ₫</div>
      <div style="height: 1px; background: rgba(255,255,255,0.2); margin: 12px 0;"></div>
      <div class="fs-12">Bạn nhận</div>
      <div class="fs-18 fw-bold mt-4 mono">180.000 ₫ <span class="fs-11" style="font-weight: 400; opacity: 0.85;">· 60% (Lead)</span></div>
    </div>

    <div class="label-up mt-16">Team (2 người) <button class="icon-btn" style="float: right; padding: 4px;"><i class="ti ti-settings" style="font-size: 14px;"></i></button></div>

    <div class="card" style="border-color: var(--c-tech); background: linear-gradient(to right, var(--c-tech-bg) 0%, white 100%);">
      <div class="row gap-12">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--c-tech); color: white; display: flex; align-items: center; justify-content: center; font-size: 20px;">⭐</div>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Bạn</div>
          <div class="fs-11 text-mute mt-4">Lead · 60% · ${pill('Đang làm', 'amber', true)}</div>
        </div>
        <div class="fs-13 fw-bold mono text-tech">180k ₫</div>
      </div>
    </div>

    <div class="card mt-8" style="border-color: #06B6D4; background: linear-gradient(to right, #CFFAFE 0%, white 100%);">
      <div class="row gap-12">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: #06B6D4; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px;">⚡</div>
        <div class="flex-1">
          <div class="fs-13 fw-bold">Anh Trần B</div>
          <div class="fs-11 text-mute mt-4">Specialist · Electrician · 40% · ${pill('Đã accept', 'green', true)}</div>
        </div>
        <div class="fs-13 fw-bold mono" style="color: #0e7490;">120k ₫</div>
      </div>
      <div class="row gap-8 mt-8 pt-8" style="border-top: 1px dashed var(--border);">
        <button class="btn btn--outline" style="flex: 1; padding: 6px; font-size: 11px;">Đổi tỉ lệ</button>
        <button class="btn btn--outline" style="flex: 1; padding: 6px; font-size: 11px; color: var(--c-red); border-color: var(--c-red);">Xóa khỏi step</button>
      </div>
    </div>

    <button class="btn btn--outline btn--full mt-12" data-go="invite-helper" style="border-style: dashed;">
      <i class="ti ti-plus"></i> Mời thêm thợ phụ
    </button>

    <div class="label-up mt-16">Tiến độ step</div>
    <div class="card">
      <div class="row gap-12">
        <i class="ti ti-circle-check" style="font-size: 22px; color: var(--c-green);"></i>
        <div class="flex-1 fs-12">Lead accepted (bạn)</div>
        <span class="fs-11 text-mute mono">10:30</span>
      </div>
      <div class="row gap-12 mt-8">
        <i class="ti ti-circle-check" style="font-size: 22px; color: var(--c-green);"></i>
        <div class="flex-1 fs-12">Specialist accepted (Trần B)</div>
        <span class="fs-11 text-mute mono">10:42</span>
      </div>
      <div class="row gap-12 mt-8">
        <i class="ti ti-loader" style="font-size: 22px; color: var(--c-amber);"></i>
        <div class="flex-1 fs-12">Đang thực hiện</div>
        <span class="fs-11 text-mute mono">10:45 ...</span>
      </div>
    </div>

    <button class="btn btn--tech btn--full mt-16">✓ Hoàn thành step</button>
  </div>
`;

// ============ INVITE HELPER MODAL ============

SMP.technician['invite-helper'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'step-detail', title: 'Mời thợ phụ' })}

    <div class="label-up">Loại thợ</div>
    <div class="row gap-8">
      <label class="card flex-1 tap" style="padding: 10px; text-align: center; cursor: pointer;">
        <input type="radio" name="role" style="display: none;">
        <i class="ti ti-user" style="font-size: 22px; color: var(--text-secondary);"></i>
        <div class="fs-12 fw-med mt-4">Helper</div>
      </label>
      <label class="card flex-1 tap" style="padding: 10px; text-align: center; cursor: pointer; border: 2px solid var(--c-primary); background: var(--c-primary-bg);">
        <input type="radio" name="role" checked style="display: none;">
        <i class="ti ti-bolt" style="font-size: 22px; color: var(--c-primary);"></i>
        <div class="fs-12 fw-bold mt-4" style="color: var(--c-primary);">Specialist ✓</div>
      </label>
    </div>

    <div class="label-up mt-16">Chuyên môn</div>
    <select class="card" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: var(--r-md); font-family: inherit; font-size: 13px; background: white;">
      <option>⚡ Thợ điện (electrician)</option>
      <option>🔧 Thợ ống nước (plumber)</option>
      <option>🌐 Thợ mạng (network)</option>
    </select>

    <div class="label-up mt-16">Thợ gần đây · sẵn sàng</div>

    <div class="card flush">
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        ${avatar('TB')}
        <div class="flex-1">
          <div class="fs-13 fw-bold">Anh Trần B</div>
          <div class="fs-11 mono" style="color: var(--c-amber);">⭐ 4.8 · L3</div>
          <div class="fs-11 text-mute mt-4">Cách 2.3km · Electrician</div>
        </div>
        <button class="btn btn--primary" style="padding: 8px 16px; font-size: 12px;">Mời</button>
      </div>
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        ${avatar('LC')}
        <div class="flex-1">
          <div class="fs-13 fw-bold">Anh Lê C</div>
          <div class="fs-11 mono" style="color: var(--c-amber);">⭐ 4.5 · L2</div>
          <div class="fs-11 text-mute mt-4">Cách 3.1km · Electrician</div>
        </div>
        <button class="btn btn--primary" style="padding: 8px 16px; font-size: 12px;">Mời</button>
      </div>
      <div class="list-item" style="padding: 12px 14px;">
        ${avatar('PD')}
        <div class="flex-1">
          <div class="fs-13 fw-bold">Anh Phạm D</div>
          <div class="fs-11 mono" style="color: var(--c-amber);">⭐ 4.9 · L4</div>
          <div class="fs-11 text-mute mt-4">Cách 5.0km · Electrician</div>
        </div>
        <button class="btn btn--primary" style="padding: 8px 16px; font-size: 12px;">Mời</button>
      </div>
    </div>

    <button class="btn btn--outline btn--full mt-12">Xem thêm thợ ↓</button>

    <div class="card mt-16" style="background: var(--c-primary-bg);">
      <div class="fs-11 fw-bold" style="color: var(--c-primary-text); text-transform: uppercase;">Mặc định cho service</div>
      <div class="fs-12 mt-8" style="color: var(--c-primary-text);">Service "Lắp đặt máy lạnh" step 3: Lead 50% · Electrician 50%. Sẽ adjust sau khi chọn thợ.</div>
    </div>
  </div>
`;

// ============ EARNINGS BREAKDOWN (PER STEP) ============

SMP.technician['earnings-breakdown'] = () => `
  ${statusBar()}
  <div class="screen screen-enter">
    ${pageHeader({ back: 'earnings', title: 'ORD-456 · Earnings' })}

    <div class="card">
      <div class="fs-13 fw-bold">Lắp đặt máy lạnh</div>
      <div class="fs-11 text-mute mt-4">Hoàn thành 15/06 17:30</div>
      <div class="fs-11 text-mute mono mt-4">Doanh thu đơn: 1.000.000 ₫</div>
    </div>

    <div class="card mt-12" style="background: linear-gradient(135deg, var(--c-tech) 0%, var(--c-tech-dark) 100%); color: white; border: none;">
      <div class="fs-11" style="opacity: 0.85;">Tổng bạn nhận</div>
      <div class="fs-26 fw-bold mt-4 mono">680.000 ₫</div>
      <div class="fs-11 mt-4" style="opacity: 0.85;">Lead trong tất cả 5 steps</div>
    </div>

    <div class="label-up mt-16">Chi tiết theo step</div>

    <div class="card flush">
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-13 fw-bold">Step 1 · Khảo sát</span>
            <span class="fs-13 fw-bold mono text-tech">80k ₫</span>
          </div>
          <div class="fs-11 text-mute mt-4">⭐ Lead · 100% · revenue 80k</div>
        </div>
      </div>
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-13 fw-bold">Step 2 · Đục tường + ống</span>
            <span class="fs-13 fw-bold mono text-tech">125k ₫</span>
          </div>
          <div class="fs-11 text-mute mt-4">⭐ Lead · 50% · revenue 250k</div>
        </div>
      </div>
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border);">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-13 fw-bold">Step 3 · Lắp dàn nóng</span>
            <span class="fs-13 fw-bold mono text-tech">125k ₫</span>
          </div>
          <div class="fs-11 text-mute mt-4">⭐ Lead · 50% · revenue 250k</div>
        </div>
      </div>
      <div class="list-item" style="padding: 12px 14px; border-bottom: 1px solid var(--border); background: var(--c-tech-bg);">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-13 fw-bold">Step 4 · Lắp dàn lạnh + đấu điện</span>
            <span class="fs-13 fw-bold mono text-tech">108k ₫</span>
          </div>
          <div class="fs-11 text-mute mt-4">⭐ Lead · 40% · 3 agents</div>
          <div class="fs-11 mt-8" style="color: var(--c-tech-text); padding-top: 8px; border-top: 1px dashed var(--c-tech-border);">
            <div class="fw-med mb-4">Team breakdown:</div>
            ├ ⭐ Bạn: 40% (108k₫)<br>
            ├ ⚡ Trần B: 40% (108k₫)<br>
            └ 👤 Lê C: 20% (54k₫)
          </div>
        </div>
      </div>
      <div class="list-item" style="padding: 12px 14px;">
        <div class="flex-1">
          <div class="row between">
            <span class="fs-13 fw-bold">Step 5 · Test + nghiệm thu</span>
            <span class="fs-13 fw-bold mono text-tech">90k ₫</span>
          </div>
          <div class="fs-11 text-mute mt-4">⭐ Lead · 60% · revenue 150k</div>
        </div>
      </div>
    </div>

    <div class="card mt-12" style="background: var(--bg-elev);">
      <div class="fs-11 text-mute mono">Tổng:</div>
      <div class="fs-13 mt-4 mono">80k + 125k + 125k + 108k + 90k</div>
      <div class="fs-15 fw-bold mt-4 mono text-tech">= 680.000 ₫ ✓</div>
    </div>
  </div>
`;

// ============ REGISTER NEW SCREENS IN APP CONFIG ============

// Extend customer screen names
Object.assign(SMP.screenNames.customer, {
  'warranty-catalog': 'Gói bảo hành',
  'warranty-purchase': 'Mua gói',
  'my-warranties': 'Gói của tôi',
  'create-claim': 'Yêu cầu sửa',
});

// Extend technician screen names
Object.assign(SMP.screenNames.technician, {
  'step-detail': 'Step chi tiết',
  'invite-helper': 'Mời thợ phụ',
  'earnings-breakdown': 'Earnings detail',
});

// Add to quick jumps
SMP.quickJumps.customer.push('warranty-catalog', 'my-warranties');
SMP.quickJumps.technician.push('step-detail', 'earnings-breakdown');

// Add icons
Object.assign(SMP.quickJumpIcons, {
  'warranty-catalog': 'shield',
  'warranty-purchase': 'credit-card',
  'my-warranties': 'shield-check',
  'create-claim': 'tool',
  'step-detail': 'users',
  'invite-helper': 'user-plus',
  'earnings-breakdown': 'report-money',
});

// Add Warranty tab to customer tabbar
SMP.tabs.customer.splice(2, 0, { id: 'my-warranties', label: 'Bảo hành', icon: 'shield' });
