import '../styles/header.css';
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";

const Header = () => {


    return (
        <div class="header">
            <div class="nav">
                <div class="logo">
                    Hotel recommend
                </div>
                <div class="home">
                    <div class="nav-icon">
                        <AiOutlineHome></AiOutlineHome>
                    </div>
                    <a href="#">Trang chủ</a>
                    
                </div>
                <div class="order">
                    <div class="nav-icon">
                        <AiOutlineFileSearch></AiOutlineFileSearch>
                    </div>
                    <a href="#">Danh mục</a>
                </div>
                <div class="message">
                    <div class="nav-icon">
                        <AiOutlineBell></AiOutlineBell>
                    </div>
                    <a href="#">Thông báo</a>
                </div>
                <div class="profile">
                    <div class="nav-icon">
                        <AiOutlineUser></AiOutlineUser>
                    </div>
                    <a href="#">Tài khoản</a>
                </div>
            </div>
        </div>
    );
}

export default Header;