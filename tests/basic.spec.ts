import test, { expect } from "playwright/test";


test("Log in to the existing account", async({page}) => {
   await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    
    await page.getByPlaceholder('Email').fill('sviatkko123@gmail.com');
   
    await page.getByPlaceholder('Password').fill('password');
    await page.getByPlaceholder('Password').press('Enter');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('button', {name:'Logout'})).toBeVisible();
})