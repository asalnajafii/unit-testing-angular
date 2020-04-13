import {VoteComponent} from './vote.component';

// unit test

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();

  });
  it('should increment total votes when upVote', () => {
    // ACT
    component.upVote();
    // Asserts
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement total votes when downVote', () => {
    // ACT
    component.downVote();
    // Asserts
    expect(component.totalVotes).toBe(-1);
  });
  // event emitter
  it('should raise voteChanged event when upVote', () => {
    // Arrange
    let totalVotes = null;
    // ACT
    component.votesChanged.subscribe(vote => {
      totalVotes = vote;
    });
    component.upVote();
    // Asserts
    // 1 mean its true
   // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);

  });
});
