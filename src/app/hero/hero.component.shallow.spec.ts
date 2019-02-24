import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

// the .shallow is only used for this tutorial
// in production, the 'shallow' will not be used
// you would have either a unit or integration test, but if you 
// want both types of tests then usually the would be in the same file

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        // a testbed is what lets us test both a component and a template running together
        // we are creating a module special for testing
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

        // tell Angular to implement the bindings
        fixture.detectChanges();

        // de = debug element
        let de = fixture.debugElement.query(By.css('a'));
        expect(de.nativeElement.textContent).toContain('SuperDude');

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });

})