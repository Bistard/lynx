import { AccountPage } from "./pages/account/account";
import { EventPage } from "./pages/event/event";
import { FredRemovePage } from "./pages/fred/fred";
import { LoginPage1, LoginPage2 } from "./pages/login/login";
import { MapPage } from "./pages/map/map";
import { NotificationPage } from "./pages/notification/notification";
import { EPages, PAGE_MANAGER } from "./pages/page";
import { TimetablePage } from "./pages/timetable/timetable";
import { WorkshopPage } from "./pages/workshop/workshop";

export interface IAccessor {

    pageStack: string[];
    displayPage(name: string, backTrack?: boolean): boolean;

}

class Workbench implements IAccessor {
    
    public pageStack: string[] = [];
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
            MapPage,
            WorkshopPage,
        ];
        ctors.forEach(ctor => new ctor(this));
        this.displayPage(EPages.Login1);
    }

    public displayPage(name: string, backTrack: boolean = false): boolean {
        console.log(this.pageStack);

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
        if (backTrack === false || backTrack === undefined) {
            this.pageStack.push(this.currentPage);
        }
        this.currentPage = page.name;
        return true;
    }

}


new Workbench();