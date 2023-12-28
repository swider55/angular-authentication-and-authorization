import { AuthService } from "./auth.service";
import { UserInterface } from './user.interface';
describe('UtilsService', () => {
  let authService: AuthService;
  let mockUserInterface: UserInterface;
  beforeEach(() => {
    authService = new AuthService();
  });

  it('currentUserSig signal on init should be undefined', () => {
    expect(authService.currentUserSig()).toBeUndefined();
  });

  it('currentUserSig signal on set null should has value null', () => {
    authService.currentUserSig.set(null);
    expect(authService.currentUserSig()).toBeNull();
  });

  it('currentUserSig signal on set null should has value null', () => {
    mockUserInterface = {
      email: 'example@gmail.com',
      token: 'fasdgfnasdhjgffasdfngfasde',
      username: 'exampleUserNam'
    }

    authService.currentUserSig.set(mockUserInterface);
    expect(authService.currentUserSig()).toBe(mockUserInterface);
  });
})
