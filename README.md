# SMP Mobile v3.3

Triple-mode mobile preview cho Service Management Platform.

- **Customer mode**: `/?mode=customer`
- **Technician mode**: `/?mode=technician`
- **Partner Manager mode**: `/?mode=partner`

Mặc định không có `?mode` → showcase 2 phones (Customer + Technician).

## Auto-deploy

Mỗi commit lên branch `main` được Cloudflare Pages auto-deploy trong ~30 giây.

URL production: https://smp-mobile.pages.dev

## Update code

```bash
# Sau khi nhận file mới từ Claude
cp /path/to/new-smp-mobile.html ./index.html
git add . && git commit -m "Update mobile vX.Y"
git push
```
