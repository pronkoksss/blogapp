HƯỚNG DẪN SỬ DỤNG GITHUB CƠ BẢN
1. Giới thiệu
GitHub là nền tảng quản lý mã nguồn phổ biến giúp lưu trữ và theo dõi phiên bản dự án phần mềm. Tài liệu này hướng dẫn các thao tác cơ bản để quản lý dự án trên Git và đẩy code lên GitHub.

2. Chuẩn bị môi trường
Cài đặt Git từ trang chính thức: https://git-scm.com/

Tạo tài khoản GitHub tại https://github.com/

Mở Git Bash (Windows) hoặc Terminal (Mac/Linux)

3. Khởi tạo Git trong thư mục dự án
Mở terminal và di chuyển đến thư mục dự án của bạn bằng lệnh:

cd đường_dẫn_đến_thư_mục_dự_án

Khởi tạo kho Git bằng lệnh:

git init

4. Cấu hình thông tin cá nhân
Thiết lập tên và email cho Git (làm một lần):

git config --global user.name "Tên của bạn"

git config --global user.email "email@example.com"

Kiểm tra cấu hình:

git config --list

5. Thêm file và commit
Thêm toàn bộ file vào vùng staging:

git add .

Kiểm tra trạng thái file:

git status

Tạo commit với thông điệp mô tả:

git commit -m "Mô tả nội dung commit"

6. Tạo repository trên GitHub và kết nối remote
Truy cập GitHub, tạo repository mới và lấy URL (ví dụ: https://github.com/username/repository.git)

Thêm remote origin:

git remote add origin https://github.com/username/repository.git

Kiểm tra remote:

git remote -v

Nếu remote origin đã tồn tại, xóa rồi thêm lại:

git remote remove origin

git remote add origin https://github.com/username/repository.git

7. Đổi tên nhánh chính (nếu cần)
Đổi nhánh chính về tên main:

git branch -M main

Kiểm tra nhánh hiện tại:

git branch

8. Đẩy code lên GitHub
Đẩy nhánh chính lên GitHub và thiết lập tracking:

git push -u origin main

