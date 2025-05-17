BÁO CÁO HƯỚNG DẪN SỬ DỤNG GITHUB CƠ BẢN
1. Giới thiệu
GitHub là nền tảng quản lý mã nguồn phổ biến, giúp lưu trữ và theo dõi phiên bản dự án phần mềm. Báo cáo này trình bày các bước cơ bản để sử dụng Git và đẩy mã nguồn lên GitHub.

2. Chuẩn bị
Cài đặt Git từ trang chính thức: https://git-scm.com/

Tạo tài khoản GitHub tại https://github.com/

Chuẩn bị thư mục dự án trên máy tính

3. Khởi tạo Git trong thư mục dự án
Mở Git Bash, di chuyển đến thư mục dự án với lệnh:

cd /d/VLSC/HK6/phat trien du an/project

Khởi tạo kho Git:

git init

Kết quả nhận được:

Initialized empty Git repository in D:/VLSC/HK6/phat trien du an/Project/.git/

4. Cấu hình thông tin người dùng Git
Cài đặt tên và email để Git ghi nhận tác giả commit:

git config --global user.name "Tên của bạn"

git config --global user.email "email@example.com"

Ví dụ:

git config --global user.name "Nguyen Van A"

git config --global user.email "nguyenvana@gmail.com"

Kiểm tra cấu hình đã lưu:

git config --list

5. Thêm file vào vùng staging và commit
Thêm tất cả file trong thư mục hiện tại:

git add .

Kiểm tra trạng thái file:

git status

Commit với thông điệp:

git commit -m "Initial commit"

Lưu ý: Nếu xuất hiện thông báo “nothing to commit, working tree clean” nghĩa là không có thay đổi mới để commit.

6. Kết nối kho GitHub với project
Trên GitHub, tạo repository mới (ví dụ: blogapp) và lấy URL:

https://github.com/pronkoksss/blogapp.git

Thêm remote origin cho project:

git remote add origin https://github.com/pronkoksss/blogapp.git

Nếu xuất hiện lỗi remote origin already exists, xóa remote cũ rồi thêm lại:

git remote remove origin

git remote add origin https://github.com/pronkoksss/blogapp.git

Kiểm tra remote:

git remote -v

7. Đổi tên nhánh chính thành main (nếu cần)
Kiểm tra nhánh hiện tại:

git branch

Đổi tên nhánh master sang main:

git branch -M main

8. Đẩy mã nguồn lên GitHub
Đẩy nhánh main và thiết lập theo dõi remote:

git push -u origin main

Lệnh này sẽ đẩy toàn bộ code hiện có lên GitHub và tạo nhánh main trên remote.
