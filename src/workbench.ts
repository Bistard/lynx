import { AccountPage } from "./pages/account/account";
import { EventPage } from "./pages/event/event";
import { FredRemovePage } from "./pages/fred/fred";
import { LoginPage1, LoginPage2 } from "./pages/login/login";
import { NotificationPage } from "./pages/notification/notification";
import { EPages, PAGE_MANAGER } from "./pages/page";
import { TimetablePage } from "./pages/timetable/timetable";

export interface IAccessor {

    prevPage: string;
    displayPage(name: string): boolean;

}

class Workbench implements IAccessor {
    
    public prevPage: string = 'none';
    public currentPage: string = 'none';

    private element: HTMLElement;
    
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'workbench';
        
        // creates all the pages
        this.initPages();
        
        document.body.appendChild(this.element);
    }

    public initPages(): void {
        const ctors = [
            LoginPage1, 
            LoginPage2,
            EventPage,
            FredRemovePage,
            AccountPage,
            NotificationPage,
            TimetablePage,
        ];
        ctors.forEach(ctor => new ctor(this));
        this.displayPage(EPages.Login1);
    }

    public displayPage(name: string): boolean {
        if (name === this.currentPage) {
            return false;
        }

        const page = PAGE_MANAGER.get(name);
        if (page === undefined) {
            return false;
        }

        if (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this.element.appendChild(page.element);
        this.prevPage = this.currentPage;
        this.currentPage = page.name;
        return true;
    }

}


new Workbench();