import '../styles/footer.css';
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-logo">
                Hotel recommend
            </div>
            <div class="footer-nav">
                <ul>
                    <li> <a href="#"> <i class="footer-icon"><AiOutlineHome></AiOutlineHome></i> Trang chủ</a> </li>
                    <li> <a href="#"> <i class="footer-icon"><AiOutlineFileSearch></AiOutlineFileSearch></i> Danh mục</a> </li>
                    <li> <a href="#"> <i class="footer-icon"><AiOutlineBell></AiOutlineBell></i> Thông báo</a> </li>
                    <li> <a href="#"> <i class="footer-icon"><AiOutlineUser></AiOutlineUser></i> Tài khoản</a> </li>
                </ul>
            </div>
            <div class="media">
                <ul>
                    <li> <a href="https://www.facebook.com/le.trongnhan.31542" target="_blank"> <i class="footer-icon"><AiFillFacebook></AiFillFacebook></i> Facebook</a> </li>
                    <li> <a href="https://twitter.com/Nhan8426" target="_blank"> <i class="footer-icon"><AiFillTwitterSquare></AiFillTwitterSquare></i> Twitter</a> </li>
                    <li> <a href="https://www.youtube.com/channel/UCe3st2gktPHfOKzQ7KKjZMA" target="_blank"> <i class="footer-icon"><AiFillYoutube></AiFillYoutube></i> Youtube</a> </li>
                    <li> <a href="https://www.linkedin.com/in/noithatfudo-uit-89ab86270/" target="_blank"> <i class="footer-icon"><AiFillLinkedin></AiFillLinkedin></i> Linked in</a> </li>
                </ul>
            </div>
            <div class="info">
                <ul>
                    <li>Dự án được thực hiện bởi:</li>
                    <li>Nhóm sinh viên 2052xxxx</li>
                    <li>Địa chỉ: Ktx khu A, kp 6, phường Linh Trung, Tp Thủ Đức</li>
                    <li>Liên hệ: <a href="mailto:20521698@gm.uit.edu.vn">2052xxxx@gm.uit.edu.vn</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;