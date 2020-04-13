import {VoteComponent} from './vote.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
// integration
describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent]
    });
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;

  }));

  it('should render total Vote', () => {
    component.otherVotes = 5;
    component.myVote = 10;
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('15');
  });

  it('should btn-primary the votUp button if i have up voted', () => {
    component.myVote = 1;
    let de = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    expect(de.classes['btn-primary']).toBeTruthy();
  });

  it('should increase total when i click up voter', () => {
    component.myVote = 1;
    component.otherVotes = 2;
    let button = fixture.debugElement.query(By.css('.btn'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.totalVotes).toBe(3);
  });
});
