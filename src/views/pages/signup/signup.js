import '../../../styles/signup.css';

const Signup = () => {


    return (
        <div>
            <div class="form">
            <h2> <span class="pre">Hotel</span> <span class="end">Recommend </span></h2>
            <form class="form-signup">
                <h3 class="form-name">Tạo tài khoản</h3>  
                <div class="form-group">
                    <label for="username">
                        Tên đăng nhập
                    </label>
                    <input type="text" required id="username" placeholder="Hãy nhập tên của bạn">
                        
                    </input>
                </div>
                <div class="form-group">
                    <label for="email">
                        Email
                    </label>
                    <input type="email" required id="email" placeholder='Hãy nhập email của bạn'>
                        
                    </input>
                </div>
                <div class="form-group">
                    <label for="password">
                        Mật khẩu
                    </label>
                    <input type="password" required id="password" placeholder='Hãy nhập mật khẩu'>
                        
                    </input>
                </div>
                <div class="form-group">
                    <label for="confirm-password">
                        Xác nhận mật khẩu
                    </label>
                    <input type="password" required id="confirm-password" placeholder="Nhập lại mật khẩu">
                        
                    </input>
                </div>
                <div class="form-nav">
                    <a>
                        Bạn đã có tài khoản?
                    </a>
                </div>
                <div class="btn">
                    <button class="btn-signup">Đăng ký</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Signup;