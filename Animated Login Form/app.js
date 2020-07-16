const wrapper_header = document.getElementsByClassName("wrapper__header")[0];
const form = document.getElementsByClassName("wrapper__form")[0];
const login_btn = document.getElementsByClassName("wrapper__btn")[0];
const user_input = document.getElementsByClassName("wrapper__username")[0];
const password_input = document.getElementsByClassName("wrapper__password")[0];
const shape_container = document.getElementsByClassName("shapes")[0];


const user_data = {
    username: '',
    password: ''
}

const header_Visible = () => {
    wrapper_header.textContent = "Successfully Authenticated!"
    wrapper_header.style.opacity = '1'
}

const access_granted = () => {
    wrapper_header.classList.add("hide");
    form.classList.add("hide")
    setTimeout(header_Visible, 1000);
    wrapper_header.classList.add("float_down")

}

const access_denied = () => {
    console.log("placeholder")
}

const authentication = (username, password) => {
    const condition =  (username === user_data.username && password === user_data.password) ? access_granted() : access_denied();
}

login_btn.addEventListener("click", (event) => {
    event.preventDefault()
    authentication(user_input.value, password_input.value)});

const create_shapes = (width, height, left, delay) => {
    const shape = document.createElement('div');
    shape.style.width = width.toString() + 'px';
    shape.style.height = height.toString() + 'px';
    shape.style.left = left.toString() + 'px';
    shape.style.position = 'absolute';
    shape.style.animationDelay = delay.toString() + 's';
    shape.style.background = 'rgba(255, 255, 255, 0.25)';
    shape.classList.add('float');
    shape_container.appendChild(shape);
}

for(i=0; i<20;i++) {
    create_shapes(Math.floor((Math.random() * 100) + 15), (Math.floor((Math.random() * 100) + 15)), (Math.floor((Math.random() * window.innerWidth) + 15)), (Math.floor(Math.random() * 7)))
}