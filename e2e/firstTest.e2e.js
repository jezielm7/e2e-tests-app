describe('Render successfully', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have info about cancel subscription', async () => {
    const info = await element(by.text('Cancel anytime. Ofter terms apply.'));
    await expect(info).toBeVisible();
  });

  it('should render value of basic plan', async () => {
    const value = await element(by.text('5.25'));
    await expect(value).toBeVisible();
  });
});

describe('Select Premium Plan', () => {
  it('should subscribe to the premium plan', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    await element(by.id('option-premium')).tap();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await element(by.id('input-email')).tap();
    await element(by.id('input-email')).typeText('test@email.com');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await element(by.id('keyboard')).tap();

    await element(by.id('button-subscribe')).tap();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    await device.takeScreenshot('premium-plan-snapshot');

    await expect(element(by.id('confirmation-message'))).toBeVisible();
  });
});