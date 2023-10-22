const req = () => {
    let formData = new FormData();
    formData.append('username', document.getElementById("Имя").value)
    formData.append('password', document.getElementById("Пароль").value)
    fetch('http://95.163.240.179:8000/login', {method:'POST',
      body: formData,
    }).then(res => {
        if (res.status == 200) 
        {window.location.href='mainpage.html'}
        else (alert('Неправильный логин или пароль'))})
}


const reg = () => {
    fetch('http://95.163.240.179:8000/users',
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({email: document.getElementById("email").value, password: document.getElementById("password").value})
}).then(res => {
    if (res.status == 201) 
    {(alert('Вы успешно зарегистрировались'))}
    else (alert('Регистрация прошла неуспешно'))})
}