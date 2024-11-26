import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import { Battle } from '../../models/interfaces/battle.interface';

describe('Monsters Service Extended', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  })

  afterEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should get the winner of the battle of monsters', async () => {
    // TODO - implement test
    const players = {
      monster1Id: 'monster-2',
      monster2Id: 'monster-3',
    };

    const mockBattleResult: Battle = {
      winner: {
        id: "monster-3",
        name: "Red Dragon",
        attack: 1,
        defense: 1,
        hp: 1,
        speed: 1,
        type: "Type",
        imageUrl: "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png",
      },
      tie: false,
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockBattleResult,
    });

    const expectedResult = await MonsterServiceExtended.battle(players);

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(players),
    })

    expect(expectedResult).toEqual(mockBattleResult);
  });
});
