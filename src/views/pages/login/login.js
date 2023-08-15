import '../../../styles/login.css';


const Login = () => {

    return (
        <div class="form">
            <h2> <span class="pre">Hotel</span> <span class="end">Recommend </span></h2>
            <form class="form-login">
                <h3 class="form-name">Đăng nhập</h3>  
                <div class="form-group">
                    <label for="username">
                        Tên đăng nhập
                    </label>
                    <input type="text" required id="username" placeholder='Nhập tên đăng nhập'>
                        
                    </input>
                </div>
                <div class="form-group">
                    <label for="password">
                        Mật khẩu
                    </label>
                    <input type="password" required id="password" placeholder='Nhập mật khẩu'>
                        
                    </input>
                </div>
                <div class="form-nav">
                    <a>
                        Tạo tài khoản
                    </a>
                    <a>
                        Quên mật khẩu?
                    </a>
                </div>
                <div class="btn">
                    <button class="btn-login">Đăng nhập</button>
                </div>
            </form>
        </div>
    );

}

export default Login;