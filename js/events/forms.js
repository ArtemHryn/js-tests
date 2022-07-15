const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSybmit);

function onFormSybmit(event) {
    event.preventDefault(); //видалити дефолтні налаштування браузера
    // const formEelements = event.currentTarget.elements
    // console.log(formEelements.subscription); 
    // const email = formEelements.email.value
    // const password = formEelements.password.value
    // const subscription = formEelements.subscription.value
    // const formData = { email, password, subscription }
    // console.log(formData);
    
    
                    //Більш цікавий варіант
    const formData = new FormData(event.currentTarget)
    console.log(formData); // там буде пусто але там є інфа можно через forEach подивитися з параметрами (name, value)
}