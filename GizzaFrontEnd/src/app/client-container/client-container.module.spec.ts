import { ClientContainerModule } from './client-container.module';

describe('ContainerModule', () => {
  let clientContainerModule: ClientContainerModule;

  beforeEach(() => {
    clientContainerModule = new ClientContainerModule();
  });

  it('should create an instance', () => {
    expect(clientContainerModule).toBeTruthy();
  });
});
