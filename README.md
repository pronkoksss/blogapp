# Hướng Dẫn Sử Dụng GitHub Cơ Bản

## Mục Lục
- [Giới Thiệu](#giới-thiệu)
- [Chuẩn Bị Môi Trường](#chuẩn-bị-môi-trường)
- [Khởi Tạo Git Trong Thư Mục Dự Án](#khởi-tạo-git-trong-thư-mục-dự-án)
- [Cấu Hình Thông Tin Cá Nhân](#cấu-hình-thông-tin-cá-nhân)
- [Thêm File Và Commit](#thêm-file-và-commit)
- [Tạo Repository Trên GitHub Và Kết Nối Remote](#tạo-repository-trên-github-và-kết-nối-remote)
- [Đổi Tên Nhánh Chính (Nếu Cần)](#đổi-tên-nhánh-chính-nếu-cần)
- [Đẩy Code Lên GitHub](#đẩy-code-lên-github)
- [Một Số Lệnh Git Cơ Bản Khác](#một-số-lệnh-git-cơ-bản-khác)
- [Kết Luận](#kết-luận)

---

## Giới Thiệu

GitHub là nền tảng quản lý mã nguồn phổ biến, giúp lưu trữ và theo dõi phiên bản dự án phần mềm hiệu quả. Hướng dẫn này giúp bạn làm quen các thao tác cơ bản với Git và GitHub.

---

## Chuẩn Bị Môi Trường

- Cài đặt Git từ: [https://git-scm.com/](https://git-scm.com/)
- Mở Git Bash (Windows) hoặc Terminal (Mac/Linux)
- Tạo tài khoản GitHub: [https://github.com/](https://github.com/)

---

## Khởi Tạo Git Trong Thư Mục Dự Án

Di chuyển đến thư mục dự án:

```bash
cd đường_dẫn_đến_thư_mục_dự_án
Khởi tạo kho Git:

bash
Copy
Edit
git init
Cấu Hình Thông Tin Cá Nhân
Thiết lập tên và email cho Git:

bash
Copy
Edit
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
Kiểm tra cấu hình:

bash
Copy
Edit
git config --list
Thêm File Và Commit
Thêm toàn bộ file vào vùng chờ commit:

bash
Copy
Edit
git add .
Kiểm tra trạng thái:

bash
Copy
Edit
git status
Tạo commit:

bash
Copy
Edit
git commit -m "Mô tả nội dung commit"
Tạo Repository Trên GitHub Và Kết Nối Remote
Tạo repository mới trên GitHub, lấy URL repo (ví dụ: https://github.com/username/repository.git)

Thêm remote origin:

bash
Copy
Edit
git remote add origin https://github.com/username/repository.git
Kiểm tra remote:

bash
Copy
Edit
git remote -v
Nếu remote đã tồn tại, xóa rồi thêm lại:

bash
Copy
Edit
git remote remove origin
git remote add origin https://github.com/username/repository.git
Đổi Tên Nhánh Chính (Nếu Cần)
Đổi tên nhánh chính thành main:

bash
Copy
Edit
git branch -M main
Kiểm tra nhánh hiện tại:

bash
Copy
Edit
git branch
Đẩy Code Lên GitHub
Đẩy nhánh chính lên GitHub:

bash
Copy
Edit
git push -u origin main
