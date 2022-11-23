import logInPage from '../support/Pages/LogInPage'
import mainPage from'../support/Pages/MainPage'



export function login(user){
    logInPage.openLogInPage();
    logInPage.closeDialog();
    logInPage.login(user.email,user.password);
    cy.saveLocalStorage(localStorage);
}

export function loginViaAPI(user){
    //создаем объект который называем requestBody в этом объекте есть значение user: в котором хранится еще один объект с пустыми email: и password:
    let requestBody = {email: " ", password: " "};
//тут обращаемся к значению email в созданной переменной requestBody и задаем значение из файла user
    requestBody.email = user.email;
    requestBody.password = user.password;
//тут делаем реквест с методом POST, с эндпоинтом /api/users/login и с нашим объектом который хранится в переменной requestBody
    cy.request('POST', 'http://juice-shop-sanitarskyi.herokuapp.com/rest/user/login', requestBody).then( response => {

        // тут создаем переменную token которая получит значение из тела ответа в котором у юзера есть еще токен
                let token = response.body.authentication.token;
               
                
        // сетим этот токен в куки
                cy.setCookie('token', token);
        // командой window обращаемся к localStorage, командой setItem в скобках указываем ключ и значение которое из джейсона преобразуем в строку
                window.localStorage.setItem('token', JSON.stringify(token));
                window.localStorage.setItem('email', JSON.stringify(user.email));
                window.sessionStorage.setItem('bid', '6')
                

            })
            cy.saveLocalStorage(localStorage);        
    
}

export function productSearch(product){

    mainPage.performSearch(product);
    
}