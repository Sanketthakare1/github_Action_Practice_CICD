
import{test , expect} from '@playwright/test'
import { describe } from 'node:test';

test("practice test 1",async({page})=>{
    console.log("practice start 1");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending practice 1");
});

test("practice test 2",async({page})=>{
    console.log("practice start 2");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending practice 2");
});

test("practice test 3",async({page})=>{
    console.log("practice start 3");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs sssssss");
    console.log("Ending practice 3");
})

test.describe("practice of describe",async()=>{

    test("practice test 4",async({page})=>{
    console.log("practice start 4");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending practice 4");
})

test("practice test 5",async({page})=>{
    console.log("practice start 5");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending practice 5");
})

test("practice test 6",async({page})=>{
    console.log("practice start 6");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending practice 6");
})

test("practice test 7",async({page})=>{
    console.log("practice start 7");

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending practice 7");
})
})