// async function getExmaple(){
//     return "abc";
// }


// import { test} from '@playwright/test';
// test('user say hello', async ({ page})=>{
//             let t=  await page.goto("");
//             let c = await getExmaple();
// });


import { test, expect } from '@playwright/test';

async function getExample() {
    return "abc";
}

test('user say hello', async ({ page }) => {

    // Open website
    let t = await page.goto("https://playwright.dev/");

    // Call async function
    let c = await getExample();

    console.log("Page response:", t?.status());
    console.log("Function result:", c);

    expect(c).toBe("abc");

});
