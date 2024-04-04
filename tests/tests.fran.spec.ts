import { test, expect } from '@playwright/test';

test('testTitle' , async({page}) => {
    test.setTimeout(50000)
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('localhost:3000'); 

})
