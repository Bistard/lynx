import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";


export class LoginPage1 extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Login1, accessor);
    }

    public create(): void {
        this.element.classList.add(EPages.Login1);

        const loginIcon = document.createElement('img');
        loginIcon.className = 'login-icon';

        const loginButton = document.createElement('div');
        loginButton.className = 'login-button button';
        loginButton.innerHTML = 'Log in';
        const button = new Button();
        button.render(loginButton);

        // event register
        button.onDidClick(() => {
            this.accessor.displayPage(EPages.Login2);
        });

        this.element.appendChild(loginIcon);
        this.element.appendChild(loginButton);
    }

    public dispose(): void {
        // empty
    }

}

export class LoginPage2 extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Login2, accessor);
    }

    public create(): void {
        this.element.classList.add(EPages.Login2);

        const loginIcon = document.createElement('img');
        loginIcon.className = 'login-icon';

        const loginText = document.createElement('div');
        loginText.className = 'login-text';
        loginText.innerHTML = 'LOG IN';

        const inputBox1 = document.createElement('input');
        inputBox1.className = 'email-inbox';
        inputBox1.placeholder = 'Enter Gmail';
        const inputBox2 = document.createElement('input');
        inputBox2.className = 'password-inbox';
        inputBox2.placeholder = 'Enter Password';

        const loginButton = document.createElement('div');
        loginButton.className = 'login-button button';
        loginButton.innerHTML = 'Log in';
        const button = new Button();
        button.render(loginButton);
        button.onDidClick(() => {
            this.accessor.displayPage(EPages.Event);
        });
        
        this.element.appendChild(loginIcon);
        this.element.appendChild(loginText);
        this.element.appendChild(inputBox1);
        this.element.appendChild(inputBox2);
        this.element.appendChild(loginButton);
    }

    public dispose(): void {
        // empty
    }

}
