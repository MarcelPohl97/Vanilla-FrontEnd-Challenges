const wrapper_header = document.getElementsByClassName("wrapper__header")[0];
const form = document.getElementsByClassName("wrapper__form")[0];
const login_btn = document.getElementsByClassName("wrapper__btn")[0];
const user_input = document.getElementsByClassName("wrapper__username")[0];
const password_input = document.getElementsByClassName("wrapper__password")[0];
const shape_container = document.getElementsByClassName("shapes")[0];
const option_container = document.getElementsByClassName("option__container")[0];
const option_close_btn = document.getElementsByClassName("option__btnClose")[0];
const option_open_btn = document.getElementsByClassName("option__btnOpen")[0];
const option_row = document.getElementsByClassName("option__row")[0];
const container = document.getElementsByClassName("container")[0];



const user_data = {
    username: 'Tester',
    password: 'test'
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
    user_input.classList.add("squish");
    password_input.classList.add("squish");
}

const authentication = (username, password) => {
    const condition =  (username === user_data.username && password === user_data.password) ? access_granted() : access_denied();
}

login_btn.addEventListener("click", (event) => {
    event.preventDefault()
    authentication(user_input.value, password_input.value)});

[user_input, password_input].forEach(element => {
    element.addEventListener("change", () => {
        element.classList.remove("squish");
    })
})

const create_shapes = (left, delay, clipPath) => {
    const shape = document.createElement('div');
    shape.style.width = '100px';
    shape.style.height = '100px';
    shape.style.left = left.toString() + 'px';
    shape.style.top = '-100px';
    shape.style.position = 'absolute';
    shape.style.animationDelay = delay.toString() + 's';
    shape.style.background = 'rgba(255, 255, 255, 0.25)';
    shape.style.webkitClipPath = clipPath;
    shape.style.mozClipPath = clipPath;
    shape.style.msClipPath = clipPath;
    shape.style.oClipPath = clipPath;
    shape.style.clipPath = clipPath;
    shape.classList.add('float');
    shape_container.appendChild(shape)
}

for(i=0; i<20;i++) {
    create_shapes((Math.floor((Math.random() * window.innerWidth))), (Math.floor(Math.random() * 15)), "none")
}

fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
  .then(response => response.json())
  .then((data) => {
    for(i=0; i<data.length;i++){
        console.log(data[i].colors[0])
        create_gradient(data[i]);
    }
  })
  
  option_close_btn.addEventListener("click", () => {
    option_container.classList.add("hide_option");
  });

  option_open_btn.addEventListener("click", () => {
    option_container.classList.remove("hide_option");
  });

  const create_gradient = (data) => {
      const gradient_color = document.createElement("div")
      const check_gradient_length = (data.colors.length === 2) ? gradient_color.style.background = "linear-gradient("+ data.colors[0] +" , "+ data.colors[1] +")" : 
                                                                 gradient_color.style.background = "linear-gradient("+ data.colors[0] + " , " + data.colors[1] + " , " + data.colors[2] + ")"
      gradient_color.classList.add("option__color");
      const gradient_name = document.createElement("p")
      gradient_name.textContent = `${data.name}`
      gradient_name.classList.add("option__name")
      gradient_color.appendChild(gradient_name);
      option_row.appendChild(gradient_color);
  }

  option_row.addEventListener("click", (event) => {
      if (event.target.classList.contains("option__color")){
          container.style.background = event.target.style.background;
          option_container.classList.add("hide_option");
      }
  })
